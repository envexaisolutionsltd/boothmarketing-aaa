/*
  # Create Qualification Forms Table

  ## Summary
  Creates a table to store business qualification form submissions with automatic qualification logic.

  ## New Tables
  - `qualification_forms`
    - `id` (uuid, primary key)
    - `email` (text, required)
    - `revenue` (text, required)
    - `industry` (text, required)
    - `current_systems` (text, required)
    - `qualified` (boolean, required)
    - `created_at` (timestamptz, default now())

  ## Security
  - Enable RLS on qualification_forms table
  - Add policy for public insert only (anonymous users can submit forms)
  - Add policy for authenticated users to read all records
*/

CREATE TABLE IF NOT EXISTS qualification_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  revenue text NOT NULL,
  industry text NOT NULL,
  current_systems text NOT NULL,
  qualified boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE qualification_forms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit qualification forms"
  ON qualification_forms
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read qualification forms"
  ON qualification_forms
  FOR SELECT
  TO authenticated
  USING (true);
