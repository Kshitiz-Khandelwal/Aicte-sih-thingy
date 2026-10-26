'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Building2, Save, CheckCircle2, UserCheck, Shield } from 'lucide-react';

export default function ProfilePage() {
  const [instName] = useState('ABC Institute of Technology');
  const [instCode] = useState('AICTE-1-102934');
  const [contactName, setContactName] = useState('Dr. Suresh Varma');
  const [contactRole, setContactRole] = useState('Dean Academics & Nodal Officer');
  const [email, setEmail] = useState('academics@abc-tech.ac.in');
  const [phone, setPhone] = useState('+91 22 2847 9100');
  const [autoReconcile, setAutoReconcile] = useState(true);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <AppShell>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#DEDCD3]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B48]">
              Institution Profile & Configuration
            </h1>
            <p className="text-xs sm:text-sm text-[#6C7884] mt-0.5">
              Configured AICTE registration parameters and nodal contact information for ABC
              Institute of Technology.
            </p>
          </div>

          <StatusBadge status="Compliant" />
        </div>

        {savedSuccess && (
          <div className="p-3 bg-[#EDF7F2] border border-[#C0E4D2] text-[#398565] rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Institution profile settings saved to local demonstration session.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Institutional Information Card */}
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-base font-bold text-[#102B48] pb-2 border-b border-gray-100 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-[#102B48]" />
              <span>AICTE Accreditation Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#6C7884] font-medium mb-1">
                  Institution Name (Read-only):
                </label>
                <input
                  type="text"
                  disabled
                  value={instName}
                  className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2.5 text-[#102B48] font-semibold opacity-80 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">
                  AICTE Permanent ID (Read-only):
                </label>
                <input
                  type="text"
                  disabled
                  value={instCode}
                  className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2.5 font-mono text-[#102B48] opacity-80 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">Affiliation Type:</label>
                <input
                  type="text"
                  disabled
                  value="Autonomous Technical Institution (Grade A++)"
                  className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2.5 text-[#102B48] opacity-80 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">
                  State & Regional Jurisdiction:
                </label>
                <input
                  type="text"
                  disabled
                  value="Maharashtra (Western Regional Office)"
                  className="w-full bg-[#FAF8F2] border border-[#DEDCD3] rounded-lg p-2.5 text-[#102B48] opacity-80 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Nodal Officer Contact Information Card */}
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-4">
            <h3 className="font-serif text-base font-bold text-[#102B48] pb-2 border-b border-gray-100 flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-[#102B48]" />
              <span>Nodal Officer Contact Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#6C7884] font-medium mb-1">Contact Officer:</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg p-2 text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">Designation / Role:</label>
                <input
                  type="text"
                  value={contactRole}
                  onChange={(e) => setContactRole(e.target.value)}
                  className="w-full bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg p-2 text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">Official Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg p-2 font-mono text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                />
              </div>

              <div>
                <label className="block text-[#6C7884] font-medium mb-1">Contact Phone:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg p-2 font-mono text-[#102B48] focus:outline-none focus:ring-1 focus:ring-[#102B48]"
                />
              </div>
            </div>
          </div>

          {/* Submission Preferences */}
          <div className="bg-[#FFFEFA] border border-[#DEDCD3] rounded-2xl p-6 shadow-warm space-y-3">
            <h3 className="font-serif text-base font-bold text-[#102B48] pb-2 border-b border-gray-100">
              Notification & Validation Preferences
            </h3>

            <div className="space-y-3 text-xs">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoReconcile}
                  onChange={(e) => setAutoReconcile(e.target.checked)}
                  className="w-4 h-4 text-[#102B48] rounded border-[#DEDCD3] focus:ring-[#102B48]"
                />
                <span className="text-[#26384A]">
                  Enable automated preliminary cross-reconciliation for instant candidate warning
                  diagnostics.
                </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.checked)}
                  className="w-4 h-4 text-[#102B48] rounded border-[#DEDCD3] focus:ring-[#102B48]"
                />
                <span className="text-[#26384A]">
                  Send email notifications whenever an intake finding or cross-institution
                  clarification is issued.
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#102B48] hover:bg-[#173652] transition-colors flex items-center space-x-2 shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Profile Settings</span>
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}

