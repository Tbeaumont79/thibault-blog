<script setup lang="ts">
import { ref } from "vue";
const posts = ref(["1", "2", "3", "4", "5", "6"]);
</script>
<template>
  <UContainer>
    <div
      class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-x-4 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
    >
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="w-96 h-96 bg-sky-100 hover:shadow-[0_35px_60px_-15px_rgba(0,125,0,0.5)]"
      >
        {{ post }}
      </div>
    </div>
  </UContainer>
</template>
  