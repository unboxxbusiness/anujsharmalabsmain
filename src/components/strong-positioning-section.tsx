'use client';

import { Typography } from '@/components/ui/typography';

export function StrongPositioningSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <Typography as="h2" variant="h2" className="text-4xl font-medium lg:text-5xl !border-none">
            Anuj Sharma in numbers
          </Typography>
          <Typography as="p" variant="p" className="!mt-4">
            Here, you won’t find hype, complexity, or tool overload. Just clean,
            simple, effective systems that work in the real world.
          </Typography>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4 pt-8 md:pt-0">
            <div className="text-5xl font-bold">+50</div>
            <p>AI Systems Built</p>
          </div>
          <div className="space-y-4 pt-8 md:pt-0">
            <div className="text-5xl font-bold">3,000+</div>
            <p>Newsletter Subscribers</p>
          </div>
          <div className="space-y-4 pt-8 md:pt-0">
            <div className="text-5xl font-bold">10+</div>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
