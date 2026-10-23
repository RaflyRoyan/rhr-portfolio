---
title: "Gate Safety & Security — Refactor ke Library Bersama"
date: 2026-10-20
category: Backend
tech:
  - ".NET"
  - "ASP.NET Core"
  - "JWT"
  - "DevExtreme"
summary: "Porting modul master, registrasi, induksi online, izin kerja, dan pelanggaran ke pola library bersama, API dengan login JWT, serta frontend induksi berbasis DevExtreme."
---

- Refactor modul master ke pola `BaseMaster` + `IMaster` agar seragam
- Porting modul kartu, kontak, perangkat, tamu, registrasi, induksi online, izin kerja, dan pelanggaran
- API master baru dengan login JWT, lalu halaman master di web dihubungkan ke API tersebut
- Frontend induksi berbasis DevExtreme
