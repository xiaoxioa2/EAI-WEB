/*
  # Add company_segment_other field to founders_network_submissions

  1. Changes
    - Add `company_segment_other` column to `founders_network_submissions` table
    - Text field for custom segment description when "Other" is selected
    - Default empty string for optional field

  2. Notes
    - Uses IF NOT EXISTS pattern to safely add column
    - Allows users to provide custom segment description when selecting "Other"
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'company_segment_other'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN company_segment_other text DEFAULT '';
  END IF;
END $$;