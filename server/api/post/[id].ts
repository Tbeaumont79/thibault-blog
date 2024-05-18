import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  if (event.context.params?.id === undefined) {
    return { error: "Missing post id" };
  }
  const postId = event.context.params.id;
  const { data, error } = await client
    .from("posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return { error: error.message };
  }
  return { post: data };
});
