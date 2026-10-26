'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_SUBMISSIONS } from '@/data/mockData';
import { UploadCloud, FileSpreadsheet, Plus, Filter, Search, Eye } from 'lucide-react';

export default function MySubmissionsPage() {
  const [tabFilter, setTabFilter] = useState<'All' | 'Validated' | 'Needs Review' | 'Rejected'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // ABC Institute submissions
  const mySubmissions = MOCK_SUBMISSIONS.filter(
    (s) => s.institutionName.includes('ABC') || s.institutionId === 'INST-01'
  );

  const filtered = mySubmissions.filter((s) => {
    const matchesTab = tabFilter === 'All' || s.status === tabFilter;
    const matchesSearch =
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              My Institution Submissions
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Enrolment datasets submitted by ABC Institute of Technology (Code: AICTE-1-102934).
            </p>
          </div>

          <Link
            href="/app/submissions"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-1.5 self-start sm:self-auto shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Upload New Batch</span>
          </Link>
        </div>

        {/* Tab Filters */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex space-x-2 text-xs">
            {(['All', 'Validated', 'Needs Review', 'Rejected'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setTabFilter(tab)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  tabFilter === tab
                    ? 'bg-[#102B48] text-white shadow-sm'
                    : 'text-[#6C7884] hover:bg-[#FAF8F2]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search file name or ID..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Batch ID</th>
                  <th className="py-3 px-4">File Name & Type</th>
                  <th className="py-3 px-4">Academic Year</th>
                  <th className="py-3 px-4">Programme</th>
                  <th className="py-3 px-4">Records</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filtered.map((batch) => (
                  <tr key={batch.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#102B48]">{batch.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-[#102B48] flex items-center space-x-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-[#496D91]" />
                        <span>{batch.fileName}</span>
                      </div>
                      <div className="text-[10px] text-[#8C97A2]">{batch.submissionType}</div>
                    </td>
                    <td className="py-3 px-4 font-mono">{batch.academicYear}</td>
                    <td className="py-3 px-4 text-[#496D91] font-medium">{batch.programme}</td>
                    <td className="py-3 px-4 font-bold">{batch.recordsCount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={batch.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href="/app/submissions"
                        className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] underline underline-offset-2"
                      >
                        Inspect
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

