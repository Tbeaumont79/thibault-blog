import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const client = await serverSupabaseClient(event);

    const { data, error } = await client.from("posts").insert([body]);
    if (error) {
      console.error("Error inserting data:", error);
      return { error: error.message };
    }

    return { posts: data };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Server error:", err);
    return { error: err.message };
  }
});
