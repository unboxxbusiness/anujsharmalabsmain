'use client';

import { BlogCategoriesSection } from '@/components/blog-categories-section';
import { BlogCtaSection } from '@/components/blog-cta-section';
import { StrongPositioningSection } from '@/components/strong-positioning-section';
import { Typography } from '@/components/ui/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore actionable articles, insights, and workflows on AI for marketers, educators, and digital teams. Learn to automate workflows, scale content, and grow faster without complexity.',
  keywords: [
    'AI Blog',
    'AI Workflows',
    'Content Systems',
    'AI for Education',
    'Productivity',
    'AI Tools',
  ],
  openGraph: {
    title: 'AI Systems Blog | Insights, Workflows & Systems',
    description:
      'Actionable articles for marketers, educators & digital teams who want to automate workflows, scale content, and grow faster.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319284/Gemini_Generated_Image_8pxbn38pxbn38pxb_manjcm.png',
        width: 1280,
        height: 400,
        alt: 'Insights on AI Systems and Workflows',
      },
    ],
  },
  twitter: {
    title: 'AI Systems Blog | Insights, Workflows & Systems',
    description:
      'Actionable articles for marketers, educators & digital teams who want to automate workflows, scale content, and grow faster.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319284/Gemini_Generated_Image_8pxbn38pxbn38pxb_manjcm.png',
    ],
  },
};

function BlogHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-32 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Insights, Workflows & Systems to Help You Work Smarter with AI
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          Actionable articles for marketers, educators & digital teams who want
          to automate workflows, scale content, and grow faster — without
          complexity.
        </Typography>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main>
      <BlogHeroSection />
      <BlogCategoriesSection />
      <StrongPositioningSection />
      <BlogCtaSection />
    </main>
  );
}
