'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

function NewsletterHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          AI Systems Weekly
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          A free weekly newsletter that helps marketers, educators & digital
          teams automate workflows, scale content, and grow faster — using
          simple, practical AI systems.
        </Typography>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button className="bg-slate-800 text-white hover:bg-black">
              Subscribe for Free
            </Button>
          </div>
        </div>
        <Typography
          variant="p"
          as="p"
          className="text-center text-sm text-muted-foreground mt-4"
        >
          Join 3,000+ professionals learning how to use AI without complexity.
        </Typography>
      </div>
    </section>
  );
}

export default function NewsletterPage() {
  return (
    <main>
      <NewsletterHeroSection />
    </main>
  );
}
