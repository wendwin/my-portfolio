<template>
    <div class="p-4 my-4 text-center max-w-3xl mx-auto">
        <div class="w-36 h-36 rounded-full overflow-hidden mx-auto  border-2 border-slate-300 dark:border-none">
            <img src="/img/110462797.png" alt="profile" class="w-full h-full object-cover object-top " />
        </div>
        <div class="my-4 font-montserrat">
            <div class="title my-4">
                <h5 class="text-sm font-semibold text-slate-500 mb-2"> &commat;faisal.d.n</h5>
                <h5 class="text-sm font-semibold text-slate-500"><font-awesome-icon :icon="['fas', 'location-dot']" class="text-slate-500" /> Yogyakarta, ID</h5>
                <h1 class="text-2xl font-semibold text-slate-800 dark:text-white mt-6 md:text-4xl mb-2">Hi, my name is <span class="bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent">Faisal DN</span></h1>
                <div class="max-w-[34rem] mx-auto typewriter">
                    <h1 class="text-2xl font-semibold  md:text-4xl text-slate-800 dark:text-white" >I'm Fullstack Web Developer</h1>
                </div>
            </div>
            <div class="my-10 flex flex-wrap justify-center items-center gap-10 text-2xl text-slate-500 ">
                <a href="https://www.instagram.com/faisal.d.n" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>    
                <a href="#" target="_blank">
                    <font-awesome-icon :icon="['fab', 'discord']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>
                <a href="https://github.com/wendwin" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 "  />
                </a>
                <a href="https://www.linkedin.com/in/faisal-dwi-nurwenda-87a625373" target="_blank">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>
                <a href="mailto:faisaldwindn@gmail.com" target="_blank">
                    <font-awesome-icon :icon="['far', 'envelope']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>
            </div>
            <router-link to="/about">
                <button
                    class="px-6 py-2 bg-transparent border-2 border-[#01AFAF] text-lg font-semibold bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent hover:bg-[#01AFAF]  hover:bg-clip-border hover:text-white transition">
                    Know more
                </button>

            </router-link>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
/* DEMO-SPECIFIC STYLES */
.typewriter h1 {
  color: #fff;
  /* font-family: monospace; */
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #02AEB0; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  
  animation: 
    typing 2.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #02AEB0 }
}
</style>