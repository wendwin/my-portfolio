<template>
    <div class="p-4 mt-6 max-w-4xl mx-auto">
        <div class="text-justify text-slate-800 dark:text-white">
            <h1 class="text-2xl font-bold text-center mb-4">My Projects</h1>

            <div class="my-6 max-w-4xl mx-auto">
                <div v-for="(project, index) in projects" :key="index"
                    class="md:flex justify-between items-stretch gap-4 mb-10 md:mb-8">

                    <div
                        class="w-full md:max-w-xl p-4 md:p-5 rounded-md bg-white border border-slate-300 shadow-md flex flex-col mb-4 md:mb-0 dark:bg-gray-800 dark:border-gray-800 hover:dark:border-[#01AFAF]">
                        <h2 class="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">{{ index +
                            1
                        }}. {{ project.title }}</h2>
                        <p class="mb-3 text-sm md:text-base dark:text-slate-400">{{ project.subTitle }}</p>
                        <p class="mb-3 text-sm  dark:text-slate-400">{{ project.description }}</p>

                        <div class="flex flex-wrap gap-3 mt-3">
                            <span class="w-fit mb-3 text-xs font-semibold px-2 py-1 rounded-full" :class="{
                                'bg-purple-100 text-purple-600': project.job === 'Fullstack',
                                'bg-blue-100 text-blue-600': project.job === 'Frontend Developer',
                                'bg-pink-100 text-pink-600': project.job === 'Backend Developer'
                            }">{{ project.job }}</span>


                            <span class="w-fit mb-3 text-xs font-semibold px-2 py-1 rounded-full" :class="{
                                'bg-green-100 text-green-600': project.status === 'Selesai',
                                'bg-yellow-100 text-yellow-600': project.status === 'Progress'
                            }">
                                {{ project.status }}
                            </span>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                                class="w-fit bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <div
                        class="flex-1 p-4 bg-white border border-gray-300 shadow-md rounded-md flex flex-col   dark:bg-gray-800 dark:border-gray-800 hover:dark:border-[#01AFAF]">
                        <div class="relative w-full flex flex-col flex-grow">
                            <img :src="project.image[currentIndices[index]]"
                                class="w-full max-h-[200px] md:h-auto aspect-square object-contain  rounded transition duration-500"
                                :alt="project.title" />

                            <button @click="prev(index)"
                                class="absolute -left-3 top-1/2 -translate-y-1/2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-300">
                                <ion-icon name="caret-back-outline"></ion-icon>
                            </button>

                            <button @click="next(index)"
                                class="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-300">
                                <ion-icon name="caret-forward-outline"></ion-icon>
                            </button>

                            <div class="flex justify-center mt-6 gap-2">
                                <span v-for="(img, index) in images" :key="index" @click="goTo(index)" :class="[
                                    'h-3 w-3 rounded-full cursor-pointer',
                                    currentIndices[index] === imgIndex ? 'bg-[#01AFAF]' : 'bg-gray-300']"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="my-8 max-w-4xl mx-auto">
                <div v-for="(project, index) in projects" :key="index"
                    class="flex flex-col md:flex-row-reverse gap-8 mb-4 md:mb-8 p-4 md:p-5 rounded-md bg-white border border-slate-300 shadow-md dark:bg-gray-800 dark:border-[#01AFAF]">

                    <div class="w-full md:max-w-lg flex flex-col ">
                        <h2 class="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                            {{ index + 1 }}. {{ project.title }}
                        </h2>
                        <p class="mb-3 text-sm md:text-base dark:text-slate-400">{{ project.subTitle }}</p>
                        <p class="mb-3 text-sm dark:text-slate-400">{{ project.description }}</p>

                        <div class="flex flex-wrap gap-3 mb-3">
                            <span
                                class="w-fit text-xs font-semibold px-2 py-1 rounded-full border inline-flex items-center justify-center"
                                :class="{
                                    'bg-purple-100 text-purple-600': project.job === 'Fullstack',
                                    'bg-blue-100 text-blue-600': project.job === 'Frontend Developer',
                                    'bg-pink-100 text-pink-600': project.job === 'Backend Developer'
                                }">
                                {{ project.job }}
                            </span>

                            <span
                                class="w-fit text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center justify-center"
                                :class="{
                                    'bg-green-100 text-green-600': project.status === 'Selesai',
                                    'bg-yellow-100 text-yellow-600': project.status === 'Progress'
                                }">
                                {{ project.status }}
                            </span>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                                class="w-fit bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md inline-flex items-center justify-center">
                                {{ tag }}
                            </span>
                        </div>

                    </div>

                    <div class="flex-1 relative flex flex-col justify-between ">
                        <img :src="project.image[currentIndices[index]]"
                            class="w-full max-h-[200px] md:h-auto aspect-square object-contain rounded transition duration-500"
                            :alt="project.title" />

                        <button @click="prev(index)"
                            class="absolute -left-3 top-1/2 -translate-y-1/2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-300">
                            <ion-icon name="caret-back-outline"></ion-icon>
                        </button>
                        <button @click="next(index)"
                            class="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-300">
                            <ion-icon name="caret-forward-outline"></ion-icon>
                        </button>

                        <div class="flex justify-center mt-6 gap-2">
                            <span v-for="(img, i) in images" :key="i" @click="goTo(i)" :class="[
                                'h-3 w-3 rounded-full cursor-pointer',
                                currentIndices[index] === i ? 'bg-[#01AFAF]' : 'bg-gray-300']"></span>
                        </div>
                    </div>
                </div>
            </div> -->


            <footer class="">
                <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
                    <div class="text-center">
                        <h2 class="text-3xl font-semibold sm:text-5xl bg-gradient-to-r">Let’s build something great
                            together.</h2>

                        <p class="mx-auto mt-4 max-w-sm text-gray-500">
                            Got something in mind? I’d love to hear about it. Let’s build it together!
                            Open to fun ideas, side projects, or anything creative. Hit me up!
                        </p>

                        <a href="#"
                            class="mt-8 inline-block rounded-full  bg-transparent border-2 border-[#01AFAF] px-12 py-3 text-sm font-medium bg-gradient-to-r from-[#02AEB0] to-[#00C9AC] bg-clip-text text-transparent hover:bg-[#01AFAF]  hover:bg-clip-border hover:text-white transition focus:ring-3 focus:outline-hidden">
                            Get Started
                        </a>
                    </div>

                    <div
                        class="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
                        <p class="text-xs text-gray-500 text-center">&copy; 2025. Faisal Dn | CodeLens.id. All rights
                            reserved.</p>

                        <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                            <li>
                                <a href="https://www.instagram.com/faisal.d.n" target="_blank"  class="text-gray-700 transition hover:opacity-75 text-xl text-xl">
                                    <font-awesome-icon :icon="['fab', 'instagram']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank"  class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'discord']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/wendwin" target="_blank"  class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank"  class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

                            <li>
                                <a href="mailto:faisaldwindn@gmail.com" target="_blank"  class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['far', 'envelope']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

                            <!-- <li>
                                <a href="#" rel="noreferrer" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75">
                                    <span class="sr-only">Instagram</span>

                                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li> -->

                            <!-- <li>
                                <a href="#" rel="noreferrer" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75">
                                    <span class="sr-only">Twitter</span>

                                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li> -->

                            <!-- <li>
                                <a href="#" rel="noreferrer" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75">
                                    <span class="sr-only">GitHub</span>

                                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li> -->

                            <!-- <li>
                                <a href="#" rel="noreferrer" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75">
                                    <span class="sr-only">Dribbble</span>

                                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </footer>


            <div v-show="showScrollTop" @click="scrollToTop"
                class="fixed w-fit bottom-6 right-20 z-50 bg-[#01AFAF] text-white p-2 rounded-full shadow-lg hover:bg-[#018787] transition duration-300 cursor-pointer flex items-center justify-center">
                <ion-icon name="caret-up-outline"></ion-icon>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const projects = [
    {
        title: "Jayamart",
        job: 'Fullstack',
        subTitle: "Sistem Pemesanan Koperasi Jayamart untuk Dosen dan Tendik. ",
        description: "Tugas PJBL Pengembangan Web Lanjut, Sistem ini dirancang untuk mempermudah pengguna dalam melakukan pembelian wajib bulanan di koperasi Jayamart.",
        tags: ["Flask", "Bootstrap", "Alpinejs", "MongoDB", "Rest API"],
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "POS App",
        subTitle: "Aplikasi Point of Sale (POS) untuk UMKM",
        job: 'Fullstack',
        description: "Membangun sistem Point of Sale (POS) berbasis web/mobile yang dirancang untuk membantu pelaku usaha kecil dan menengah (UMKM) dalam mengelola transaksi penjualan, stok barang, dan laporan keuangan secara efisien. Aplikasi ini memungkinkan kasir untuk melakukan pencatatan penjualan secara real-time, sekaligus menyediakan fitur manajemen produk.",
        tags: ["Django", "Bootstrap", "Alpinejs", "MySQL"],
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Progress',
    },
    {
        title: "Emojiku",
        job: 'Fullstack',
        subTitle: "Aplikasi Pengenalan Emosi untuk Anak SLB Bangun Putra, Kasihan, Bantul, DIY ",
        description: "Mengembangkan aplikasi edukatif bernama Emojiku yang ditujukan untuk membantu anak-anak berkebutuhan khusus (SLB) dalam mengenali dan memahami berbagai jenis emosi melalui vidio dan game. Proyek ini dijalankan dengan perangkat Raspberry Pi 4 sebagai media utama, dikombinasikan dengan layar touchscreen dan speaker, sehingga dapat digunakan secara mandiri oleh anak di ruang belajar.",
        tags: ["Flask (ORM)", "Bootstrap", "SQLite"],
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "Prediction Mental Health",
        subTitle: "Sistem Klasifikasi Tingkat Stres Berbasis Web",
        job: 'Fullstack',
        tags: ["Flask", "ScikitLearn", "Bootstrap", "Mysql", "Voice Recognition"],
        description: "Membangun sistem berbasis web yang mampu melakukan prediksi tingkat stres seseorang dengan menerapkan algoritma Logistic Regression sebagai model klasifikasi. Sistem ini dirancang untuk menerima input berupa data kuisioner atau atribut pribadi, kemudian mengklasifikasikan tingkat stres (misalnya: rendah, sedang, tinggi) secara otomatis.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    
    {
        title: "NutriFood",
        subTitle: "Search Engine untuk Pencarian Informasi Gizi Makanan",
        job: 'Backend Developer',
        tags: ["Flask", "Selenium", "Rest API", "Vuejs", "Google Colab"],
        description: "Mengembangkan sistem search engine backend untuk aplikasi NutriFood yang berfungsi membantu pengguna mencari informasi terkait makanan dan kandungan gizi secara efisien. Sistem ini dibangun sebagai bagian dari tugas Data Mining 2, dengan fokus pada penerapan teknik pemrosesan teks dan pengukuran kemiripan dokumen. Model pencarian menggunakan pendekatan Cosine Similarity dan BM25 (Best Matching 25) untuk mengukur relevansi antara query pengguna dan dokumen dalam basis data.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "Tlogo Putri Jeep",
        subTitle: "Sistem Pemesanan Online Jeep Wisata Merapi, Kaliurang, Yogyakarta",
        job: 'Backend Developer',
        tags: ["Laravel", "MySQL", "Midtrans", "Rest API", "Postman"],
        description: "Mengembangkan sistem pemesanan online untuk layanan jeep wisata di kawasan Tlogo Putri, Merapi. Sistem ini memudahkan wisatawan dalam melakukan pemesanan jeep secara online, memilih jadwal perjalanan, serta melakukan pembayaran secara langsung melalui sistem",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "Stiamu",
        subTitle: "Dashboard Analisis Sentimen 24 Rumah Sakit di Yogyakarta",
        job: 'Fullstack',
        tags: ["Flask", "Vuejs", "MySQL", "Tailwind Css", "Plotly", "SerpApi"],
        description: "Dashboard untuk menampilkan hasil analisis sentimen dari ulasan Google Maps terhadap 24 rumah sakit di Daerah Istmewa Yogyakarta. Proyek ini bertujuan memberikan gambaran umum mengenai persepsi masyarakat terhadap kualitas pelayanan rumah sakit dan membantu pemilik rumah sakit dalam meningkatkan kualitas pelayanan mereka melaui insight hasil analisis.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Progress',
    },
    {
        title: "Cendana Solution Center",
        subTitle: "Website Company Profile",
        job: 'Frontend Developer',
        tags: ["Laravel", "Bootstrap", "Alpinejs", "MySQL"],
        description: "Membangun website company profile untuk CSC Group dibidang Bimtek, event organizer, jasa konstruksi dan ketahanan pangan.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "Pustaka Pemda ",
        subTitle: "Website Company Profile",
        job: 'Frontend Developer',
        tags: ["Laravel", "Tailwind Css", "Alpinejs", "MySQL"],
        description: "Membangun website company profile untuk CSC Group khusus dibidang Bimtek.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Progress',
    },
    // {
    //     title: "Pusat Sertifikasi Profesi Indonesia",
    //     subTitle: "Website Company Profile",
    //     job: 'Frontend Developer',
    //     tags: [ "Laravel", "Tailwind Css", "Alpinejs", "MySQL"],
    //     description: "Membangun website company profile untuk CSC Group dibidang Sertifikasi.",
    //     image: [
    //         '/img/product44.webp',
    //         '/img/product11.webp',
    //         '/img/product12.webp',
    //         '/img/product13.webp'
    //     ]
    // },
    {
        title: "Inspensi Mobil Jogja",
        subTitle: "Website Company Profile",
        job: 'Frontend Developer',
        tags: ["Nextjs"],
        description: "Mengembangkan website company profile untuk inspeksi mobil Jogja, layanan profesional di bidang inspeksi kendaraan bekas di wilayah Yogyakarta. Website ini juga dilengkapi fitur pemesanan jasa inspeksi mobil secara online untuk memudahkan calon pelanggan",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Progress',
    },
    {
        title: "Dojo",
        subTitle: "Aplikasi Presensi Atlet",
        job: 'Fullstack',
        tags: ["Flutter", "Flask", "Rest Api", "MySQL"],
        description: "Tugas Pengembangan Aplikasi Mobile, Aplikasi Dojo digunakan untuk mencatat presensi atlet saat mengikuti sesi latihan. Aplikasi ini mempermudah pelatih dalam memantau kehadiran setiap atlet.",
        image: [
            '/img/product44.webp',
            '/img/product11.webp',
            '/img/product12.webp',
            '/img/product13.webp'
        ],
        status: 'Selesai',
    },
]

const togleProduct = ref(false);

function toggleProduct() {
    togleProduct.value = !togleProduct.value;
}

// satu current index per project
const currentIndices = ref(projects.map(() => 0))

const next = (projectIndex) => {
    const total = projects[projectIndex].image.length
    currentIndices.value[projectIndex] = (currentIndices.value[projectIndex] + 1) % total
}

const prev = (projectIndex) => {
    const total = projects[projectIndex].image.length
    currentIndices.value[projectIndex] =
        (currentIndices.value[projectIndex] - 1 + total) % total
}

const goTo = (projectIndex, imageIndex) => {
    currentIndices.value[projectIndex] = imageIndex
}


const showScrollTop = ref(false)

const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    // tombol muncul saat sudah scroll > 80% halaman
    showScrollTop.value = scrollPosition > (fullHeight - windowHeight - 100)
}


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
ion-icon {
    color: #202020;
    font-size: 20px;
}

ion-icon[name="caret-up-outline"] {
    color: #ffffff;
    font-size: 20px;
}
</style>