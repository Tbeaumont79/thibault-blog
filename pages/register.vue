<script setup lang="ts">
const email = ref("");
const password = ref("");
const supabase = useSupabaseClient();
const handleRegister = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  } else {
    navigateTo("/");
  }
};
</script>
<template>
  <main class="flex-col bg-red-500 w-96">
    <h1>Register</h1>
    <p>This is an register page</p>
    <UInput id="email" v-model="email" type="email" />
    <UInput id="password" v-model="password" type="password" />
    <UButton @click="handleRegister">Register</UButton>
  </main>
</template>
