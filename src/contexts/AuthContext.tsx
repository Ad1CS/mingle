import React, { createContext, useContext, useEffect, useState } from 'react';
import { apiFetch } from '../lib/api';

export interface User {
  id: string;
  email: string;
  profile_complete: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshSession = async () => {
    try {
      const data = await apiFetch('/auth/session/');
      if (data.authenticated) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  const login = async (credentials: any) => {
    await apiFetch('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    await refreshSession();
  };

  const register = async (details: any) => {
    await apiFetch('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(details)
    });
    await refreshSession();
  };

  const logout = async () => {
    try {
      await apiFetch('/auth/logout/', { method: 'POST' });
    } catch (err) {
      console.error(err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
