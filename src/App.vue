<template>
  <div class="container mx-auto py-6">
    <nav class="mx-auto text-center flex justify-center items-center gap-2 font-inter">
      <router-link to="/about" class="p-2 px-6 font-medium text-base rounded-md">About</router-link>
      <router-link to="/" class="p-2 px-6 font-medium text-base rounded-md">Home</router-link>
      <router-link to="/project" class="p-2 px-6 font-medium text-base rounded-md">Project</router-link>
    </nav>
    <router-view />
  </div>  
</template>

<script setup>

</script>

<style scoped>
:deep(.router-link-exact-active) {
  @apply bg-[#01AFAF] text-white;
}
</style>