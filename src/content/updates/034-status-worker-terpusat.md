---
title: "Status Worker Terpusat"
date: 2026-06-27
category: Backend
tech:
  - ".NET 8 Worker Service"
  - "Entity Framework Core"
  - "Oracle"
summary: "Menyeragamkan pencatatan status dan error di semua worker serta menambah worker realisasi pendapatan dan target harian."
relatedProject: monpd-background-service
---

- Setiap worker mencatat waktu mulai, run terakhir, run berikutnya, status, dan pesan error di satu tempat.
- Data status dipakai halaman status worker dan auto-refresh dashboard di web.
- Worker Realisasi Pendapatan: sinkronisasi target dan penurunannya ke target bulanan dan harian.
