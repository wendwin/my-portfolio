<template>
  <div class="px-4 py-8 md:py-12 max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <!-- <p
        class="text-sm font-medium tracking-wider uppercase text-[#01AFAF] mb-2"
      >
        My Work
      </p> -->

      <h1 class="text-3xl md:text-4xl font-bold text-[#01AFAF] dark:text-white">
        My Projects
      </h1>

      <p
        class="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-500 dark:text-slate-400"
      >
        A collection of projects I've worked on, from frontend development to
        backend systems and fullstack applications.
      </p>
    </div>

    <!-- Projects -->
    <div class="space-y-8">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-[#01AFAF] dark:hover:border-[#01AFAF] hover:shadow-lg transition-all duration-300"
        data-aos="fade-up"
      >
        <!-- Project Information -->
        <div
          class="flex flex-col justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-gray-700"
        >
          <!-- Number -->
          <span class="text-lg font-semibold text-[#01AFAF] mb-3">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <!-- Title + Role -->
          <div class="flex items-center justify-between gap-4">
            <h2
              class="text-xl md:text-2xl font-bold leading-tight text-slate-800 dark:text-slate-100"
            >
              {{ project.title }}
            </h2>

            <span
              class="shrink-0 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-slate-300"
            >
              {{ project.job }}
            </span>
          </div>

          <!-- Subtitle -->
          <p
            class="mt-2 text-sm md:text-base font-medium text-[#01AFAF] dark:text-[#01AFAF]"
          >
            {{ project.subTitle }}
          </p>

          <!-- Description -->
          <p
            class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
          >
            {{ project.description }}
          </p>

          <!-- Achievement -->
          <div
            v-if="project.achievement?.length"
            class="mt-4 flex flex-col gap-2"
          >
            <div
              v-for="(item, achievementIndex) in project.achievement"
              :key="achievementIndex"
              class="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400"
            >
              <ion-icon
                name="ribbon-outline"
                class="shrink-0 text-[#01AFAF]"
                style="color: #01afaf"
              ></ion-icon>
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="(tag, tagIndex) in project.tags"
              :key="tagIndex"
              class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Project Preview -->
        <div
          class="relative flex items-center justify-center min-h-[280px] md:min-h-[380px] p-5 md:p-8 bg-slate-50 dark:bg-gray-900/50"
        >
          <!-- Image -->
          <div
            class="relative w-full h-full min-h-[240px] flex items-center justify-center"
          >
            <img
              :src="project.image[currentIndices[index]]"
              class="max-h-[320px] w-full object-contain rounded-xl transition duration-500 group-hover:scale-[1.02]"
              :alt="project.title"
            />

            <!-- Previous -->
            <button
              @click="prev(index)"
              aria-label="Previous image"
              class="absolute left-1 md:-left-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-700 text-slate-700 shadow-md hover:bg-slate-300 hover:text-white transition duration-200"
            >
              <ion-icon name="caret-back-outline"></ion-icon>
            </button>

            <!-- Next -->
            <button
              @click="next(index)"
              aria-label="Next image"
              class="absolute right-1 md:-right-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-700 text-slate-700 shadow-md hover:bg-slate-300 hover:text-white transition duration-200"
            >
              <ion-icon name="caret-forward-outline"></ion-icon>
            </button>
          </div>

          <!-- Indicators -->
          <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
          >
            <button
              v-for="(img, imgIndex) in project.image"
              :key="imgIndex"
              @click="goTo(index, imgIndex)"
              :aria-label="`Go to image ${imgIndex + 1}`"
              class="h-2 w-2 rounded-full cursor-pointer transition-all duration-200"
              :class="
                currentIndices[index] === imgIndex
                  ? 'w-5 bg-[#01AFAF]'
                  : 'bg-slate-300 dark:bg-gray-500 hover:bg-slate-400'
              "
            ></button>
          </div>
        </div>
      </article>
    </div>

    <!-- CTA -->
    <section class="mt-20 md:mt-28 text-center">
      <div class="max-w-2xl mx-auto">
        <p
          class="text-sm font-medium uppercase tracking-wider text-[#01AFAF] mb-3"
        >
          Let's work together
        </p>

        <h2
          class="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white"
        >
          Let’s build something great together.
        </h2>

        <p
          class="mt-4 text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Got something in mind? I’d love to hear about it. Open to side
          projects, creative ideas, and interesting collaborations.
        </p>

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-7 inline-flex items-center gap-2 rounded-full border border-[#01AFAF] px-7 py-3 text-sm font-semibold text-[#01AFAF] hover:bg-[#01AFAF] hover:text-white transition-all duration-300"
        >
          Get Started
          <span>→</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-20 md:mt-28">
      <div
        class="border-t border-slate-200 dark:border-gray-700 pt-6 pb-4 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p
          class="text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left"
        >
          &copy; {{ new Date().getFullYear() }}. Faisal Dn | All rights
          reserved.
        </p>

        <ul class="flex justify-center gap-5">
          <!-- Instagram -->
          <li>
            <a
              href="https://www.instagram.com/faisal.d.n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="text-slate-500 hover:text-[#02AEB0] text-lg transition-all duration-200 hover:scale-125 inline-block"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>

          <!-- Discord -->
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              class="text-slate-500 hover:text-[#02AEB0] text-lg transition-all duration-200 hover:scale-125 inline-block"
            >
              <font-awesome-icon :icon="['fab', 'discord']" />
            </a>
          </li>

          <!-- GitHub -->
          <li>
            <a
              href="https://github.com/wendwin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="text-slate-500 hover:text-[#02AEB0] text-lg transition-all duration-200 hover:scale-125 inline-block"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </li>

          <!-- LinkedIn -->
          <li>
            <a
              href="https://www.linkedin.com/in/faisal-dwi-nurwenda-87a625373"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="text-slate-500 hover:text-[#02AEB0] text-lg transition-all duration-200 hover:scale-125 inline-block"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </li>

          <!-- Email -->
          <li>
            <a
              href="mailto:faisaldwindn@gmail.com"
              aria-label="Email"
              class="text-slate-500 hover:text-[#02AEB0] text-lg transition-all duration-200 hover:scale-125 inline-block"
            >
              <font-awesome-icon :icon="['far', 'envelope']" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const resolveImage = (path) => {
  return images[`/src/${path}`];
};

const projects = [
  {
    title: "Jayamart",
    job: "Fullstack",
    subTitle: "Sistem Pemesanan Koperasi Jayamart",
    description:
      "Project Based Learning, Sistem ini dirancang untuk mempermudah anggota dalam melakukan pembelian wajib bulanan di koperasi Jayamart.",

    achievement: ["Juara 1 Technovation FTTI 2023"],
    tags: ["Flask", "Bootstrap", "Alpinejs", "MongoDB", "Rest API"],
    image: [
      resolveImage("assets/img/jayamart/5.webp"),
      resolveImage("assets/img/jayamart/3.webp"),
      resolveImage("assets/img/jayamart/2.webp"),
    ],
    status: "Selesai",
  },
  {
    title: "Emojiku",
    job: "Fullstack",
    subTitle:
      "Aplikasi Pengenalan Emosi untuk Anak SLB Bangun Putra, Kasihan, Bantul, Yogyakarta.",
    description:
      "Mengembangkan aplikasi edukatif bernama Emojiku yang ditujukan untuk membantu anak-anak berkebutuhan khusus (SLB) dalam mengenali dan memahami berbagai jenis emosi melalui vidio dan game. Proyek ini dijalankan dengan perangkat Raspberry Pi 4 sebagai media utama, dikombinasikan dengan layar touchscreen dan speaker.",
    achievement: [
      "PKM (Pengabdian kepada Masyarakat)",
      "HKI (Program Komputer)",
    ],
    tags: ["Flask (ORM)", "Bootstrap", "SQLite"],
    image: [
      resolveImage("assets/img/emojiku/16.webp"),
      resolveImage("assets/img/emojiku/17.webp"),
      resolveImage("assets/img/emojiku/18.webp"),
    ],
    status: "Selesai",
  },
  {
    title: "Stiamu",
    subTitle: "Dashboard Analisis Sentimen 24 Rumah Sakit di Yogyakarta",
    job: "Fullstack",
    tags: ["Flask", "Vuejs", "MySQL", "Tailwind CSS", "Plotly", "SerpApi"],
    description:
      "Dashboard untuk menampilkan hasil analisis sentimen dari scraping ulasan Google Maps terhadap 24 rumah sakit di Yogyakarta. Proyek ini bertujuan memberikan gambaran mengenai persepsi masyarakat terhadap kualitas pelayanan rumah sakit dan membantu rumah sakit dalam meningkatkan kualitas pelayanan melaui insight hasil analisis.",
    achievement: [
      "PKM – Pengabdian kepada Masyarakat",
      "HKI – Program Komputer",
    ],
    image: [
      resolveImage("assets/img/stiamu/31.webp"),
      resolveImage("assets/img/stiamu/32.webp"),
      resolveImage("assets/img/stiamu/33.webp"),
      resolveImage("assets/img/stiamu/34.webp"),
      resolveImage("assets/img/stiamu/35.webp"),
    ],
    status: "Progres",
  },
  {
    title: "Tlogo Putri Jeep",
    subTitle:
      "Sistem Pemesanan Online Jeep Wisata Merapi, Kaliurang, Yogyakarta",
    job: "Backend",
    tags: ["Laravel", "MySQL", "Midtrans", "RESTful API"],
    description:
      "Project Based Learning (Proyek Pengembangan Sistem Informasi) divisi , mengembangkan sistem pemesanan online dan pembayaran untuk layanan jeep wisata di kawasan Tlogo Putri, Merapi dengan mengintegrasikan payment gataway (Midtrans) dan menerapkanya di sisi frontend.",
    achievement: ["Karya Terinovatif-1, Technovation FTTI 2025"],
    image: [
      resolveImage("assets/img/tlogo/22.webp"),
      resolveImage("assets/img/tlogo/23.webp"),
      resolveImage("assets/img/tlogo/24.webp"),
      resolveImage("assets/img/tlogo/25.webp"),
    ],
    status: "Selesai",
  },
  {
    title: "Sistem Monitoring Perkembangan Anak TK",
    subTitle: "PPDB & Monitoring",
    job: "Fullstack",
    tags: ["Flask", "Tailwind CSS", "Vuejs", "MysSQL", "RESTful API"],
    description:
      "Mengembangkan sistem berbasis web untuk pengelolaan PPDB dan monitoring perkembangan anak TK. Sistem mencakup proses pendaftaran, manajemen data siswa, observasi menggunakan instrumen tumbuh kembang anak (KPSP & GPPH), monitoring mingguan, serta portal orang tua. Dikembangkan secara fullstack menggunakan Flask, Vue.js, dan MySQL dengan implementasi RESTful API, autentikasi JWT, serta Role-Based Access Control (RBAC).",
    image: [
      resolveImage("assets/img/monitoring/1.png"),
      resolveImage("assets/img/monitoring/2.png"),
      resolveImage("assets/img/monitoring/3.png"),
      resolveImage("assets/img/monitoring/4.png"),
      resolveImage("assets/img/monitoring/5.png"),
      resolveImage("assets/img/monitoring/6.png"),
    ],
    status: "Progres",
  },
  {
    title: "Sistem Manajemen Bengkel",
    subTitle: "POS",
    job: "Frontend",
    tags: ["Nextjs", "Tailwind CSS", "Laravel", "MysSQL", "RESTful API"],
    description:
      "Mengembangkan antarmuka sistem manajemen bengkel untuk mendukung proses operasional dan transaksi, mulai dari pengelolaan data pelanggan, barang dan jasa, work order (service), pembayaran, pencatatan stok spare part, penugasan dan komisi mekanik, hingga laporan keuangan. Berperan dalam pengembangan frontend serta mengintegrasikan RESTful API dari backend dan mendukung autentikasi JWT, serta Role-Based Access Control (RBAC).",
    image: [
      resolveImage("assets/img/bengkel/59.png"),
      resolveImage("assets/img/bengkel/60.png"),
      resolveImage("assets/img/bengkel/61.png"),
      resolveImage("assets/img/bengkel/62.png"),
      resolveImage("assets/img/bengkel/63.png"),
      resolveImage("assets/img/bengkel/64.png"),
    ],
    status: "Progres",
  },
  {
    title: "Cendana Solution Center",
    subTitle: "Website Company Profile",
    job: "Frontend",
    tags: ["Laravel", "Bootstrap", "Alpinejs", "MySQL"],
    description:
      "Membangun website company profile untuk CSC Group dibidang Bimtek, event organizer, jasa konstruksi dan ketahanan pangan.",
    image: [
      resolveImage("assets/img/csc/19.webp"),
      resolveImage("assets/img/csc/20.webp"),
      resolveImage("assets/img/csc/21.webp"),
    ],
    status: "Selesai",
  },
  {
    title: "Pustaka Pemda ",
    subTitle: "Website Company Profile",
    job: "Frontend",
    tags: ["Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
    description:
      "Membangun website company profile untuk CSC Group khusus dibidang Bimtek dan membuat portal berita.",
    image: [
      resolveImage("assets/img/pustaka/36.webp"),
      resolveImage("assets/img/pustaka/37.webp"),
      resolveImage("assets/img/pustaka/38.webp"),
      resolveImage("assets/img/pustaka/39.webp"),
    ],
    status: "Progres",
  },
  // {
  //   title: "Pusat Sertifikasi Profesi Indonesia",
  //   subTitle: "Website Company Profile",
  //   job: "Frontend",
  //   tags: ["Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
  //   description:
  //     "Membangun website company profile untuk CSC Group dibidang Sertifikasi.",
  //
  //   image: [
  //     resolveImage("assets/img/product44.webp"),
  //     resolveImage("assets/img/product11.webp"),
  //     resolveImage("assets/img/product12.webp"),
  //     resolveImage("assets/img/product13.webp"),
  //   ],
  // },
  {
    title: "Inspeksi Mobil Jogja",
    subTitle: "Website Company Profile",
    job: "Frontend",
    tags: ["Nextjs", "Tailwind CSS"],
    description:
      "Mengembangkan website company profile dan pemesanan untuk inspeksi mobil Jogja, layanan profesional di bidang inspeksi kendaraan bekas di wilayah Yogyakarta.",
    image: [
      resolveImage("assets/img/inspeksi/26.webp"),
      resolveImage("assets/img/inspeksi/27.webp"),
      resolveImage("assets/img/inspeksi/28.webp"),
      resolveImage("assets/img/inspeksi/29.webp"),
    ],
    status: "Progres",
  },
  {
    title: "Prediction Mental Health",
    subTitle: "Sistem Klasifikasi Tingkat Stres Berbasis Web",
    job: "Fullstack",
    tags: ["Flask", "ScikitLearn", "Bootstrap", "Mysql"],
    description:
      "Membangun sistem berbasis web yang mampu melakukan prediksi tingkat stres seseorang dengan menerapkan algoritma Logistic Regression sebagai model klasifikasi. Sistem ini dirancang untuk menerima input berupa data kuisioner atau atribut pribadi, kemudian mengklasifikasikan tingkat stres (misalnya: rendah, sedang, tinggi) secara otomatis.",
    achievement: ["Lomba Turnamen Data Sains Nasional "],
    image: [
      resolveImage("assets/img/mensafe/42.webp"),
      resolveImage("assets/img/mensafe/41.webp"),
    ],
    status: "Selesai",
  },
  {
    title: "POS App",
    subTitle: "Aplikasi Point of Sale (POS)",
    job: "Fullstack",
    description:
      "Membangun sistem Point of Sale (POS) berbasis web yang dirancang untuk membantu UMKM dalam mengelola transaksi penjualan, stok barang dan manajemen produk.",
    tags: ["Django", "Django Rest Framework", "Bootstrap", "Alpinejs", "MySQL"],
    image: [
      resolveImage("assets/img/pos/14.webp"),
      resolveImage("assets/img/pos/15.webp"),
    ],
    status: "Progres",
  },
  {
    title: "NutriFood",
    subTitle: "Search Engine untuk Pencarian Informasi Gizi Makanan",
    job: "Backend",
    tags: ["Flask", "Selenium", "Rest API", "Vuejs", "Tailwind CSS"],
    description:
      "Mengembangkan sistem search engine aplikasi NutriFood yang berfungsi membantu pengguna mencari informasi terkait makanan dan kandungan gizi. Sistem ini dibangun sebagai bagian dari tugas Data Mining 2, dengan menerapkan teknik pemrosesan teks dan pengukuran kemiripan dokumen. Model pencarian menggunakan pendekatan Cosine Similarity dan BM25 untuk mengukur relevansi antara query pengguna dan dokumen dalam basis data.",
    image: [
      resolveImage("assets/img/nutrifood/45.webp"),
      resolveImage("assets/img/nutrifood/46.webp"),
    ],
    status: "Progres",
  },

  // {
  //     title: "Dojo",
  //     subTitle: "Aplikasi Presensi Atlet",
  //     job: 'Fullstack',
  //     tags: ["Flutter", "Flask", "Rest Api", "MySQL"],
  //     description: "Tugas Pengembangan Aplikasi Mobile, Aplikasi Dojo digunakan untuk mencatat presensi atlet saat mengikuti sesi latihan. Aplikasi ini mempermudah pelatih dalam memantau kehadiran setiap atlet.",
  //     image: [
  //         'assets/img/product44.webp',
  //         'assets/img/product11.webp',
  //         'assets/img/product12.webp',
  //         'assets/img/product13.webp'
  //     ],
  //     status: 'Selesai',
  // },
];

const togleProduct = ref(false);

function toggleProduct() {
  togleProduct.value = !togleProduct.value;
}

// satu current index per project
const currentIndices = ref(projects.map(() => 0));

const next = (projectIndex) => {
  const total = projects[projectIndex].image.length;
  currentIndices.value[projectIndex] =
    (currentIndices.value[projectIndex] + 1) % total;
};

const prev = (projectIndex) => {
  const total = projects[projectIndex].image.length;
  currentIndices.value[projectIndex] =
    (currentIndices.value[projectIndex] - 1 + total) % total;
};

const goTo = (projectIndex, imageIndex) => {
  currentIndices.value[projectIndex] = imageIndex;
};

const showScrollTop = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // tombol muncul saat sudah scroll > 80% halaman
  showScrollTop.value = scrollPosition > fullHeight - windowHeight - 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
