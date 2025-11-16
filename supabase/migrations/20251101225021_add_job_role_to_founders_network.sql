/*
  # Add job_role field to founders_network_submissions

  1. Changes
    - Add `job_role` column to `founders_network_submissions` table
    - Optional text field for user's job title/role
    - Positioned after company_info in the form flow

  2. Notes
    - Uses IF NOT EXISTS pattern to safely add column
    - Default empty string for consistency with other optional fields
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'job_role'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN job_role text DEFAULT '';
  END IF;
END $$;