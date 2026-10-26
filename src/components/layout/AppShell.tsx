'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Emblem } from '@/components/common/Emblem';
import { DemoLabel } from '@/components/common/DemoLabel';
import {
  LayoutDashboard,
  Building2,
  GraduationCap,
  AlertCircle,
  GitCompare,
  BookOpen,
  FileCheck2,
  UploadCloud,
  FileSpreadsheet,
  HelpCircle,
  UserCheck,
  Bell,
  ChevronDown,
  Menu,
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  User,
} from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

export type UserRole = 'regulator' | 'institution';

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const [role, setRole] = useState<UserRole>('regulator');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Automatically switch role if visiting institution-specific page
  useEffect(() => {
    if (pathname.includes('/submissions') || pathname.includes('/my-submissions') || pathname.includes('/profile') || pathname.includes('/corrections')) {
      setRole('institution');
    }
  }, [pathname]);

  const regulatorLinks = [
    { label: 'Overview', href: '/app/dashboard', icon: LayoutDashboard },
    { label: 'Institutions', href: '/app/institutions', icon: Building2 },
    { label: 'Intake & Enrolment', href: '/app/intake', icon: GraduationCap },
    { label: 'Validation Findings', href: '/app/findings', icon: AlertCircle },
    { label: 'Cross-Institution Review', href: '/app/cases', icon: GitCompare },
    { label: 'Rule Registry', href: '/app/rules', icon: BookOpen },
    { label: 'Audit & Reports', href: '/app/audit-reports', icon: FileCheck2 },
  ];

  const institutionLinks = [
    { label: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
    { label: 'Data Submission', href: '/app/submissions', icon: UploadCloud },
    { label: 'My Submissions', href: '/app/my-submissions', icon: FileSpreadsheet },
    { label: 'Validation Findings', href: '/app/findings', icon: AlertCircle },
    { label: 'Correction Requests', href: '/app/corrections', icon: FileCheck2 },
    { label: 'Institution Profile', href: '/app/profile', icon: UserCheck },
    { label: 'Help & Support', href: '/app/help', icon: HelpCircle },
  ];

  const currentLinks = role === 'regulator' ? regulatorLinks : institutionLinks;

  return (
    <div className="min-h-screen flex bg-[#F7F4EC]">
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#102B48] text-[#EAF0F6] border-r border-[#173652] transition-all duration-300 z-30 flex-shrink-0 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Brand header */}
        <div className="h-20 flex items-center px-5 border-b border-[#1E476B]/40 justify-between">
          <Link href="/" className="flex items-center space-x-3 overflow-hidden">
            <Emblem size={34} />
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-lg tracking-tight text-white leading-none">
                  APAAR
                </span>
                <span className="text-[9px] tracking-[0.18em] text-gray-300 uppercase mt-1 leading-none truncate">
                  Enrolment Integrity
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Role Switcher Pill */}
        <div className="px-3.5 py-3 border-b border-[#1E476B]/30">
          {!collapsed ? (
            <div className="bg-[#173652] p-1 rounded-lg flex items-center text-xs">
              <button
                onClick={() => setRole('regulator')}
                className={`flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-all ${
                  role === 'regulator'
                    ? 'bg-[#102B48] text-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Regulator
              </button>
              <button
                onClick={() => setRole('institution')}
                className={`flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-all ${
                  role === 'institution'
                    ? 'bg-[#102B48] text-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Institution
              </button>
            </div>
          ) : (
            <button
              onClick={() => setRole(role === 'regulator' ? 'institution' : 'regulator')}
              className="w-full py-1 text-center font-mono text-[10px] bg-[#173652] rounded text-amber-300 hover:bg-[#1E476B]"
              title={`Switch role (currently ${role})`}
            >
              {role === 'regulator' ? 'REG' : 'INST'}
            </button>
          )}
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {currentLinks.map((item) => {
            const Icon = item.icon;
            // Exact or sub-path match
            const isActive =
              pathname === item.href ||
              (item.href !== '/app/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#1E476B] text-white font-semibold shadow-inner'
                    : 'text-gray-300 hover:bg-[#173652]/70 hover:text-white'
                } ${collapsed ? 'justify-center' : 'space-x-3'}`}
                title={collapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${
                    isActive ? 'text-amber-300' : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer Identity & Collapse */}
        <div className="p-3.5 border-t border-[#1E476B]/40 space-y-3">
          <div className="flex items-center space-x-3 px-1">
            <div className="w-8 h-8 rounded-full bg-[#1E476B] border border-[#496D91] flex items-center justify-center text-xs font-bold text-amber-300 flex-shrink-0">
              {role === 'regulator' ? 'RO' : 'CI'}
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-white truncate">
                  {role === 'regulator' ? 'Regulator' : 'College Admin'}
                </p>
                <p className="text-[10px] text-gray-300 truncate">
                  {role === 'regulator' ? 'AICTE (Demo)' : 'ABC Institute of Tech'}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center space-x-1.5 py-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-[#173652] rounded transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <>
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-[#FFFEFA] border-b border-[#DEDCD3] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#102B48] hover:bg-[#EAF0F6] rounded"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Back to Public Site link */}
            <Link
              href="/"
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-[#496D91] hover:text-[#102B48] transition-colors py-1 px-2 rounded hover:bg-[#EAF0F6]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Public Portal</span>
            </Link>

            <span className="hidden sm:inline text-gray-300">|</span>

            <DemoLabel className="hidden lg:inline-flex" />
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-4">
            {/* Academic Year Selector */}
            <div className="flex items-center space-x-1.5 text-xs text-[#26384A]">
              <span className="hidden sm:inline text-[#6C7884]">Academic Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-[#FAF8F2] border border-[#DEDCD3] text-[#102B48] rounded px-2.5 py-1 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#102B48] cursor-pointer"
              >
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
              </select>
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-1.5 text-[#496D91] hover:text-[#102B48] hover:bg-[#EAF0F6] rounded-full relative transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#FFFEFA] border border-[#DEDCD3] rounded-lg shadow-dropdown p-3 z-50 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-semibold text-[#102B48]">System Alerts (Demo)</span>
                    <span className="text-[10px] text-[#6C7884]">2 Unread</span>
                  </div>
                  <div className="py-2 space-y-2">
                    <div className="p-2 bg-[#FEF7EC] rounded border border-[#F6DFB5]">
                      <p className="font-medium text-[#102B48]">CASE-2024-0087 Marked for Review</p>
                      <p className="text-[11px] text-[#6C7884] mt-0.5">
                        Cross-enrolment flagged between ABC Institute and PQR College.
                      </p>
                    </div>
                    <div className="p-2 bg-[#EAF0F6] rounded border border-[#DEDCD3]">
                      <p className="font-medium text-[#102B48]">Submission SUB-2024-0048 Validated</p>
                      <p className="text-[11px] text-[#6C7884] mt-0.5">
                        1,245 records verified with 0 schema violations.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <div className="flex items-center space-x-2 border-l border-[#DEDCD3] pl-3">
              <div className="w-8 h-8 rounded-full bg-[#102B48] text-white flex items-center justify-center text-xs font-semibold">
                {role === 'regulator' ? 'RO' : 'CI'}
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative w-72 bg-[#102B48] text-white flex flex-col p-4 shadow-xl z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E476B]">
                <div className="flex items-center space-x-2">
                  <Emblem size={28} />
                  <span className="font-serif font-bold text-lg">APAAR</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-3">
                <div className="bg-[#173652] p-1 rounded flex text-xs">
                  <button
                    onClick={() => setRole('regulator')}
                    className={`flex-1 py-1 rounded ${
                      role === 'regulator' ? 'bg-[#102B48] text-white' : 'text-gray-300'
                    }`}
                  >
                    Regulator
                  </button>
                  <button
                    onClick={() => setRole('institution')}
                    className={`flex-1 py-1 rounded ${
                      role === 'institution' ? 'bg-[#102B48] text-white' : 'text-gray-300'
                    }`}
                  >
                    Institution
                  </button>
                </div>
              </div>

              <nav className="flex-1 space-y-1.5 overflow-y-auto pt-2">
                {currentLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 rounded text-sm text-gray-200 hover:bg-[#1E476B]"
                  >
                    <item.icon className="w-4 h-4 text-amber-300" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#1E476B] text-xs text-gray-300">
                <Link
                  href="/"
                  className="flex items-center space-x-2 py-2 text-amber-300 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Public Website</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Page Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

