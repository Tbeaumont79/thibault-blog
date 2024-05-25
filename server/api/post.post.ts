import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const client = await serverSupabaseClient(event);
    console.log(body);
    const { data, error } = await client.from("posts").insert([body]);
    if (error) {
      console.error("Error inserting data:", error);
      return { error: error.message };
    }

    return { posts: data };
  } catch (error) {
    const typedError = error as { message: string };
    console.error("Error inserting data:", typedError);
    return { error: typedError.message };
  }
});
