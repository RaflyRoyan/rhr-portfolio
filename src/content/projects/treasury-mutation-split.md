---
title: Bendahara — Split Mutasi Rekening
slug: treasury-mutation-split
category: Backend
summary: Pemecahan mutasi rekening bank kredit/debit dan rekonsiliasi status transfer per objek pajak.
role: Backend Developer # TODO: verifikasi
period: Sep 2026 # TODO: verifikasi (diambil dari tanggal update di situs lama)
status: live # TODO: verifikasi
featured: false
order: 3
tech:
  - C#
  - .NET
  - EF Core
  - Oracle
highlights:
  - Split mutasi kredit & debit per periode
  - Pemetaan rekening ke objek pajak (NOP & jenis pajak)
  - Perhitungan total mutasi
  - Update status transfer
---

## Latar Belakang / Masalah

Modul Bendahara menerima mutasi rekening bank (kredit dan debit). Mutasi ini harus dipecah dan dicocokkan ke objek pajak yang benar sebelum status transfernya bisa diperbarui. Satu mutasi bisa berkaitan dengan lebih dari satu objek pajak atau jenis pajak. <!-- TODO: verifikasi -->

## Solusi & Arsitektur

- Logika split ditulis di library backend modul Bendahara (C#, EF Core).
- Alur kerja:
  1. Mengambil mutasi per periode.
  2. Memetakan rekening ke objek pajak berdasarkan NOP dan jenis pajak.
  3. Menghitung total mutasi.
  4. Memperbarui status transfer.
- Proses dijalankan dalam transaksi database agar hasil split dan update status konsisten. <!-- TODO: verifikasi -->

## Tantangan Teknis

- Menjaga akurasi angka: total hasil split harus sama dengan total mutasi asal.
- Menangani relasi parent-child (mutasi induk dan baris pecahannya) tanpa data yatim atau ganda. <!-- TODO: verifikasi -->
- Menghindari query per baris (N+1) saat memproses mutasi dalam jumlah besar.

## Hasil / Dampak

- Status transfer per objek pajak bisa direkonsiliasi langsung dari data mutasi bank. <!-- TODO: verifikasi -->

<!-- TODO: tambahkan dampak terukur jika ada data resmi -->

## Yang Saya Pelajari

- Pentingnya invarian data keuangan, misalnya total sebelum dan sesudah split harus sama, dan cara memvalidasinya di kode.
- Pola EF Core untuk operasi batch yang tetap aman secara transaksi.
