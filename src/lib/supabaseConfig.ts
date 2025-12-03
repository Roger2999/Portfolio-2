import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hdhltlzpfasebfesvuku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaGx0bHpwZmFzZWJmZXN2dWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NTI2NjQsImV4cCI6MjA3OTMyODY2NH0.g8s39vIJGo6TEGG9IEsf_Jk1hAueiJ9vG7-DyIqBbn0";
export const supabase = createClient(supabaseUrl, supabaseKey);
