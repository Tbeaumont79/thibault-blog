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

    <p class="text-xl md:text-xl text-lightText">{{ title }}</p>
    <p class="text-sm overflow-hidden h-40 text-lightText py-4">
      {{ content }}
    </p>
    <NuxtLink
      class="text-accent-default text-sm py-4"
      :to="`/posts/${id}`"
      prefetch
    >
      read more -></NuxtLink
    >
  </section>
</template>
