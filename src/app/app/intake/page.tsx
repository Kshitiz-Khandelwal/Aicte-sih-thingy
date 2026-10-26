'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_INTAKE, MOCK_INSTITUTIONS } from '@/data/mockData';
import { GraduationCap, AlertCircle, CheckCircle2, TrendingUp, Filter } from 'lucide-react';

export default function IntakePage() {
  const [selectedInst, setSelectedInst] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const filteredIntake = MOCK_INTAKE.filter((item) => {
    return selectedInst === 'all' || item.institutionId === selectedInst;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Intake & Enrolment Quotas
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Approved AICTE intake caps versus reconciled student admissions per programme.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#FFFEFA] border border-[#DEDCD3] text-[#102B48] rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="2024-25">2024-25 Session</option>
              <option value="2023-24">2023-24 Session</option>
            </select>

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
          </div>
        </div>

        {/* Highlight Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle">
            <span className="text-[11px] text-[#6C7884] block mb-1">Sanctioned Quota (Total)</span>
            <div className="text-2xl font-serif font-bold text-[#102B48]">12,050</div>
            <div className="text-[10px] text-[#398565] mt-0.5">Approved across 45 institutions</div>
          </div>
          <div className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle">
            <span className="text-[11px] text-[#6C7884] block mb-1">Enrolled Count</span>
            <div className="text-2xl font-serif font-bold text-[#102B48]">11,850</div>
            <div className="text-[10px] text-[#6C7884] mt-0.5">98.3% Total Seat Fill Ratio</div>
          </div>
          <div className="p-4 bg-[#FFFEFA] border border-[#F6DFB5] bg-amber-50/20 rounded-xl shadow-subtle">
            <span className="text-[11px] text-[#B57C2B] block mb-1">Quota Violations Flagged</span>
            <div className="text-2xl font-serif font-bold text-[#B57C2B]">2 Programmes</div>
            <div className="text-[10px] text-[#E0A34A] mt-0.5">Requires regulatory review</div>
          </div>
        </div>

        {/* Intake Data Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Institution Name</th>
                  <th className="py-3 px-4">Programme</th>
                  <th className="py-3 px-4 text-center">Sanctioned Intake</th>
                  <th className="py-3 px-4 text-center">Actual Enrolled</th>
                  <th className="py-3 px-4 text-center">Variance</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filteredIntake.map((row) => (
                  <tr key={row.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#102B48]">
                      {row.institutionName}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#496D91]">{row.programme}</td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-[#102B48]">
                      {row.approvedIntake}
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-bold">
                      {row.enrolledCount}
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-semibold">
                      {row.variance > 0 ? (
                        <span className="text-[#C95F55]">+{row.variance}</span>
                      ) : row.variance === 0 ? (
                        <span className="text-[#6C7884]">0</span>
                      ) : (
                        <span className="text-[#398565]">{row.variance}</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={row.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      {row.status === 'Intake Exceeded' ? (
                        <Link
                          href="/app/findings"
                          className="text-xs font-semibold text-[#E0A34A] hover:underline"
                        >
                          View Finding →
                        </Link>
                      ) : (
                        <span className="text-[11px] text-[#8C97A2]">Compliant</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

