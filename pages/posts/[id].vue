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
  <main class="w-full h-full flex flex-col bg-background">
    <section class="bg-lightBackground p-4 md:p-8 lg:p-8">
      <div class="flex justify-around">
        <p class="text-lightText text-sm">Reading time : 10 min</p>
        <p class="text-lightText text-sm rounded-full bg-background p-2">
          Category
        </p>
      </div>
    </section>
    <section class="p-4 md:p-8 lg:p-8 md:w-3/5 lg:w-3/5">
      <h1 class="text-xl py-8 text-lightText">{{ post?.title }}</h1>

      <p class="text-lightText text-sm leading-loose">{{ post?.content }}</p>
    </section>
  </main>
</template>
