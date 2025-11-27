'use client';

import { Typography } from '@/components/ui/typography';

function AboutUsHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Helping Marketers, Educators & Digital Teams Use AI — Without
          Complexity
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          I build simple, practical AI systems that help teams automate
          workflows, scale content, and grow faster. No overwhelm. No jargon.
          No technical headaches.
        </Typography>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHeroSection />
    </main>
  );
}
