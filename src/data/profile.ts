// Data profil, diambil dari portfolio lama (raflyroyan.github.io).
// Sistem internal instansi: jangan tambahkan nama tabel/skema DB, kredensial, atau data wajib pajak.

export interface Experience {
  role: string;
  company: string;
  period: string;
  active: boolean;
  description: string;
  points: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export const profile = {
  name: 'Royan Hisyam Rafliansyah',
  shortName: 'Royan Hisyam',
  title: 'Backend Developer',
  tagline: '.NET & Oracle Specialist',
  currentPosition: 'IT Programmer @ Bapenda Kota Surabaya',
  location: 'Surabaya, Jawa Timur',

  bio: {
    short:
      'Backend developer yang berfokus pada performa, integritas data, dan stabilitas sistem jangka panjang. Saya membangun sistem monitoring pendapatan daerah, transaksi bendahara, dan layanan wajib pajak menggunakan .NET & Oracle Database.',
    summary:
      'Saya Backend Developer di Bapenda Kota Surabaya yang membangun sistem pajak dan pendapatan daerah dengan .NET (C#) dan Oracle Database. Mulai dari platform monitoring pendapatan yang dipakai dinas dan UPTB, sistem administrasi pajak generasi baru, portal wajib pajak dan petugas lapangan, sampai aplikasi bendahara penerimaan.',
    approach:
      'Sebagian besar pekerjaan saya ada di balik layar: worker yang menyinkronkan data dari banyak database dan API, view serta materialized view Oracle untuk dashboard, rekonsiliasi mutasi bank, dan migrasi data dari sistem lama. Saya suka memecah proses berat menjadi langkah yang transaksional, bisa diulang, dan bisa dipantau.',
    production:
      'Sistem yang saya pegang menyentuh uang dan data wajib pajak secara langsung, mulai dari pembayaran VA/QRIS, status pelunasan real-time, sampai penerbitan ketetapan. Karena itu setiap perubahan di production saya kerjakan dengan hati-hati dan terukur.',
    professional:
      'Backend Developer yang berfokus pada pengembangan aplikasi enterprise menggunakan C#, .NET / ASP.NET Core, Oracle Database, EF Core, dan Dapper. Berpengalaman membangun dan mengembangkan sistem monitoring, transaksi, pembayaran, integrasi data, migrasi data, dan reporting dengan volume data besar.',
  },

  services: [
    {
      title: 'Aplikasi Web & API .NET',
      description:
        'Back-office, portal wajib pajak, dan REST API ber-JWT dengan ASP.NET Core MVC/Web API. Aturan bisnis disimpan di library domain bersama, lengkap dengan workflow approval berjenjang dan laporan PDF DevExpress.',
    },
    {
      title: 'Database Oracle',
      description: 'View dan materialized view untuk agregasi dashboard, query lintas database link, EF Core + Dapper di banyak DbContext, serta optimasi query.',
    },
    {
      title: 'Worker & Sinkronisasi Data',
      description: 'Worker .NET terjadwal yang menyinkronkan data pajak dari banyak database dan API, dengan upsert transaksional, retry, dan status run yang bisa dipantau.',
    },
    {
      title: 'Dashboard Monitoring',
      description: 'Dashboard realisasi pendapatan dan pengawasan PBJT, PBB, reklame, serta parkir. Data live CCTV dan transaksi parkir digital dialirkan lewat Server-Sent Events.',
    },
    {
      title: 'Pembayaran & Integrasi',
      description:
        'Virtual Account dan QRIS (termasuk tagihan gabungan), cek pelunasan real-time, rekonsiliasi mutasi bank, API mobile, SignalR, serta notifikasi WhatsApp dan email.',
    },
    {
      title: 'Migrasi Data',
      description: 'Memindahkan data dari Oracle legacy ke sistem baru, termasuk foto BLOB, dengan proses bertahap yang idempoten, log error per baris, dan retry koneksi.',
    },
  ],

  experience: [
    {
      role: 'IT Programmer',
      company: 'Badan Pendapatan Daerah (Bapenda) Kota Surabaya',
      period: 'Juni 2025 — Sekarang',
      active: true,
      description:
        'Mengembangkan dan memelihara sistem pajak dan pendapatan daerah berbasis .NET dan Oracle: web back-office, portal wajib pajak, REST API untuk aplikasi mobile, worker sinkronisasi data, dan tool migrasi. Bekerja full-stack, dari query database sampai tampilan yang dipakai petugas.',
      points: [
        'Membangun hampir seluruh modul MonPD Reborn V2 (web dan API), platform monitoring pendapatan yang dipakai dinas, UPTB 1–5, dan beberapa OPD',
        'Mengembangkan Surabaya Tax Next Gen: workflow approval MyTask, NPWPD otomatis multi-kanal, API mobile petugas, dan auto-assign task lapangan',
        'Membangun portal petugas lapangan di SurabayaTax WP: BAP reklame dan hiburan, penagihan, serta pelunasan VA/QRIS real-time lewat SSE',
        'Membangun worker .NET (Background Service MonPD dan MonPDSync) yang menyinkronkan data pajak dari banyak database Oracle dan REST API',
        'Mengembangkan Sistem Bendahara Penerimaan: split dan rekonsiliasi parkir digital QRIS dari mutasi bank, serta BAP OPS dengan Virtual Account',
        'Merancang view dan materialized view Oracle serta query lintas database link untuk agregasi dashboard',
        'Membangun REST API ber-JWT untuk aplikasi mobile parkir digital, reklame, dan petugas lapangan',
        'Memigrasikan data pajak reklame dari Oracle legacy ke sistem baru, termasuk foto survey BLOB',
      ],
    },
    {
      role: 'IT Support (Praktik Kerja Lapangan)',
      company: 'SMA Hang Tuah 4 Surabaya',
      period: 'Januari 2023 — September 2023',
      active: false,
      description:
        'Mengelola dan memastikan operasional infrastruktur TI sekolah tetap optimal, termasuk instalasi, konfigurasi, pemeliharaan perangkat, konektivitas jaringan, serta penyusunan laporan rutin.',
      points: [
        'Instalasi, konfigurasi, dan pemeliharaan perangkat keras & lunak',
        'Memastikan semua perangkat tersambung ke jaringan sekolah dan berfungsi optimal',
        'Membuat laporan rutin status infrastruktur TI, penggunaan jaringan, dan masalah teknis',
      ],
    },
  ] satisfies Experience[],

  // Di situs lama daftar ini tampil di bawah blok pengalaman tanpa label perusahaan.
  // TODO: verifikasi — pencapaian ini milik pengalaman yang mana?
  technicalHighlights: [
    'Menangani error database kompleks: precision overflow & constraint violation',
    'Query untuk deteksi data tidak sinkron antar tabel',
    'Mengelola relasi parent-child dalam sistem transaksi',
    'Meningkatkan kualitas data via validasi & filtering',
    'Menelusuri akar masalah hingga level DB dan kode aplikasi',
    'Bekerja dengan sistem dependensi antar modul tinggi',
  ],

  education: [
    {
      degree: 'S1 Informatika',
      institution: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
      period: '2020 — 2024',
    },
  ],

  certifications: [
    { name: 'Junior Technical Support', issuer: 'BNSP', year: 2025 },
    { name: 'Junior Web Programmer', issuer: 'BNSP', year: 2024 },
    { name: 'Associate UI/UX', issuer: 'CertNexus Asia', year: 2023 },
  ] satisfies Certification[],

  skills: {
    Backend: ['C#', '.NET', 'ASP.NET Core MVC/Razor', 'Background Services'],
    Database: ['Oracle SQL', 'PL/SQL', 'Entity Framework Core', 'Dapper', 'Materialized View', 'Query Optimization'],
    Frontend: ['JavaScript', 'jQuery', 'AJAX', 'DevExtreme', 'Bootstrap 5', 'Tailwind CSS', 'Chart.js'],
    Integration: ['REST API', 'Database link', 'Payment / QRIS / VA', 'SSE (Server-Sent Events)'],
    Desktop: ['C# WinForms'],
    Tools: ['Git', 'Visual Studio', 'Oracle tools'],
  } as Record<string, string[]>,

  strengths: [
    'Fokus pada backend dan database performance.',
    'Terbiasa menangani high-volume data processing.',
    'Kuat dalam Oracle SQL dan optimasi query.',
    'Berpengalaman melakukan debugging production issue.',
    'Memperhatikan akurasi transaksi dan konsistensi data.',
    'Terbiasa mengembangkan sistem dari proses bisnis hingga implementasi teknis.',
  ],

  direction: {
    description:
      'Saat ini fokus pada penguatan .NET backend, system architecture, database optimization, serta pengembangan kemampuan React + ASP.NET Core untuk membangun aplikasi full-stack modern.',
    focus: ['.NET backend', 'System architecture', 'Database optimization', 'React + ASP.NET Core'],
  },

  principles: [
    { title: 'Data Integrity First', description: 'Memastikan data selalu valid dan konsisten di setiap lapisan sistem.' },
    { title: 'Problem Solving Mindset', description: 'Fokus pada akar masalah yang sesungguhnya, bukan sekadar mengatasi gejala permukaan.' },
    { title: 'Efficiency & Performance', description: 'Menulis query dan kode yang optimal untuk performa maksimal tanpa membuang sumber daya.' },
    { title: 'Stability Over Complexity', description: 'Mengutamakan sistem yang stabil dan mudah dipelihara dalam jangka panjang.' },
  ],

  contact: {
    email: 'royanrafly@gmail.com',
    phone: '+62 895-3496-90206',
    whatsapp: 'https://wa.me/62895349690206',
    location: 'Surabaya, Jawa Timur',
    cta: 'Terbuka untuk diskusi seputar backend .NET, Oracle Database, dan sistem pengolahan data.',
  },
};

export type Profile = typeof profile;
