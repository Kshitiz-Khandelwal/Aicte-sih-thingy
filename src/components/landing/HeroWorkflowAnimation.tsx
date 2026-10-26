'use client';

import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, FileText, Server, CheckCircle2, AlertTriangle, Fingerprint, RefreshCw } from 'lucide-react';

export const HeroWorkflowAnimation: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full max-w-[580px] h-[460px] bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#DEDCD3 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* SVG Connecting Flow Lines with Animated Dashes and Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#496D91" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#B58545" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#102B48" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B8CAE" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#398565" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#102B48" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Institution A to Fingerprint Center (approx 390, 240) */}
        <path
          d="M 180 85 C 270 85, 300 220, 390 230"
          fill="none"
          stroke="#496D91"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-60"
        />
        {/* Animated flow pulse 1 */}
        <circle r="3.5" fill="#B58545">
          <animateMotion
            path="M 180 85 C 270 85, 300 220, 390 230"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Institution B to Fingerprint Center */}
        <path
          d="M 180 185 C 280 185, 310 230, 390 235"
          fill="none"
          stroke="#B58545"
          strokeWidth="1.5"
          className="opacity-75"
        />
        <circle r="3.5" fill="#E0A34A">
          <animateMotion
            path="M 180 185 C 280 185, 310 230, 390 235"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Institution C to Fingerprint Center */}
        <path
          d="M 180 285 C 260 285, 320 250, 390 240"
          fill="none"
          stroke="#496D91"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          className="opacity-60"
        />
        <circle r="3" fill="#496D91">
          <animateMotion
            path="M 180 285 C 260 285, 320 250, 390 240"
            dur="3.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Fan of fine radial reconciliation rays behind the fingerprint */}
        <g opacity="0.25">
          <line x1="390" y1="235" x2="330" y2="120" stroke="#B58545" strokeWidth="1" />
          <line x1="390" y1="235" x2="300" y2="150" stroke="#496D91" strokeWidth="1" />
          <line x1="390" y1="235" x2="280" y2="210" stroke="#102B48" strokeWidth="1" />
          <line x1="390" y1="235" x2="310" y2="290" stroke="#B58545" strokeWidth="1" />
          <line x1="390" y1="235" x2="350" y2="330" stroke="#496D91" strokeWidth="1" />
          <line x1="390" y1="235" x2="440" y2="160" stroke="#398565" strokeWidth="1.5" />
        </g>

        {/* Line from fingerprint up into Validated Card */}
        <path
          d="M 390 215 C 390 170, 420 145, 430 135"
          fill="none"
          stroke="#398565"
          strokeWidth="2"
          className="opacity-80"
        />
        <circle r="4" fill="#398565">
          <animateMotion
            path="M 390 215 C 390 170, 420 145, 430 135"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* TOP ROW: Header indicator & Live status */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#6C7884]">
            Enrolment Flow Architecture
          </span>
        </div>
        <button
          onClick={() => setActiveStage((prev) => (prev + 1) % 4)}
          className="flex items-center space-x-1 text-[11px] text-[#496D91] hover:text-[#102B48] bg-[#EAF0F6] px-2 py-0.5 rounded border border-[#DEDCD3] transition-colors"
          title="Cycle animation step"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          <span>Stage {activeStage + 1}/4</span>
        </button>
      </div>

      {/* MAIN VISUAL WORKSPACE: Left Institutions + Center Trail + Top Validated Card */}
      <div className="relative w-full h-[330px] z-10">
        {/* Left Institutions Stack */}
        <div className="absolute left-0 top-3 flex flex-col space-y-4 w-44">
          {/* Institution A */}
          <div
            className={`p-2.5 rounded-lg border bg-[#FFFEFA] shadow-subtle transition-all duration-500 ${
              activeStage === 0 || activeStage === 1
                ? 'border-[#496D91] ring-1 ring-[#496D91]/20 -translate-y-0.5'
                : 'border-[#DEDCD3]'
            }`}
          >
            <div className="flex items-start space-x-2">
              <div className="p-1.5 rounded bg-[#EAF0F6] text-[#173652] mt-0.5">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold text-[#102B48] truncate">Institution A</h4>
                <p className="text-[10px] text-[#6C7884]">Student Records</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] font-mono text-[#8C97A2]">CSV Upload</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Institution B */}
          <div
            className={`p-2.5 rounded-lg border bg-[#FFFEFA] shadow-subtle transition-all duration-500 ${
              activeStage === 1 || activeStage === 2
                ? 'border-[#B58545] ring-1 ring-[#B58545]/20 -translate-y-0.5'
                : 'border-[#DEDCD3]'
            }`}
          >
            <div className="flex items-start space-x-2">
              <div className="p-1.5 rounded bg-[#FDF4E5] text-[#B58545] mt-0.5">
                <FileSpreadsheet className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold text-[#102B48] truncate">Institution B</h4>
                <p className="text-[10px] text-[#6C7884]">Enrolment List</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] font-mono text-[#8C97A2]">XLSX Upload</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Institution C */}
          <div
            className={`p-2.5 rounded-lg border bg-[#FFFEFA] shadow-subtle transition-all duration-500 ${
              activeStage === 2 || activeStage === 3
                ? 'border-[#173652] ring-1 ring-[#173652]/20 -translate-y-0.5'
                : 'border-[#DEDCD3]'
            }`}
          >
            <div className="flex items-start space-x-2">
              <div className="p-1.5 rounded bg-[#EAF0F6] text-[#173652] mt-0.5">
                <Server className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold text-[#102B48] truncate">Institution C</h4>
                <p className="text-[10px] text-[#6C7884]">Programme Data</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] font-mono text-[#8C97A2]">API Submission</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temporary Conflict / Warning Callout (Animated) */}
        <div
          className={`absolute left-[195px] top-[148px] z-20 transition-all duration-700 ${
            activeStage === 1 || activeStage === 2
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <div className="flex items-center space-x-1.5 bg-[#FEF7EC] border border-[#F6DFB5] px-2 py-1 rounded shadow-sm text-[10px] text-[#B57C2B]">
            <AlertTriangle className="w-3 h-3 text-[#E0A34A]" />
            <span className="font-medium whitespace-nowrap">Duplicate APAAR Check</span>
          </div>
        </div>

        {/* Central Verifiable Trail Node (Fingerprint / Emblem) */}
        <div className="absolute right-[115px] top-[180px] flex flex-col items-center">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#102B48] text-white shadow-md border-2 border-[#B58545]">
            <Fingerprint className="w-7 h-7 text-[#D8A968]" />
            <div className="absolute inset-0 rounded-full border border-amber-300/40 animate-ping pointer-events-none" />
          </div>
          <div className="mt-2 text-center">
            <span className="text-[10px] font-mono font-bold text-[#102B48] block leading-none">
              01: Verifiable
            </span>
            <span className="text-[9px] text-[#6C7884] block mt-0.5">Enrolment Trail</span>
          </div>
        </div>

        {/* Top-Right "Validated Record" Card (Reference Screen 1) */}
        <div
          className={`absolute right-1 top-2 w-[190px] bg-[#FFFEFA] border border-[#C0E4D2] rounded-xl p-3 shadow-md transition-all duration-700 ${
            activeStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
          }`}
        >
          <div className="flex items-center space-x-1.5 pb-2 mb-2 border-b border-gray-100">
            <CheckCircle2 className="w-4 h-4 text-[#398565]" />
            <span className="text-xs font-semibold text-[#102B48]">Validated Record</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between text-[#6C7884]">
              <span>APAAR Ref</span>
              <span className="font-mono font-medium text-[#102B48]">ABCD1234XXXX</span>
            </div>
            <div className="flex justify-between text-[#6C7884]">
              <span>Institution</span>
              <span className="text-[#102B48] font-medium truncate max-w-[85px]">ABC Institute</span>
            </div>
            <div className="flex justify-between text-[#6C7884]">
              <span>Academic Year</span>
              <span className="text-[#102B48] font-mono">2024-2025</span>
            </div>
            <div className="flex justify-between items-center pt-1 text-[#6C7884]">
              <span>Status</span>
              <span className="inline-block px-1.5 py-0.2 bg-[#EDF7F2] text-[#398565] border border-[#C0E4D2] rounded text-[9px] font-medium">
                Validated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STEP CONTROLS (01 INGEST -> 02 LINK -> 03 VALIDATE -> 04 RESOLVE) */}
      <div className="pt-2 border-t border-[#DEDCD3] flex items-center justify-between text-[11px] z-10">
        {[
          { num: '01', title: 'Ingest' },
          { num: '02', title: 'Link' },
          { num: '03', title: 'Validate' },
          { num: '04', title: 'Resolve' },
        ].map((step, idx) => (
          <button
            key={step.num}
            onClick={() => setActiveStage(idx)}
            className={`flex items-center space-x-1.5 px-2 py-1 rounded transition-all ${
              activeStage === idx
                ? 'bg-[#102B48] text-white font-semibold shadow-sm'
                : 'text-[#6C7884] hover:text-[#102B48]'
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono ${
                activeStage === idx ? 'bg-[#B58545] text-white' : 'bg-[#EAF0F6] text-[#496D91]'
              }`}
            >
              {step.num}
            </span>
            <span className="hidden sm:inline uppercase tracking-wider text-[10px]">
              {step.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

