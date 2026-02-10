/*
  # Setup Automation Audit Requests Table

  1. New Tables
    - `automation_audit_requests`
      - `id` (uuid, primary key) - Unique identifier
      - `full_name` (text, required) - Contact's full name
      - `email` (text, required) - Contact's email address
      - `company_name` (text, required) - Company name
      - `phone` (text, optional) - Contact phone number
      - `current_team_size` (text, optional) - Team size range
      - `biggest_workflow_challenge` (text, required) - Description of workflow challenges
      - `monthly_revenue_range` (text, optional) - Revenue range
      - `created_at` (timestamptz) - Auto-generated timestamp

  2. Security
    - Enable RLS on `automation_audit_requests` table
    - Add policy for public insert (anyone can submit forms)
    - Add policy for authenticated read (admins can view submissions)

  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for sorting submissions
*/

-- Create the table if it doesn't exist
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

-- Enable Row Level Security
ALTER TABLE automation_audit_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert for audit requests" ON automation_audit_requests;
DROP POLICY IF EXISTS "Allow authenticated read for audit requests" ON automation_audit_requests;

-- Policy: Anyone can submit an audit request (public insert)
CREATE POLICY "Allow public insert for audit requests"
  ON automation_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read audit requests
CREATE POLICY "Allow authenticated read for audit requests"
  ON automation_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS automation_audit_requests_email_idx ON automation_audit_requests(email);
CREATE INDEX IF NOT EXISTS automation_audit_requests_created_at_idx ON automation_audit_requests(created_at DESC);
