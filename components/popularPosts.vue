<script setup lang="ts">
import type { Post } from "../types/posts";
const props = defineProps<{
  posts: {
    type: Post[];
    required: true;
  };
}>();
</script>
<template>
  <section class="flex-col pt-10">
    <h2 class="text-xl font-karla md:text-2xl lg:text-2xl font-bold text-primary-default">
      Popular Posts
    </h2>
    <ul>
      <li
        v-for="(post, index) in props.posts"
        :key="index"
        class="text-lightText font-inconsolata py-4"
      >
        <NuxtLink :to="`/posts/${post.id}`" prefetch>-> {{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
