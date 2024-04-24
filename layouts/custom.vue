<script setup lang="ts">
const navElement = ref({
  links: [
    { label: "Home", url: "/" },
    { label: "Posts", url: "/posts" },
    { label: "Contact", url: "/contact" },
  ],
});
</script>
<template>
  <UContainer
    :ui="{
      base: 'mx-auto',
      padding: 'px-4 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl',
    }"
  >
    <slot name="header">
      <nav class="flex flex-col md:bg-yellow-500 md:flex-row gap-4">
        <h1>Thibault beaumont</h1>
        <ul class="flex flex-col gap-4 md:flex-row">
          <li v-for="link in navElement.links" :key="link.url">
            <NuxtLink :to="link.url">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </slot>
    <slot />
  </UContainer>
</template>
