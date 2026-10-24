---
title: LandingPage Reklame
slug: portal-layanan-reklame
category: Backend
summary: Portal online permohonan pajak reklame Surabaya (web dan API mobile) untuk pengajuan permanen/insidentil, unggah dokumen, monitoring proses, kalkulator pajak, dan verifikasi email OTP.
role: Full-stack developer (.NET), inisiator project
period: Nov 2025 – Jun 2026
status: archived
featured: false
order: 8
tech:
  - ASP.NET Core 8 MVC
  - C#
  - Oracle
  - EF Core
  - Dapper
  - DevExtreme
  - DevExpress Reporting
  - jQuery
  - Bootstrap 5
  - JWT
highlights:
  - Menginisiasi project dari awal (struktur, login, layout, reporting)
  - Form permohonan reklame permanen dan insidentil multi-bagian dengan unggah dokumen
  - Monitoring status proses permohonan per tahapan
  - Cetak SKPD/SSPD insidentil dan slip VA dengan DevExpress Reports
  - Kalkulator pajak reklame permanen untuk aset pemkot
  - Verifikasi dan ganti email berbasis OTP
  - Endpoint REST (JWT) untuk aplikasi mobile reklame - kalkulator dan monitoring permohonan
---

## Latar Belakang / Masalah

Pemohon reklame perlu mengajukan izin dan pajak reklame, melengkapi dokumen, dan memantau proses tanpa datang ke kantor. <!-- TODO: verifikasi -->

## Solusi & Arsitektur

- ASP.NET Core 8 MVC dengan controller per domain (permohonan, objek reklame, kalkulator, verifikasi email) dan view-model terpisah.
- Landing page publik plus area login pemohon dengan layout khusus portal reklame.
- Logika permohonan, monitoring layanan, dan kalkulator ada di library domain bersama, sehingga dipakai juga oleh aplikasi internal dan API.
- Partial view untuk tiap bagian form (info, form reklame, jumlah titik, unggah dokumen) dan modal detail proses.
- Laporan DevExpress untuk dokumen pajak; YARP untuk meneruskan rute streaming ke layanan internal.
- API REST terpisah (JWT + Swagger) untuk aplikasi mobile reklame memakai class kalkulator dan permohonan yang sama, sehingga hasil hitung web dan mobile konsisten.

## Tantangan Teknis

- **Form permohonan kompleks:** banyak lookup bertingkat (kecamatan ke kelurahan, jenis reklame ke produk dan letak) dan unggah dokumen dalam satu alur.
- **Monitoring proses lintas jenis permohonan:** detail tahapan berbeda untuk permanen dan insidentil, digabung dalam satu halaman monitoring.
- **Kalkulator aset pemkot:** model perhitungan melewati banyak iterasi perbaikan. <!-- TODO: verifikasi detail aturan tarif -->

## Hasil / Dampak

- Project sudah diarsipkan. Fitur cetak SKPD/SSPD dan pembuatan VA dipindahkan ke aplikasi lain.

<!-- TODO: verifikasi — alasan diarsipkan dan dampak terukur -->

## Yang Saya Pelajari

<!-- TODO: verifikasi -->
