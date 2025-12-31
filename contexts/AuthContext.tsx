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
  signUp: (email: string, password: string, role: string, fullName?: string) => Promise<{ error: any; session: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
        }
      });

      if (authError) return { error: authError, session: null };

      if (authData.user) {
          // Use upsert to handle both trigger creation and manual creation
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: authData.user.id,
            email: authData.user.email,
            role,
            full_name: fullName || null,
          }, {
            onConflict: 'id'
          });

        if (profileError) {
          console.error('Profile creation error:', profileError);
          return { error: profileError, session: null };
        }
        
        // If no session but user exists and is confirmed, sign in immediately
        if (!authData.session && authData.user.confirmed_at) {
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

          if (signInError) {
            console.error('Auto sign-in error:', signInError);
            return { error: signInError, session: null };
          }

          return { error: null, session: signInData.session };
        }
      }

      return { error: null, session: authData.session };
    } catch (error) {
      console.error('Signup error:', error);
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

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signUp,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    return {
      user: null,
      profile: null,
      loading: true,
      signUp: async () => ({ error: null, session: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
      updateProfile: async () => ({ error: null }),
    };
  }
  return context;
}
