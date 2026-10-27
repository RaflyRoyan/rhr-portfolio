---
title: Billboard Landing Page
slug: portal-layanan-reklame
summary: Surabaya's online billboard tax application portal (web and mobile API) for permanent/temporary applications, document uploads, process monitoring, a tax calculator, and OTP email verification.
role: Full-stack developer (.NET), project initiator
period: Nov 2025 – Jun 2026
highlights:
  - Started the project from scratch (structure, login, layout, reporting)
  - Multi-part permanent and temporary billboard application forms with document uploads
  - Application status monitoring per stage
  - Printing temporary SKPD/SSPD and VA slips with DevExpress Reports
  - A permanent billboard tax calculator for city-owned assets
  - OTP-based email verification and email change
  - REST endpoints (JWT) for the billboard mobile app - calculator and application monitoring
---

## Background / Problem

Billboard applicants need to apply for billboard permits and tax, complete their documents, and track the process without coming to the office. <!-- TODO: verifikasi -->

## Solution & Architecture

- ASP.NET Core 8 MVC with controllers per domain (applications, billboard objects, calculator, email verification) and separate view models.
- A public landing page plus a logged-in applicant area with a layout dedicated to the billboard portal.
- Application logic, service monitoring, and the calculator live in a shared domain library, so internal apps and the API use them too.
- Partial views for each form section (info, billboard form, number of locations, document upload) and a process detail modal.
- DevExpress reports for tax documents; YARP to forward streaming routes to internal services.
- A separate REST API (JWT + Swagger) for the billboard mobile app uses the same calculator and application classes, so web and mobile calculations stay consistent.

## Technical Challenges

- **A complex application form:** many cascading lookups (district to urban village, billboard type to product and placement) and document uploads in a single flow.
- **Monitoring across application types:** stage details differ between permanent and temporary applications, combined in a single monitoring page.
- **City asset calculator:** the calculation model went through many rounds of fixes. <!-- TODO: verifikasi detail aturan tarif -->

## Results / Impact

- The project has been archived. SKPD/SSPD printing and VA creation were moved to another app.

<!-- TODO: verifikasi — alasan diarsipkan dan dampak terukur -->

## What I Learned

<!-- TODO: verifikasi -->
