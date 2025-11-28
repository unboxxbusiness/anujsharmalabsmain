import { AiSystemsLibraryClientPage } from '@/components/ai-systems-library-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Systems Library',
  description:
    'A collection of practical AI workflows, templates, and tools for marketers, educators, and digital teams. Automate workflows, scale content, and work smarter without the complexity.',
  keywords: [
    'AI Workflows',
    'AI Templates',
    'AI Tools',
    'Marketing Automation',
    'Content Automation',
    'AI Systems',
  ],
  openGraph: {
    title: 'AI Systems Library | Workflows, Templates & Tools',
    description:
      'Explore a collection of practical AI systems designed to help you automate tasks, scale content, and work smarter.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318293/Ai_System_jlx8bj.png',
        width: 550,
        height: 550,
        alt: 'AI Systems Library',
      },
    ],
  },
  twitter: {
    title: 'AI Systems Library | Workflows, Templates & Tools',
    description:
      'Explore a collection of practical AI systems designed to help you automate tasks, scale content, and work smarter.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764318293/Ai_System_jlx8bj.png',
    ],
  },
};

export default function AiSystemsLibraryPage() {
  return <AiSystemsLibraryClientPage />;
}
