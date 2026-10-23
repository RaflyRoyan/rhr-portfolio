---
title: Reklame & Ops Temuan
slug: billboard-field-ops
category: Field Ops
summary: Pengelolaan data reklame, survey, foto survey, ketetapan, realisasi, pembayaran, dan operasi lapangan.
role: Backend Developer # TODO: verifikasi
period: 2026 – sekarang # TODO: verifikasi
status: live # TODO: verifikasi
featured: false
order: 8
tech:
  - ASP.NET Core MVC
  - C#
  - Oracle
  - SSE
  - VA / QRIS
  - Payment callback
  - DevExtreme
  - jQuery
highlights:
  - Monitoring pembayaran realtime dengan SSE
  - Pengecekan status lunas melalui callback pembayaran
  - Pembuatan VA/QRIS
  - Pengelolaan stiker dan status temuan
  - Penggabungan data survey permanen/terbatas berdasarkan NOR
---

## Latar Belakang / Masalah

Pajak reklame punya alur panjang: permohonan, survey (dengan foto), ketetapan, pembayaran, realisasi, sampai perpanjangan. Di lapangan, petugas juga mencatat temuan reklame (Ops Temuan) yang harus ditindaklanjuti dengan pembayaran dan stiker. Status pembayaran perlu diketahui secepat mungkin oleh petugas maupun sistem.

## Solusi & Arsitektur

- **Modul Reklame** di aplikasi ASP.NET Core MVC:
  - Pengelolaan ketetapan, realisasi, permohonan, survey, perpanjangan, dan foto survey.
  - Data survey permanen dan survey terbatas digabung berdasarkan NOR.
  - Pengecekan status pembayaran dan pembuatan VA/QRIS.
- **Modul Ops Temuan:**
  - Monitoring pembayaran realtime lewat Server-Sent Events (SSE).
  - Status lunas dikonfirmasi lewat callback pembayaran.
  - Pengelolaan stiker dan status temuan, termasuk pembatalan temuan.
- **Antarmuka:** modal detail dan riwayat dengan DevExtreme + jQuery. Aksi VA, QRIS, batal, dan lihat SKPD langsung dari tabel.

## Tantangan Teknis

- Memperbaiki proses pembuatan VA/QRIS untuk temuan dan alur pembatalannya.
- Menjaga status lunas tetap konsisten antara callback pembayaran dan data di database. <!-- TODO: verifikasi -->
- Memperbaiki query Oracle dan integrasi dengan database Reklame.
- Memilih SSE untuk pembaruan satu arah dari server, bukan polling. <!-- TODO: verifikasi alasan -->

## Hasil / Dampak

- Petugas bisa melihat status pembayaran temuan secara realtime tanpa refresh manual. <!-- TODO: verifikasi -->

<!-- TODO: tambahkan dampak terukur jika ada data resmi -->

## Yang Saya Pelajari

- Integrasi pembayaran berbasis callback: idempotensi, urutan event, dan sumber kebenaran status. <!-- TODO: verifikasi -->
- Kapan SSE cukup dan kapan perlu WebSocket. <!-- TODO: verifikasi -->
