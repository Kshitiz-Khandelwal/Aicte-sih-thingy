# APAAR Enrolment Integrity

**Problem Statement ID:** 26263  
**Team:** Tragic Bytes  
**Theme:** Student Data Management and Verification Platform for AICTE-Approved Institutions

A rule-aware, auditable and explainable platform for verifying student enrolment data across AICTE-approved institutions using APAAR-linked information.

## Overview

The platform is designed to organize institution-submitted enrolment data, reconcile potentially conflicting records, validate information against configured rules, support authorized human review, and maintain a traceable history of findings and decisions.

### Core Workflow: INGEST → LINK → VALIDATE → RESOLVE

- **INGEST:** Accept CSV/XLSX submissions or simulated API submissions, check the data structure, and normalize records.
- **LINK:** Associate and reconcile records using synthetic identifier references and available institution context.
- **VALIDATE:** Apply configurable, deterministic rules with relevant source/version information.
- **RESOLVE:** Show evidence-backed findings, allow reviewers to record corrections or clarification requests, and maintain complete audit history.

## Routes & Screens

### Public Portal
- `/` — Public Landing Page (with interactive SVG workflow animation)
- `/how-it-works` — How It Works (4-stage timeline & event stream)
- `/capabilities` — Product & Capabilities (with interactive case preview)

### Application Portal
- `/app/dashboard` — Regulator Integrity Observatory (Metrics, trend charts, rule breakdowns, CSV export)
- `/app/submissions` — Institution Submission Studio (Drag-and-drop file upload, validation engine)
- `/app/my-submissions` — My Submissions (Batch status filter & detail inspector)
- `/app/findings` — Validation Findings (Searchable rule violations queue)
- `/app/cases` — Cross-Institution Review (Multi-college enrolment conflicts)
- `/app/cases/[id]` — Case Investigation (Side-by-side comparison, rule context, clarification modal)
- `/app/institutions` — Institutions Directory (State/type filters, quota checks)
- `/app/intake` — Intake & Enrolment Quotas (Approved capacity vs actual variance)
- `/app/rules` — Deterministic Rule Registry (Specification, sample execution, changelogs)
- `/app/corrections` — Correction Requests (Institution amendment tickets)
- `/app/audit-reports` — Audit & Reports (Chronological ledger with CSV download)
- `/app/profile` — Institution Profile & Configuration
- `/app/help` — Help & Support (Schema documentation, FAQ accordion, demo tickets)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Design Tokens:** Warm Ivory (`#F7F4EC`), Deep Ink Navy (`#102B48`), Warm Gold (`#B58545`), Restrained Amber (`#E0A34A`)
- **Typography:** DM Serif Display & Inter

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Kshitiz-Khandelwal/Aicte-sih-thingy.git
   cd Aicte-sih-thingy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Notice:** Prototype demonstration interface. All records, names, numbers, institutions, and APAAR identifiers are synthetic demonstration data.
