'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_CASES } from '@/data/mockData';
import { CaseRecord } from '@/types';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Building2,
  User,
  Calendar,
  FileText,
  Clock,
  ArrowRight,
  MoreHorizontal,
  MessageSquare,
  ShieldAlert,
  X,
  FileCheck2,
} from 'lucide-react';

export default function CaseInvestigationPage() {
  const params = useParams();
  const caseId = (params?.id as string) || 'CASE-2024-0087';

  // Load initial case from mock data or fallback to CASE-2024-0087
  const initialCase: CaseRecord =
    MOCK_CASES[caseId] || MOCK_CASES['CASE-2024-0087'];

  const [currentCase, setCurrentCase] = useState<CaseRecord>(initialCase);
  const [activeTab, setActiveTab] = useState<string>('details');
  const [clarificationModalOpen, setClarificationModalOpen] = useState(false);
  const [clarificationReason, setClarificationReason] = useState('Dual admission seat conflict');
  const [clarificationNotes, setClarificationNotes] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleRequestClarification = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      timestamp: 'Just now',
      event: `Clarification Requested: ${clarificationReason}`,
      actor: 'Regulator AICTE (Demo)',
      details: clarificationNotes || 'Official notice sent to institution nodal officers.',
    };

    setCurrentCase({
      ...currentCase,
      status: 'Under Review',
      timeline: [newEvent, ...currentCase.timeline],
    });

    setClarificationModalOpen(false);
    setClarificationNotes('');
    setFeedbackMessage('Clarification request dispatched to both college nodal officers.');
    setTimeout(() => setFeedbackMessage(null), 5000);
  };

  const handleMarkResolved = () => {
    const newEvent = {
      timestamp: 'Just now',
      event: 'Case Marked Resolved by Authorized Reviewer',
      actor: 'Regulator AICTE (Demo)',
      details: 'Reviewed institutional NOC withdrawal slip. Academic record validated.',
    };

    setCurrentCase({
      ...currentCase,
      status: 'Marked Resolved',
      timeline: [newEvent, ...currentCase.timeline],
    });

    setFeedbackMessage('Case marked as Resolved. Audit record recorded.');
    setTimeout(() => setFeedbackMessage(null), 5000);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Top Header & Actions (Matching Screen 6) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <Link
              href="/app/findings"
              className="inline-flex items-center space-x-1.5 text-xs text-[#496D91] hover:text-[#102B48] mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Findings</span>
            </Link>

            <div className="flex items-center space-x-3">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
                {currentCase.caseId}
              </h1>
              <StatusBadge status={currentCase.status} />
            </div>

            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">{currentCase.summary}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setClarificationModalOpen(true)}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#102B48] bg-[#FFFEFA] border border-[#DEDCD3] hover:bg-[#FAF8F2] transition-colors shadow-subtle flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B58545]" />
              <span>Request Clarification</span>
            </button>

            <button
              onClick={handleMarkResolved}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors shadow-sm flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark Resolved</span>
            </button>

            <button
              className="p-2 rounded-lg text-[#6C7884] hover:text-[#102B48] hover:bg-[#FAF8F2] border border-[#DEDCD3]"
              title="More options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {feedbackMessage && (
          <div className="p-3 bg-[#EDF7F2] border border-[#C0E4D2] text-[#398565] rounded-xl text-xs flex items-center justify-between animate-in fade-in">
            <span>{feedbackMessage}</span>
            <button onClick={() => setFeedbackMessage(null)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Navigation Tabs (Screen 6) */}
        <div className="flex space-x-6 border-b border-[#DEDCD3] text-xs font-medium overflow-x-auto pb-px">
          {[
            { id: 'details', label: 'Case Details' },
            { id: 'records', label: 'Enrolment Records' },
            { id: 'validation', label: 'Validation Results' },
            { id: 'rules', label: 'Rule Context' },
            { id: 'docs', label: 'Source Documents' },
            { id: 'audit', label: 'Audit Trail' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#102B48] text-[#102B48] font-bold'
                  : 'border-transparent text-[#6C7884] hover:text-[#102B48]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Case Details (Three columns + Right Timeline - Matching Screen 6) */}
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Col 1: Student Reference */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 shadow-warm space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C97A2] block">
                  Student Reference
                </span>
                <div className="space-y-1">
                  <div className="font-mono text-base font-bold text-[#102B48]">
                    {currentCase.apaarRef}
                  </div>
                  <div className="text-sm font-semibold text-[#26384A]">
                    {currentCase.studentName}
                  </div>
                  <div className="text-xs text-[#6C7884]">
                    {currentCase.gender} • {currentCase.dob}
                  </div>
                  <div className="pt-2">
                    <StatusBadge status="Valid format" size="sm" />
                  </div>
                </div>
              </div>

              {/* Triggered Rule Box */}
              <div className="bg-[#FEF7EC] border border-[#F6DFB5] rounded-2xl p-4 shadow-warm space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-[#102B48]">
                  <AlertTriangle className="w-4 h-4 text-[#E0A34A] flex-shrink-0" />
                  <span>
                    {currentCase.ruleTriggered.code}: {currentCase.ruleTriggered.title}{' '}
                    <span className="text-[10px] text-[#B58545] font-normal">
                      {currentCase.ruleTriggered.version}
                    </span>
                  </span>
                </div>
                <p className="text-[11px] text-[#6C7884] leading-relaxed">
                  {currentCase.ruleTriggered.text}
                </p>
                <div className="pt-2">
                  <Link
                    href="/app/rules"
                    className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] inline-flex items-center space-x-1"
                  >
                    <span>View Rule Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 2: Institution A Record */}
            <div className="lg:col-span-3 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 shadow-warm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#102B48]" />
                    <span className="text-xs font-bold text-[#102B48]">Institution A</span>
                  </div>
                  <StatusBadge status="Active" size="sm" />
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="font-semibold text-[#102B48]">
                    {currentCase.institutionA.institutionName}
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Programme</span>
                    <span className="font-semibold text-[#102B48]">
                      {currentCase.institutionA.programme}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Academic Year</span>
                    <span className="font-mono">{currentCase.institutionA.academicYear}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Admission Date</span>
                    <span>{currentCase.institutionA.admissionDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Enrolment Status</span>
                    <span className="text-[#398565] font-medium">
                      {currentCase.institutionA.enrolmentStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex justify-between text-xs">
                <span className="text-[#6C7884]">Submission ID:</span>
                <Link
                  href="/app/submissions"
                  className="font-mono text-[#496D91] hover:underline"
                >
                  {currentCase.institutionA.submissionId}
                </Link>
              </div>
            </div>

            {/* Col 3: Institution B Record */}
            <div className="lg:col-span-3 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 shadow-warm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#102B48]" />
                    <span className="text-xs font-bold text-[#102B48]">Institution B</span>
                  </div>
                  <StatusBadge status="Active" size="sm" />
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="font-semibold text-[#102B48]">
                    {currentCase.institutionB.institutionName}
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100 bg-amber-50/60 p-1 rounded">
                    <span className="text-[#6C7884]">Programme</span>
                    <span className="font-semibold text-[#B58545]">
                      {currentCase.institutionB.programme}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Academic Year</span>
                    <span className="font-mono">{currentCase.institutionB.academicYear}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Admission Date</span>
                    <span>{currentCase.institutionB.admissionDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#6C7884]">Enrolment Status</span>
                    <span className="text-[#398565] font-medium">
                      {currentCase.institutionB.enrolmentStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex justify-between text-xs">
                <span className="text-[#6C7884]">Submission ID:</span>
                <Link
                  href="/app/submissions"
                  className="font-mono text-[#496D91] hover:underline"
                >
                  {currentCase.institutionB.submissionId}
                </Link>
              </div>
            </div>

            {/* Col 4: Case Timeline (Screen 6 Right Column) */}
            <div className="lg:col-span-3 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-5 shadow-warm">
              <h3 className="font-serif text-sm font-bold text-[#102B48] pb-3 border-b border-gray-100">
                Case Timeline
              </h3>

              <div className="mt-4 space-y-5 relative">
                {/* Vertical Timeline bar */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#DEDCD3]" />

                {currentCase.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start space-x-3 text-xs">
                    <div className="w-5 h-5 rounded-full bg-[#102B48] border-2 border-white text-white flex items-center justify-center text-[10px] z-10 flex-shrink-0">
                      •
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#8C97A2] block">
                        {item.timestamp}
                      </span>
                      <p className="font-semibold text-[#102B48] mt-0.5">{item.event}</p>
                      {item.details && (
                        <p className="text-[11px] text-[#6C7884] mt-0.5">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Enrolment Records */}
        {activeTab === 'records' && (
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Normalized Enrolment Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] font-mono text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Field</th>
                    <th className="py-2.5 px-3">Institution A (ABC Tech)</th>
                    <th className="py-2.5 px-3">Institution B (PQR Eng)</th>
                    <th className="py-2.5 px-3">Variance / Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DEDCD3]">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-[#102B48]">APAAR ID</td>
                    <td className="py-2 px-3 font-mono">ABCD1234EF56</td>
                    <td className="py-2 px-3 font-mono">ABCD1234EF56</td>
                    <td className="py-2 px-3 text-[#398565]">Identical match (100%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-[#102B48]">Candidate Name</td>
                    <td className="py-2 px-3">Rohan Mehta</td>
                    <td className="py-2 px-3">Rohan Mehta</td>
                    <td className="py-2 px-3 text-[#398565]">Normalized match</td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td className="py-2 px-3 font-semibold text-[#102B48]">Programme</td>
                    <td className="py-2 px-3 font-medium">B.Tech (CSE)</td>
                    <td className="py-2 px-3 font-medium text-[#B58545]">B.Tech (ECE)</td>
                    <td className="py-2 px-3 text-[#E0A34A] font-semibold">Dual Degree Overlap</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-[#102B48]">Admission Date</td>
                    <td className="py-2 px-3">12 Aug 2024</td>
                    <td className="py-2 px-3">20 Aug 2024</td>
                    <td className="py-2 px-3 text-[#6C7884]">+8 days difference</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Validation Results */}
        {activeTab === 'validation' && (
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Automated Rule Evaluation Log
            </h3>
            <div className="p-4 bg-[#FEF7EC] border border-[#F6DFB5] rounded-xl space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#102B48] font-bold">
                <AlertTriangle className="w-4 h-4 text-[#E0A34A]" />
                <span>Deterministic Check: R-ENR-001 FAILED</span>
              </div>
              <p className="text-[#6C7884]">
                The rule detects overlapping full-time enrolments across different institutions. The
                student is registered under ABC Institute of Technology and PQR Engineering College
                simultaneously.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: Rule Context */}
        {activeTab === 'rules' && (
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Rule Specification Context
            </h3>
            <div className="space-y-3 text-xs text-[#26384A]">
              <div>
                <span className="text-[#6C7884] block font-mono text-[10px]">RULE IDENTIFIER</span>
                <span className="font-mono font-bold text-sm text-[#102B48]">
                  R-ENR-001 (Version 1.2)
                </span>
              </div>
              <div>
                <span className="text-[#6C7884] block font-mono text-[10px]">REGULATORY CLAUSE</span>
                <p className="bg-[#FAF8F2] p-3 rounded border border-[#DEDCD3] text-[#496D91]">
                  &ldquo;A student shall not be enrolled in more than one AICTE-approved institution
                  in the same academic year for the same programme, unless an approved exception
                  applies.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Source Documents */}
        {activeTab === 'docs' && (
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-3 text-xs">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Associated Batch Submissions
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#102B48]">
                    SUB-2024-0010 (student_data.xlsx)
                  </span>
                  <p className="text-[11px] text-[#6C7884]">
                    Submitted by ABC Institute of Technology on 10 Aug 2024
                  </p>
                </div>
                <Link
                  href="/app/submissions"
                  className="text-xs font-semibold text-[#102B48] hover:underline"
                >
                  Inspect Batch →
                </Link>
              </div>
              <div className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#102B48]">
                    SUB-2024-0048 (enrolment_2024_v2.csv)
                  </span>
                  <p className="text-[11px] text-[#6C7884]">
                    Submitted by PQR Engineering College on 12 Aug 2024
                  </p>
                </div>
                <Link
                  href="/app/submissions"
                  className="text-xs font-semibold text-[#102B48] hover:underline"
                >
                  Inspect Batch →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: Audit Trail */}
        {activeTab === 'audit' && (
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Chronological Audit Ledger
            </h3>
            <div className="space-y-3">
              {currentCase.timeline.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg text-xs space-y-1"
                >
                  <div className="flex justify-between font-mono text-[10px] text-[#8C97A2]">
                    <span>{t.timestamp}</span>
                    <span>Actor: {t.actor || 'System'}</span>
                  </div>
                  <p className="font-bold text-[#102B48]">{t.event}</p>
                  {t.details && <p className="text-[#6C7884]">{t.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL: Request Clarification Form */}
        {clarificationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <form
              onSubmit={handleRequestClarification}
              className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl max-w-md w-full p-6 shadow-dropdown space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-serif text-lg font-bold text-[#102B48]">
                  Request Clarification
                </h3>
                <button
                  type="button"
                  onClick={() => setClarificationModalOpen(false)}
                  className="p-1 text-[#6C7884] hover:text-[#102B48]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#6C7884] font-medium mb-1">Select Reason:</label>
                  <select
                    value={clarificationReason}
                    onChange={(e) => setClarificationReason(e.target.value)}
                    className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                  >
                    <option value="Dual admission seat conflict">
                      Dual admission seat conflict
                    </option>
                    <option value="Unreported candidate withdrawal">
                      Unreported candidate withdrawal
                    </option>
                    <option value="Typographical APAAR entry error">
                      Typographical APAAR entry error
                    </option>
                    <option value="Lateral entry migration verification">
                      Lateral entry migration verification
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#6C7884] font-medium mb-1">
                    Notes for Institution Nodal Officers:
                  </label>
                  <textarea
                    rows={3}
                    value={clarificationNotes}
                    onChange={(e) => setClarificationNotes(e.target.value)}
                    placeholder="Provide specific document submission requests (e.g. seat cancellation slip, transfer certificate)..."
                    className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setClarificationModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#102B48] bg-[#FAF8F2] border border-[#DEDCD3] hover:bg-[#EAF0F6]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </AppShell>
  );
}

