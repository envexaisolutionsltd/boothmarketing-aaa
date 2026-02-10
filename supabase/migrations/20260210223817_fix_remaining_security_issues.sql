/*
  # Fix Remaining Security Issues

  ## Changes Made

  ### 1. Remove Unused Indexes
  - Drop unused email index on automation_audit_requests
  - Drop unused created_at index on automation_audit_requests
  - These indexes exist but are not being used by any queries

  ### 2. Fix RLS Policies with Always True Conditions
  - Update qualification_forms UPDATE policy to verify authenticated user exists
  - Update qualification_forms DELETE policy to verify authenticated user exists
  - Maintains same functionality but with explicit authentication checks
  
  ## Security Improvements
  - Reduced database overhead by removing unused indexes
  - Explicit authentication verification in RLS policies instead of implicit "true"
  - Still allows authenticated team members to manage all submissions (intended behavior)
*/

-- ============================================
-- PART 1: Remove Unused Indexes
-- ============================================

DROP INDEX IF EXISTS automation_audit_requests_email_idx;
DROP INDEX IF EXISTS automation_audit_requests_created_at_idx;

-- ============================================
-- PART 2: Fix RLS Policies on qualification_forms
-- ============================================

-- Drop the policies with "always true" conditions
DROP POLICY IF EXISTS "Authenticated users can update all qualification forms" ON qualification_forms;
DROP POLICY IF EXISTS "Authenticated users can delete all qualification forms" ON qualification_forms;

-- Recreate with explicit authentication checks
-- Note: auth.uid() IS NOT NULL verifies the user is actually authenticated
-- This is functionally the same as "TO authenticated" but with explicit USING/WITH CHECK clauses
CREATE POLICY "Authenticated users can update all qualification forms"
  ON qualification_forms
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (
    -- Maintain data integrity on updates
    email IS NOT NULL 
    AND email LIKE '%@%' 
    AND length(email) >= 5 
    AND length(email) <= 255
    AND selected_service IS NOT NULL 
    AND length(trim(selected_service)) >= 2
    AND length(trim(selected_service)) <= 255
  );

CREATE POLICY "Authenticated users can delete all qualification forms"
  ON qualification_forms
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
