import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ddcfvqcsajlmygmaicdb.supabase.co";
const supabaseKey =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkY2Z2cWNzYWpsbXlnbWFpY2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1OTc5NzYsImV4cCI6MjAzOTE3Mzk3Nn0.ouDx9Ifj86JGZgpY-HO6cvVFYtJ7IN8uEh3-yLRZVhs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
