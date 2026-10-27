---
title: SurabayaTax BackOffice
slug: surabayatax-web-internal
summary: Back-office modules for Bapenda staff to search billboard objects with their survey photos, configure the billboard application workflow, and reconcile digital parking receipts.
role: Full-stack developer (.NET)
period: Feb 2026 – Oct 2026
highlights:
  - Billboard object (NOR) search with a field survey photo gallery
  - CRUD for the billboard application workflow and its per-stage activities
  - A bank statement split domain and reconciliation of digital parking receipts into SSPD records
  - New EF Core entities for split and bank statement data
---

## Background / Problem

Bapenda staff need tools to look up billboard objects with their survey evidence, configure the application process flow, and reconcile digital parking receipts from bank statements. <!-- TODO: verifikasi -->

My contribution to this app consists of specific modules in a back-office app developed together with the team.

## Solution & Architecture

- Controllers per domain, then view models, then domain classes in a shared library, then Oracle (EF Core and Dapper).
- **NOR Search:** billboard object details and the application survey photo gallery in a modal.
- **Billboard Workflow:** an add/edit form and a grid of per-stage activity details saved together.
- **Digital Parking Reconciliation:** new EF Core entities for splits, statements, statement details, and parking object accounts. The domain class provides listing, status and date filters, paging, and the reconciliation into SSPD.

## Technical Challenges

- **Bank statement reconciliation:** mapping split statement entries to parking objects, then submitting them as SSPD records with a tracked split status.
- **Survey photos:** showing each billboard object's application survey photos in a gallery modal. <!-- TODO: verifikasi -->

## Results / Impact

- The modules are live and used by Bapenda staff.

<!-- TODO: verifikasi — tambahkan dampak terukur -->

## What I Learned

<!-- TODO: verifikasi -->
