---
title: "Runner Migrasi Bertahap v2"
date: 2026-10-20
category: Tools
tech:
  - ".NET 8"
  - "Windows Forms"
  - "EF Core"
  - "Oracle"
summary: "Runner migrasi berurutan yang idempoten dengan retry koneksi, plus tahap task penelitian dan dokumen permohonan agar workflow bisa berlanjut di aplikasi baru."
relatedProject: migrasi-data-pajak-reklame
---

- Form tahapan dinamis: satu baris per tahap (checkbox, progress, status), berhenti di tahap yang gagal
- Migrasi insert-only dan streaming lewat data reader, aman diulang
- Retry otomatis saat koneksi Oracle putus (bersihkan pool, 5 percobaan)
- Tahap Task Penelitian untuk permohonan yang sedang diproses
- Tahap File Dokumen sesuai master per kategori, jenis, dan letak, dengan PDF placeholder
