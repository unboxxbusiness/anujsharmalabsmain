import { WorkWithMeClientPage } from '@/components/work-with-me-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work With Me',
  description:
    'Partner with Anuj Sharma to build practical AI systems for your team. Services include AI workflow audits, system buildouts, content engine setup, and team training.',
  keywords: [
    'Work with Anuj Sharma',
    'AI Consulting Services',
    'AI Workflow Audit',
    'AI System Buildout',
    'Content Engine Setup',
    'AI Team Training',
  ],
  openGraph: {
    title: 'Work With Anuj Sharma | AI System Services',
    description:
      'I help marketers, educators & digital teams build practical AI systems that automate workflows and improve performance.',
  },
  twitter: {
    title: 'Work With Anuj Sharma | AI System Services',
    description:
      'I help marketers, educators & digital teams build practical AI systems that automate workflows and improve performance.',
  },
};

export default function WorkWithMePage() {
  return <WorkWithMeClientPage />;
}
