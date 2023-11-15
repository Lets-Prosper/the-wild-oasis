import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oijiludcfdfepvnkdxzc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pamlsdWRjZmRmZXB2bmtkeHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0ODYxNTUsImV4cCI6MjAwODA2MjE1NX0.Et8ET93ri4zuxiDkuYp1HlCqHF0br9p39QeeX_pgdtM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
