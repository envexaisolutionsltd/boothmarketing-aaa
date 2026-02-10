/*
  # Update qualification forms table with new fields
  
  1. Changes
    - Add company_name field
    - Add selected_service field (dropdown with specific services)
    - Add problems_to_solve field (text area)
    - Add additional_info field (optional text area)
    - Update industry field to be optional
    - Keep revenue as optional
    - Keep current_systems field
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns to qualification_forms table
DO $$ 
BEGIN
  -- Add company_name if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'qualification_forms' AND column_name = 'company_name'
  ) THEN
    ALTER TABLE qualification_forms ADD COLUMN company_name text;
  END IF;

  -- Add selected_service if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'qualification_forms' AND column_name = 'selected_service'
  ) THEN
    ALTER TABLE qualification_forms ADD COLUMN selected_service text NOT NULL DEFAULT 'ai agent';
  END IF;

  -- Add problems_to_solve if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'qualification_forms' AND column_name = 'problems_to_solve'
  ) THEN
    ALTER TABLE qualification_forms ADD COLUMN problems_to_solve text;
  END IF;

  -- Add additional_info if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'qualification_forms' AND column_name = 'additional_info'
  ) THEN
    ALTER TABLE qualification_forms ADD COLUMN additional_info text;
  END IF;

  -- Make industry optional by removing NOT NULL constraint if it exists
  ALTER TABLE qualification_forms ALTER COLUMN industry DROP NOT NULL;
END $$;
