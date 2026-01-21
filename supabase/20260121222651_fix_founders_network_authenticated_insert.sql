/*
  # Fix Founders Network Submissions - Allow Authenticated Users to Insert

  1. Changes
    - Add INSERT policy for authenticated users to submit to founders_network_submissions
    - This allows logged-in users to join the Founder's Network
  
  2. Security
    - Authenticated users can insert their own submissions
    - The existing anon policy remains for public submissions
    - Users can only read all submissions (SELECT policies remain unchanged)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'founders_network_submissions'
    AND policyname = 'Authenticated users can submit to founders network'
  ) THEN
    CREATE POLICY "Authenticated users can submit to founders network"
      ON founders_network_submissions
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;
