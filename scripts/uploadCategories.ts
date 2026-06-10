import { createClient } from "@supabase/supabase-js";
import { CATEGORY_GROUPS } from "../src/data/constants";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadCategories() {
  // Flatten the CATEGORY_GROUPS array into a single array of categories
  const flatCategories = [];
  
  for (const group of CATEGORY_GROUPS) {
    for (const category of group.categories) {
      flatCategories.push({
        id: category.id,
        group_name: group.name,
        name: category.name,
        description: category.description,
      });
    }
  }

  console.log(`Preparing to upload ${flatCategories.length} categories...`);

  const { data, error } = await supabase
    .from("categories")
    .upsert(flatCategories, { onConflict: "id" });

  if (error) {
    console.error("Error uploading categories:", error.message);
  } else {
    console.log(`Successfully uploaded ${flatCategories.length} categories!`);
  }
}

uploadCategories();
