/*
  # Add missing fields to founders_network_submissions
  
  1. Changes
    - Add `job_role` column for job title/position
    - Add `company_segment` column for industry focus selection
    - Add `company_segment_other` column for custom segment specification
  
  2. Notes
    - All fields are optional (nullable) with empty string defaults
    - Uses IF NOT EXISTS pattern to safely add columns
    - Matches the form fields in network-form page
*/

DO $$
BEGIN
  -- Add job_role column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'job_role'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN job_role text DEFAULT '';
  END IF;

  -- Add company_segment column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'company_segment'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN company_segment text DEFAULT '';
  END IF;

  -- Add company_segment_other column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'company_segment_other'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN company_segment_other text DEFAULT '';
  END IF;
END $$;