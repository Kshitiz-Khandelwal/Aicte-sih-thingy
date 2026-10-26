'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_INSTITUTIONS, MOCK_CHART_TRENDS } from '@/data/mockData';
import {
  Download,
  Building2,
  Users,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Filter,
  TrendingUp,
  FileCheck2,
} from 'lucide-react';

export default function DashboardPage() {
  const [selectedInst, setSelectedInst] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('2024-25');
  const [hoveredPoint, setHoveredPoint] = useState<{ month: string; current: number; previous: number } | null>(null);

  // Synthetic CSV download export
  const handleExportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Metric,Count,Session,Environment\n' +
      'Total Institutions,124,2024-25,Demo Synthetic\n' +
      'Total Student Records,124532,2024-25,Demo Synthetic\n' +
      'Validated Records,116892,2024-25,Demo Synthetic\n' +
      'Needs Review,3864,2024-25,Demo Synthetic\n' +
      'Rejected,776,2024-25,Demo Synthetic\n';

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `apaar_integrity_report_${selectedYear}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Top Header Block (Matching Screen 5) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Integrity Observatory
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Student enrolment visibility across AICTE-approved institutions (Synthetic demo data)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Academic Year */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#FFFEFA] border border-[#DEDCD3] text-[#102B48] rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="2024-25">Academic Year: 2024-25</option>
              <option value="2023-24">Academic Year: 2023-24</option>
            </select>

            {/* Institution Filter */}
            <select
              value={selectedInst}
              onChange={(e) => setSelectedInst(e.target.value)}
              className="bg-[#FFFEFA] border border-[#DEDCD3] text-[#102B48] rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="all">All Institutions</option>
              {MOCK_INSTITUTIONS.map((inst) => (
                <option key={inst.id} value={inst.id}>
                  {inst.name}
                </option>
              ))}
            </select>

            {/* Export Report Button */}
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* 5 Metric Summary Cards (Screen 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Card 1: Institutions */}
          <Link
            href="/app/institutions"
            className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all group"
          >
            <div className="flex items-center space-x-2 text-[#496D91] mb-2">
              <Building2 className="w-4 h-4 text-[#102B48]" />
              <span className="text-[11px] font-medium text-[#6C7884]">Institutions</span>
            </div>
            <div className="text-2xl font-serif font-bold text-[#102B48]">124</div>
            <div className="text-[10px] text-[#8C97A2] mt-0.5">Submitted data</div>
          </Link>

          {/* Card 2: Total Student Records */}
          <div className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle">
            <div className="flex items-center space-x-2 text-[#496D91] mb-2">
              <Users className="w-4 h-4 text-[#102B48]" />
              <span className="text-[11px] font-medium text-[#6C7884]">Total Records</span>
            </div>
            <div className="text-2xl font-serif font-bold text-[#102B48]">1,24,532</div>
            <div className="text-[10px] text-[#8C97A2] mt-0.5">Total Submitted</div>
          </div>

          {/* Card 3: Validated Records */}
          <div className="p-4 bg-[#FFFEFA] border border-[#C0E4D2] bg-gradient-to-b from-[#FFFEFA] to-[#EDF7F2]/30 rounded-xl shadow-subtle">
            <div className="flex items-center space-x-2 text-[#398565] mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#398565]" />
              <span className="text-[11px] font-medium text-[#398565]">Validated</span>
            </div>
            <div className="text-2xl font-serif font-bold text-[#398565]">1,16,892</div>
            <div className="text-[10px] text-[#398565]/80 mt-0.5">93.8% Clean Records</div>
          </div>

          {/* Card 4: Needs Review */}
          <Link
            href="/app/findings"
            className="p-4 bg-[#FFFEFA] border border-[#F6DFB5] bg-gradient-to-b from-[#FFFEFA] to-[#FEF7EC]/50 rounded-xl shadow-subtle hover:border-[#E0A34A] transition-all group"
          >
            <div className="flex items-center space-x-2 text-[#B58545] mb-2">
              <AlertTriangle className="w-4 h-4 text-[#E0A34A]" />
              <span className="text-[11px] font-medium text-[#B57C2B]">Needs Review</span>
            </div>
            <div className="text-2xl font-serif font-bold text-[#B57C2B]">3,864</div>
            <div className="text-[10px] text-[#B58545] mt-0.5 group-hover:underline">
              Inspect Findings →
            </div>
          </Link>

          {/* Card 5: Rejected */}
          <div className="p-4 bg-[#FFFEFA] border border-[#F3CAC6] bg-gradient-to-b from-[#FFFEFA] to-[#FDF0EE]/50 rounded-xl shadow-subtle">
            <div className="flex items-center space-x-2 text-[#C95F55] mb-2">
              <XCircle className="w-4 h-4 text-[#C95F55]" />
              <span className="text-[11px] font-medium text-[#C95F55]">Rejected</span>
            </div>
            <div className="text-2xl font-serif font-bold text-[#C95F55]">776</div>
            <div className="text-[10px] text-[#C95F55]/80 mt-0.5">Schema Violations</div>
          </div>
        </div>

        {/* 2 Main Visualisation Panels (Screen 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel: Enrolment Trend (Validated Records) */}
          <div className="lg:col-span-7 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 sm:p-6 shadow-warm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-base font-bold text-[#102B48]">
                  Enrolment Trend (Validated Records)
                </h3>
                <p className="text-xs text-[#6C7884] mt-0.5">
                  Monthly intake progression comparison
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center space-x-4 text-xs font-mono">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#102B48]" />
                  <span className="text-[#102B48]">2024-25</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A0B5CC]" />
                  <span className="text-[#6C7884]">2023-24</span>
                </div>
              </div>
            </div>

            {/* Responsive Line Chart SVG */}
            <div className="relative w-full h-[240px] pt-4 select-none">
              <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
                {/* Y-axis gridlines */}
                {[0, 25, 50, 75, 100].map((val, idx) => {
                  const y = 190 - idx * 40;
                  return (
                    <g key={val}>
                      <line
                        x1="40"
                        y1={y}
                        x2="590"
                        y2={y}
                        stroke="#EBE9E2"
                        strokeWidth="1"
                        strokeDasharray={idx === 0 ? undefined : '3 3'}
                      />
                      <text x="32" y={y + 3} textAnchor="end" fontSize="10" fill="#8C97A2" fontFamily="monospace">
                        {val}K
                      </text>
                    </g>
                  );
                })}

                {/* 2023-24 Previous Year Line (Lighter Blue/Dotted) */}
                <path
                  d="M 50 170 C 100 160, 150 135, 200 110 C 250 85, 300 65, 350 48 C 400 38, 450 35, 550 32"
                  fill="none"
                  stroke="#A0B5CC"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* 2024-25 Current Year Line (Bold Navy) */}
                <path
                  d="M 50 165 C 100 148, 150 115, 200 80 C 250 50, 300 28, 350 24 C 400 22, 450 20, 550 20"
                  fill="none"
                  stroke="#102B48"
                  strokeWidth="2.5"
                />

                {/* Data points along current line */}
                {MOCK_CHART_TRENDS.slice(0, 8).map((pt, i) => {
                  const cx = 50 + i * 71;
                  // Map values roughly
                  const cy = 190 - (pt.current / 130000) * 160;
                  return (
                    <g key={pt.month} className="group cursor-pointer">
                      <circle
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#102B48"
                        stroke="#FFFEFA"
                        strokeWidth="1.5"
                        onMouseEnter={() => setHoveredPoint(pt)}
                        className="transition-all hover:r-6"
                      />
                      <text
                        x={cx}
                        y="210"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#6C7884"
                        fontFamily="sans-serif"
                      >
                        {pt.month}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip on hover */}
              {hoveredPoint && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#102B48] text-white px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-mono pointer-events-none">
                  <span className="font-bold text-amber-300">{hoveredPoint.month}: </span>
                  <span>{hoveredPoint.current.toLocaleString()} records</span>
                  <span className="text-gray-300 text-[10px] ml-1.5">
                    (prev: {hoveredPoint.previous.toLocaleString()})
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Validation Findings (Screen 5) */}
          <div className="lg:col-span-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 sm:p-6 shadow-warm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-serif text-base font-bold text-[#102B48]">
                  Validation Findings
                </h3>
                <span className="text-[10px] font-mono text-[#6C7884] bg-[#FAF8F2] px-2 py-0.5 rounded border border-[#DEDCD3]">
                  Rule Breakdown
                </span>
              </div>

              {/* Horizontal Bar Visualisation */}
              <div className="space-y-4 pt-4 text-xs">
                {/* 1: Missing APAAR ID */}
                <div>
                  <div className="flex justify-between text-[#26384A] mb-1">
                    <span className="font-medium">Missing APAAR ID</span>
                    <span className="font-mono font-bold text-[#102B48]">1,245</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EAF0F6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#E0A34A] rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>

                {/* 2: Duplicate Records */}
                <div>
                  <div className="flex justify-between text-[#26384A] mb-1">
                    <span className="font-medium">Duplicate Records</span>
                    <span className="font-mono font-bold text-[#102B48]">986</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EAF0F6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#B58545] rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>

                {/* 3: Intake Exceeded */}
                <div>
                  <div className="flex justify-between text-[#26384A] mb-1">
                    <span className="font-medium">Intake Exceeded</span>
                    <span className="font-mono font-bold text-[#102B48]">742</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EAF0F6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#D8A968] rounded-full" style={{ width: '52%' }} />
                  </div>
                </div>

                {/* 4: Invalid Format */}
                <div>
                  <div className="flex justify-between text-[#26384A] mb-1">
                    <span className="font-medium">Invalid Format</span>
                    <span className="font-mono font-bold text-[#102B48]">621</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EAF0F6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#496D91] rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>

                {/* 5: Conflicting Enrolment */}
                <div>
                  <div className="flex justify-between text-[#26384A] mb-1">
                    <span className="font-medium">Conflicting Enrolment</span>
                    <span className="font-mono font-bold text-[#102B48]">270</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EAF0F6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#6B8CAE] rounded-full" style={{ width: '22%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom link to view all findings */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/app/findings"
                className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] inline-flex items-center space-x-1.5 transition-colors"
              >
                <span>View all findings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM: Recent Activity (Screen 5) */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 shadow-warm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
            <span className="font-mono text-[#8C97A2]">12 Aug 2024, 11:32 AM</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#26384A]">
              <strong>ABC Institute of Technology</strong> submitted 1,245 records{' '}
              <span className="text-[#398565] font-semibold">(Validated)</span>
            </span>
          </div>

          <Link
            href="/app/audit-reports"
            className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] inline-flex items-center space-x-1 self-start sm:self-auto"
          >
            <span>View all activity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

