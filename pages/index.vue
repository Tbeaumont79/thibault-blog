<script setup lang="ts">
interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  author_id: string;
}
const post = ref();
onMounted(async () => {
  const data = await $fetch<{ posts: Post[] }>(
    "http://localhost:3000/api/post",
    {
      method: "GET",
    }
  );
  post.value = data.posts[0];
});
</script>
<template>
  <UContainer>
    <p>{{ post?.title }}</p>
    <p>{{ post?.content }}</p>
  </UContainer>
</template>
