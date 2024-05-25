<script setup lang="ts">
const title = ref("");
const posts = ref("");
const category = ref([""]);
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
      categories: [category.value],
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
    <label for="title" class="mb-2 text-xl font-medium text-accent-default"
      >Title</label
    >
    <input
      id="title"
      v-model="title"
      class="bg-gray-900 w-full p-4 md:p-8 rounded-lg border border-gray-300 text-white"
      type="text"
    />
    <label
      for="category"
      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Category :
    </label>
    <select v-model="category" id="category-select" name="category">
      <option value="">Please select an option :</option>
      <option value="Life lesson">Life lesson</option>
      <option value="Web dev">Web dev</option>
    </select>
    <label
      for="large-input"
      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Votre message :</label
    >
    <textarea
      v-model="posts"
      class="p-4 w-full h-screen text-sm bg-gray-900 rounded-lg border border-gray-300 text-white"
    />
    <button
      class="p-4 rounded-md bg-accent-300 md:p-4 lg:p-4"
      @click="handlePost"
    >
      Submit
    </button>
  </div>
</template>
