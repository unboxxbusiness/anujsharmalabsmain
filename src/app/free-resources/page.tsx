'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { FreeResourcesIntroSection } from '@/components/free-resources-intro-section';
import { FeaturedFreebiesSection } from '@/components/featured-freebies-section';
import { WorkflowTemplatesSection } from '@/components/workflow-templates-section';
import { MiniToolsSection } from '@/components/mini-tools-section';
import { TutorialsSection } from '@/components/tutorials-section';
import { BlogCtaSection } from '@/components/blog-cta-section';
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

function FreeResourcesHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-32 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Free Resources to Help You Work Smarter with AI
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          A collection of simple, practical tools, templates, workflows, and
          guides designed to help marketers, educators, and digital teams
          automate faster — without complexity.
        </Typography>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/ai-systems-library">Download My AI Workflow Guide</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function FreeResourcesPage() {
  return (
    <main>
      <FreeResourcesHeroSection />
      <FreeResourcesIntroSection />
      <FeaturedFreebiesSection />
      <WorkflowTemplatesSection />
      <MiniToolsSection />
      <TutorialsSection />
      <BlogCtaSection />
    </main>
  );
}
