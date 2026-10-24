---
title: SurabayaTax BackOffice
slug: surabayatax-web-internal
category: Backend
summary: Modul back-office pegawai Bapenda untuk pencarian objek reklame beserta foto survei, konfigurasi workflow permohonan reklame, dan rekonsiliasi penerimaan parkir digital.
role: Full-stack developer (.NET)
period: Feb 2026 – Okt 2026
status: live
featured: false
order: 6
tech:
  - ASP.NET Core 7 MVC
  - C#
  - Oracle
  - EF Core
  - Dapper
  - DevExtreme
  - jQuery
highlights:
  - Pencarian objek reklame (NOR) dengan galeri foto survei lapangan
  - CRUD workflow permohonan reklame beserta aktivitas per tahap
  - Domain split mutasi rekening dan rekonsiliasi penerimaan parkir digital menjadi SSPD
  - Entitas EF Core baru untuk data split dan mutasi rekening
---

## Latar Belakang / Masalah

Pegawai Bapenda butuh alat untuk menelusuri objek reklame beserta bukti survei, mengatur alur proses permohonan, dan merekonsiliasi penerimaan parkir digital dari mutasi bank. <!-- TODO: verifikasi -->

Kontribusi saya di aplikasi ini berupa modul-modul spesifik di aplikasi back-office yang dikembangkan bersama tim.

## Solusi & Arsitektur

- Controller per domain, lalu view-model, lalu class domain di library bersama, lalu Oracle (EF Core dan Dapper).
- **Search NOR:** detail objek reklame dan galeri foto survei permohonan dalam modal.
- **Workflow Reklame:** form tambah/ubah dan grid detail aktivitas per tahap yang disimpan sekaligus.
- **Rekon Parkir Digital:** entitas EF Core baru untuk split, mutasi, detail mutasi, dan rekening objek parkir. Class domain menyediakan daftar, filter status dan tanggal, paging, serta proses rekon menjadi SSPD.

## Tantangan Teknis

- **Rekonsiliasi mutasi bank:** memetakan mutasi rekening hasil split ke objek parkir, lalu mengirimnya sebagai SSPD dengan status split yang terlacak.
- **Foto survei:** menampilkan foto survei permohonan per objek reklame dalam modal galeri. <!-- TODO: verifikasi -->

## Hasil / Dampak

- Modul sudah live dan dipakai pegawai Bapenda.

<!-- TODO: verifikasi — tambahkan dampak terukur -->

## Yang Saya Pelajari

<!-- TODO: verifikasi -->
