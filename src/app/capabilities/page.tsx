'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PublicHeader } from '@/components/common/PublicHeader';
import { PublicFooter } from '@/components/common/PublicFooter';
import { StatusBadge } from '@/components/common/StatusBadge';
import {
  ArrowRight,
  ShieldAlert,
  Sliders,
  History,
  Building,
  CheckCircle2,
  AlertTriangle,
  ArrowLeftRight,
  FileText,
  Clock,
  ExternalLink,
} from 'lucide-react';

export default function CapabilitiesPage() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'evidence' | 'rules' | 'docs'>('timeline');

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC]">
      <PublicHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Header Block matching Screen 3 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FAF8F2] border border-[#DEDCD3] rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58545]" />
            <span className="text-[11px] font-mono tracking-wider text-[#6C7884] uppercase">
              Deep Visibility Beyond Totals
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#102B48] tracking-tight leading-[1.15] mb-4">
            Explainable validation. Every step traceable.
          </h1>

          <p className="text-base sm:text-lg text-[#496D91] leading-relaxed max-w-2xl">
            Go from submission summaries to exact records with explainable validation, sourced
            deterministic rules, and a complete evidence history.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#EAF0F6] text-[#173652] flex items-center justify-center mb-3">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#102B48] mb-1">
              Case Investigation
            </h3>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Review conflicting or potentially related records with field-level context and
              side-by-side evidence panels.
            </p>
          </div>

          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#FDF4E5] text-[#B58545] flex items-center justify-center mb-3">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#102B48] mb-1">
              Rule-Aware Validation
            </h3>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Apply deterministic rules with documented version numbers, regulatory source clauses,
              and clear trigger reasons.
            </p>
          </div>

          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#EDF7F2] text-[#398565] flex items-center justify-center mb-3">
              <History className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#102B48] mb-1">
              Audit-Ready Records
            </h3>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Track submissions, corrections, reviewer notes, and recorded outcomes with timestamped
              event logs.
            </p>
          </div>

          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#EAF0F6] text-[#2B6CB0] flex items-center justify-center mb-3">
              <Building className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#102B48] mb-1">
              Institution Support
            </h3>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Equip colleges with clear error diagnostics and a respectful correction pathway rather
              than opaque disqualifications.
            </p>
          </div>
        </div>

        {/* FEATURED CASE PREVIEW PANEL (EXACTLY MATCHING SCREEN 3) */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          {/* Case Header */}
          <div className="p-5 sm:p-6 border-b border-[#DEDCD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F2]">
            <div>
              <div className="flex items-center space-x-3">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#102B48]">
                  Case Investigation
                </span>
                <span className="font-mono text-xs font-semibold text-[#496D91] bg-[#EAF0F6] px-2 py-0.5 rounded">
                  CASE-2024-0087
                </span>
                <StatusBadge status="Needs Review" size="sm" />
              </div>
              <p className="text-xs text-[#6C7884] mt-1">
                Potential cross-institution enrolment match for the same APAAR reference
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href="/app/cases/CASE-2024-0087"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <span>Open Full Investigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Records Comparison Grid (Institution A vs Institution B + Validation Summary) */}
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Student Record - Institution A */}
            <div className="md:col-span-4 p-4 rounded-xl border border-[#DEDCD3] bg-[#FFFEFA] shadow-subtle space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h4 className="text-xs font-bold text-[#102B48]">Student Record — Institution A</h4>
                <StatusBadge status="Active" size="sm" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">APAAR Reference</span>
                  <span className="font-mono font-semibold text-[#102B48]">ABCD1234EF56</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Name</span>
                  <span className="font-medium text-[#102B48]">Rohan Mehta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Date of Birth</span>
                  <span className="text-[#102B48]">14 Mar 2005</span>
                </div>
                <div className="flex justify-between bg-amber-50/50 p-1 rounded">
                  <span className="text-[#6C7884]">Programme</span>
                  <span className="font-semibold text-[#102B48]">B.Tech (CSE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Academic Year</span>
                  <span className="font-mono text-[#102B48]">2024-25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Institution</span>
                  <span className="text-[#102B48] font-medium truncate max-w-[140px]">
                    ABC Institute of Technology
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <span className="text-[#6C7884]">Submission ID</span>
                  <Link
                    href="/app/submissions"
                    className="font-mono text-[#496D91] hover:underline"
                  >
                    SUB-2024-0010
                  </Link>
                </div>
              </div>
            </div>

            {/* Middle Divider Icon */}
            <div className="hidden md:flex md:col-span-1 items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#EAF0F6] text-[#496D91] border border-[#DEDCD3] flex items-center justify-center shadow-sm">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Student Record - Institution B */}
            <div className="md:col-span-4 p-4 rounded-xl border border-[#DEDCD3] bg-[#FFFEFA] shadow-subtle space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h4 className="text-xs font-bold text-[#102B48]">Student Record — Institution B</h4>
                <StatusBadge status="Active" size="sm" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">APAAR Reference</span>
                  <span className="font-mono font-semibold text-[#102B48]">ABCD1234EF56</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Name</span>
                  <span className="font-medium text-[#102B48]">Rohan Mehta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Date of Birth</span>
                  <span className="text-[#102B48]">14 Mar 2005</span>
                </div>
                <div className="flex justify-between bg-amber-50/50 p-1 rounded">
                  <span className="text-[#6C7884]">Programme</span>
                  <span className="font-semibold text-[#B58545]">B.Tech (ECE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Academic Year</span>
                  <span className="font-mono text-[#102B48]">2024-25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6C7884]">Institution</span>
                  <span className="text-[#102B48] font-medium truncate max-w-[140px]">
                    PQR Engineering College
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <span className="text-[#6C7884]">Submission ID</span>
                  <Link
                    href="/app/submissions"
                    className="font-mono text-[#496D91] hover:underline"
                  >
                    SUB-2024-0048
                  </Link>
                </div>
              </div>
            </div>

            {/* Validation Summary Card */}
            <div className="md:col-span-3 p-4 rounded-xl border border-[#F6DFB5] bg-[#FEF7EC] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-[#102B48]">Validation Summary</h4>
                  <StatusBadge status="Needs Review" size="sm" />
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-[#8C97A2] uppercase tracking-wider block">
                      Rule Triggered
                    </span>
                    <span className="font-mono font-bold text-[#102B48]">
                      R-ENR-001{' '}
                      <span className="text-[10px] text-[#B58545] font-normal">v1.2</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#6C7884] leading-relaxed pt-1">
                    Same APAAR reference found in multiple institutions for the same academic year.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F6DFB5]">
                <Link
                  href="/app/rules"
                  className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] inline-flex items-center space-x-1"
                >
                  <span>View Rule Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Case Tabs (Timeline, Evidence, Rules, Docs) */}
          <div className="px-6 border-t border-[#DEDCD3] bg-[#FAF8F2] flex space-x-6 text-xs font-medium">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'timeline'
                  ? 'border-[#102B48] text-[#102B48] font-bold'
                  : 'border-transparent text-[#6C7884] hover:text-[#102B48]'
              }`}
            >
              Case Timeline
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'evidence'
                  ? 'border-[#102B48] text-[#102B48] font-bold'
                  : 'border-transparent text-[#6C7884] hover:text-[#102B48]'
              }`}
            >
              Evidence & Supporting Data
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'rules'
                  ? 'border-[#102B48] text-[#102B48] font-bold'
                  : 'border-transparent text-[#6C7884] hover:text-[#102B48]'
              }`}
            >
              Rule Context
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'docs'
                  ? 'border-[#102B48] text-[#102B48] font-bold'
                  : 'border-transparent text-[#6C7884] hover:text-[#102B48]'
              }`}
            >
              Source Documents
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 bg-[#FFFEFA]">
            {activeTab === 'timeline' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#496D91] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-[#8C97A2] block">
                      12 Aug 2024, 11:32 AM
                    </span>
                    <p className="text-xs font-semibold text-[#102B48] mt-0.5">
                      Potential match detected during validation
                    </p>
                    <p className="text-[11px] text-[#6C7884] mt-0.5">
                      Batch SUB-2024-0048 processed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B58545] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-[#8C97A2] block">
                      12 Aug 2024, 12:10 PM
                    </span>
                    <p className="text-xs font-semibold text-[#102B48] mt-0.5">
                      Both records compared
                    </p>
                    <p className="text-[11px] text-[#6C7884] mt-0.5">
                      Field-level differences found in programme and intake.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E0A34A] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-[#8C97A2] block">
                      12 Aug 2024, 02:30 PM
                    </span>
                    <p className="text-xs font-semibold text-[#102B48] mt-0.5">
                      Marked for human review
                    </p>
                    <p className="text-[11px] text-[#6C7884] mt-0.5">
                      Awaiting institutional clarification notice.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'evidence' && (
              <div className="text-xs text-[#6C7884] space-y-2">
                <p>
                  <strong>Identifier Match Confidence:</strong> 100% (Exact match on synthetic
                  identifier <code className="text-[#102B48]">ABCD1234EF56</code>).
                </p>
                <p>
                  <strong>Enrolment Overlap Window:</strong> Academic Year 2024-25 (Odd semester).
                  Both admissions initiated within 8 calendar days.
                </p>
                <p>
                  <strong>Status Note:</strong> Match indicates potential dual admission, transfer in
                  progress, or administrative lag in seat surrender.
                </p>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="text-xs text-[#6C7884] space-y-2">
                <p>
                  <strong>Deterministic Rule:</strong> R-ENR-001 (Unique Enrolment per Academic
                  Year, v1.2)
                </p>
                <p>
                  <strong>Clause:</strong> &ldquo;A student shall not be enrolled in more than one
                  AICTE-approved institution in the same academic year for the same programme, unless
                  an approved exception applies.&rdquo;
                </p>
              </div>
            )}

            {activeTab === 'docs' && (
              <div className="text-xs text-[#6C7884] space-y-2">
                <p>• Batch SUB-2024-0010: Line 142 (Hash: e8f9...32a1)</p>
                <p>• Batch SUB-2024-0048: Line 89 (Hash: c7d2...81b4)</p>
                <p className="text-[11px] text-[#8C97A2]">
                  Synthetic verification logs stored in prototype session state.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

