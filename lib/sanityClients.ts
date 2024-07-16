import { createClient } from "@sanity/client";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion,
});
