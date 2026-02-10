/*
  # Create Automation Audit Requests Table

  1. New Tables
    - `automation_audit_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `company_name` (text, not null)
      - `phone` (text)
      - `current_team_size` (text)
      - `biggest_workflow_challenge` (text, not null)
      - `monthly_revenue_range` (text)
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on table
    - Add policy for public form submissions
    - Add policy for authenticated admin users to read
    
  3. Important Notes
    - Public insert access for form submissions
    - Indexed on email for duplicate checking
    - Indexed on creation date for admin queries
*/

CREATE TABLE IF NOT EXISTS automation_audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  phone text,
  current_team_size text,
  biggest_workflow_challenge text NOT NULL,
  monthly_revenue_range text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE automation_audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit audit requests"
  ON automation_audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read audit requests"
  ON automation_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_automation_audit_requests_email ON automation_audit_requests(email);
CREATE INDEX IF NOT EXISTS idx_automation_audit_requests_created_at ON automation_audit_requests(created_at DESC);