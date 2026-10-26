import type { Metadata } from 'next';
import './globals.css';
import { DemoLabel } from '@/components/common/DemoLabel';

export const metadata: Metadata = {
  title: 'APAAR Enrolment Integrity — Student Data Management & Verification',
  description:
    'A rule-aware, auditable and explainable platform for verifying student enrolment data across AICTE-approved institutions using APAAR-linked information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7F4EC] text-[#26384A] antialiased selection:bg-[#B58545]/20 selection:text-[#102B48]">
        {children}
        <DemoLabel variant="floating" />
      </body>
    </html>
  );
}

