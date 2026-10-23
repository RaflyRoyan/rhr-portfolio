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
      'Saya adalah seorang Backend Developer yang berfokus pada pengembangan sistem berbasis data dengan kompleksitas tinggi, khususnya menggunakan teknologi .NET (C#) dan Oracle Database. Dalam pekerjaan sehari-hari, saya terbiasa menangani sistem yang membutuhkan performa tinggi sekaligus akurasi data yang sangat ketat — seperti sistem transaksi dan pelaporan berskala besar.',
    approach:
      'Saya memiliki pendekatan yang sistematis dalam menyelesaikan masalah, terutama dalam analisis error, debugging mendalam, dan optimasi query database.',
    production:
      'Terbiasa bekerja langsung di lingkungan production, di mana setiap perubahan harus dilakukan dengan hati-hati dan terukur untuk menjaga stabilitas sistem.',
    professional:
      'Backend Developer yang berfokus pada pengembangan aplikasi enterprise menggunakan C#, .NET / ASP.NET Core, Oracle Database, EF Core, dan Dapper. Berpengalaman membangun dan mengembangkan sistem monitoring, transaksi, pembayaran, integrasi data, migrasi data, dan reporting dengan volume data besar.',
  },

  services: [
    { title: 'Backend Development', description: 'Aplikasi backend C# / .NET, ASP.NET Core MVC, dan background worker service untuk proses data terjadwal.' },
    { title: 'Database & Data Processing', description: 'Query Oracle kompleks (CTE, join, anti-join), materialized view, validasi, cleansing, dan optimasi performa.' },
    { title: 'Data Synchronization', description: 'Sinkronisasi data antar sistem — tanpa data hilang, tanpa duplikasi, dan konsisten antar tabel.' },
    { title: 'Monitoring Dashboards', description: 'Dashboard realisasi pendapatan, profil objek pajak, dan kontrol PBB yang responsif dan mudah dibaca.' },
    { title: 'Payment & Integration', description: 'Integrasi Virtual Account, QRIS, dan pembayaran, REST API, serta database link Oracle — termasuk SKPD/SSPD dan monitoring status transaksi.' },
    { title: 'Data Migration', description: 'Migrasi data historis dalam jumlah besar menggunakan Dapper, EF Core, dan Oracle dengan batch & parallel processing, progress monitoring, dan logging.' },
  ],

  experience: [
    {
      role: 'IT Programmer',
      company: 'Badan Pendapatan Daerah (Bapenda) Kota Surabaya',
      period: 'Juni 2025 — Sekarang',
      active: true,
      description:
        'Bertanggung jawab dalam pengembangan dan pemeliharaan sistem backend berbasis .NET serta pengelolaan database Oracle. Terlibat dalam sistem pengolahan data transaksi, monitoring pendapatan daerah, dan sinkronisasi antar sistem berskala besar.',
      points: [
        'Mengembangkan backend service menggunakan C# (.NET) & EF Core',
        'Mengelola dan mengoptimasi query serta materialized view Oracle',
        'Membangun sistem sinkronisasi data antar platform',
        'Mengembangkan modul MonPD, Bendahara, dan layanan wajib pajak',
        'Melakukan troubleshooting pada sistem production',
        'Integrasi VA, QRIS, dan pembayaran, termasuk SKPD/SSPD serta monitoring status transaksi',
        'Migrasi data historis dalam jumlah besar dengan batch & parallel processing',
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
    Integration: ['REST API', 'Database link', 'Payment / QRIS / VA', 'SSE (Server-Sent Events)', 'Payment callback'],
    Desktop: ['C# WinForms'],
    Tools: ['Git', 'Visual Studio', 'Oracle tools'],
    Architecture: ['Layered architecture', 'Repository/Service pattern', 'Asynchronous processing'],
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
} as const;

export type Profile = typeof profile;
