/*
  # Allow anonymous users to read submissions
  
  1. Changes
    - Add policy to allow anonymous users to read founders_network_submissions
    - This enables the admin page to function with the anon key
  
  2. Security
    - Read-only access for anonymous users
    - Insert policy remains restricted to anon users submitting their own data
*/

CREATE POLICY "Anonymous users can view all submissions"
  ON founders_network_submissions
  FOR SELECT
  TO anon
  USING (true);
