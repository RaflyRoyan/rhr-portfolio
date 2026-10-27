// Terjemahan bahasa Inggris untuk judul dan ringkasan update, dengan key = nama file di src/content/updates (tanpa .md).
// Update yang tidak ada di sini tampil dalam bahasa Indonesia.

export const updatesEn: Record<string, { title: string; summary: string }> = {
  '002-dashboard-kontrol-pbb': {
    title: 'PBB Control Dashboard & Payment Counters',
    summary:
      'Property tax (PBB) target vs realization, per-area control, taxpayer segmentation, top 10 arrears, officer performance, plus dashboards for counter distribution and service performance.',
  },
  '003-tracking-permohonan': {
    title: 'Application Tracking Dashboard',
    summary: 'Tracks application stages: submission → document verification → payment → final approval.',
  },
  '005-form-permohonan-reklame': {
    title: 'Billboard Tax Application Form',
    summary: 'Prototype of the billboard tax application flow, including the upload status of required documents.',
  },
  '008-kelurahan-finder': {
    title: 'Kelurahan Finder',
    summary:
      'A tool that looks up urban villages (kelurahan) from lat/long coordinates in bulk via OpenStreetMap reverse geocoding, with caching, retries, and Excel file processing.',
  },
  '009-ketetapan-reklame-va': {
    title: 'Billboard Tax Assessments & Virtual Accounts',
    summary: 'A per-taxpayer list of billboard tax assessments with an action to create a Virtual Account straight from the table via AJAX.',
  },
  '010-split-mutasi-bendahara': {
    title: 'Bank Statement Split — Treasury Module',
    summary:
      'Logic for splitting bank statement entries (credit & debit) per period, mapping accounts to tax objects, totaling the entries, and updating transfer status.',
  },
  '011-performance-database': {
    title: 'Performance & Database',
    summary: 'Oracle query optimization, lower database and memory load, and moving heavy processes to batch/async.',
  },
  '012-desktop-migrasi': {
    title: 'Data Migration — DesktopMigrasi',
    summary: 'A C# WinForms app for migrating historical billboard data, including survey photos. In progress.',
  },
  '019-va-qris-massal-reklame': {
    title: 'Bulk VA/QRIS for Billboard Billing',
    summary: 'Creating Virtual Accounts and QRIS codes for several billboard tax assessments at once in the billing module.',
  },
  '020-gate-safety-security': {
    title: 'Gate Safety & Security — Refactor to a Shared Library',
    summary:
      'Ported the master data, registration, online induction, work permit, and violation modules to the shared library pattern, an API with JWT login, and a DevExtreme-based induction frontend.',
  },
  '021-landing-page-berita': {
    title: 'Landing Page & News Portal',
    summary:
      'A landing page with news, an activity gallery, a document archive, testimonials, a contact form, and visit reservations, using Netlify Functions with Google Sheets & Drive as storage.',
  },
  '022-fondasi-web-monitoring-realisasi': {
    title: 'Web Foundation & Realization Monitoring',
    summary: 'Built the foundation of MonPD Reborn V2: session-based login, a dashboard, regional tax realization monitoring, and the first billboard module.',
  },
  '023-worker-sinkronisasi-reklame': {
    title: 'Billboard Sync Worker',
    summary: 'Built the first worker service that syncs billboard tax assessments and realization on a schedule, with a daily summary email.',
  },
  '024-api-data-untuk-sistem-lain': {
    title: 'Data API for Other Systems',
    summary: 'Authenticated API endpoints for sharing tax realization, data cards, and billing data with other systems.',
  },
  '025-worker-cctv-parkir-multi-vendor': {
    title: 'Multi-Vendor Parking CCTV Worker',
    summary: 'Built a worker that pulls vehicle and parking CCTV event data from two vendors in parallel, plus a supporting desktop tool.',
  },
  '026-data-objek-pajak-laporan-strategis': {
    title: 'Tax Object Data & Strategic Reports',
    summary: 'Added full tax object profiles, strategic reports, revenue monitoring per city department (OPD), and data uploads from Excel.',
  },
  '027-worker-sinkronisasi-pajak-daerah': {
    title: 'Regional Tax Sync Workers',
    summary: 'Added sync workers for Opsen, Restaurant, Recording Devices, BPHTB, and Hotel taxes so dashboards use up-to-date tax data.',
  },
  '028-pendataan-perpanjangan-reklame': {
    title: 'Billboard Registration & Renewals',
    summary: 'Added billboard registration and monitoring of billboard permit renewals, with summaries.',
  },
  '029-dashboard-parkir-digital-realtime': {
    title: 'Real-Time Digital Parking Dashboard',
    summary: 'Built a digital parking dashboard that receives new transactions live via Server-Sent Events without reloading the page.',
  },
  '030-dashboard-pendapatan-monitoring-pbjt': {
    title: 'Revenue Dashboard & PBJT Monitoring',
    summary: 'Built a per-department Revenue Dashboard and PBJT Monitoring to see the payment status of tax objects per tax period.',
  },
  '031-worker-data-pendukung-himbauan': {
    title: 'Supporting Data & Reminder Letter Workers',
    summary: 'Added a worker for supporting tax object data and a worker that generates and sends filing reminder letters as PDFs.',
  },
  '032-monitoring-worker-sesi-pengguna': {
    title: 'Worker & User Session Monitoring',
    summary: 'Added a worker service status page plus middleware that tracks user activity and online sessions.',
  },
  '033-pengawasan-pbb-laporan-reklame': {
    title: 'PBB Oversight & Billboard Reports',
    summary: 'Added a property tax (PBB) oversight module plus PDF reports for SSPD, Jambong, and billboard surveys.',
  },
  '034-status-worker-terpusat': {
    title: 'Centralized Worker Status',
    summary: 'Unified status and error logging across all workers and added workers for revenue realization and daily targets.',
  },
  '035-pengawasan-parkir-digital-api': {
    title: 'Digital Parking Oversight & API',
    summary: 'Added digital parking and officer oversight per department, a dedicated login for non-Bapenda users, and the Digital Parking API project.',
  },
  '036-dana-transfer-skor-pengawasan': {
    title: 'Transfer Funds & Oversight Scores',
    summary: 'Added monitoring for transfer funds, split PBB transactions, and a recap of parking oversight scores.',
  },
  '037-rincian-pendapatan-peta-spasial': {
    title: 'Revenue Breakdown & Spatial Map',
    summary: 'Added a drill-down of regional revenue details and a map of tax object locations.',
  },
  '038-mobile-api-dengan-jwt': {
    title: 'Mobile API with JWT',
    summary: 'Built a REST API for the Flutter mobile app: JWT login with refresh tokens, dashboards, worker status, and access rights.',
  },
  '039-dashboard-interaktif-skrip-bersama': {
    title: 'Interactive Dashboards & Shared Scripts',
    summary: 'Cleaned up the dashboards with shared scripts (lazy-loaded cards, auto-refresh, number animations) and added the Interactive PBJT Dashboard.',
  },
  '040-permohonan-monitoring-reklame-online': {
    title: 'Online Billboard Applications & Monitoring',
    summary: 'A portal for permanent and temporary billboard applications with document uploads, process monitoring, and SKPD/SSPD printing.',
  },
  '041-kalkulator-reklame-aset-pemkot': {
    title: 'Billboard Calculator for City Assets',
    summary: "A permanent billboard tax calculator for city-owned assets and a history page of the applicant's billboard objects.",
  },
  '042-verifikasi-email-otp': {
    title: 'OTP Email Verification & Change',
    summary: 'OTP-based email verification and email change for billboard portal accounts.',
  },
  '043-monitoring-transaksi-parkir-wp': {
    title: 'Digital Parking Transactions for Taxpayers',
    summary: 'A page where taxpayers monitor digital parking transactions per tax object over a date range.',
  },
  '044-pencarian-objek-reklame-foto-survei': {
    title: 'Billboard Object Search & Survey Photos',
    summary: 'A back-office page to search billboard objects and view their details and field survey photos.',
  },
  '045-endpoint-monitoring-parkir-digital': {
    title: 'Digital Parking Monitoring Endpoints',
    summary: 'REST endpoints for digital parking transaction summaries and history for the mobile app.',
  },
  '046-endpoint-api-reklame-mobile': {
    title: 'Billboard Mobile API Endpoints',
    summary: 'REST endpoints for the billboard mobile app: tax calculation by form number and application status monitoring.',
  },
  '047-rekonsiliasi-mutasi-parkir-digital': {
    title: 'Digital Parking Statement Reconciliation',
    summary: 'A bank statement split domain and a page that reconciles digital parking receipts into SSPD payment records.',
  },
  '048-portal-petugas-bap-reklame': {
    title: 'Officer Portal & Billboard Inspection Reports',
    summary: 'A Supervisor portal for field officers: entering temporary billboard inspection reports (BAP) with automatic tax calculation and sticker printing.',
  },
  '049-penagihan-tunggakan-multi-bayar': {
    title: 'Billing & Multi-Period Arrears Payment',
    summary: 'Monitoring of tax objects and billing, plus paying arrears for several periods at once via VA or QRIS.',
  },
  '050-monitoring-pelunasan-bap-realtime': {
    title: 'Real-Time Inspection Report Settlement',
    summary: 'Billboard inspection report monitoring with real-time settlement checks via SSE, report cancellation, and linking to official assessments.',
  },
  '051-verifikasi-bendahara-nota-dinas': {
    title: 'Treasurer Verification & Official Memos',
    summary: 'Built the official memo request flow, revenue treasurer verification, and monitoring with SPP/SPTB printing.',
  },
  '052-split-rekon-parkir-digital-qris': {
    title: 'Digital Parking QRIS Split & Reconciliation',
    summary: 'A module that splits QRIS parking transaction amounts out of bank statements and reconciles them per taxpayer account.',
  },
  '053-stiker-bap-reklame-ops': {
    title: 'OPS Billboard Stickers & Inspection Reports',
    summary: 'A module for billboard inspection reports from field operations, sticker management, and creating Virtual Accounts for payment.',
  },
  '054-monitoring-pembayaran-ops-reklame': {
    title: 'OPS Billboard Payment Monitoring',
    summary: 'A billboard inspection report monitoring page with VA/QRIS payment status checks and cancellation.',
  },
  '055-integrasi-api-realisasi-pendapatan': {
    title: 'Regional Revenue Realization API Integration',
    summary:
      'A worker that pulls regional revenue realization from a REST API, aggregates it per department and account, then prepares annual, monthly, and daily targets automatically.',
  },
  '056-kerangka-worker-sinkronisasi': {
    title: 'Regional Tax Sync Worker Framework',
    summary:
      'Built an event-based scheduled base worker with a WinForms dashboard, then implemented syncing of tax objects, assessments, and realization for food & beverage PBJT.',
  },
  '057-penjadwalan-harian-safeguard-sync': {
    title: 'Daily Scheduling & Sync Safeguards',
    summary: 'A fixed-time daily schedule mode in the base worker and transactional replacement of realization data, so old data stays safe when the source fails.',
  },
  '058-sync-pbjt-hotel-hiburan-parkir': {
    title: 'Hotel, Entertainment & Parking PBJT Sync',
    summary: 'Syncing tax objects, assessments, and realization for hotel, arts/entertainment, and parking PBJT from source databases to the monitoring database.',
  },
  '059-tool-migrasi-data-reklame': {
    title: 'Oracle Billboard Data Migration Tool',
    summary: 'A WinForms tool that migrates taxpayers, objects, applications, SKPD, and SSPD from legacy Oracle to the new schema, with per-row error logs.',
  },
  '060-migrasi-foto-survey-blob': {
    title: 'BLOB Survey Photo Migration',
    summary: 'Moving billboard survey photos year by year in small batches, checking for duplicates before pulling the BLOB, and logging skipped photos.',
  },
  '061-runner-migrasi-bertahap-v2': {
    title: 'Staged Migration Runner v2',
    summary:
      'An idempotent sequential migration runner with connection retries, plus stages for research tasks and application documents so workflows can continue in the new app.',
  },
  '062-shell-ui-back-office-gss': {
    title: 'Gate Safety Back-Office UI Shell',
    summary: 'Built the back-office web UI skeleton: an admin template layout, shared header/navbar/modal components, and a login page.',
  },
  '063-clone-ui-modul-legacy': {
    title: 'Cloning the UI of 6 Legacy Modules',
    summary: 'Migrated the User Management, API Management, Violation, Induction Online, PAN Monitoring, and Card Design UIs from the legacy app to .NET 10.',
  },
  '064-portal-peserta-induksi-k3': {
    title: 'Safety Induction Participant Portal',
    summary: 'A new web app for occupational safety (K3) induction participants: registration, registration lookup, work permits, and help, built on the back-office base.',
  },
  '065-integrasi-master-rest-api': {
    title: 'Master Data on the REST API',
    summary: 'Connected 15 master data pages to the JWT-secured REST API through a typed HttpClient and per-resource services, plus a corporate theme.',
  },
  '066-login-api-jwt-ganti-password': {
    title: 'JWT API Login & Password Change',
    summary: 'Moved back-office web login to the REST API: the JWT is kept in the session (BFF pattern), a mandatory password change flow, and rate limit handling.',
  },
  '067-fondasi-back-office-master-data': {
    title: 'Back-Office Foundation & Master Data',
    summary: 'Built master data CRUD, users/roles, and dynamic menus as the foundation of the regional tax back office.',
  },
  '068-api-air-tanah-wajib-pajak': {
    title: 'Groundwater Tax API for Taxpayers',
    summary: 'Endpoints for groundwater tax summaries, tax object details, and assessments, including SKPD PDF printing for the taxpayer app.',
  },
  '069-workflow-approval-mytask': {
    title: 'MyTask Approval Workflow for Billboards & NPWPD',
    summary: 'A multi-level approval inbox for billboard and NPWPD (taxpayer ID) applications, from verification to issuing the decree.',
  },
  '070-master-kawasan-pengawasan-temuan': {
    title: 'Zone Master Data & Findings Oversight',
    summary: 'History and combined data for billboard zones, billboard type photos, and a page for overseeing field findings.',
  },
  '071-api-mobile-survey-laporan-pegawai': {
    title: 'Mobile API for Surveys & Staff Reports',
    summary: 'An API for the officer app: billboard surveys with photos, daily staff reports, profiles, and real-time settings pushed via SignalR.',
  },
  '072-auto-assign-task-npwpd-otomatis': {
    title: 'Task Auto-Assignment & Automatic NPWPD',
    summary: 'Auto-assignment of field tasks by area and monthly quota, plus automatic NPWPD (taxpayer ID) issuance with multi-channel confirmation letters.',
  },
};
