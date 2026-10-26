'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import {
  HelpCircle,
  FileQuestion,
  Send,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  FileSpreadsheet,
} from 'lucide-react';

export default function HelpPage() {
  const [supportCategory, setSupportCategory] = useState('Submission Format Issue');
  const [supportMessage, setSupportMessage] = useState('');
  const [submittedAlert, setSubmittedAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;
    setSubmittedAlert(true);
    setSupportMessage('');
    setTimeout(() => setSubmittedAlert(false), 5000);
  };

  const faqs = [
    {
      q: 'What is the required CSV/XLSX column format for student records?',
      a: 'The submission file must contain the following standard header columns: `apaar_ref` (12 alphanumeric), `student_name`, `dob` (YYYY-MM-DD), `gender`, `programme_code`, `academic_year`, `admission_date`, and `quota_type`.',
    },
    {
      q: 'Does a "Needs Review" status mean a student has committed enrolment fraud?',
      a: 'No. Potential record matches represent administrative variances such as delayed cancellation of earlier counseling rounds, migration between polytechnic and degree, or typographical entries. All flags are routed to authorized nodal officers for clarification.',
    },
    {
      q: 'How does sanctioned intake validation work?',
      a: 'The engine totals all active confirmed enrolments for a programme and compares against the AICTE sanctioned quota plus permitted supernumerary seats. Any surplus triggers an automatic advisory finding.',
    },
    {
      q: 'How can an institution resolve a cross-match conflict?',
      a: 'Institutions can submit a Correction Request in the portal attaching candidate withdrawal receipts or updated APAAR credentials. Once reviewed, the case status transitions to Marked Resolved.',
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div className="pb-2 border-b border-[#DEDCD3]">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
            Help & Documentation Support
          </h1>
          <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
            Operational guide, submission schema specifications, and simulated helpdesk support.
          </p>
        </div>

        {/* Workflow & Schema Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm space-y-2">
            <div className="flex items-center space-x-2 text-[#102B48]">
              <FileSpreadsheet className="w-5 h-5 text-[#B58545]" />
              <h3 className="font-serif font-bold text-base">Submission Format Standards</h3>
            </div>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Files must be formatted with UTF-8 encoding. Maximum batch size is 50 MB (approx
              40,000 candidate records per upload). Header casing is automatically normalized.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#496D91] bg-[#EAF0F6] px-2 py-0.5 rounded">
                Schema: APAAR-AICTE-v2.4
              </span>
            </div>
          </div>

          <div className="p-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm space-y-2">
            <div className="flex items-center space-x-2 text-[#102B48]">
              <BookOpen className="w-5 h-5 text-[#398565]" />
              <h3 className="font-serif font-bold text-base">Lifecycle Status Glossary</h3>
            </div>
            <div className="space-y-1.5 text-xs text-[#6C7884]">
              <div className="flex items-center justify-between">
                <StatusBadge status="Validated" size="sm" />
                <span className="text-[11px]">Passes deterministic criteria & quotas</span>
              </div>
              <div className="flex items-center justify-between">
                <StatusBadge status="Needs Review" size="sm" />
                <span className="text-[11px]">Flagged for nodal clarification</span>
              </div>
              <div className="flex items-center justify-between">
                <StatusBadge status="Rejected" size="sm" />
                <span className="text-[11px]">Header or checksum formatting error</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#102B48] pb-2 border-b border-gray-100">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#DEDCD3] rounded-xl overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-3.5 bg-[#FAF8F2] font-semibold text-[#102B48] flex items-center justify-between text-left hover:bg-[#F7F4EC]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6C7884] transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="p-3.5 bg-[#FFFEFA] text-[#6C7884] leading-relaxed border-t border-[#DEDCD3]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Helpdesk Query Form */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#102B48] pb-2 border-b border-gray-100 flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-[#102B48]" />
            <span>Submit Prototype Support Query</span>
          </h3>

          {submittedAlert && (
            <div className="p-3 bg-[#EDF7F2] border border-[#C0E4D2] text-[#398565] rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>
                Demonstration query recorded. Simulated ticket queued for prototype session.
              </span>
            </div>
          )}

          <form onSubmit={handleSupportSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block text-[#6C7884] font-medium mb-1">Inquiry Category:</label>
              <select
                value={supportCategory}
                onChange={(e) => setSupportCategory(e.target.value)}
                className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
              >
                <option value="Submission Format Issue">Submission Format Issue</option>
                <option value="Cross-Institution Match Clarification">
                  Cross-Institution Match Clarification
                </option>
                <option value="Intake Cap Reconciliation">Intake Cap Reconciliation</option>
                <option value="Rule Interpretation Query">Rule Interpretation Query</option>
              </select>
            </div>

            <div>
              <label className="block text-[#6C7884] font-medium mb-1">
                Describe the Issue or Clarification Needed:
              </label>
              <textarea
                rows={3}
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                placeholder="Enter details regarding batch ID or rule reference..."
                className="w-full bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Demo Ticket</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppShell>
  );
}

