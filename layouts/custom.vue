<script setup lang="ts">
const displayNav = ref(false);

const links = [
  { label: "Home", to: "/" },
  { label: "Posts", to: "/posts/allPosts" },
];
</script>
<template>
  <div class="w-full bg-lightBackground">
    <nav
      class="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 h-full w-full"
    >
      <div class="md:hidden lg:hidden">
        <div class="flex flex-row gap-4 p-4">
          <button @click="displayNav = !displayNav">
            <NuxtImg src="/iconMenu.svg" class="bg-primary-default" />
          </button>
          <div class="sr-only">open mobile Navigation</div>

          <h1 class="text-2xl text-primary-default">Thibault beaumont</h1>
        </div>
        <ul
          v-if="displayNav"
          class="flex flex-col items-center justify-start gap-8 text-md h-screen"
        >
          <li v-for="(link, index) in links" :key="index">
            <NuxtLink
              class="text-lightText hover:text-accent-default"
              :to="link.to"
              >{{ link.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div class="w-full hidden md:flex lg:flex">
        <nav class="w-full flex flex-row items-center justify-around">
          <h1 class="text-2xl text-primary-default">Thibault beaumont</h1>

          <ul
            class="flex flex-row items-center justify-center gap-8 h-20 text-md"
          >
            <li v-for="(link, index) in links" :key="index">
              <NuxtLink
                class="text-lightText hover:text-accent-default"
                :to="link.to"
                >{{ link.label }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <slot v-if="!displayNav" />

    <div
      v-if="!displayNav"
      class="w-full absolute bottom-0 md:hidden lg:hidden"
    >
      <ul class="flex flex-row items-center justify-center gap-8 h-20 text-md">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink
            class="text-lightText hover:text-accent-default"
            :to="link.to"
            >{{ link.label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
