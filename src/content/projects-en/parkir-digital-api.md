---
title: Digital Parking API
slug: parkir-digital-api
summary: REST endpoints for the digital parking mobile app - tax object summaries per UPTB, daily transaction history, transactions per NOP, and a weekly dashboard.
role: Back-end developer (.NET)
period: Mar 2026 – Jul 2026
highlights:
  - Digital parking tax object summary endpoint per UPTB
  - Daily and date-range transaction history
  - Card transaction history and transactions per NOP
  - Dashboard summary and weekly charts for mobile
  - The supervisor's tax object list only shows active digital parking objects
  - Refactored the history queries to async
---

## Background / Problem

The digital parking mobile app needs fast transaction summaries per area and per tax object. <!-- TODO: verifikasi -->

My contribution to this API was the monitoring and dashboard endpoints consumed by the mobile app.

## Solution & Architecture

- REST controllers with JWT Bearer (a separate scheme for mobile) and per-route permissions. View models assemble the summary header and detail rows.
- Transaction aggregation per date and per NOP uses LINQ `GroupBy` on top of the shared domain library.
- The daily history endpoint was split from the date-range endpoint, then converted to async.
- API docs with Swagger and Scalar, logging with Serilog.

## Technical Challenges

- **Aggregating transaction data:** summaries per UPTB, NOP, and date are built from device and card transaction data.
- **Fast responses for mobile:** converting to async and splitting the daily endpoint from the date-range endpoint. <!-- TODO: verifikasi volume data -->

## Results / Impact

- The API is live and used by the digital parking mobile app.

<!-- TODO: verifikasi — tambahkan dampak terukur -->

## What I Learned

<!-- TODO: verifikasi -->
