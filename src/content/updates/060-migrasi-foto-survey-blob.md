---
title: "Migrasi Foto Survey BLOB"
date: 2026-09-26
category: Backend
tech:
  - ".NET 8"
  - "EF Core"
  - "Oracle BLOB"
summary: "Memindahkan foto hasil survey reklame per tahun dengan batch kecil, pengecekan duplikat sebelum BLOB ditarik, dan log foto yang dilewati."
relatedProject: migrasi-data-pajak-reklame
---

- Pembacaan dua tahap: daftar formulir dulu, lalu isi foto per chunk
- Foto yang sudah ada di tujuan dilewati sebelum BLOB ditarik
- App terpisah per tahun untuk kategori permanen dan terbatas
- Simpan per batch dengan `SemaphoreSlim`; satu batch gagal tidak menghentikan proses
