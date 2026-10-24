---
title: "API Mobile Survey & Laporan Pegawai"
date: 2026-10-21
category: Backend
tech:
  - "ASP.NET Core Web API"
  - "SignalR"
  - "JWT"
  - "Rate Limiting"
summary: "API untuk aplikasi petugas: survey reklame berfoto, laporan harian pegawai, profil, dan push pengaturan realtime lewat SignalR."
relatedProject: surabaya-tax-nextgen
---

- Survey reklame: form, simpan hasil, foto per sisi, riwayat, dan laporan PDF
- Laporan harian pegawai: roster, check-in/out berfoto, dan pertanyaan per kategori
- Profil petugas: ganti foto dan verifikasi kontak lewat OTP
- Rate limiting per user dan middleware jalur publik
- Hosted service + SignalR hub untuk push perubahan radius survey
