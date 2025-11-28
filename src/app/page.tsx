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
  title: 'Home',
  description:
    'Welcome to the homepage of Anuj Sharma. Discover how AI systems can automate workflows, scale content, and help marketers, educators, and digital teams grow faster without complexity.',
  keywords: [
    'AI Systems',
    'Workflow Automation',
    'Content Scaling',
    'AI for Marketers',
    'AI for Educators',
    'Digital Transformation',
  ],
  openGraph: {
    title: 'Anuj Sharma | AI Automation & Digital Marketing',
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
    title: 'Anuj Sharma | AI Automation & Digital Marketing',
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
