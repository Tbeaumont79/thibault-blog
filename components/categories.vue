<script setup lang="ts">
const categories = ["web", "design", "mobile"];
</script>
<template>
  <aside>
    <h1 class="text-3xl font-bold text-primary-default py-8">Categories</h1>
    <ul class="text-lightText flex gap-4">
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="rounded-full bg-lightBackground p-4 text-center text-sm"
      >
        {{ category }}
      </li>
    </ul>
  </aside>
</template>
