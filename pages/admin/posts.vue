<script setup lang="ts">
const title = ref("");
const posts = ref("");
const user = useSupabaseUser();
onMounted(async () => {
  if (!user.value) {
    navigateTo("/login");
  }
});
const handlePost = async () => {
  const response = await fetch("/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      content: posts.value,
      author_id: user.value?.id,
    }),
  });
  if (!response.ok) {
    console.log("Error", response.statusText);
  }
};
</script>
<template>
  <div
    class="w-full h-full flex flex-col items-center gap-4 justify-center bg-sky-900 p-4 md:p-8 md:gap-8"
  >
    <UInput
      id="posts"
      v-model="title"
      type="text"
      class="w-full"
      size="2xl"
      placeholder="The Title of your post"
    />
    <label
      for="large-input"
      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Votre message :</label
    >
    <textarea
      v-model="posts"
      class="p-4 w-full h-screen text-sm bg-gray-900 rounded-lg border border-gray-300"
    />
    <UButton @click="handlePost">Submit</UButton>
  </div>
</template>
