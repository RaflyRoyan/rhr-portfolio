---
title: "Monitoring Pelunasan BAP Real-Time"
date: 2026-09-29
category: Backend
tech:
  - "Server-Sent Events"
  - "ASP.NET Core"
  - "Dapper"
  - "EF Core"
summary: "Monitoring BAP reklame dengan cek pelunasan real-time lewat SSE, pembatalan BAP, dan penautan ke ketetapan resmi."
relatedProject: surabayatax-wp-portal
---

- Endpoint SSE yang memeriksa BAP belum lunas dan mengirim event saat terbayar
- Verifikasi NIK ke API kependudukan dan pembuatan NPWPD dari BAP
- Pembatalan BAP dan stiker dengan data batal terpisah
- Penautan BAP ke nomor ketetapan dalam satu transaksi database
- Cetak SKPD/SSPD dari halaman monitoring
