import React, { useState } from 'react';
import { useAuth } from '../api/AuthContext';

export default function AuthForm({ type }: { type: 'login' | 'register' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (type === 'login') {
        await login({ email, password });
      } else {
        await register({ email, password, birth_date: birthDate });
      }
    } catch (err: any) {
      setError(err.message || `Failed to ${type}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">{type === 'login' ? 'Log In' : 'Register'}</h2>
      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        {type === 'register' && (
          <div>
            <label className="block text-sm font-medium mb-1">Birth Date</label>
            <input 
              type="date" 
              required
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Please wait...' : (type === 'login' ? 'Log In' : 'Register')}
        </button>
      </form>
    </div>
  );
}
