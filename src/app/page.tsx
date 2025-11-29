import { AboutMeSection } from '@/components/about-me-section';
import { AboutSection } from '@/components/about-section';
import { HeroSection } from '@/components/hero-section';
import { ResultsSection } from '@/components/results-section';
import { ServicesSection } from '@/components/services-section';
import { SimpleAiSystemSection } from '@/components/simple-ai-system-section';
import { SolutionsSection } from '@/components/solutions-section';
import { WorkWithMeSection } from '@/components/work-with-me-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Systems for Marketing, Education & Digital Teams | Anuj Sharma',
  description:
    'I build simple, practical AI systems that help marketers, educators, and digital teams automate workflows, scale content, and improve performance. Learn how to work smarter, not harder.',
  keywords: [
    'AI Systems',
    'AI for Marketers',
    'AI for Educators',
    'Workflow Automation',
    'Content Automation',
    'Digital Transformation',
    'Anuj Sharma',
    'AI Consulting',
    'SIMPLE AI System',
  ],
  openGraph: {
    title:
      'Anuj Sharma | AI Systems for Marketing, Education & Digital Teams',
    description:
      'I help teams automate workflows, scale content, and grow faster using simple, practical AI systems anyone can use — no technical expertise required.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764317499/Gemini_Generated_Image_kf48z0kf48z0kf48_bbabfm.png',
        width: 1200,
        height: 630,
        alt: 'AI Systems for Marketers, Educators & Digital Teams',
      },
    ],
  },
  twitter: {
    title:
      'Anuj Sharma | AI Systems for Marketing, Education & Digital Teams',
    description:
      'I help teams automate workflows, scale content, and grow faster using simple, practical AI systems anyone can use — no technical expertise required.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764317499/Gemini_Generated_Image_kf48z0kf48z0kf48_bbabfm.png',
    ],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SimpleAiSystemSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutMeSection />
      <ResultsSection />
      <WorkWithMeSection />
    </main>
  );
}
