/*
  # Add name field to qualification forms
  
  1. Changes
    - Add name field to store user's full name
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add name column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'qualification_forms' AND column_name = 'name'
  ) THEN
    ALTER TABLE qualification_forms ADD COLUMN name text;
  END IF;
END $$;
