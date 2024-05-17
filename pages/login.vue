<script setup lang="ts">
const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("");
const password = ref("");
const user = useSupabaseUser();

const handleLogin = async () => {
  loading.value = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
  }
};
watchEffect(() => {
  if (user.value) {
    navigateTo("/");
  }
});
</script>

<template>
  <form
    class="flex flex-col md:flex w-1/2 mx-auto"
    @submit.prevent="handleLogin"
  >
    <div>
      <p class="description p-4 md:p-8">Sign in</p>
      <div class="">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Email" />
        <label for="password" type="password" placeholder="Password"
          >Password</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <button class="p-4" :disabled="loading" type="submit">Login</button>
      </div>
    </div>
  </form>
</template>
