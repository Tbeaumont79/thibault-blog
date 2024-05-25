<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <section class="flex-col gap-4 max-w-96 p-4">
    <p class="text-xl font-karla md:text-xl text-lightText">{{ title }}</p>
    <p
      class="text-sm font-inconsolata overflow-hidden max-h-40 text-lightText py-4"
    >
      {{ content }}
    </p>
    <NuxtLink
      class="text-accent-default font-inconsolata text-sm py-4"
      :to="`/posts/${id}`"
      prefetch
    >
      read more -></NuxtLink
    >
  </section>
</template>
