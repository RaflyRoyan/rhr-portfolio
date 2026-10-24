---
title: "Integrasi Master ke REST API"
date: 2026-10-19
category: Backend
tech:
  - "ASP.NET Core"
  - "HttpClient"
  - "JWT"
  - "Node.js"
summary: "Menyambungkan 15 halaman master data ke REST API ber-JWT lewat typed HttpClient dan service per resource, plus tema korporat."
relatedProject: gate-safety-security-system
---

- Typed `HttpClient` yang membuka envelope API dan memetakan status ke exception
- `DelegatingHandler` menempelkan Bearer token dari session
- 1 DTO + 1 service per resource; lookup enum dari API di-cache 1 jam; generator enum Node.js
- Recolor tema CSS otomatis lewat script, plus sidebar dan halaman login bertema korporat
