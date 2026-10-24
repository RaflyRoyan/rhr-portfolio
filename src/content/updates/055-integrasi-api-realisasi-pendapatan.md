---
title: "Integrasi API Realisasi Pendapatan Daerah"
date: 2026-09-29
category: Backend
tech:
  - ".NET 8"
  - "HttpClient"
  - "EF Core"
  - "Oracle"
summary: "Worker yang menarik realisasi pendapatan daerah dari REST API, mengagregasi per OPD dan akun, lalu menyiapkan target tahunan, bulanan, dan harian secara otomatis."
relatedProject: monpdsync
---

- Tarik data dari REST API dengan Basic Auth, timeout 5 menit, serta retry 5x dengan backoff
- Agregasi realisasi per OPD, sub-rincian akun, dan tanggal, serta normalisasi kode/nama OPD dengan regex
- Ganti data tahun berjalan dengan delete + insert dalam satu transaksi
- Generate otomatis baris target tahunan, 12 bulan, dan per tanggal untuk kombinasi akun/OPD baru (idempoten)
