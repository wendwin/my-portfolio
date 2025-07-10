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
                                'bg-blue-100 text-blue-600': project.job === 'Frontend',
                                'bg-pink-100 text-pink-600': project.job === 'Backend'
                            }">{{ project.job }}</span>


                            <span class="w-fit mb-3 text-xs font-semibold px-2 py-1 rounded-full" :class="{
                                'bg-green-100 text-green-600': project.status === 'Selesai',
                                'bg-yellow-100 text-yellow-600': project.status === 'Progres'
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
                                class="w-full aspect-square object-contain  rounded transition duration-500"
                                :alt="project.title" />

                            <button @click="prev(index)"
                                class="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-300">
                                <ion-icon name="caret-back-outline"></ion-icon>
                            </button>

                            <button @click="next(index)"
                                class="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-300">
                                <ion-icon name="caret-forward-outline"></ion-icon>
                            </button>

                            <div class="flex justify-center gap-2">
                                <span v-for="(img, imgIndex) in project.image" :key="imgIndex"
                                    @click="goTo(index, imgIndex)" :class="[
                                        'h-3 w-3 rounded-full cursor-pointer',
                                        currentIndices[index] === imgIndex ? 'bg-[#01AFAF]' : 'bg-gray-300'
                                    ]"></span>
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
                                    'bg-blue-100 text-blue-600': project.job === 'Frontend',
                                    'bg-pink-100 text-pink-600': project.job === 'Backend'
                                }">
                                {{ project.job }}
                            </span>

                            <span
                                class="w-fit text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center justify-center"
                                :class="{
                                    'bg-green-100 text-green-600': project.status === 'Selesai',
                                    'bg-yellow-100 text-yellow-600': project.status === 'Progres'
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
                    <div class="text-center max-w-3xl mx-auto">
                        <h2 class="text-3xl font-semibold sm:text-5xl bg-gradient-to-r">Let’s build something great
                            together.</h2>

                        <p class="mx-auto mt-4 max-w-sm text-gray-500">
                            Got something in mind? I’d love to hear about it. Let’s build it together!
                            Open to fun ideas, side projects, or anything creative. Hit me up!
                        </p>

                        <a :href="whatsappUrl" target="_blank"
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
                                <a href="https://www.instagram.com/faisal.d.n" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'instagram']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'discord']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/wendwin" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/faisal-dwi-nurwenda-87a625373" target="_blank" class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

                            <li>
                                <a href="mailto:faisaldwindn@gmail.com" target="_blank"
                                    class="text-gray-700 transition hover:opacity-75 text-xl">
                                    <font-awesome-icon :icon="['far', 'envelope']"
                                        class="hover:text-[#02AEB0] hover:scale-125 transition ease-in duration-100 " />
                                </a>
                            </li>

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
        subTitle: "Sistem Pemesanan Koperasi Jayamart",
        description: "Project Based Learning, Sistem ini dirancang untuk mempermudah anggota dalam melakukan pembelian wajib bulanan di koperasi Jayamart.",
        tags: ["Flask", "Bootstrap", "Alpinejs", "MongoDB", "Rest API"],
        image: [
            '/img/jayamart/5.webp',
            '/img/jayamart/3.webp',
            '/img/jayamart/2.webp',
        ],
        status: 'Selesai',
    },
    {
        title: "POS App",
        subTitle: "Aplikasi Point of Sale (POS)",
        job: 'Fullstack',
        description: "Membangun sistem Point of Sale (POS) berbasis web yang dirancang untuk membantu UMKM dalam mengelola transaksi penjualan, stok barang dan manajemen produk.",
        tags: ["Django", "Django Rest Framework",  "Bootstrap", "Alpinejs", "MySQL"],
        image: [
            '/img/pos/14.webp',
            '/img/pos/15.webp',
        ],
        status: 'Progres',
    },
    {
        title: "Emojiku",
        job: 'Fullstack',
        subTitle: "Aplikasi Pengenalan Emosi untuk Anak SLB Bangun Putra, Kasihan, Bantul, Yogyakarta",
        description: "Mengembangkan aplikasi edukatif bernama Emojiku yang ditujukan untuk membantu anak-anak berkebutuhan khusus (SLB) dalam mengenali dan memahami berbagai jenis emosi melalui vidio dan game. Proyek ini dijalankan dengan perangkat Raspberry Pi 4 sebagai media utama, dikombinasikan dengan layar touchscreen dan speaker.",
        tags: ["Flask (ORM)", "Bootstrap", "SQLite"],
        image: [
            '/img/emojiku/16.webp',
            '/img/emojiku/17.webp',
            '/img/emojiku/18.webp',
        ],
        status: 'Selesai',
    },
    {
        title: "Prediction Mental Health",
        subTitle: "Sistem Klasifikasi Tingkat Stres Berbasis Web",
        job: 'Fullstack',
        tags: ["Flask", "ScikitLearn", "Bootstrap", "Mysql" ],
        description: "Membangun sistem berbasis web yang mampu melakukan prediksi tingkat stres seseorang dengan menerapkan algoritma Logistic Regression sebagai model klasifikasi. Sistem ini dirancang untuk menerima input berupa data kuisioner atau atribut pribadi, kemudian mengklasifikasikan tingkat stres (misalnya: rendah, sedang, tinggi) secara otomatis.",
        image: [
            '/img/mensafe/42.webp',
            '/img/mensafe/41.webp',
        ],
        status: 'Selesai',
    },

    {
        title: "NutriFood",
        subTitle: "Search Engine untuk Pencarian Informasi Gizi Makanan",
        job: 'Backend',
        tags: ["Flask", "Selenium", "Rest API", "Vuejs", "Tailwind CSS"],
        description: "Mengembangkan sistem search engine aplikasi NutriFood yang berfungsi membantu pengguna mencari informasi terkait makanan dan kandungan gizi. Sistem ini dibangun sebagai bagian dari tugas Data Mining 2, dengan menerapkan teknik pemrosesan teks dan pengukuran kemiripan dokumen. Model pencarian menggunakan pendekatan Cosine Similarity dan BM25 untuk mengukur relevansi antara query pengguna dan dokumen dalam basis data.",
        image: [
            '/img/nutrifood/45.webp',
            '/img/nutrifood/46.webp',
        ],
        status: 'Progres',
    },
    {
        title: "Tlogo Putri Jeep",
        subTitle: "Sistem Pemesanan Online Jeep Wisata Merapi, Kaliurang, Yogyakarta",
        job: 'Backend',
        tags: ["Laravel", "MySQL", "Midtrans", "Rest API", "Postman"],
        description: "Mengembangkan sistem pemesanan online dan pembayaran untuk layanan jeep wisata di kawasan Tlogo Putri, Merapi dengan menerapkan payment gataway (Midtrans) dan mengintegrasikan di sisi frontend.",
        image: [
            '/img/tlogo/22.webp',
            '/img/tlogo/23.webp',
            '/img/tlogo/24.webp',
            '/img/tlogo/25.webp'
        ],
        status: 'Selesai',
    },
    {
        title: "Stiamu",
        subTitle: "Dashboard Analisis Sentimen 24 Rumah Sakit di Yogyakarta",
        job: 'Fullstack',
        tags: ["Flask", "Vuejs", "MySQL", "Tailwind CSS", "Plotly", "SerpApi"],
        description: "Dashboard untuk menampilkan hasil analisis sentimen dari scraping ulasan Google Maps terhadap 24 rumah sakit di Yogyakarta. Proyek ini bertujuan memberikan gambaran mengenai persepsi masyarakat terhadap kualitas pelayanan rumah sakit dan membantu rumah sakit dalam meningkatkan kualitas pelayanan melaui insight hasil analisis.",
        image: [
            '/img/stiamu/31.webp',
            '/img/stiamu/32.webp',
            '/img/stiamu/33.webp',
            '/img/stiamu/34.webp',
            '/img/stiamu/35.webp'
        ],
        status: 'Progres',
    },
    {
        title: "Cendana Solution Center",
        subTitle: "Website Company Profile",
        job: 'Frontend',
        tags: ["Laravel", "Bootstrap", "Alpinejs", "MySQL"],
        description: "Membangun website company profile untuk CSC Group dibidang Bimtek, event organizer, jasa konstruksi dan ketahanan pangan.",
        image: [
            '/img/csc/19.webp',
            '/img/csc/20.webp',
            '/img/csc/21.webp',
        ],
        status: 'Selesai',
    },
    {
        title: "Pustaka Pemda ",
        subTitle: "Website Company Profile",
        job: 'Frontend',
        tags: ["Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
        description: "Membangun website company profile untuk CSC Group khusus dibidang Bimtek dan membuat portal berita.",
        image: [
            '/img/pustaka/36.webp',
            '/img/pustaka/37.webp',
            '/img/pustaka/38.webp',
            '/img/pustaka/39.webp'
        ],
        status: 'Progres',
    },
    // {
    //     title: "Pusat Sertifikasi Profesi Indonesia",
    //     subTitle: "Website Company Profile",
    //     job: 'Frontend',
    //     tags: [ "Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
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
        job: 'Frontend',
        tags: ["Nextjs", "Tailwind CSS",],
        description: "Mengembangkan website company profile dan pemesanan untuk inspeksi mobil Jogja, layanan profesional di bidang inspeksi kendaraan bekas di wilayah Yogyakarta.",
        image: [
            '/img/inspeksi/26.webp',
            '/img/inspeksi/27.webp',
            '/img/inspeksi/28.webp',
            '/img/inspeksi/29.webp'
        ],
        status: 'Progres',
    },
    // {
    //     title: "Dojo",
    //     subTitle: "Aplikasi Presensi Atlet",
    //     job: 'Fullstack',
    //     tags: ["Flutter", "Flask", "Rest Api", "MySQL"],
    //     description: "Tugas Pengembangan Aplikasi Mobile, Aplikasi Dojo digunakan untuk mencatat presensi atlet saat mengikuti sesi latihan. Aplikasi ini mempermudah pelatih dalam memantau kehadiran setiap atlet.",
    //     image: [
    //         '/img/product44.webp',
    //         '/img/product11.webp',
    //         '/img/product12.webp',
    //         '/img/product13.webp'
    //     ],
    //     status: 'Selesai',
    // },
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

const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda`;

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