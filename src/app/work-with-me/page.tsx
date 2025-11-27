'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { WhatIDoSection } from '@/components/what-i-do-section';
import { WhoThisIsForSection } from '@/components/who-this-is-for-section';
import { ServicesOffersSection } from '@/components/services-offers-section';

function WorkWithMeHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Work With Me
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          I help marketers, educators & digital teams build practical AI
          systems that automate workflows, scale content, and improve
          performance — without complexity or technical overwhelm.
        </Typography>
        <div className="mt-8 flex justify-center">
          <Button size="lg">Book a Free AI Workflow Audit</Button>
        </div>
      </div>
    </section>
  );
}

export default function WorkWithMePage() {
  return (
    <main>
      <WorkWithMeHeroSection />
      <WhatIDoSection />
      <WhoThisIsForSection />
      <ServicesOffersSection />
    </main>
  );
}
