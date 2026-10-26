'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_AUDIT_EVENTS } from '@/data/mockData';
import { AuditEvent } from '@/types';
import { FileCheck2, Download, Search, Filter, Shield, Calendar, ArrowRight } from 'lucide-react';

export default function AuditReportsPage() {
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = MOCK_AUDIT_EVENTS.filter((ev) => {
    const matchesType = eventTypeFilter === 'all' || ev.action.includes(eventTypeFilter);
    const matchesSearch =
      ev.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.entityReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.details.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleExportAuditCSV = () => {
    const header = 'Timestamp,Actor,Role,Action,Entity,Outcome,Details\n';
    const rows = filteredEvents
      .map(
        (e) =>
          `"${e.timestamp}","${e.actor}","${e.role}","${e.action}","${e.entityReference}","${e.outcome}","${e.details}"`
      )
      .join('\n');

    const encoded = encodeURI('data:text/csv;charset=utf-8,' + header + rows);
    const link = document.createElement('a');
    link.setAttribute('href', encoded);
    link.setAttribute('download', `apaar_audit_log_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Audit Trail & Reports
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Traceable chronological event ledger recording all submission ingests, validation runs,
              and human resolution decisions.
            </p>
          </div>

          <button
            onClick={handleExportAuditCSV}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-1.5 self-start sm:self-auto shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Audit CSV</span>
          </button>
        </div>

        {/* Report Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/app/findings"
            className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all group"
          >
            <span className="text-xs font-semibold text-[#102B48] block">
              Validation Findings Summary
            </span>
            <p className="text-[11px] text-[#6C7884] mt-1">
              Active rule breaks, intake caps, and unresolved findings.
            </p>
            <span className="text-xs text-[#B58545] font-semibold mt-2 inline-flex items-center space-x-1 group-hover:underline">
              <span>Inspect findings</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/app/cases"
            className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all group"
          >
            <span className="text-xs font-semibold text-[#102B48] block">
              Unresolved Cross-Matches
            </span>
            <p className="text-[11px] text-[#6C7884] mt-1">
              Cross-institution conflicts currently assigned to review officers.
            </p>
            <span className="text-xs text-[#B58545] font-semibold mt-2 inline-flex items-center space-x-1 group-hover:underline">
              <span>View open cases</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/app/submissions"
            className="p-4 bg-[#FFFEFA] border border-[#DEDCD3] rounded-xl shadow-subtle hover:border-[#102B48] transition-all group"
          >
            <span className="text-xs font-semibold text-[#102B48] block">Batch Ingest History</span>
            <p className="text-[11px] text-[#6C7884] mt-1">
              All institution CSV and XLSX submissions processed during the session.
            </p>
            <span className="text-xs text-[#B58545] font-semibold mt-2 inline-flex items-center space-x-1 group-hover:underline">
              <span>View batch logs</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>

        {/* Toolbar */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search actor, case, or event details..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-[#6C7884]" />
            <span className="text-xs text-[#6C7884]">Action Type:</span>
            <select
              value={eventTypeFilter}
              onChange={(e) => setEventTypeFilter(e.target.value)}
              className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded-lg px-2.5 py-1 text-xs font-medium focus:ring-1 focus:ring-[#102B48]"
            >
              <option value="all">All Events</option>
              <option value="Upload">Submission Upload</option>
              <option value="Evaluation">Rule Evaluation</option>
              <option value="Reconciliation">Cross-Match Reconciliation</option>
              <option value="Update">Status Update</option>
            </select>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Actor & Role</th>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Entity Reference</th>
                  <th className="py-3 px-4">Outcome</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {filteredEvents.map((ev) => (
                  <tr key={ev.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono text-[#8C97A2] whitespace-nowrap">
                      {ev.timestamp}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-[#102B48]">{ev.actor}</div>
                      <div className="text-[10px] text-[#6C7884]">{ev.role}</div>
                    </td>
                    <td className="py-3 px-4 font-medium text-[#102B48]">{ev.action}</td>
                    <td className="py-3 px-4 font-mono text-[#496D91]">
                      {ev.entityReference.startsWith('CASE') ? (
                        <Link
                          href={`/app/cases/${ev.entityReference}`}
                          className="hover:underline font-bold text-[#B58545]"
                        >
                          {ev.entityReference}
                        </Link>
                      ) : (
                        ev.entityReference
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={ev.outcome} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-[#6C7884] max-w-sm truncate">{ev.details}</td>
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

