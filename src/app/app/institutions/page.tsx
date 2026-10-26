'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_INSTITUTIONS } from '@/data/mockData';
import { Institution } from '@/types';
import {
  Building2,
  Search,
  Filter,
  ArrowRight,
  X,
  GraduationCap,
  Mail,
  User,
  ExternalLink,
} from 'lucide-react';

export default function InstitutionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInst, setSelectedInst] = useState<Institution | null>(null);

  const filteredInstitutions = MOCK_INSTITUTIONS.filter((inst) => {
    const matchesSearch =
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inst.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Institutions Directory
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Technical institutions submitting student enrolment batches under AICTE oversight.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#6C7884] bg-[#FAF8F2] px-3 py-1 rounded-lg border border-[#DEDCD3]">
              {filteredInstitutions.length} of {MOCK_INSTITUTIONS.length} Institutions
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, AICTE code, or state..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-[#6C7884]" />
            <span className="text-xs text-[#6C7884]">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded-lg px-2.5 py-1 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="all">All Statuses</option>
              <option value="Compliant">Compliant</option>
              <option value="Needs Review">Needs Review</option>
            </select>
          </div>
        </div>

        {/* Institutions Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Institution Name & Code</th>
                  <th className="py-3 px-4">Type & State</th>
                  <th className="py-3 px-4">Programmes</th>
                  <th className="py-3 px-4">Enrolment vs Intake</th>
                  <th className="py-3 px-4">Last Submission</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filteredInstitutions.map((inst) => (
                  <tr key={inst.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-[#102B48]">{inst.name}</div>
                      <div className="font-mono text-[10px] text-[#8C97A2]">{inst.code}</div>
                    </td>
                    <td className="py-3 px-4 text-[#6C7884]">
                      <div>{inst.type}</div>
                      <div className="text-[10px] text-[#8C97A2]">{inst.state}</div>
                    </td>
                    <td className="py-3 px-4 font-mono font-medium">{inst.programmesCount}</td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-[#102B48]">
                        {inst.enrolledStudents.toLocaleString()}
                      </span>{' '}
                      / {inst.approvedIntake.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-[#6C7884] font-mono text-[11px]">
                      {inst.lastSubmission}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={inst.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setSelectedInst(inst)}
                        className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] underline underline-offset-2"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Institution Detail Drawer / Modal */}
        {selectedInst && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl max-w-lg w-full p-6 shadow-dropdown space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#102B48]">
                    {selectedInst.name}
                  </h3>
                  <p className="text-xs font-mono text-[#8C97A2]">{selectedInst.code}</p>
                </div>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="p-1 rounded text-[#6C7884] hover:text-[#102B48]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Category Type</span>
                  <span className="font-medium text-[#102B48]">{selectedInst.type}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">State Jurisdiction</span>
                  <span className="font-medium text-[#102B48]">{selectedInst.state}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Contact Nodal Officer</span>
                  <span>{selectedInst.contactPerson}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Official Email</span>
                  <span className="font-mono text-[#496D91]">{selectedInst.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Current Review Status</span>
                  <StatusBadge status={selectedInst.status} size="sm" />
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <Link
                  href="/app/intake"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors"
                >
                  Check Intake Quota
                </Link>
                <button
                  onClick={() => setSelectedInst(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#102B48] bg-[#FAF8F2] border border-[#DEDCD3] hover:bg-[#EAF0F6]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

