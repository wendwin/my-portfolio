<template>
  <div class="p-4 my-4 text-center max-w-3xl mx-auto">
    <div
      class="w-36 h-36 rounded-full overflow-hidden mx-auto border-2 border-slate-300 dark:border-none"
    >
      <img
        :src="profile"
        alt="profile"
        class="w-full h-full object-cover object-top"
        draggable="false"
      />
    </div>
    <div class="my-4 font-montserrat">
      <div class="title my-4">
        <h5 class="text-sm font-semibold text-slate-500 mb-2">
          &commat;faisal.d.n
        </h5>
        <h5 class="text-sm font-semibold text-slate-500">
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            class="text-slate-500"
          />
          Yogyakarta, Indonesia
        </h5>
        <h1
          class="text-2xl font-semibold text-slate-800 dark:text-white mt-6 md:text-4xl mb-2"
        >
          Hi, I'm
          <span
            class="bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent"
            >Faisal DN</span
          >
        </h1>
        <div class="max-w-[30rem] mx-auto typewriter mb-5">
          <h1
            class="text-2xl font-semibold md:text-xl text-slate-800 dark:text-white"
          >
            Software Engineer | Fullstack Web Developer
          </h1>
        </div>
        <!-- <h6 class="max-w-2xl mx-auto text-slate-800 dark:text-white">
          Building modern web applications with a focus on frontend development
          and scalable backend systems
        </h6> -->
      </div>
      <div
        class="my-10 flex flex-wrap justify-center items-center gap-10 text-2xl text-slate-500"
      >
        <a href="https://www.instagram.com/faisal.d.n" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100"
          />
        </a>
        <a href="#" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'discord']"
            class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100"
          />
        </a>
        <a href="https://github.com/wendwin" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/faisal-dwi-nurwenda-87a625373"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100"
          />
        </a>
        <a href="mailto:faisaldwindn@gmail.com" target="_blank">
          <font-awesome-icon
            :icon="['far', 'envelope']"
            class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100"
          />
        </a>
      </div>
      <router-link to="/about">
        <button
          class="px-6 py-2 bg-transparent border-2 border-[#01AFAF] text-lg font-semibold bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent hover:bg-[#01AFAF] hover:bg-clip-border hover:text-white transition"
        >
          About me
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import profile from "@/assets/img/110462797.png";
</script>

<style scoped>
.typewriter h1 {
  overflow: hidden;
  border-right: 0.15em solid #02aeb0;
  white-space: nowrap;
  margin: 0 auto;

  animation:
    typing 2.5s steps(30, end),
    blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #02aeb0;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .typewriter h1 {
    white-space: normal;
    animation: none;
    border-right: none;
  }
}
</style>
