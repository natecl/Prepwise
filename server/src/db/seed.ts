import dotenv from "dotenv";
dotenv.config();

import { getSupabase } from "./supabase";

async function seed() {
  console.log("Seeding database...");

  // TODO: Seed ingredients
  // TODO: Seed meal templates

  console.log("Seeding complete.");
}

seed().catch(console.error);
