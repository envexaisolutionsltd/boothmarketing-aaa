/*
  # Update Qualification Forms Table

  ## Summary
  Updates the qualification_forms table to make the revenue field optional,
  allowing businesses to submit applications without disclosing revenue information.

  ## Changes
  - Make `revenue` column nullable (allows NULL values)
  - This allows business owners to submit applications without sharing revenue data

  ## Rationale
  Some business owners may not be comfortable sharing revenue information on a website.
  Making this field optional increases form completion rates while still capturing
  valuable business qualification data.
*/

-- Make revenue column nullable
ALTER TABLE qualification_forms
ALTER COLUMN revenue DROP NOT NULL;
