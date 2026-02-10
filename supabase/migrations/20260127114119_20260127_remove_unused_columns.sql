/*
  # Remove Unused Columns from qualification_forms

  1. Changes
    - Remove revenue column (not collected by form)
    - Remove industry column (not collected by form)
    - Remove additional_info column (not collected by form)
    - Remove current_systems column (not collected by form)
  
  2. Columns Retained
    - id (primary key)
    - name (from form)
    - email (from form)
    - company_name (from form)
    - selected_service (from form)
    - problems_to_solve (from form - message field)
    - qualified (from form submission)
    - created_at (timestamp)
  
  3. Result
    - Table editor now shows only the information being collected from the website form
*/

ALTER TABLE qualification_forms
  DROP COLUMN IF EXISTS revenue,
  DROP COLUMN IF EXISTS industry,
  DROP COLUMN IF EXISTS additional_info,
  DROP COLUMN IF EXISTS current_systems;
