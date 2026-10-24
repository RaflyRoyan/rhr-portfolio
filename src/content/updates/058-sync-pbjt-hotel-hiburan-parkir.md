---
title: "Sync PBJT Hotel, Hiburan, dan Parkir"
date: 2026-10-14
category: Database
tech:
  - ".NET 8"
  - "Dapper"
  - "EF Core"
  - "Oracle SQL"
summary: "Sinkronisasi objek pajak, ketetapan, dan realisasi untuk PBJT perhotelan, kesenian/hiburan, dan parkir dari database sumber ke database monitoring."
relatedProject: monpdsync
---

- Tiga worker baru dengan alur OP, ketetapan, lalu realisasi per tahun
- Query sumber lintas database link dengan deduplikasi `ROW_NUMBER()` dan hint `DRIVING_SITE`
- Pemetaan kategori usaha (kelas hotel, jenis hiburan, dan lainnya) ke ID kategori internal
- Penanganan data tidak lengkap: OP penampung per wilayah, ketetapan otomatis dari realisasi, dan tanggal tutup OP dari ketetapan terakhir
