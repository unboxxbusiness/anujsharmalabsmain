'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { FreeResourcesIntroSection } from '@/components/free-resources-intro-section';
import { FeaturedFreebiesSection } from '@/components/featured-freebies-section';

function FreeResourcesHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
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
            <Link href="#">Download My AI Workflow Guide</Link>
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
    </main>
  );
}
