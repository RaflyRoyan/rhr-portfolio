---
title: "Data Migration — DesktopMigrasi"
date: 2026-10-01 # TODO: verifikasi tanggal (situs lama hanya mencantumkan bulan)
category: Database
tech:
  - "C# WinForms"
  - "Dapper"
  - "EF Core"
  - "Oracle"
summary: "Aplikasi C# WinForms untuk migrasi data reklame historis, termasuk foto survey. Sedang berjalan."
relatedProject: data-migration-system
---

- Migrasi data reklame historis: Permohonan, NOR, NLOR, Survey, Survey Terbatas, SKPD, Realisasi, dan Foto Survey
- Menggunakan Dapper + EF Core + Oracle
- Menerapkan batch processing, async, parallel processing, progress monitoring, dan logging
- Fokus mengatasi masalah performa seperti ORA-01000 open cursors, timeout, EF tracking, dan penggunaan memory
- Baru-baru ini fokus khusus pada migrasi Foto Survey dari Oracle ke database target
