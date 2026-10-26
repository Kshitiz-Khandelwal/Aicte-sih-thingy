'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_SUBMISSIONS } from '@/data/mockData';
import { SubmissionBatch } from '@/types';
import {
  UploadCloud,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  X,
  Eye,
  ArrowLeft,
  Loader2,
} from 'lucide-react';

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<SubmissionBatch[]>(MOCK_SUBMISSIONS);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submissionType, setSubmissionType] = useState<'New Submission' | 'Correction Submission'>('New Submission');
  const [programme, setProgramme] = useState('B.Tech (CSE)');
  const [remarks, setRemarks] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processSuccess, setProcessSuccess] = useState<string | null>(null);
  const [viewModalBatch, setViewModalBatch] = useState<SubmissionBatch | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setProcessSuccess(null);
    }
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile && !remarks) {
      alert('Please choose a file or enter submission notes to proceed.');
      return;
    }

    setIsProcessing(true);
    setProcessSuccess(null);

    // Simulated client-side validation interaction
    setTimeout(() => {
      const newBatch: SubmissionBatch = {
        id: `SUB-2024-00${Math.floor(50 + Math.random() * 40)}`,
        institutionId: 'INST-01',
        institutionName: 'ABC Institute of Technology',
        fileName: selectedFile ? selectedFile.name : 'enrolment_manual_upload.csv',
        fileSize: selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB` : '1.8 MB',
        date: 'Just now',
        recordsCount: Math.floor(800 + Math.random() * 600),
        academicYear: '2024-25',
        programme,
        status: 'Validated',
        submissionType,
        remarks: remarks || 'Standard verified batch submission',
      };

      setSubmissions([newBatch, ...submissions]);
      setIsProcessing(false);
      setProcessSuccess(`Successfully parsed and validated ${newBatch.recordsCount} student records.`);
      setSelectedFile(null);
      setRemarks('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1400);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Breadcrumb and Title Header (Screen 4) */}
        <div>
          <Link
            href="/app/dashboard"
            className="inline-flex items-center space-x-1.5 text-xs text-[#496D91] hover:text-[#102B48] mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
            Submit Enrolment Data
          </h1>
          <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
            Upload your student enrolment records for validation. Supports CSV and XLSX (Max 50 MB).
          </p>
        </div>

        {/* Processing Banner */}
        {processSuccess && (
          <div className="p-3.5 bg-[#EDF7F2] border border-[#C0E4D2] text-[#398565] rounded-xl flex items-center justify-between text-xs animate-in fade-in">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{processSuccess}</span>
            </div>
            <button
              onClick={() => setProcessSuccess(null)}
              className="text-[#398565] hover:opacity-80"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Top 2-Column Upload Form (Matching Screen 4) */}
        <form onSubmit={handleSimulateSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Drag & Drop File Upload Box */}
          <div className="lg:col-span-7 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm flex flex-col justify-center items-center text-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".csv,.xlsx,.xls"
              className="hidden"
              id="file-upload-input"
            />

            <div className="w-16 h-16 rounded-full bg-[#EAF0F6] text-[#102B48] flex items-center justify-center mb-4">
              <UploadCloud className="w-8 h-8 text-[#173652]" />
            </div>

            <h3 className="font-serif text-lg font-bold text-[#102B48]">
              Drag and drop your file here
            </h3>
            <p className="text-xs text-[#6C7884] mt-0.5">or click to browse from your computer</p>

            <p className="text-[11px] font-mono text-[#8C97A2] mt-2">
              Supports CSV, XLSX (Max 50 MB)
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 px-5 py-2 rounded-lg text-xs font-semibold text-[#102B48] bg-[#FAF8F2] border border-[#DEDCD3] hover:bg-[#EAF0F6] transition-colors shadow-subtle"
            >
              Choose File
            </button>

            {selectedFile && (
              <div className="mt-4 p-2.5 bg-[#EAF0F6] border border-[#DEDCD3] rounded-lg text-xs text-[#102B48] flex items-center space-x-2">
                <FileSpreadsheet className="w-4 h-4 text-[#102B48]" />
                <span className="font-semibold truncate max-w-[200px]">{selectedFile.name}</span>
                <span className="text-[10px] text-[#6C7884]">
                  ({(selectedFile.size / 1024).toFixed(0)} KB)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Submission Details & Trigger */}
          <div className="lg:col-span-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-serif text-base font-bold text-[#102B48] pb-3 border-b border-gray-100">
                Submission Details
              </h3>

              <div className="space-y-4 pt-3 text-xs">
                {/* Submission Type Radio */}
                <div>
                  <label className="block text-[#6C7884] font-medium mb-1.5">
                    Submission Type:
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer text-[#102B48]">
                      <input
                        type="radio"
                        name="submissionType"
                        checked={submissionType === 'New Submission'}
                        onChange={() => setSubmissionType('New Submission')}
                        className="text-[#102B48] focus:ring-[#102B48]"
                      />
                      <span>New Submission</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer text-[#102B48]">
                      <input
                        type="radio"
                        name="submissionType"
                        checked={submissionType === 'Correction Submission'}
                        onChange={() => setSubmissionType('Correction Submission')}
                        className="text-[#102B48] focus:ring-[#102B48]"
                      />
                      <span>Correction Submission</span>
                    </label>
                  </div>
                </div>

                {/* Programme Selector */}
                <div>
                  <label className="block text-[#6C7884] font-medium mb-1">
                    Programme (Optional):
                  </label>
                  <select
                    value={programme}
                    onChange={(e) => setProgramme(e.target.value)}
                    className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                  >
                    <option value="B.Tech (CSE)">B.Tech (CSE)</option>
                    <option value="B.Tech (ECE)">B.Tech (ECE)</option>
                    <option value="B.Tech (Mechanical)">B.Tech (Mechanical)</option>
                    <option value="MCA">Master of Computer Applications (MCA)</option>
                    <option value="MBA">Master of Business Administration (MBA)</option>
                  </select>
                </div>

                {/* Remarks Field */}
                <div>
                  <label className="block text-[#6C7884] font-medium mb-1">
                    Remarks (Optional):
                  </label>
                  <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Add any additional batch context..."
                    className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#102B48] hover:bg-[#173652] active:scale-95 transition-all shadow flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing & Validating Rules...</span>
                </>
              ) : (
                <>
                  <span>Upload and Process</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* BOTTOM: Recent Submissions Table (Matching Screen 4) */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#DEDCD3] flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-[#102B48]">Recent Submissions</h3>
            <span className="text-[11px] font-mono text-[#6C7884]">
              {submissions.length} Total Batches
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Submission ID</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">File Name</th>
                  <th className="py-3 px-4">Records</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                {submissions.map((sub, idx) => (
                  <tr key={sub.id} className="hover:bg-[#F7F4EC]/60 transition-colors">
                    <td className="py-3 px-4 font-mono text-[#8C97A2]">{idx + 1}</td>
                    <td className="py-3 px-4 font-mono font-semibold text-[#102B48]">{sub.id}</td>
                    <td className="py-3 px-4 text-[#6C7884]">{sub.date}</td>
                    <td className="py-3 px-4 font-mono text-[#496D91] flex items-center space-x-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#6C7884]" />
                      <span>{sub.fileName}</span>
                    </td>
                    <td className="py-3 px-4 font-medium">
                      {sub.recordsCount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={sub.status} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setViewModalBatch(sub)}
                        className="text-xs font-semibold text-[#102B48] hover:text-[#B58545] underline underline-offset-2"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: View Submission Detail */}
        {viewModalBatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl max-w-lg w-full p-6 shadow-dropdown space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#102B48]">
                    Submission {viewModalBatch.id}
                  </h3>
                  <p className="text-xs text-[#6C7884]">{viewModalBatch.institutionName}</p>
                </div>
                <button
                  onClick={() => setViewModalBatch(null)}
                  className="p-1 rounded text-[#6C7884] hover:text-[#102B48]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">File Name</span>
                  <span className="font-mono text-[#102B48]">{viewModalBatch.fileName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">File Size</span>
                  <span>{viewModalBatch.fileSize}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Date Processed</span>
                  <span>{viewModalBatch.date}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Validated Records</span>
                  <span className="font-bold text-[#102B48]">
                    {viewModalBatch.recordsCount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#6C7884]">Status</span>
                  <StatusBadge status={viewModalBatch.status} size="sm" />
                </div>
                <div className="py-2 text-[#6C7884]">
                  <span className="font-semibold text-[#102B48] block mb-0.5">Remarks:</span>
                  <p className="italic bg-[#FAF8F2] p-2 rounded border border-[#DEDCD3]">
                    {viewModalBatch.remarks || 'No remarks provided.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <Link
                  href="/app/findings"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors"
                >
                  Check Batch Findings
                </Link>
                <button
                  onClick={() => setViewModalBatch(null)}
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

