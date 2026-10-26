'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_CASES } from '@/data/mockData';
import { GitCompare, Search, Filter, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CasesQueuePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const casesList = Object.values(MOCK_CASES);

  const filteredCases = casesList.filter((c) => {
    const matchesSearch =
      c.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.apaarRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.institutionA.institutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.institutionB.institutionName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Cross-Institution Review Queue
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Reconciled cases where identical APAAR references appear in multiple colleges for
              the same academic session.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#6C7884] bg-[#FAF8F2] px-3 py-1 rounded-lg border border-[#DEDCD3]">
            <span>{filteredCases.length} Active Cross-Matches</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by student, case ID, or college..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-[#6C7884]" />
            <span className="text-xs text-[#6C7884]">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded-lg px-2.5 py-1 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="all">All Cases</option>
              <option value="Needs Review">Needs Review</option>
              <option value="Under Review">Under Review</option>
              <option value="Marked Resolved">Marked Resolved</option>
            </select>
          </div>
        </div>

        {/* Cases Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Case ID</th>
                  <th className="py-3 px-4">Student & Reference</th>
                  <th className="py-3 px-4">Institution A</th>
                  <th className="py-3 px-4">Institution B</th>
                  <th className="py-3 px-4">Triggered Rule</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filteredCases.map((c) => (
                  <tr key={c.caseId} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#102B48]">{c.caseId}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-[#102B48]">{c.studentName}</div>
                      <div className="font-mono text-[10px] text-[#8C97A2]">{c.apaarRef}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-[#102B48]">
                        {c.institutionA.institutionName}
                      </div>
                      <div className="text-[10px] text-[#6C7884]">{c.institutionA.programme}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-[#102B48]">
                        {c.institutionB.institutionName}
                      </div>
                      <div className="text-[10px] text-[#B58545] font-medium">
                        {c.institutionB.programme}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">
                      <span className="font-semibold text-[#102B48]">{c.ruleTriggered.code}</span>
                      <span className="block text-[10px] text-[#8C97A2]">
                        {c.ruleTriggered.title}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={c.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/app/cases/${c.caseId}`}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors"
                      >
                        <span>Investigate</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
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

