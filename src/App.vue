<!-- <template>
  <div class="container mx-auto py-6 ">
    <nav class="mx-auto text-center flex justify-center items-center gap-2 font-inter">
      <router-link to="/about" class="p-2 px-6 font-medium text-base rounded-md">About</router-link>
      <router-link to="/" class="p-2 px-6 font-medium text-base rounded-md">Home</router-link>
      <router-link to="/project" class="p-2 px-6 font-medium text-base rounded-md">Project</router-link>
    </nav>
    <router-view />
  </div>  
</template> -->
<template>
  <div class="mx-auto py-6 text-gray-100 bg-gray-900 min-h-screen">
    <nav class="mx-auto text-center flex flex-wrap justify-center items-center gap-2 font-inter">
      <router-link to="/about" class="p-2 px-6 font-medium text-base rounded-md hover:bg-gray-800">About</router-link>
      <router-link to="/" class="p-2 px-6 font-medium text-base rounded-md hover:bg-gray-800">Home</router-link>
      <router-link to="/project" class="p-2 px-6 font-medium text-base rounded-md hover:bg-gray-800">Project</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script setup>
const toggleDark = () => {
  const html = document.documentElement
  html.classList.toggle('dark')
}
</script>


<style scoped>
:deep(.router-link-exact-active) {
  @apply bg-[#01AFAF] text-white;
}
</style>