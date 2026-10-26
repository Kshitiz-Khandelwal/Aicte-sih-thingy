'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_FINDINGS } from '@/data/mockData';
import { ValidationFinding } from '@/types';
import {
  AlertCircle,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  FileCheck2,
} from 'lucide-react';

export default function FindingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [findingTypeFilter, setFindingTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredFindings = MOCK_FINDINGS.filter((fnd) => {
    const matchesSearch =
      fnd.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fnd.apaarRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fnd.institutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fnd.ruleRef.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = findingTypeFilter === 'all' || fnd.findingType === findingTypeFilter;
    const matchesStatus = statusFilter === 'all' || fnd.reviewStatus === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Validation Findings
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Deterministic rule violations and potential enrolment conflicts identified during
              batch checks.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#6C7884] bg-[#FAF8F2] px-3 py-1 rounded-lg border border-[#DEDCD3]">
            <span>{filteredFindings.length} Active Findings</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search student, APAAR, rule..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs text-[#6C7884]">Type:</span>
              <select
                value={findingTypeFilter}
                onChange={(e) => setFindingTypeFilter(e.target.value)}
                className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded-lg px-2.5 py-1 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
              >
                <option value="all">All Types</option>
                <option value="Conflicting Enrolment">Conflicting Enrolment</option>
                <option value="Missing APAAR ID">Missing APAAR ID</option>
                <option value="Intake Exceeded">Intake Exceeded</option>
                <option value="Duplicate Records">Duplicate Records</option>
                <option value="Invalid Format">Invalid Format</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="text-xs text-[#6C7884]">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded-lg px-2.5 py-1 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
              >
                <option value="all">All Statuses</option>
                <option value="Needs Review">Needs Review</option>
                <option value="Under Review">Under Review</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Findings Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Finding ID</th>
                  <th className="py-3 px-4">Student & APAAR</th>
                  <th className="py-3 px-4">Institution</th>
                  <th className="py-3 px-4">Finding Type</th>
                  <th className="py-3 px-4">Rule Ref</th>
                  <th className="py-3 px-4">Severity</th>
                  <th className="py-3 px-4">Review Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filteredFindings.map((fnd) => (
                  <tr key={fnd.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-[#102B48]">{fnd.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-[#102B48]">{fnd.studentName}</div>
                      <div className="font-mono text-[10px] text-[#8C97A2]">{fnd.apaarRef}</div>
                    </td>
                    <td className="py-3 px-4 font-medium text-[#496D91] truncate max-w-[150px]">
                      {fnd.institutionName}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-medium text-[#102B48]">{fnd.findingType}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-[#B58545]">{fnd.ruleRef}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                          fnd.severity === 'High'
                            ? 'bg-[#FDF0EE] text-[#C95F55] border border-[#F3CAC6]'
                            : fnd.severity === 'Medium'
                            ? 'bg-[#FEF7EC] text-[#B57C2B] border border-[#F6DFB5]'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {fnd.severity}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={fnd.reviewStatus} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      {fnd.caseId ? (
                        <Link
                          href={`/app/cases/${fnd.caseId}`}
                          className="inline-flex items-center space-x-1 text-xs font-semibold text-[#102B48] hover:text-[#B58545] underline underline-offset-2"
                        >
                          <span>Investigate</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => alert(`Finding ${fnd.id}: ${fnd.description}`)}
                          className="text-xs font-semibold text-[#496D91] hover:underline"
                        >
                          View Notice
                        </button>
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

