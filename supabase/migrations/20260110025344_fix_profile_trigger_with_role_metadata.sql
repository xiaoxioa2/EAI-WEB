/*
  # Fix Profile Creation Trigger to Use Role from Metadata

  This migration updates the profile creation trigger to read the role from
  user metadata instead of hardcoding it to 'interested'. This ensures the
  role selected during signup is properly saved.

  ## Changes
  - Update `create_profile_on_signup()` function to read role from metadata
  - If no role in metadata, default to 'interested'
  - Also read full_name from metadata if provided
*/

CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, role, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'interested'),
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$function$;
