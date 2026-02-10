/*
  # Fix Security Issues - Consolidate Policies and Indexes

  ## Changes Made

  ### 1. Remove Duplicate Indexes
  - Drop duplicate email and created_at indexes on automation_audit_requests
  - Keep the newer naming convention (table_column_idx format)

  ### 2. Consolidate Duplicate RLS Policies
  - Remove all duplicate policies on automation_audit_requests
  - Remove all duplicate policies on qualification_forms
  - Create single, clean policies for each operation

  ### 3. Add Basic Validation to Public Insert Policies
  - Check email format (contains '@' and has reasonable length)
  - Check required text fields are not empty
  - Add length limits to prevent abuse
  - Still allows public access but with basic spam protection

  ## Security Improvements
  - One policy per operation (no duplicates)
  - Basic validation on public submissions
  - Clear separation between public insert and authenticated read/update/delete
*/

-- ============================================
-- PART 1: Clean up automation_audit_requests
-- ============================================

-- Drop duplicate indexes (keep the newer naming convention)
DROP INDEX IF EXISTS idx_automation_audit_requests_email;
DROP INDEX IF EXISTS idx_automation_audit_requests_created_at;

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit audit requests" ON automation_audit_requests;
DROP POLICY IF EXISTS "Allow public insert for audit requests" ON automation_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can read audit requests" ON automation_audit_requests;
DROP POLICY IF EXISTS "Allow authenticated read for audit requests" ON automation_audit_requests;

-- Create consolidated policies with basic validation
-- Public insert with validation
CREATE POLICY "Public can submit audit requests with validation"
  ON automation_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Email validation
    email IS NOT NULL 
    AND email LIKE '%@%' 
    AND length(email) >= 5 
    AND length(email) <= 255
    -- Required fields not empty
    AND full_name IS NOT NULL 
    AND length(trim(full_name)) >= 2
    AND length(trim(full_name)) <= 255
    AND company_name IS NOT NULL 
    AND length(trim(company_name)) >= 2
    AND length(trim(company_name)) <= 255
    AND biggest_workflow_challenge IS NOT NULL 
    AND length(trim(biggest_workflow_challenge)) >= 10
    AND length(trim(biggest_workflow_challenge)) <= 5000
  );

-- Authenticated users can read all submissions
CREATE POLICY "Authenticated users can view all audit requests"
  ON automation_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- PART 2: Clean up qualification_forms
-- ============================================

-- Drop all existing duplicate policies
DROP POLICY IF EXISTS "Anyone can submit qualification forms" ON qualification_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON qualification_forms;
DROP POLICY IF EXISTS "Authenticated users can read qualification forms" ON qualification_forms;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON qualification_forms;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON qualification_forms;

-- Create consolidated policies with basic validation
-- Public insert with validation
CREATE POLICY "Public can submit qualification forms with validation"
  ON qualification_forms
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Email validation
    email IS NOT NULL 
    AND email LIKE '%@%' 
    AND length(email) >= 5 
    AND length(email) <= 255
    -- Selected service is required
    AND selected_service IS NOT NULL 
    AND length(trim(selected_service)) >= 2
    AND length(trim(selected_service)) <= 255
  );

-- Authenticated users can manage all records
CREATE POLICY "Authenticated users can view all qualification forms"
  ON qualification_forms
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update all qualification forms"
  ON qualification_forms
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete all qualification forms"
  ON qualification_forms
  FOR DELETE
  TO authenticated
  USING (true);
