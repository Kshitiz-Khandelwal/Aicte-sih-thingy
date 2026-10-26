import React from 'react';
import Link from 'next/link';
import { PublicHeader } from '@/components/common/PublicHeader';
import { PublicFooter } from '@/components/common/PublicFooter';
import {
  ArrowRight,
  FileSpreadsheet,
  AlertTriangle,
  FileCheck2,
  Users2,
  CheckCircle,
  Database,
  Search,
  Scale,
  History,
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC]">
      <PublicHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Header Block matching Screen 2 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FAF8F2] border border-[#DEDCD3] rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58545]" />
            <span className="text-[11px] font-mono tracking-wider text-[#6C7884] uppercase">
              A Clearer Path from Data to Decisions
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#102B48] tracking-tight leading-[1.15] mb-4">
            From submission to regulatory signal.
          </h1>

          <p className="text-base sm:text-lg text-[#496D91] leading-relaxed max-w-2xl mb-6">
            We standardize, link, validate and resolve student enrolment data using APAAR context
            and AICTE rules — with full traceability.
          </p>

          <Link
            href="/app/dashboard"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#102B48] hover:bg-[#173652] active:scale-95 transition-all shadow-sm group"
          >
            <span>Explore the Platform</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2-Column Layout: Left Vertical Timeline + Right Example Event Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Numbered Timeline (01 to 04) */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-[#DEDCD3]" />

            {/* Stage 01 */}
            <div className="relative flex items-start space-x-5 group">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border-2 border-[#102B48] text-[#102B48] flex items-center justify-center font-mono font-bold text-sm z-10 flex-shrink-0 group-hover:bg-[#102B48] group-hover:text-white transition-colors">
                01
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-xl font-bold text-[#102B48]">Ingest</h3>
                <p className="text-xs sm:text-sm text-[#496D91] mt-1 leading-relaxed">
                  Accept institutional API or CSV submissions. Standardize data schemas, capture
                  cryptographic batch timestamps, and normalize institutional metadata.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#6C7884]">
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    CSV / XLSX Validation
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Batch Metadata
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Schema Conformance
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="relative flex items-start space-x-5 group">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border-2 border-[#B58545] text-[#B58545] flex items-center justify-center font-mono font-bold text-sm z-10 flex-shrink-0 group-hover:bg-[#B58545] group-hover:text-white transition-colors">
                02
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-xl font-bold text-[#102B48]">Link</h3>
                <p className="text-xs sm:text-sm text-[#496D91] mt-1 leading-relaxed">
                  Use APAAR references to link records. Detect repeated batches, historical
                  transfers, and cross-institution enrolment overlaps without exposing sensitive
                  personal data.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#6C7884]">
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Identifier Reconciliation
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Cross-Match Index
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Multi-College Context
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="relative flex items-start space-x-5 group">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border-2 border-[#496D91] text-[#496D91] flex items-center justify-center font-mono font-bold text-sm z-10 flex-shrink-0 group-hover:bg-[#496D91] group-hover:text-white transition-colors">
                03
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-xl font-bold text-[#102B48]">Validate</h3>
                <p className="text-xs sm:text-sm text-[#496D91] mt-1 leading-relaxed">
                  Apply programme-intake and category rules. Identify missing, invalid or
                  conflicting records using deterministic, version-controlled rules.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#6C7884]">
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Sanctioned Intake Caps
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Format & Checksums
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Concurrent Enrolment Rules
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="relative flex items-start space-x-5 group">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border-2 border-[#398565] text-[#398565] flex items-center justify-center font-mono font-bold text-sm z-10 flex-shrink-0 group-hover:bg-[#398565] group-hover:text-white transition-colors">
                04
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-xl font-bold text-[#102B48]">Resolve</h3>
                <p className="text-xs sm:text-sm text-[#496D91] mt-1 leading-relaxed">
                  Explain findings, route to authorized review, allow institutional clarification,
                  and maintain a permanent, auditable review log.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#6C7884]">
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Human-in-the-Loop Review
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Correction Workflows
                  </span>
                  <span className="bg-[#FFFEFA] border border-[#DEDCD3] px-2 py-0.5 rounded">
                    Immutable Audit Trail
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Synthetic Event Stream Panel (Screen 2) */}
          <div className="lg:col-span-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#DEDCD3]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#102B48]">
                Real-Time Event Trail (Demo)
              </span>
              <span className="text-[10px] font-mono text-[#8C97A2] bg-[#EAF0F6] px-2 py-0.5 rounded">
                Live Simulation
              </span>
            </div>

            {/* Event 1: Submission Received */}
            <div className="p-3.5 bg-[#FAF8F2] border border-[#DEDCD3] rounded-xl flex items-start space-x-3 hover:border-[#496D91] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#EAF0F6] text-[#173652] flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#102B48]">Submission Received</h4>
                  <span className="text-[10px] text-[#8C97A2]">11:32 AM</span>
                </div>
                <p className="text-xs font-mono text-[#496D91] mt-0.5">student_enrolment_2024.csv</p>
                <p className="text-[11px] text-[#6C7884] mt-1">1,245 records • 12 Aug 2024</p>
              </div>
            </div>

            {/* Event 2: Potential Match Found */}
            <div className="p-3.5 bg-[#FAF8F2] border border-[#DEDCD3] rounded-xl flex items-start space-x-3 hover:border-[#E0A34A] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#FDF4E5] text-[#B58545] flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-[#E0A34A]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#102B48]">Potential Match Found</h4>
                  <span className="text-[10px] text-[#8C97A2]">12:10 PM</span>
                </div>
                <p className="text-xs text-[#6C7884] mt-0.5">Same APAAR in 2 institutions</p>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-[#B57C2B] bg-[#FEF7EC] px-1.5 py-0.5 rounded border border-[#F6DFB5]">
                    CASE-2024-0087
                  </span>
                </div>
              </div>
            </div>

            {/* Event 3: Rule Check Completed */}
            <div className="p-3.5 bg-[#FAF8F2] border border-[#DEDCD3] rounded-xl flex items-start space-x-3 hover:border-[#E0A34A] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#FEF7EC] text-[#E0A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#102B48]">Rule Check Completed</h4>
                  <span className="text-[10px] text-[#8C97A2]">01:45 PM</span>
                </div>
                <p className="text-xs text-[#6C7884] mt-0.5">742 records flagged for review</p>
                <p className="text-[10px] text-[#8C97A2] mt-0.5">Rules: R-ENR-001, R-INT-003</p>
              </div>
            </div>

            {/* Event 4: Awaiting Review */}
            <div className="p-3.5 bg-[#FAF8F2] border border-[#DEDCD3] rounded-xl flex items-start space-x-3 hover:border-[#496D91] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#EAF0F6] text-[#2B6CB0] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users2 className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#102B48]">Awaiting Review</h4>
                  <span className="text-[10px] text-[#8C97A2]">02:30 PM</span>
                </div>
                <p className="text-xs text-[#6C7884] mt-0.5">3 cases assigned to zonal committee</p>
                <div className="mt-2">
                  <Link
                    href="/app/cases/CASE-2024-0087"
                    className="inline-flex items-center text-[11px] font-semibold text-[#102B48] hover:text-[#B58545] transition-colors"
                  >
                    <span>Investigate Active Case</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

