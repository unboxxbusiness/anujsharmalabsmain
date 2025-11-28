import { FreeResourcesClientPage } from '@/components/free-resources-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources',
  description:
    'Download free AI resources, tools, templates, workflows, and guides. Designed to help marketers, educators, and digital teams automate faster and work smarter with AI.',
  keywords: [
    'Free AI Resources',
    'AI Templates',
    'AI Checklists',
    'AI Guides',
    'AI Tools',
    'Workflow Templates',
  ],
  openGraph: {
    title: 'Free AI Resources to Help You Work Smarter',
    description:
      'A collection of simple, practical tools, templates, and guides designed to help you automate faster — without complexity.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318692/AI_System_free_resources_xbcrln.png',
        width: 1280,
        height: 400,
        alt: 'Free AI Resources',
      },
    ],
  },
  twitter: {
    title: 'Free AI Resources to Help You Work Smarter',
    description:
      'A collection of simple, practical tools, templates, and guides designed to help you automate faster — without complexity.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318692/AI_System_free_resources_xbcrln.png',
    ],
  },
};

export default function FreeResourcesPage() {
  return <FreeResourcesClientPage />;
}
