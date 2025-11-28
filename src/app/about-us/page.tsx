import { AboutUsClientPage } from '@/components/about-us-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    "Learn about Anuj Sharma's journey into AI systems and his mission to help organizations implement AI in a simple, accessible, and meaningful way. Discover his background, values, and how he helps teams work smarter.",
  keywords: [
    'About Anuj Sharma',
    'AI Systems',
    'Digital Transformation',
    'AI Strategy',
    'Team Empowerment',
    'AI Consulting',
  ],
  openGraph: {
    title: 'About Anuj Sharma | My Journey & Mission',
    description:
      'Discover my story and the mission that drives me: to make AI simple, accessible, and effective for every team.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764317843/About_us_As_kkz1gu.png',
        width: 1280,
        height: 400,
        alt: 'The story and mission of Anuj Sharma',
      },
    ],
  },
  twitter: {
    title: 'About Anuj Sharma | My Journey & Mission',
    description:
      'Discover my story and the mission that drives me: to make AI simple, accessible, and effective for every team.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764317843/About_us_As_kkz1gu.png',
    ],
  },
};

export default function AboutUsPage() {
  return <AboutUsClientPage />;
}
