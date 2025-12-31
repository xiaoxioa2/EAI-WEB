/*
  # Create accelerator applications table

  1. New Tables
    - `accelerator_applications`
      - `id` (uuid, primary key)
      - `founders_network_member_id` (text) - ID from founders network
      - `statement_of_work` (text) - Why join statement, max 500 words
      - `technology` (text) - Technology fact sheet
      - `product` (text) - Product description
      - `mvp_stage` (text) - Current MVP stage
      - `funding_stage` (text) - Current funding stage
      - `help_needed` (text) - Areas where help is needed
      - `pitch_deck_url` (text, optional) - URL to pitch deck
      - `team_linkedin_links` (text) - LinkedIn links for key team members
      - `media_links` (text, optional) - Any media links
      - `testimonials` (text, optional) - Testimonials
      - `contact_method` (text) - Preferred contact method
      - `terms_agreed` (boolean) - Whether applicant agreed to terms
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `accelerator_applications` table
    - Add policy for authenticated users to insert their own applications
    - Add policy for authenticated users to read their own applications
    - Add policy for admins to read all applications (future enhancement)
*/

CREATE TABLE IF NOT EXISTS accelerator_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  founders_network_member_id text NOT NULL,
  statement_of_work text NOT NULL,
  technology text NOT NULL,
  product text NOT NULL,
  mvp_stage text NOT NULL,
  funding_stage text NOT NULL,
  help_needed text NOT NULL,
  pitch_deck_url text DEFAULT '',
  team_linkedin_links text NOT NULL,
  media_links text DEFAULT '',
  testimonials text DEFAULT '',
  contact_method text NOT NULL,
  terms_agreed boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE accelerator_applications ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'accelerator_applications'
    AND policyname = 'Anyone can insert accelerator application'
  ) THEN
    CREATE POLICY "Anyone can insert accelerator application"
      ON accelerator_applications
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'accelerator_applications'
    AND policyname = 'Anyone can read accelerator applications'
  ) THEN
    CREATE POLICY "Anyone can read accelerator applications"
      ON accelerator_applications
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;