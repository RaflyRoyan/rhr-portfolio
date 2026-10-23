---
title: Backend Worker Services
slug: backend-worker-services
category: Backend
summary: Pull data terjadwal dari sumber eksternal, pemrosesan batch, dan penyimpanan aman ke production.
role: Backend Developer # TODO: verifikasi
period: 2025 – sekarang # TODO: verifikasi
status: live # TODO: verifikasi
featured: false
order: 6
tech:
  - C#
  - .NET Background Services
  - EF Core
  - Oracle
highlights:
  - Pull data terjadwal dari sumber eksternal
  - Pemrosesan batch
  - Penyimpanan aman ke production
  - Worker untuk sinkronisasi data, ketetapan, realisasi, dan NPWPD
---

## Latar Belakang / Masalah

Beberapa proses harus berjalan rutin tanpa campur tangan manual, misalnya sinkronisasi data, ketetapan, realisasi, dan NPWPD. Proses ini menulis langsung ke database production, jadi harus aman dan bisa dipantau.

## Solusi & Arsitektur

- Worker berbasis .NET Background Services yang berjalan terjadwal.
- Setiap worker menarik data dari sumber eksternal, memprosesnya per batch, lalu menyimpannya ke production.
- Proses yang berat dibuat batch/async agar tidak membebani database dan memory aplikasi.

<!-- TODO: verifikasi — cara deploy/hosting worker (Windows Service, container, dsb.) -->

## Tantangan Teknis

- Menulis ke production dengan aman: perlu validasi sebelum menulis dan penanganan kegagalan di tengah batch. <!-- TODO: verifikasi -->
- Menghindari query berulang per baris (N+1).
- Menangani error Oracle dan EF Core yang muncul saat memproses data besar.

## Hasil / Dampak

- Proses sinkronisasi, ketetapan, realisasi, dan NPWPD berjalan otomatis sesuai jadwal. <!-- TODO: verifikasi -->

<!-- TODO: tambahkan dampak terukur jika ada data resmi -->

## Yang Saya Pelajari

- Desain worker yang tahan gagal: retry, logging, dan dapat dijalankan ulang. <!-- TODO: verifikasi -->
- Mengatur ukuran batch dan siklus hidup EF Core context untuk proses jangka panjang. <!-- TODO: verifikasi -->
