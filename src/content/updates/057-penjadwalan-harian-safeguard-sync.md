---
title: "Penjadwalan Harian dan Safeguard Sinkronisasi"
date: 2026-10-13
category: Backend
tech:
  - ".NET 8"
  - "System.Threading.Timer"
  - "EF Core"
  - "Oracle"
summary: "Mode jadwal jam tetap harian di base worker dan penggantian data realisasi yang transaksional, sehingga data lama aman bila sumber gagal."
relatedProject: monpdsync
---

- Mode jadwal harian dengan timer one-shot yang dipasang ulang dan proteksi agar tidak jalan dua kali
- Delete + insert realisasi dalam satu transaksi; delete baru dijalankan setelah batch sumber pertama berhasil
- Worker API melewati delete bila respons kosong atau gagal
- Jadwal berikutnya tercatat di status worker
