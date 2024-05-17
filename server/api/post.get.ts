import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const { data, error } = await client
    .from("posts")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching data:", error);
    return { error: error.message };
  }
  return { posts: data };
});
