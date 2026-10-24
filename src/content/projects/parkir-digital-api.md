---
title: Parkir Digital API
slug: parkir-digital-api
category: Integration
summary: Endpoint REST untuk aplikasi mobile parkir digital - ringkasan objek pajak per UPTB, histori transaksi harian, transaksi per NOP, dan dashboard mingguan.
role: Back-end developer (.NET)
period: Mar 2026 – Jul 2026
status: live
featured: false
order: 7
tech:
  - ASP.NET Core 8 Web API
  - C#
  - JWT
  - Oracle
  - EF Core
  - LINQ
  - Swagger / Scalar
  - Serilog
highlights:
  - Endpoint ringkasan objek pajak parkir digital per UPTB
  - Histori transaksi harian dan per rentang tanggal
  - Histori transaksi kartu dan transaksi per NOP
  - Dashboard summary dan grafik mingguan untuk mobile
  - Daftar objek pajak pengawas hanya menampilkan objek parkir digital yang aktif
  - Refactor query histori menjadi async
---

## Latar Belakang / Masalah

Aplikasi mobile parkir digital perlu data ringkasan transaksi yang cepat per wilayah dan per objek pajak. <!-- TODO: verifikasi -->

Kontribusi saya di API ini adalah endpoint monitoring dan dashboard yang dikonsumsi aplikasi mobile.

## Solusi & Arsitektur

- Controller REST dengan JWT Bearer (skema terpisah untuk mobile) dan izin per rute. View-model menyusun header ringkasan dan baris detail.
- Agregasi transaksi per tanggal dan per NOP memakai LINQ `GroupBy` di atas domain library bersama.
- Endpoint histori harian dipisah dari endpoint rentang tanggal, lalu diubah menjadi async.
- Dokumentasi API dengan Swagger dan Scalar, logging dengan Serilog.

## Tantangan Teknis

- **Agregasi data transaksi:** ringkasan per UPTB, NOP, dan tanggal disusun dari data transaksi perangkat dan kartu.
- **Respons cepat untuk mobile:** konversi ke async dan pemisahan endpoint harian dari endpoint rentang tanggal. <!-- TODO: verifikasi volume data -->

## Hasil / Dampak

- API sudah live dan dipakai aplikasi mobile parkir digital.

<!-- TODO: verifikasi — tambahkan dampak terukur -->

## Yang Saya Pelajari

<!-- TODO: verifikasi -->
