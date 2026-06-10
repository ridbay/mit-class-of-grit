import { createClient } from "@supabase/supabase-js";
import { STUDENTS } from "../src/data/constants";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;



if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function uploadStudents() {
  console.log(`Preparing to upload ${STUDENTS.length} students...`);

  // Map the local students array to match the database schema
  const studentsData = STUDENTS.map((s) => ({
    matric: s.matric,
    name: s.name,
  }));

  // Upload in batches to avoid overwhelming the database
  const batchSize = 50;
  for (let i = 0; i < studentsData.length; i += batchSize) {
    const batch = studentsData.slice(i, i + batchSize);
    
    // We use upsert so that running the script multiple times won't create duplicates
    const { data, error } = await supabase
      .from("students")
      .upsert(batch, { onConflict: "matric" });

    if (error) {
      console.error(`Error uploading batch ${i / batchSize + 1}:`, error.message);
    } else {
      console.log(`Successfully uploaded batch ${i / batchSize + 1} (${batch.length} students)`);
    }
  }

  console.log("Upload complete!");
}

uploadStudents();
