<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Post } from "../types/posts";
const post = ref<Post>();
const posts = ref<Post[]>([]);
const id = ref(0);
onMounted(async () => {
  const data = await $fetch<{ posts: Post[] }>(
    "http://localhost:3000/api/post",
    {
      method: "GET",
    }
  );

  posts.value = data.posts;
  id.value = data.posts.length;
  post.value = data.posts[id.value - 1];
});
</script>

<template>
  <main class="w-full h-screen">
    <section>
      <figure class="flex justify-end mr-32">
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
        <RecentlyPublished :id="id" :title="post?.title" :content="post?.content" />
      </section>
      <section>
        <Categories />
        <PopularPosts :posts="posts" />
      </section>
    </aside>
  </main>
</template>
