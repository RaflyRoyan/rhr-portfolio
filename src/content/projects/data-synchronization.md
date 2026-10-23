---
title: Data Synchronization System
slug: data-synchronization
category: Integration
summary: Sinkronisasi data multi-sumber ke sistem utama dengan validasi ketat dan monitoring data gagal sinkron.
role: Backend Developer # TODO: verifikasi
period: 2025 – sekarang # TODO: verifikasi
status: live # TODO: verifikasi
featured: true
order: 4
tech:
  - C#
  - .NET
  - Oracle
  - Database link
  - REST API
highlights:
  - Sinkronisasi multi-sumber ke sistem utama
  - Validasi ketat sebelum data masuk
  - Monitoring data gagal sinkron
  - Tanpa data hilang dan tanpa duplikasi
---

## Latar Belakang / Masalah

Data pajak berasal dari beberapa sistem berbeda dan harus masuk ke sistem utama dalam keadaan konsisten. Targetnya tidak ada data yang hilang, tidak ada duplikasi, dan isi antar tabel tetap konsisten.

## Solusi & Arsitektur

- Data ditarik dari sumber lewat REST API dan database link Oracle. <!-- TODO: verifikasi sumber mana pakai API vs dblink -->
- Data divalidasi sebelum ditulis ke sistem utama. Data yang gagal validasi atau gagal sinkron dicatat agar bisa dipantau dan diproses ulang.
- Proses sinkronisasi dijalankan oleh background worker terjadwal (lihat [Backend Worker Services](/projects/backend-worker-services)).

## Tantangan Teknis

- Mendeteksi data yang sudah ada agar tidak terjadi duplikasi, misalnya dengan anti-join atau pengecekan kunci. <!-- TODO: verifikasi -->
- Menjaga konsistensi relasi antar tabel saat sebagian data gagal.
- Menangani error database seperti precision overflow dan constraint violation dari data sumber yang tidak bersih.

## Hasil / Dampak

- Data gagal sinkron terlihat dan bisa ditindaklanjuti, tidak hilang tanpa jejak. <!-- TODO: verifikasi -->

<!-- TODO: tambahkan dampak terukur jika ada data resmi -->

## Yang Saya Pelajari

- Merancang sinkronisasi yang idempotent sehingga aman dijalankan ulang. <!-- TODO: verifikasi -->
- Logging dan monitoring sama pentingnya dengan logika sinkronisasi itu sendiri.
