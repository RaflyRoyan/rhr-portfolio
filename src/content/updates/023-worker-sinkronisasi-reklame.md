---
title: "Worker Sinkronisasi Reklame"
date: 2026-01-31
category: Backend
tech:
  - ".NET 8 Worker Service"
  - "Entity Framework Core"
  - "Oracle"
  - "SMTP Email"
summary: "Membangun worker service pertama untuk menyinkronkan ketetapan dan realisasi reklame secara terjadwal, dengan email ringkasan harian."
relatedProject: monpd-background-service
---

- Sinkronisasi ketetapan dan realisasi reklame per tahun buku.
- Upsert dalam transaksi dengan rollback saat gagal.
- Log progres dan jumlah insert/update/delete setiap run.
- Email ringkasan run harian.
