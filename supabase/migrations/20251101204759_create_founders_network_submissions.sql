/*
  # Create Founders Network Submissions Table

  1. New Tables
    - `founders_network_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person
      - `type` (text) - Type: founder, investor, or expert
      - `email` (text) - Contact email address
      - `url` (text, optional) - Website or LinkedIn URL
      - `company_info` (text, optional) - Company name and details
      - `purpose` (text) - Purpose for joining the network
      - `other` (text, optional) - Additional information
      - `created_at` (timestamptz) - Timestamp of submission
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `founders_network_submissions` table
    - Add policy for public users to insert their own submissions
    - Add policy for authenticated users to view all submissions
*/

CREATE TABLE IF NOT EXISTS founders_network_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('founder', 'investor', 'expert')),
  email text NOT NULL,
  url text DEFAULT '',
  company_info text DEFAULT '',
  purpose text NOT NULL,
  other text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE founders_network_submissions ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'founders_network_submissions'
    AND policyname = 'Anyone can submit to founders network'
  ) THEN
    CREATE POLICY "Anyone can submit to founders network"
      ON founders_network_submissions
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'founders_network_submissions'
    AND policyname = 'Authenticated users can view all submissions'
  ) THEN
    CREATE POLICY "Authenticated users can view all submissions"
      ON founders_network_submissions
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_founders_network_type ON founders_network_submissions(type);
CREATE INDEX IF NOT EXISTS idx_founders_network_created ON founders_network_submissions(created_at DESC);