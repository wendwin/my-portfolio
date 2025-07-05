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
  <div class="mx-auto py-6 text-gray-100 bg-white dark:bg-slate-800 min-h-screen">
    <nav class="mx-auto text-center flex flex-wrap justify-center items-center gap-3 font-inter">
      <router-link to="/about"
        class="p-2 px-5 font-medium text-base rounded-md text-slate-800 dark:text-white hover:scale-105 transition ease-in duration-100">About</router-link>
      <router-link to="/"
        class="p-2 px-5 font-medium text-base rounded-md text-slate-800 dark:text-white hover:scale-105 transition ease-in duration-100">Home</router-link>
      <router-link to="/project"
        class="p-2 px-5 font-medium text-base rounded-md text-slate-800 dark:text-white hover:scale-105 transition ease-in duration-100">Project</router-link>
    </nav>
    
    <router-view />

    <!-- Tombol untuk aktifkan dark mode -->
    <div class="fixed bottom-4 right-4 flex justify-end items-center m-3">
      <button v-if="!isDark" @click="toggleDark" type="button"
        class="block font-medium rounded-full bg-[#01AFAF] text-white hover:scale-105 transition ease-in duration-100 focus:outline-hidden">
        <span class="group inline-flex shrink-0 justify-center items-center size-10">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </span>
      </button>

      <!-- Tombol untuk nonaktifkan dark mode -->
      <button v-else @click="toggleDark" type="button"
        class="block font-medium rounded-full bg-[#01AFAF] text-white hover:scale-105 transition ease-in duration-100 focus:outline-hidden">
        <span class="group inline-flex shrink-0 justify-center items-center size-10">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDark = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");

  isDark.value = html.classList.contains("dark");

  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
  }

  isDark.value = html.classList.contains("dark");

  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
</script>

<style scoped>
:deep(.router-link-exact-active) {
  @apply bg-[#01AFAF] text-white;
}
</style>
