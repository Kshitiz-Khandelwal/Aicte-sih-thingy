import React from 'react';

interface DemoLabelProps {
  className?: string;
  variant?: 'inline' | 'floating' | 'banner';
}

export const DemoLabel: React.FC<DemoLabelProps> = ({ className = '', variant = 'inline' }) => {
  if (variant === 'floating') {
    return (
      <div
        className={`fixed bottom-3 right-4 z-50 px-3 py-1 bg-[#102B48]/90 text-amber-200 border border-amber-300/30 rounded-full text-xs font-mono shadow-lg backdrop-blur-sm pointer-events-none flex items-center space-x-1.5 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>Prototype · Synthetic demonstration data</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={`w-full py-1.5 px-4 bg-[#FEF7EC] border-b border-[#F6DFB5] text-[#946B31] text-xs text-center flex items-center justify-center space-x-2 ${className}`}
      >
        <span className="font-semibold uppercase tracking-wider text-[10px] bg-[#E0A34A] text-white px-1.5 py-0.5 rounded">
          Demo Prototype
        </span>
        <span>
          Non-production environment: all student records, institutions, and APAAR identifiers are synthetic demonstration data.
        </span>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center text-[11px] font-mono text-[#6C7884] bg-[#EAF0F6] px-2 py-0.5 rounded border border-[#DEDCD3] ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
      Prototype · Synthetic demonstration data
    </span>
  );
};

