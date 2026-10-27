// Terjemahan bahasa Inggris dari profile.ts. Data non-teks (nama, kontak, tahun) diambil dari versi Indonesia.
// Sistem internal instansi: jangan tambahkan nama tabel/skema DB, kredensial, atau data wajib pajak.
import { profile, type Profile } from './profile';

export const profileEn: Profile = {
  ...profile,
  location: 'Surabaya, East Java',

  bio: {
    short:
      'Backend developer focused on performance, data integrity, and long-term system stability. I build regional revenue monitoring, treasury transaction, and taxpayer service systems with .NET & Oracle Database.',
    summary:
      "I'm a Backend Developer at Bapenda Kota Surabaya (the city's Regional Revenue Agency), building tax and regional revenue systems with .NET (C#) and Oracle Database. That ranges from a revenue monitoring platform used by the agency and its regional tax offices (UPTB), to a next-generation tax administration system, portals for taxpayers and field officers, and a revenue treasury application.",
    approach:
      'Most of my work happens behind the scenes: workers that sync data from many databases and APIs, Oracle views and materialized views for dashboards, bank statement reconciliation, and data migration from legacy systems. I like breaking heavy processes into steps that are transactional, repeatable, and observable.',
    production:
      'The systems I own touch money and taxpayer data directly, from VA/QRIS payments and real-time settlement status to issuing tax assessments. That is why every production change I make is careful and measured.',
    professional:
      'Backend Developer focused on enterprise application development with C#, .NET / ASP.NET Core, Oracle Database, EF Core, and Dapper. Experienced in building and evolving monitoring, transaction, payment, data integration, data migration, and reporting systems that handle large data volumes.',
  },

  services: [
    {
      title: '.NET Web Apps & APIs',
      description:
        'Back-office apps, taxpayer portals, and JWT-secured REST APIs with ASP.NET Core MVC/Web API. Business rules live in a shared domain library, complete with multi-level approval workflows and DevExpress PDF reports.',
    },
    {
      title: 'Oracle Database',
      description: 'Views and materialized views for dashboard aggregation, cross-database-link queries, EF Core + Dapper across many DbContexts, and query optimization.',
    },
    {
      title: 'Workers & Data Sync',
      description: 'Scheduled .NET workers that sync tax data from many databases and APIs, with transactional upserts, retries, and run status you can monitor.',
    },
    {
      title: 'Monitoring Dashboards',
      description: 'Dashboards for revenue realization and oversight of PBJT, property tax (PBB), billboard tax, and parking. Live CCTV and digital parking transaction data are streamed via Server-Sent Events.',
    },
    {
      title: 'Payments & Integration',
      description:
        'Virtual Accounts and QRIS (including combined bills), real-time settlement checks, bank statement reconciliation, mobile APIs, SignalR, and WhatsApp and email notifications.',
    },
    {
      title: 'Data Migration',
      description: 'Moving data from legacy Oracle into new systems, BLOB photos included, through idempotent staged runs with per-row error logs and connection retries.',
    },
  ],

  experience: [
    {
      role: 'IT Programmer',
      company: 'Regional Revenue Agency (Bapenda) of Surabaya City',
      period: 'June 2025 — Present',
      active: true,
      description:
        'Building and maintaining .NET and Oracle based tax and regional revenue systems: back-office web apps, taxpayer portals, REST APIs for mobile apps, data sync workers, and migration tools. Working full-stack, from database queries to the screens officers use.',
      points: [
        'Built nearly every module of MonPD Reborn V2 (web and API), the revenue monitoring platform used by the agency, UPTB 1–5, and several other city departments',
        'Developing Surabaya Tax Next Gen: the MyTask approval workflow, multi-channel automatic NPWPD issuance, a mobile API for officers, and auto-assignment of field tasks',
        'Built the field officer portal in SurabayaTax WP: billboard and entertainment inspection reports (BAP), billing, and real-time VA/QRIS settlement via SSE',
        'Built .NET workers (MonPD Background Service and MonPDSync) that sync tax data from many Oracle databases and REST APIs',
        'Developing the Revenue Treasury System: splitting and reconciling digital parking QRIS payments from bank statements, plus OPS inspection reports with Virtual Accounts',
        'Designed Oracle views and materialized views plus cross-database-link queries for dashboard aggregation',
        'Built JWT-secured REST APIs for the digital parking, billboard, and field officer mobile apps',
        'Migrated billboard tax data from legacy Oracle into the new system, including BLOB survey photos',
      ],
    },
    {
      role: 'IT Support (Internship)',
      company: 'SMA Hang Tuah 4 Surabaya',
      period: 'January 2023 — September 2023',
      active: false,
      description:
        "Managed the school's IT infrastructure and kept it running optimally, including device installation, configuration, and maintenance, network connectivity, and routine reporting.",
      points: [
        'Installed, configured, and maintained hardware & software',
        'Made sure every device was connected to the school network and working properly',
        'Wrote routine reports on IT infrastructure status, network usage, and technical issues',
      ],
    },
  ],

  technicalHighlights: [
    'Handling complex database errors: precision overflow & constraint violations',
    'Queries to detect out-of-sync data between tables',
    'Managing parent-child relations in transaction systems',
    'Improving data quality through validation & filtering',
    'Tracing root causes down to the DB and application code',
    'Working in systems with heavy inter-module dependencies',
  ],

  education: [
    {
      degree: "Bachelor's in Informatics",
      institution: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
      period: '2020 — 2024',
    },
  ],

  strengths: [
    'Focused on backend and database performance.',
    'Used to high-volume data processing.',
    'Strong in Oracle SQL and query optimization.',
    'Experienced in debugging production issues.',
    'Careful about transaction accuracy and data consistency.',
    'Used to taking systems from business process to technical implementation.',
  ],

  direction: {
    description:
      'Currently deepening .NET backend, system architecture, and database optimization, and building React + ASP.NET Core skills for modern full-stack applications.',
    focus: ['.NET backend', 'System architecture', 'Database optimization', 'React + ASP.NET Core'],
  },

  principles: [
    { title: 'Data Integrity First', description: 'Making sure data stays valid and consistent at every layer of the system.' },
    { title: 'Problem Solving Mindset', description: 'Going after the real root cause, not just patching surface symptoms.' },
    { title: 'Efficiency & Performance', description: 'Writing queries and code that perform well without wasting resources.' },
    { title: 'Stability Over Complexity', description: 'Favoring systems that stay stable and easy to maintain over the long run.' },
  ],

  contact: {
    ...profile.contact,
    location: 'Surabaya, East Java',
    cta: 'Open to conversations about .NET backends, Oracle Database, and data processing systems.',
  },
};
