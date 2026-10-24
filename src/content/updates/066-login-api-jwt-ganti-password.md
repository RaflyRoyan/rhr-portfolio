---
title: "Login API JWT dan Ganti Password"
date: 2026-10-20
category: Backend
tech:
  - "ASP.NET Core"
  - "Cookie Authentication"
  - "JWT"
  - "Session"
summary: "Login web back-office dipindah ke REST API: JWT disimpan di session (pola BFF), alur ganti password wajib, dan penanganan rate limit."
relatedProject: gate-safety-security-system
---

- Login lewat endpoint auth API; token dan data user disimpan di session server
- Login dengan reset key diarahkan ke form ganti password sebelum cookie diterbitkan
- Pesan rate limit dan error kredensial ditampilkan di form login
- Logout otomatis bila token di session tidak valid atau kedaluwarsa
