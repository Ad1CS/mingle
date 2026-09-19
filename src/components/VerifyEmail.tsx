import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading, verifyEmail, resendVerificationEmail, logout } = useAuth();
  const [status, setStatus] = useState<'idle' | 'verifying' | 'verified' | 'resending'>('idle');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token || status !== 'idle') return;

    async function runVerification() {
      setStatus('verifying');
      setError('');
      try {
        await verifyEmail(token);
        setStatus('verified');
        setMessage('Email verified. You can continue.');
      } catch (err: any) {
        setStatus('idle');
        setError(err.message || 'Verification failed');
      }
    }

    runVerification();
  }, [status, token, verifyEmail]);

  const handleResend = async () => {
    setStatus('resending');
    setError('');
    setMessage('');
    try {
      await resendVerificationEmail();
      setMessage('Verification email sent. Check your inbox.');
    } catch (err: any) {
      setError(err.message || 'Could not resend verification email');
    } finally {
      setStatus('idle');
    }
  };

  const handleContinue = () => {
    navigate('/profile/edit', { replace: true });
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-on-surface">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 antialiased">
      <Link to="/" className="font-headline-md text-headline-md font-bold text-primary mb-8 hover:opacity-80 transition-opacity">
        Mingle
      </Link>

      <div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant">
        <h1 className="font-headline-sm text-headline-sm text-on-surface mb-2">Verify your email</h1>
        <p className="font-body-md text-on-surface-variant mb-6">
          {user ? `We sent a verification link to ${user.email}.` : 'Use the verification link from your email to continue.'}
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-body-md">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm font-body-md">
            {message}
          </div>
        )}

        {user?.email_verified || status === 'verified' ? (
          <button
            type="button"
            onClick={handleContinue}
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            disabled={!user || status === 'verifying' || status === 'resending'}
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:bg-primary-container disabled:opacity-70 transition-colors"
          >
            {status === 'verifying' ? 'Verifying...' : status === 'resending' ? 'Sending...' : 'Resend verification email'}
          </button>
        )}

        <button
          type="button"
          onClick={logout}
          className="w-full mt-3 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
