---
title: Data Migration System
slug: data-migration-system
category: Migration
summary: Migrasi data historis dalam jumlah besar menggunakan Dapper, EF Core, dan Oracle.
role: Backend Developer # TODO: verifikasi
period: Okt 2026 – sekarang # TODO: verifikasi (tanggal mulai)
status: in-progress
featured: false
order: 7
tech:
  - C# WinForms
  - Dapper
  - EF Core
  - Oracle
highlights:
  - Batch processing
  - Parallel processing
  - Progress monitoring
  - Logging
  - Aplikasi desktop DesktopMigrasi (C# WinForms), sedang berjalan
  - Data reklame historis termasuk foto survey
---

## Latar Belakang / Masalah

Data reklame historis perlu dipindahkan ke database target. Data ini mencakup Permohonan, NOR, NLOR, Survey, Survey Terbatas, SKPD, Realisasi, dan Foto Survey. Volumenya besar, dan sebagian berupa data biner (foto). Karena itu migrasi tidak bisa dikerjakan dengan satu query sederhana.

## Solusi & Arsitektur

- Aplikasi desktop **DesktopMigrasi** dibangun dengan C# WinForms.
- Pembagian akses data:
  - Dapper untuk baca dan tulis massal yang cepat. <!-- TODO: verifikasi pembagian Dapper vs EF Core -->
  - EF Core untuk bagian yang butuh model entitas.
- Teknik pemrosesan: batch processing, async, dan parallel processing.
- Progress monitoring di UI dan logging per tahap, sehingga migrasi bisa dipantau dan ditelusuri jika gagal.
- Fokus terbaru adalah migrasi Foto Survey dari Oracle ke database target.

<!-- TODO: verifikasi diagram — alur disederhanakan dari deskripsi -->

```mermaid
flowchart LR
  SRC[("Oracle sumber<br/>data reklame historis")]
  APP["DesktopMigrasi<br/>C# WinForms"]
  DST[("Database target")]
  LOG["Progress & log"]
  SRC -->|"baca per batch"| APP
  APP -->|"Dapper + EF Core<br/>async, paralel"| DST
  APP --> LOG
```

## Tantangan Teknis

- **ORA-01000 (maximum open cursors exceeded):** muncul saat banyak operasi berjalan bersamaan. Penanganannya lewat pengelolaan siklus hidup koneksi dan command. <!-- TODO: verifikasi solusi persisnya -->
- **Timeout** pada query dan transfer data besar.
- **EF change tracking** yang membuat memory membengkak pada batch besar.
- **Penggunaan memory** saat memindahkan data biner foto survey.

## Hasil / Dampak

- Proyek masih berjalan. <!-- TODO: isi hasil setelah migrasi selesai (tanpa angka perkiraan) -->

## Yang Saya Pelajari

- Batas sumber daya Oracle (cursor, koneksi) menjadi nyata saat paralelisme dinaikkan.
- Kapan memakai Dapper dan kapan memakai EF Core untuk beban kerja massal. <!-- TODO: verifikasi -->
- Progress monitoring dan logging adalah syarat migrasi yang bisa dipercaya, bukan fitur tambahan.
