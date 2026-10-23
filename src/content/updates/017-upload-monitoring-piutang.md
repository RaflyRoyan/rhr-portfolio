---
title: "Upload & Monitoring Piutang — MonPD V2"
date: 2026-10-19
category: Backend
tech:
  - "ASP.NET Core MVC"
  - "Oracle"
summary: "Upload data piutang per tahun buku termasuk Reklame, penanda otomatis untuk NOP yang tidak ditemukan, dan kolom tahun berjalan di monitoring piutang."
relatedProject: monpd
---

- Upload ulang piutang menghapus data per tahun buku terlebih dahulu sehingga tidak terjadi duplikasi
- Dukungan data piutang Reklame
- Kolom objek pajak diisi "-" bila NOP tidak ditemukan, sehingga baris tetap bisa ditelusuri
- Monitoring piutang menampilkan tahun berjalan sampai bulan lalu
