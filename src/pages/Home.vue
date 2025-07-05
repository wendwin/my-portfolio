<template>
    <div class="p-4 my-4 text-center max-w-3xl mx-auto">
        <div class="w-36 h-36 rounded-full overflow-hidden mx-auto">
            <img :src="profile" alt="profile" class="w-full h-full object-cover object-top" />
        </div>
        <div class="my-4 font-montserrat">
            <div class="title my-4">
                <h5 class="text-sm font-semibold text-slate-500 mb-2"> &commat;faisal.d.n</h5>
                <h5 class="text-sm font-semibold text-slate-500"><font-awesome-icon :icon="['fas', 'location-dot']" class="text-slate-500" /> Yogyakarta, ID</h5>
                <h1 class="text-2xl font-semibold text-slate-800 dark:text-white mt-6 md:text-4xl mb-2">Hi, my name is <span class="bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent">Faisal DN</span></h1>
                <h1 class="text-2xl font-semibold  md:text-4xl text-slate-800 dark:text-white">I'm Fullstack Developer</h1>
            </div>
            <div class="my-10 flex flex-wrap justify-center items-center gap-10 text-2xl text-slate-500 ">
                <a href="https://www.instagram.com/faisal.d.n" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>    
                <a href="" target="_blank">
                    <font-awesome-icon :icon="['fab', 'discord']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                </a>
                <a href="https://github.com/wendwin" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github']" class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 "  />
                </a>
                <a href="" target="_blank">
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
import profile from '@/assets/img/profile.png'
</script>

<style lang="scss" scoped></style>