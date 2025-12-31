/*
  # Fix Profile RLS Policies for Signup Flow

  ## Changes Made
  This migration fixes the "hanging" issue during signup by adjusting RLS policies:

  1. **SELECT Policy Update**
     - Changed from requiring authenticated users only
     - Now allows both authenticated and anon users to read profiles
     - This fixes the issue where newly signed-up users couldn't read their profile
       because the session wasn't fully established yet

  2. **INSERT Policy Update** 
     - Allows anon users to insert their own profile during signup
     - Still validates that the profile ID matches the auth user ID
     - This provides a fallback in case the trigger doesn't fire immediately

  ## Why This Fixes the Issue
  - During signup, even with email confirmation disabled, there's a brief moment
    where the user exists but the session isn't fully "authenticated" yet
  - The old policies blocked profile access during this window
  - These updated policies allow seamless profile creation and access during signup
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Profiles are publicly readable" ON profiles;
DROP POLICY IF EXISTS "Users can create own profile" ON profiles;

-- Allow anyone (authenticated and anon) to read profiles
CREATE POLICY "Profiles are readable by all"
  ON profiles
  FOR SELECT
  USING (true);

-- Allow anon users to insert their own profile during signup
-- This handles the case where the trigger hasn't fired yet
CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);
