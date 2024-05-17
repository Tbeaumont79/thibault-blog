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
    <h2 class="text-2xl md:text-3xl font-bold text-primary-default">
      Popular Posts
    </h2>
    <ul>
      <li
        v-for="(post, index) in props.posts"
        :key="index"
        class="text-lightText py-4"
      >
        -> {{ post.title }}
      </li>
    </ul>
  </section>
</template>
