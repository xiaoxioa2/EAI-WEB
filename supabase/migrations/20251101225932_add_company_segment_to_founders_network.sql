/*
  # Add company_segment field to founders_network_submissions

  1. Changes
    - Add `company_segment` column to `founders_network_submissions` table
    - Text field for AI industry segment (e.g., AI in Health, AI in Education, etc.)
    - Default empty string for optional field
    - Positioned in the form flow for company categorization

  2. Notes
    - Uses IF NOT EXISTS pattern to safely add column
    - Will allow users to select or specify their AI industry segment
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'founders_network_submissions' AND column_name = 'company_segment'
  ) THEN
    ALTER TABLE founders_network_submissions ADD COLUMN company_segment text DEFAULT '';
  END IF;
END $$;