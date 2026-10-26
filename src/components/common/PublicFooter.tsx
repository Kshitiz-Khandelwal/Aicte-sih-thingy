import React from 'react';
import Link from 'next/link';
import { Emblem } from './Emblem';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F2] border-t border-[#DEDCD3] pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-3">
              <Emblem size={32} />
              <div>
                <span className="font-serif font-bold text-lg text-[#102B48]">APAAR</span>
                <span className="block text-[9px] tracking-widest text-[#6C7884] uppercase">
                  Enrolment Integrity
                </span>
              </div>
            </div>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Student Data Management and Verification Platform for AICTE-Approved Institutions.
            </p>
            <div className="text-[11px] text-[#8C97A2] pt-2">
              Team: <strong className="text-[#102B48]">Tragic Bytes</strong> · Problem Statement ID:{' '}
              <strong className="text-[#102B48]">26263</strong>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102B48] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#496D91]">
              <li>
                <Link href="/" className="hover:text-[#102B48] transition-colors">
                  Public Landing
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#102B48] transition-colors">
                  How It Works (Workflow)
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#102B48] transition-colors">
                  Product & Capabilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102B48] mb-3">
              Prototype Applications
            </h4>
            <ul className="space-y-2 text-xs text-[#496D91]">
              <li>
                <Link href="/app/dashboard" className="hover:text-[#102B48] transition-colors">
                  Regulator Integrity Observatory
                </Link>
              </li>
              <li>
                <Link href="/app/submissions" className="hover:text-[#102B48] transition-colors">
                  Institution Submission Studio
                </Link>
              </li>
              <li>
                <Link href="/app/findings" className="hover:text-[#102B48] transition-colors">
                  Validation Findings
                </Link>
              </li>
              <li>
                <Link href="/app/cases/CASE-2024-0087" className="hover:text-[#102B48] transition-colors">
                  Case Investigation CASE-2024-0087
                </Link>
              </li>
              <li>
                <Link href="/app/rules" className="hover:text-[#102B48] transition-colors">
                  Deterministic Rule Registry
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102B48] mb-3">
              Regulatory Scope
            </h4>
            <p className="text-xs text-[#6C7884] leading-relaxed">
              Designed for AICTE technical institutions to standardize, link, validate and resolve
              enrolment records with auditable traceability.
            </p>
            <div className="p-2.5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-md text-[11px] text-[#6C7884]">
              <strong className="text-[#B58545]">Notice:</strong> Prototype demonstration interface.
              All records, names, and APAAR identifiers are synthetic demonstration data.
            </div>
          </div>
        </div>

        <div className="border-t border-[#DEDCD3] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6C7884]">
          <p>© 2024–2025 APAAR Enrolment Integrity Platform · Academic Prototype</p>
          <p className="mt-2 sm:mt-0 font-mono text-[10px] text-[#8C97A2]">
            INGEST → LINK → VALIDATE → RESOLVE
          </p>
        </div>
      </div>
    </footer>
  );
};

