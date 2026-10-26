import React from 'react';
import Link from 'next/link';
import { PublicHeader } from '@/components/common/PublicHeader';
import { PublicFooter } from '@/components/common/PublicFooter';
import { HeroWorkflowAnimation } from '@/components/landing/HeroWorkflowAnimation';
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Layers,
  FileCheck2,
  GitBranch,
  Building2,
  Users2,
  FileWarning,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC]">
      <PublicHeader />

      <main className="flex-1">
        {/* HERO SECTION — Matching Screen 1 Visual Authority */}
        <section className="pt-10 sm:pt-16 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FAF8F2] border border-[#DEDCD3] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58545]" />
                <span className="text-[11px] font-mono tracking-wider text-[#6C7884] uppercase">
                  Trusted Enrolment Data for a Clearer Tomorrow
                </span>
              </div>

              {/* Main Headline with Serif Typography */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#102B48] tracking-tight">
                Every enrolment.{' '}
                <span className="text-[#B58545] font-serif block sm:inline">
                  Accounted for.
                </span>
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg text-[#496D91] leading-relaxed max-w-xl font-normal">
                A rule-aware, auditable and explainable platform for verifying student enrolment
                data across AICTE-approved institutions using APAAR-linked information.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/app/dashboard"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#102B48] hover:bg-[#173652] active:scale-95 transition-all shadow-sm group"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/how-it-works"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold text-[#173652] bg-[#FFFEFA] border border-[#DEDCD3] hover:bg-[#FAF8F2] active:scale-95 transition-all shadow-subtle group"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#B58545] group-hover:scale-110 transition-transform" />
                  <span>How It Works</span>
                </Link>
              </div>

              {/* Fictional Demonstration Statistics */}
              <div className="pt-6 border-t border-[#DEDCD3] grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl font-serif font-bold text-[#102B48]">1,245+</div>
                  <div className="text-[11px] text-[#6C7884] mt-0.5">Verified Records</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#102B48]">45+</div>
                  <div className="text-[11px] text-[#6C7884] mt-0.5">Institutions</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#102B48]">180+</div>
                  <div className="text-[11px] text-[#6C7884] mt-0.5">Programmes</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Enrolment Flow Animation */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <HeroWorkflowAnimation />
            </div>
          </div>
        </section>

        {/* WORKFLOW STRIP (INGEST -> LINK -> VALIDATE -> RESOLVE) — Reference Screen 1 */}
        <section className="border-y border-[#DEDCD3] bg-[#FFFEFA] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 01: Ingest */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#EAF0F6] text-[#102B48] border border-[#DEDCD3] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-[#102B48] group-hover:text-white transition-colors">
                  01
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B48]">
                    Ingest
                  </h3>
                  <p className="text-xs text-[#6C7884] mt-0.5">
                    Accept submissions via CSV, XLSX, or simulated API.
                  </p>
                </div>
              </div>

              {/* Step 02: Link */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#EAF0F6] text-[#102B48] border border-[#DEDCD3] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-[#102B48] group-hover:text-white transition-colors">
                  02
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B48]">
                    Link
                  </h3>
                  <p className="text-xs text-[#6C7884] mt-0.5">
                    Reconcile records using synthetic APAAR references.
                  </p>
                </div>
              </div>

              {/* Step 03: Validate */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#EAF0F6] text-[#102B48] border border-[#DEDCD3] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-[#102B48] group-hover:text-white transition-colors">
                  03
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B48]">
                    Validate
                  </h3>
                  <p className="text-xs text-[#6C7884] mt-0.5">
                    Apply deterministic rules for intake, duplicate, and format checks.
                  </p>
                </div>
              </div>

              {/* Step 04: Resolve */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#EAF0F6] text-[#102B48] border border-[#DEDCD3] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-[#102B48] group-hover:text-white transition-colors">
                  04
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B48]">
                    Resolve
                  </h3>
                  <p className="text-xs text-[#6C7884] mt-0.5">
                    Enable authorized human review with full case audit history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM CONTEXT & EXPLANATORY SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B58545] font-semibold">
              The Integrity Challenge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102B48] mt-2 mb-3">
              Why Enrolment Verification Matters
            </h2>
            <p className="text-sm text-[#496D91] leading-relaxed">
              Technical education regulators face thousands of batch uploads each admission cycle.
              Our platform provides deterministic safeguards against fragmentation without making
              unwarranted accusations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#496D91] transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#FDF4E5] text-[#B58545] flex items-center justify-center mb-4">
                <FileWarning className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#102B48] font-bold mb-2">
                Fragmented Submissions
              </h3>
              <p className="text-xs text-[#6C7884] leading-relaxed">
                Colleges submit student registers across different rounds, lateral entries, and
                management quotas, making cross-institution duplication difficult to spot manually.
              </p>
            </div>

            <div className="p-6 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#496D91] transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF0F6] text-[#173652] flex items-center justify-center mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#102B48] font-bold mb-2">
                Conflicting Enrolments
              </h3>
              <p className="text-xs text-[#6C7884] leading-relaxed">
                When a student changes institutions during counselling rounds, ghost records can
                linger. APAAR references reconcile active admissions without violating privacy.
              </p>
            </div>

            <div className="p-6 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#496D91] transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EDF7F2] text-[#398565] flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#102B48] font-bold mb-2">
                Sanctioned Intake Compliance
              </h3>
              <p className="text-xs text-[#6C7884] leading-relaxed">
                Institutions can instantly verify their programme tallies against AICTE approved
                caps, ensuring transparent quotas before regulatory audit deadlines.
              </p>
            </div>
          </div>

          {/* Quick interactive call to action card */}
          <div className="mt-14 p-8 bg-[#102B48] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl text-white font-bold">
                Experience the Interactive Prototype
              </h3>
              <p className="text-xs text-gray-300 max-w-xl">
                Explore the Regulator Integrity Observatory, review flagged cross-institution
                cases, or simulate an institution data upload.
              </p>
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
              <Link
                href="/app/dashboard"
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102B48] bg-white hover:bg-amber-100 transition-colors shadow"
              >
                Launch Dashboard
              </Link>
              <Link
                href="/app/submissions"
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-[#496D91] hover:bg-[#173652] transition-colors"
              >
                Upload Demo Data
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}

