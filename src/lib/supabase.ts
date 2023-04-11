import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ckdhmjpurmkwwvmssgwk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZGhtanB1cm1rd3d2bXNzZ3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNTUwODgsImV4cCI6MTk5NjczMTA4OH0.EBLn1KDhJMMNjrT8Kwp6sz-_tr8esWl9w3YUvTd3r7Q"
);
