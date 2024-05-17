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
});
</script>
<template>
  <section class="flex-col gap-4 max-w-96 p-4">
    <h1 class="text-2xl md:text-3xl font-bold text-primary-default md:py-8">
      Recently Published
    </h1>
    <p class="text-xl md:text-xl text-lightText">{{ title }}</p>
    <p class="text-sm overflow-hidden h-40 text-lightText py-4">
      {{ content }}
    </p>
    <button class="text-accent-default text-sm py-4">read more -></button>
  </section>
</template>
