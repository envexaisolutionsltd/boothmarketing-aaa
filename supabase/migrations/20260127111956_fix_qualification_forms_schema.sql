/*
  # Fix Qualification Forms Schema

  1. Changes
    - Make current_systems nullable since the booking form doesn't collect this info
    - This allows the simplified booking form to work properly
  
  2. Security
    - No changes to existing RLS policies
*/

-- Make current_systems nullable
ALTER TABLE qualification_forms 
  ALTER COLUMN current_systems DROP NOT NULL;
