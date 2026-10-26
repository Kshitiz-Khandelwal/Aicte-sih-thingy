'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_CORRECTIONS } from '@/data/mockData';
import { CorrectionRequest } from '@/types';
import { FileCheck2, Search, X, CheckCircle2, Clock } from 'lucide-react';

export default function CorrectionsPage() {
  const [corrections, setCorrections] = useState<CorrectionRequest[]>(MOCK_CORRECTIONS);
  const [selectedReq, setSelectedReq] = useState<CorrectionRequest | null>(null);

  const handleUpdateStatus = (newStatus: 'Approved' | 'Declined' | 'Under Review') => {
    if (!selectedReq) return;
    const updated = corrections.map((c) =>
      c.id === selectedReq.id ? { ...c, status: newStatus } : c
    );
    setCorrections(updated);
    setSelectedReq({ ...selectedReq, status: newStatus });
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Correction Requests
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Review requests submitted by institutions to amend records, update APAAR references,
              or record seat withdrawals.
            </p>
          </div>

          <div className="text-xs font-mono text-[#6C7884] bg-[#FAF8F2] px-3 py-1 rounded-lg border border-[#DEDCD3]">
            {corrections.length} Correction Tickets
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Request ID</th>
                  <th className="py-3 px-4">Institution</th>
                  <th className="py-3 px-4">Associated Entity</th>
                  <th className="py-3 px-4">Reason / Justification</th>
                  <th className="py-3 px-4">Requested By</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {corrections.map((corr) => (
                  <tr key={corr.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#102B48]">{corr.id}</td>
                    <td className="py-3 px-4 font-medium text-[#102B48]">{corr.institutionName}</td>
                    <td className="py-3 px-4 font-mono text-[#496D91]">
                      {corr.caseId ? (
                        <Link
                          href={`/app/cases/${corr.caseId}`}
                          className="hover:underline text-[#B58545] font-semibold"
                        >
                          {corr.caseId}
                        </Link>
                      ) : (
                        corr.submissionId
                      )}
                    </td>
                    <td className="py-3 px-4 text-[#6C7884] max-w-xs truncate">{corr.reason}</td>
                    <td className="py-3 px-4 text-[#26384A]">{corr.requestedBy}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={corr.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setSelectedReq(corr)}
                        className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] underline underline-offset-2"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Review Correction Request */}
        {selectedReq && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl max-w-lg w-full p-6 shadow-dropdown space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#102B48]">
                    Correction Request {selectedReq.id}
                  </h3>
                  <p className="text-xs text-[#6C7884]">{selectedReq.institutionName}</p>
                </div>
                <button
                  onClick={() => setSelectedReq(null)}
                  className="p-1 rounded text-[#6C7884] hover:text-[#102B48]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg">
                  <span className="font-semibold text-[#102B48] block mb-1">
                    Reason Stated by College:
                  </span>
                  <p className="text-[#496D91] leading-relaxed">{selectedReq.reason}</p>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Officer in Charge</span>
                  <span>{selectedReq.requestedBy}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Date Submitted</span>
                  <span>{selectedReq.dateCreated}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Current Ticket Status</span>
                  <StatusBadge status={selectedReq.status} size="sm" />
                </div>
                {selectedReq.notes && (
                  <div className="text-[11px] text-[#6C7884] italic">
                    Note: {selectedReq.notes}
                  </div>
                )}
              </div>

              {/* Status Update Action Buttons */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#6C7884]">Update Outcome:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdateStatus('Approved')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#EDF7F2] text-[#398565] border border-[#C0E4D2] hover:bg-[#d8f0e3]"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleUpdateStatus('Declined')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FDF0EE] text-[#C95F55] border border-[#F3CAC6] hover:bg-[#fad8d5]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => setSelectedReq(null)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#102B48] bg-[#FAF8F2] border border-[#DEDCD3]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

