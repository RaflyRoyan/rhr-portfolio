---
title: "Worker CCTV Parkir Multi-Vendor"
date: 2026-02-23
category: Backend
tech:
  - ".NET 8 Worker Service"
  - "REST API"
  - "WinForms"
  - "Oracle"
summary: "Membangun worker yang menarik data kendaraan dan event CCTV parkir dari dua vendor secara paralel, plus tool desktop pendukung."
relatedProject: monpd-background-service
---

- Penarikan data rekap, event realtime, dan gambar dari dua vendor CCTV.
- Pemrosesan paralel per objek parkir dengan retry dan backoff.
- Token API vendor diperbarui otomatis.
- Tool desktop untuk status kamera, sinkronisasi, dan penarikan history manual.
