<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Post } from "../../types/posts";
import { useFetch } from "nuxt/app";

const route = useRoute();
const postId = route.params.id as string;
const post = ref<Post | null>(null);

const fetchPost = async () => {
  try {
    const { data } = await useFetch<{ post: Post }>(`/api/post/${postId}`);
    if (!data.value) {
      throw new Error("Post not found");
    }
    post.value = data.value.post;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};

onMounted(() => {
  fetchPost();
});
</script>
<template>
  <main>
    <h1 class="text-3xl text-lightText">{{ post?.title }}</h1>
    <p class="text-lightText">{{ post?.content }}</p>
  </main>
</template>
