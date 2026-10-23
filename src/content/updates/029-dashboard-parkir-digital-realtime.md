---
title: "Dashboard Parkir Digital Realtime"
date: 2026-04-28
category: Backend
tech:
  - "Server-Sent Events"
  - "ASP.NET Core"
  - "ApexCharts"
  - "jQuery"
summary: "Membangun dashboard parkir digital yang menerima transaksi baru secara live lewat Server-Sent Events tanpa memuat ulang halaman."
relatedProject: monpd
---

- Endpoint SSE yang hanya mengirim payload saat ada transaksi baru (watermark waktu transaksi terakhir).
- Grafik kendaraan per jam, analisis, dan rekap pembayaran yang ikut diperbarui otomatis.
- Koneksi ditutup dengan benar lewat cancellation token saat pengguna meninggalkan halaman.
