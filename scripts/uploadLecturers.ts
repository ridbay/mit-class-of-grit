import { createClient } from "@supabase/supabase-js";
import { LECTURERS } from "../src/data/constants";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
// You can use anon key if policies are open, or service role key if RLS is enabled
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadLecturers() {
  console.log(`Preparing to upload ${LECTURERS.length} lecturers...`);

  const { data, error } = await supabase
    .from("lecturers")
    .upsert(LECTURERS, { onConflict: "id" });

  if (error) {
    console.error("Error uploading lecturers:", error.message);
  } else {
    console.log(`Successfully uploaded ${LECTURERS.length} lecturers!`);
  }
}

uploadLecturers();
