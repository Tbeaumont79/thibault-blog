import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  console.log("1: je passe ici");
  const client = await serverSupabaseClient(event);
  console.log("2: je passe ici");

  const { data, error } = await client.from("posts").select("*");
  console.log("3: je passe ici et data = ", data);

  if (error) {
    console.error("Error fetching data:", error);
    return { error: error.message };
  }
  return { posts: data };
});
