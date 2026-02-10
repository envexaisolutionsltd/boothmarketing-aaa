/*
  # Improve RLS Policies for Consultation Tracking

  1. Current Status
    - qualification_forms table exists with RLS enabled
    - Currently has overly permissive policies (using `true` conditions)
  
  2. Changes
    - Remove old generic policies
    - Add explicit "Enable insert for anonymous users" - allows form submissions
    - Add explicit "Enable read for authenticated users" - team can view all
    - Add explicit "Enable update for authenticated users" - team can manage
    - Add explicit "Enable delete for authenticated users" - team can manage
  
  3. Security
    - Public/anonymous users can only INSERT new consultations
    - Authenticated users (team members) can READ, UPDATE, DELETE all records
    - This allows customers to submit via form while team tracks in table editor
*/

DROP POLICY IF EXISTS "Enable insert for public users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON qualification_forms;

CREATE POLICY "Enable insert for anonymous users"
  ON qualification_forms FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users"
  ON qualification_forms FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
  ON qualification_forms FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable update for authenticated users"
  ON qualification_forms FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
  ON qualification_forms FOR DELETE
  TO authenticated
  USING (true);
