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
        <UInput
          id="email"
          v-model="email"
          class="inputField"
          type="email"
          placeholder="Your email"
        />
        <UInput
          id="password"
          v-model="password"
          class="inputField"
          type="password"
          placeholder="Your password"
        />
      </div>
      <div>
        <UButton
          label="Login"
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Sign in'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
