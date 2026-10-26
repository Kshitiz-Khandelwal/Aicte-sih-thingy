'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { MOCK_RULES } from '@/data/mockData';
import { RuleDefinition } from '@/types';
import { BookOpen, Search, Code, CheckCircle, Clock, ExternalLink, X } from 'lucide-react';

export default function RulesPage() {
  const [selectedRule, setSelectedRule] = useState<RuleDefinition | null>(MOCK_RULES[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ruleModalTab, setRuleModalTab] = useState<'definition' | 'test' | 'versions'>('definition');

  const filteredRules = MOCK_RULES.filter((r) => {
    return (
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Deterministic Rule Registry
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Auditable, version-controlled rules applied deterministically against student
              enrolment batches.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#6C7884] bg-[#FAF8F2] px-3 py-1 rounded-lg border border-[#DEDCD3]">
            <span>{filteredRules.length} Registered Rules</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-4 shadow-warm flex items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C97A2] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by rule code, name, or category..."
              className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
            />
          </div>
        </div>

        {/* 2-Column: Left Rules List + Right Rule Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Table / List */}
          <div className="lg:col-span-7 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl shadow-warm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F2] border-b border-[#DEDCD3] text-[#6C7884] uppercase font-mono text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Code & Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Version</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DEDCD3] text-[#26384A]">
                  {filteredRules.map((r) => (
                    <tr
                      key={r.id}
                      onClick={() => setSelectedRule(r)}
                      className={`cursor-pointer transition-colors ${
                        selectedRule?.id === r.id
                          ? 'bg-[#EAF0F6]/80 font-medium'
                          : 'hover:bg-[#F7F4EC]/60'
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="font-mono font-bold text-[#102B48]">{r.code}</div>
                        <div className="text-[#6C7884] text-[11px] truncate max-w-[200px]">
                          {r.name}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-[#FAF8F2] border border-[#DEDCD3] px-2 py-0.5 rounded text-[10px] text-[#496D91]">
                          {r.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[#B58545]">{r.version}</td>
                      <td className="py-3 px-4">
                        <StatusBadge status={r.status} size="sm" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-xs font-semibold text-[#102B48] underline underline-offset-2">
                          Inspect
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Inspector Panel */}
          {selectedRule && (
            <div className="lg:col-span-5 bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-mono text-[#8C97A2] uppercase">
                    Rule Inspector
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#102B48]">
                    {selectedRule.code} — {selectedRule.version}
                  </h3>
                </div>
                <StatusBadge status={selectedRule.status} size="sm" />
              </div>

              {/* Sub-tabs inside Inspector */}
              <div className="flex space-x-4 border-b border-[#DEDCD3] text-xs font-medium pb-2">
                <button
                  onClick={() => setRuleModalTab('definition')}
                  className={`transition-colors ${
                    ruleModalTab === 'definition'
                      ? 'text-[#102B48] font-bold border-b-2 border-[#102B48]'
                      : 'text-[#6C7884]'
                  }`}
                >
                  Specification
                </button>
                <button
                  onClick={() => setRuleModalTab('test')}
                  className={`transition-colors ${
                    ruleModalTab === 'test'
                      ? 'text-[#102B48] font-bold border-b-2 border-[#102B48]'
                      : 'text-[#6C7884]'
                  }`}
                >
                  Sample Execution
                </button>
                <button
                  onClick={() => setRuleModalTab('versions')}
                  className={`transition-colors ${
                    ruleModalTab === 'versions'
                      ? 'text-[#102B48] font-bold border-b-2 border-[#102B48]'
                      : 'text-[#6C7884]'
                  }`}
                >
                  Version Changelog
                </button>
              </div>

              {ruleModalTab === 'definition' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <h4 className="font-semibold text-[#102B48]">{selectedRule.name}</h4>
                    <p className="text-[#6C7884] leading-relaxed mt-1">
                      {selectedRule.description}
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg space-y-1">
                    <span className="text-[10px] font-mono text-[#8C97A2] uppercase">
                      Regulatory Source
                    </span>
                    <p className="text-[#496D91] font-medium">{selectedRule.sourceReference}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-[#102B48] block mb-1">
                      Configured Parameters:
                    </span>
                    <pre className="p-3 bg-[#102B48] text-amber-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                      {JSON.stringify(selectedRule.parameters, null, 2)}
                    </pre>
                  </div>

                  <div className="text-[10px] text-[#8C97A2]">
                    Last updated: {selectedRule.lastUpdated}
                  </div>
                </div>
              )}

              {ruleModalTab === 'test' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg">
                    <span className="text-[10px] font-mono text-[#8C97A2] uppercase block mb-1">
                      Sample Input Payload
                    </span>
                    <p className="text-[#26384A] font-mono">{selectedRule.sampleInput}</p>
                  </div>

                  <div className="p-3 bg-[#FEF7EC] border border-[#F6DFB5] rounded-lg">
                    <span className="text-[10px] font-mono text-[#B57C2B] uppercase block mb-1">
                      Deterministic Engine Output
                    </span>
                    <p className="text-[#102B48] font-mono font-semibold">
                      {selectedRule.sampleOutput}
                    </p>
                  </div>
                </div>
              )}

              {ruleModalTab === 'versions' && (
                <div className="space-y-2 text-xs">
                  <div className="p-2 border-b border-gray-100">
                    <span className="font-bold text-[#102B48]">{selectedRule.version} (Active)</span>
                    <p className="text-[#6C7884]">
                      Updated tolerance thresholds and added Luhn-AlphaMod36 validation.
                    </p>
                  </div>
                  <div className="p-2 text-[#8C97A2]">
                    <span>v1.0 (Deprecated)</span>
                    <p className="text-[11px]">Initial baseline implementation for SIH prototype.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

