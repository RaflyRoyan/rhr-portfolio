---
title: "Auto-Assign Task dan NPWPD Otomatis"
date: 2026-10-23
category: Backend
tech:
  - ".NET 8"
  - "EF Core"
  - "Oracle"
  - "DevExpress Reporting"
summary: "Auto-assign task lapangan berbasis wilayah dan jatah bulanan, plus penerbitan NPWPD otomatis dengan surat pengukuhan multi-kanal."
relatedProject: surabaya-tax-nextgen
---

- Monitoring Assign Task untuk semua jenis task lapangan, dengan rekap per petugas
- Auto-assign seimbang berdasarkan wilayah, jatah bulanan, dan beban kerja, plus log alasan gagal
- Reassign task yang sudah lewat masa berlaku tanpa memutus pengerjaan petugas
- NPWPD otomatis: SK dalam satu transaksi, surat pengukuhan PDF ber-QR lewat WhatsApp, email, dan notifikasi
