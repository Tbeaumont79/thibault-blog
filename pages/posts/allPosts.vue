<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Post } from "../../types/posts";
import PreviewPostsCard from "../../components/previewPostsCard.vue";
const posts = ref<Post[]>([]);
onMounted(async () => {
  const data = await $fetch<{ posts: Post[] }>(
    "http://localhost:3000/api/post",
    {
      method: "GET",
    }
  );

  posts.value = data.posts;
});
</script>
<template>
  <main class="">
    <section
      class="bg-background w-full h-screen grid justify-items-center md:grid-cols-2 lg:grid-cols-3 py-10"
    >
      <div
        v-for="(data, index) in posts"
        :key="index"
        class="w-80 h-60 bg-lightBackground hover:shadow-[0_35px_60px_-15px_rgba(0,125,0,0.5)]"
      >
        <PreviewPostsCard
          :id="data.id"
          :title="data.title"
          :content="data.content"
        />
      </div>
    </section>
  </main>
</template>
