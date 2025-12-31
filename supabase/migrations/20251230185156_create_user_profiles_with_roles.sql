/*
  # Create User Profiles with Role-Based Authentication

  ## Overview
  This migration establishes a comprehensive user profile system with 4 distinct roles:
  Founders, Experts, Investors, and Interested parties.

  ## 1. New Tables
  
  ### `profiles`
  - `id` (uuid, primary key) - Links to auth.users id
  - `email` (text, not null) - User's email address
  - `full_name` (text) - User's full name
  - `role` (text, not null) - One of: 'founder', 'expert', 'investor', 'interested'
  - `company` (text) - Company name (primarily for founders/investors)
  - `bio` (text) - User biography
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last profile update timestamp

  ## 2. Security
  
  ### RLS Policies
  - **Enable RLS**: Row Level Security enabled on profiles table
  - **Public Read**: Anyone can view profiles (for networking purposes)
  - **User Insert**: Authenticated users can create their own profile
  - **User Update**: Users can only update their own profile
  - **User Delete**: Users can only delete their own profile

  ## 3. Triggers
  
  ### Auto-create profile on user signup
  - Automatically creates a profile entry when a new user signs up
  - Extracts email from auth.users metadata
  
  ### Auto-update timestamp
  - Updates the `updated_at` field whenever a profile is modified

  ## 4. Important Notes
  - Profiles are publicly readable to facilitate networking
  - Each user can only manage their own profile
  - Role field restricted to 4 valid values via CHECK constraint
  - Automatic profile creation ensures every auth.users has a profile
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  role text NOT NULL CHECK (role IN ('founder', 'expert', 'investor', 'interested')),
  company text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read profiles (for networking)
CDO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles'
    AND policyname = 'Profiles are publicly readable'
  ) THEN
    CREATE POLICY "Profiles are publicly readable"
      ON profiles
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Allow users to insert their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles'
    AND policyname = 'Users can create own profile'
  ) THEN
    CREATE POLICY "Users can create own profile"
      ON profiles
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;

-- Allow users to update their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles'
    AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON profiles
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;

-- Allow users to delete their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles'
    AND policyname = 'Users can delete own profile'
  ) THEN
    CREATE POLICY "Users can delete own profile"
      ON profiles
      FOR DELETE
      TO authenticated
      USING (auth.uid() = id);
  END IF;
END $$;

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on profile changes
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'update_profiles_updated_at'
  ) THEN
    CREATE TRIGGER update_profiles_updated_at
      BEFORE UPDATE ON profiles
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION create_profile_on_signup()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (
    NEW.id,
    NEW.email,
    'interested'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create profile when user signs up
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'on_auth_user_created'
  ) THEN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW
      EXECUTE FUNCTION create_profile_on_signup();
  END IF;
END $$;