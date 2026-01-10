'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: 'founder' | 'expert' | 'investor' | 'interested';
  company: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  initialized: boolean;
  signUp: (email: string, password: string, role: string, fullName?: string) => Promise<{ error: any; session: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>;
}

const [initialized, setInitialized] = useState(false);

const defaultContextValue: AuthContextType = {
  user: null,
  profile: null,
  loading: true,
  initialized: false,
  signUp: async () => ({ error: { message: 'Auth not initialized' }, session: null }),
  signIn: async () => ({ error: { message: 'Auth not initialized' } }),
  signOut: async () => {},
  updateProfile: async () => ({ error: { message: 'Auth not initialized' } }),
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProfile(session.user.id);
      } else {
        setLoading(false);
      }
    // AUTH SYSTEM IS NOW INITIALIZED
    setInitialized(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      (async () => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await loadProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
  if (!initialized) return;

  console.log('[AUTH STATE]', {
    initialized,
    loading,
    userId: user?.id,
    email: user?.email,
    hasProfile: !!profile,
    });
  }, [initialized, loading, user, profile]);

  const loadProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error loading profile:', error);
        setProfile(null);
        setLoading(false);
        return;
      }

      if (!data) {
        console.warn('No profile found for user:', userId);
        // Profile doesn't exist, try to create a default one
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
          const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert({
              id: userId,
              email: user.user.email!,
              role: 'interested',
            })
            .select()
            .single();

          if (createError) {
            console.error('Error creating profile:', createError);
            setProfile(null);
          } else {
            setProfile(newProfile);
          }
        }
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, role: string, fullName?: string) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            role,
            full_name: fullName || null,
          }
        }
      });

      if (authError) {
        return { error: authError, session: null };
      }

      if (authData.session) {
        return { error: null, session: authData.session };
      }

      if (authData.user && !authData.session) {
        return {
          error: {
            message: 'Please check your email to confirm your account before signing in.'
          },
          session: null
        };
      }

      return { error: { message: 'Signup failed - no user created' }, session: null };
    } catch (error) {
      return { error, session: null };
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('No user logged in') };

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (!error) {
      await loadProfile(user.id);
    }

    return { error };
  };

  const contextValue = {
    user,
    profile,
    loading,
    initialized,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
