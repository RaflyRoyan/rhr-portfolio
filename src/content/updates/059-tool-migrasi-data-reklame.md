---
title: "Tool Migrasi Data Reklame Oracle"
date: 2026-09-24
category: Database
tech:
  - ".NET 8"
  - "EF Core"
  - "Dapper"
  - "Oracle"
summary: "Tool WinForms untuk migrasi wajib pajak, objek, permohonan, SKPD, dan SSPD dari Oracle legacy ke skema baru dengan log error per baris."
relatedProject: migrasi-data-pajak-reklame
---

- Pola service migrasi seragam dengan progress dan callback error
- Migrasi wajib pajak, lokasi/objek reklame, dan permohonan tiga kategori beserta detail per sisi
- Migrasi ketetapan (SKPD) 4 kategori dan realisasi pembayaran (SSPD)
- Error per baris diisolasi dan dicatat ke log; batch yang gagal diulang per baris
- Form migrasi per rentang tahun dengan pembatalan
