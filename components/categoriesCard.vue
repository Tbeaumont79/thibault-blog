<script setup lang="ts">
const categories = ["web", "design", "mobile"];
</script>
<template>
  <aside>
    <h2 class="text-2xl font-bold text-primary-default py-8">Categories</h2>
    <ul class="text-lightText flex gap-4">
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="rounded-full font-inconsolata bg-lightBackground p-3 text-center text-sm"
      >
        {{ category }}
      </li>
    </ul>
  </aside>
</template>
