import { NewsletterClientPage } from '@/components/newsletter-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Systems Weekly Newsletter',
  description:
    'Subscribe to AI Systems Weekly, a free newsletter that helps marketers, educators, and digital teams automate workflows and scale content with simple, practical AI systems.',
  keywords: [
    'AI Newsletter',
    'Weekly AI',
    'AI for Professionals',
    'AI Systems',
    'Automation Tips',
  ],
  openGraph: {
    title: 'AI Systems Weekly Newsletter',
    description:
      'A free weekly newsletter with practical AI systems, workflows, and templates for professionals.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319593/newsletter_as_ai_system_ixzm1s.png',
        width: 1280,
        height: 400,
        alt: 'AI Systems Weekly Newsletter',
      },
    ],
  },
  twitter: {
    title: 'AI Systems Weekly Newsletter',
    description:
      'A free weekly newsletter with practical AI systems, workflows, and templates for professionals.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319593/newsletter_as_ai_system_ixzm1s.png',
    ],
  },
};

export default function NewsletterPage() {
  return <NewsletterClientPage />;
}
