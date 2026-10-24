---
title: "Split & Rekon Parkir Digital QRIS"
date: 2026-06-22
category: Backend
tech:
  - "C#"
  - "EF Core"
  - "DevExtreme"
  - "Oracle"
summary: "Modul split nominal transaksi parkir QRIS dari mutasi rekening dan rekonsiliasinya per rekening wajib pajak."
relatedProject: sistem-bendahara-penerimaan
---

- Ekstraksi NOP dari deskripsi transaksi QRIS pada mutasi rekening
- Pembagian nominal per transaksi (porsi pemda dan wajib pajak) beserta rekap
- Rekonsiliasi hasil split dengan mutasi per rekening untuk melihat selisih
- Monitoring master-detail serta export Excel/PDF
