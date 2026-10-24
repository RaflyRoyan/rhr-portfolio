---
title: "Rekonsiliasi Mutasi Parkir Digital"
date: 2026-06-29
category: Database
tech:
  - "EF Core"
  - "Oracle"
  - "ASP.NET Core MVC"
summary: "Domain split mutasi rekening dan halaman rekonsiliasi penerimaan parkir digital menjadi SSPD."
relatedProject: surabayatax-web-internal
---

- Entitas EF Core baru untuk split, mutasi, dan rekening objek parkir
- Class domain dengan filter status/tanggal dan paging
- Halaman rekap, detail mutasi, dan submit rekon ke SSPD
