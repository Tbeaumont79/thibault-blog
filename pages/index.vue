<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Post } from "../types/posts";
const post = ref<Post>();
const posts = ref<Post[]>([]);
onMounted(async () => {
  const data = await $fetch<{ posts: Post[] }>(
    "http://localhost:3000/api/post",
    {
      method: "GET",
    }
  );

  posts.value = data.posts;
  post.value = data.posts[posts.value.length - 1];
});
</script>

<template>
  <main class="w-full h-screen bg-background">
    <section class="block relative w-full h-64">
      <figure class="flex absolute right-48 top-10">
        <NuxtImg
          src="/humanicon.svg"
          width="300"
          height="200"
          class="hidden md:rounded ld:rounded-lg md:block lg:block"
        />
      </figure>
    </section>
    <aside
      class="flex flex-col gap-4 md:flex-row md:justify-around lg:flex-row lg:justify-around"
    >
      <section>
        <h2 class="text-2xl font-bold text-primary-default p-4">
          Recently Published
        </h2>
        <PreviewPostsCard
          :id="post?.id"
          :title="post?.title"
          :content="post?.content"
        />
      </section>
      <section>
        <CategoriesCard />
        <PopularPosts :posts="posts" />
      </section>
    </aside>
  </main>
</template>
