---
title: Data Validation & Monitoring
slug: data-validation-monitoring
category: Database
summary: Deteksi missing data, perbandingan antar tabel, dan identifikasi anomali data secara otomatis.
role: Backend Developer # TODO: verifikasi
period: 2025 – sekarang # TODO: verifikasi
status: live # TODO: verifikasi
featured: false
order: 4
tech:
  - Oracle SQL
  - PL/SQL
  - CTE
  - C#
highlights:
  - Deteksi missing data
  - Perbandingan antar tabel
  - Identifikasi anomali data otomatis
  - Query deteksi data tidak sinkron antar tabel
---

## Latar Belakang / Masalah

Ketika data mengalir lewat banyak sistem, selalu ada risiko data hilang, tidak sinkron antar tabel, atau berisi nilai yang tidak wajar. Masalah ini harus ditemukan sebelum berdampak ke laporan dan dashboard.

## Solusi & Arsitektur

- Query Oracle (CTE, join, anti-join) untuk:
  - menemukan baris yang ada di satu tabel tetapi tidak ada di tabel lain,
  - membandingkan isi antar tabel,
  - menandai data yang anomali.
- Validasi dan filtering untuk meningkatkan kualitas data sebelum dipakai proses lain.
- Pengecekan dijalankan otomatis. <!-- TODO: verifikasi — dijadwalkan lewat worker, job DB, atau manual? -->

## Tantangan Teknis

- Query perbandingan antar tabel besar harus tetap ringan bagi database.
- Membedakan anomali sungguhan dari data yang memang valid tetapi tidak umum. <!-- TODO: verifikasi -->
- Menelusuri akar masalah sampai ke level database dan kode aplikasi, tidak berhenti di gejala.

## Hasil / Dampak

- Data yang tidak sinkron bisa ditemukan lebih awal. <!-- TODO: verifikasi -->

<!-- TODO: tambahkan dampak terukur jika ada data resmi -->

## Yang Saya Pelajari

- Pola anti-join dan CTE untuk audit data.
- Validasi di setiap lapisan lebih murah daripada memperbaiki data setelah tersebar.
