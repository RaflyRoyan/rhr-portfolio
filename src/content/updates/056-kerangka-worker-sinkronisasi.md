---
title: "Kerangka Worker Sinkronisasi Pajak Daerah"
date: 2026-09-30
category: Backend
tech:
  - ".NET 8"
  - "Windows Forms"
  - "Dapper"
  - "EF Core"
summary: "Membangun base worker terjadwal berbasis event beserta dashboard WinForms, lalu mengimplementasikan sinkronisasi OP, ketetapan, dan realisasi PBJT makanan/minuman."
relatedProject: monpdsync
---

- Base worker abstrak: tahapan berurutan, timer interval, lock anti-overlap, cancellation, dan event status/tahap/log
- Dashboard WinForms: card per worker, progress tahap, log, Start/Stop, dan sidebar indikator status
- Sync PBJT makanan/minuman: paging `ROWNUM` 5.000 baris, upsert EF Core dengan chunk 900 kunci, dan loop per tahun
- Kerangka 10 worker jenis pajak lain beserta pencatatan status ke database
