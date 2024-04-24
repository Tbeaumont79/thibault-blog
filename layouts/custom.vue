<script setup lang="ts">
const displayNav = ref(false);

const links = [
  { label: "Home", to: "/" },
  { label: "Posts", to: "/posts" },
];
console.log(displayNav.value);
</script>
<template>
  <UContainer
    class="w-full flex flex-col items-center justify-center p-0 md:p-0 lg:p-0"
  >
    <slot name="header">
      <nav
        class="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 h-full w-full bg-sky-950"
      >
        <div class="md:hidden lg:hidden">
          <div class="flex flex-row gap-4 p-4">
            <UIcon
              name="ant-design:align-center-outlined"
              dynamic
              class="text-2xl"
              @:click="displayNav = !displayNav"
            />
            <div class="sr-only">open mobile Navigation</div>

            <h1 class="text-2xl text-blue-500">Thibault beaumont</h1>
          </div>
          <ul
            v-if="displayNav"
            class="flex flex-col items-center justify-start gap-8 text-md h-screen bg-sky-950"
          >
            <li v-for="(link, index) in links" :key="index">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="w-full hidden md:flex lg:flex">
          <nav class="w-full flex flex-row items-center justify-around">
            <h1 class="text-2xl text-blue-500">Thibault beaumont</h1>

            <ul
              class="flex flex-row items-center justify-center gap-8 h-20 text-md bg-sky-950"
            >
              <li v-for="(link, index) in links" :key="index">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
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
        <ul
          class="flex flex-row items-center justify-center gap-8 h-20 text-md bg-sky-950"
        >
          <li v-for="(link, index) in links" :key="index">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </slot>
  </UContainer>
</template>
