'use client';

import { ContactIntroSection } from '@/components/contact-intro-section';
import { ContactOptionsSection } from '@/components/contact-options-section';
import { Typography } from '@/components/ui/typography';

function ContactUsHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Contact Me
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          Whether you want to automate a workflow, build an AI system,
          collaborate, or have a question — I’d love to hear from you.
        </Typography>
      </div>
    </section>
  );
}

export default function ContactUsPage() {
  return (
    <main>
      <ContactUsHeroSection />
      <ContactIntroSection />
      <ContactOptionsSection />
    </main>
  );
}
