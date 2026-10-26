import React from 'react';

export type StatusVariant =
  | 'Validated'
  | 'Active'
  | 'Needs Review'
  | 'Under Review'
  | 'Rejected'
  | 'Awaiting Clarification'
  | 'Awaiting Correction'
  | 'Valid format'
  | 'Invalid format'
  | 'Compliant'
  | 'Pending'
  | 'Intake Exceeded'
  | 'Normal'
  | string;

interface StatusBadgeProps {
  status: StatusVariant;
  className?: string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = '',
  size = 'md',
}) => {
  let bgClasses = 'bg-gray-100 text-gray-700 border-gray-200';

  const s = status.toLowerCase();

  if (s === 'validated' || s === 'active' || s === 'compliant' || s === 'normal' || s === 'valid format' || s === 'approved' || s === 'success') {
    bgClasses = 'bg-[#EDF7F2] text-[#398565] border-[#C0E4D2]';
  } else if (
    s === 'needs review' ||
    s === 'under review' ||
    s === 'awaiting clarification' ||
    s === 'awaiting correction' ||
    s === 'intake exceeded' ||
    s === 'flagged' ||
    s === 'pending'
  ) {
    bgClasses = 'bg-[#FEF7EC] text-[#B57C2B] border-[#F6DFB5]';
  } else if (s === 'rejected' || s === 'invalid format' || s === 'error' || s === 'declined') {
    bgClasses = 'bg-[#FDF0EE] text-[#C95F55] border-[#F3CAC6]';
  }

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-0.5 text-xs';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${bgClasses} ${sizeClasses} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          s.includes('valid') || s.includes('active') || s.includes('compliant') || s.includes('normal') || s.includes('approved')
            ? 'bg-[#398565]'
            : s.includes('review') || s.includes('clarification') || s.includes('correction') || s.includes('exceeded') || s.includes('pending')
            ? 'bg-[#E0A34A]'
            : 'bg-[#C95F55]'
        }`}
      />
      {status}
    </span>
  );
};

