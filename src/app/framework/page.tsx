import { FrameworkClientPage } from '@/components/framework-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The S.I.M.P.L.E. AI System Framework',
  description:
    'Learn about the proven 6-step framework that helps marketers, educators, and digital teams build powerful AI workflows using simple tools, with no technical knowledge needed.',
  keywords: [
    'SIMPLE AI System',
    'AI Framework',
    'AI Workflow',
    'AI for Teams',
    'Automation Framework',
    'AI Strategy',
  ],
  openGraph: {
    title: 'The S.I.M.P.L.E. AI System™ Framework',
    description:
      'A proven 6-step method to build clean, scalable AI workflows that anyone can operate.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318692/AI_System_free_resources_xbcrln.png',
        width: 1280,
        height: 400,
        alt: 'The S.I.M.P.L.E. AI System Framework',
      },
    ],
  },
  twitter: {
    title: 'The S.I.M.P.L.E. AI System™ Framework',
    description:
      'A proven 6-step method to build clean, scalable AI workflows that anyone can operate.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318692/AI_System_free_resources_xbcrln.png',
    ],
  },
};

export default function FrameworkPage() {
  return <FrameworkClientPage />;
}
