'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Emblem } from './Emblem';
import { Menu, X, ArrowRight } from 'lucide-react';

export const PublicHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/how-it-works#about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Institutions', href: '/app/submissions' },
    { label: 'For Regulators', href: '/app/dashboard' },
    { label: 'Resources', href: '/capabilities' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#DEDCD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <Emblem size={38} className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#102B48] font-bold leading-none">
              APAAR
            </span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-[#6C7884] uppercase mt-1 leading-none">
              Enrolment Integrity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#26384A]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#102B48] ${
                  isActive ? 'text-[#102B48] font-semibold' : 'text-[#496D91]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#102B48] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/app/dashboard"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#102B48] hover:bg-[#173652] active:scale-95 transition-all shadow-sm group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#102B48] rounded-md hover:bg-[#EAF0F6] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DEDCD3] bg-[#FFFEFA] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 border-b border-gray-100 ${
                  pathname === link.href ? 'text-[#102B48] font-bold' : 'text-[#496D91]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/app/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-[#102B48] hover:bg-[#173652]"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

