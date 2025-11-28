'use client';

import { Typography } from '@/components/ui/typography';

export function ContactIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="p" variant="p" className="text-lg text-muted-foreground">
          I work with marketers, educators, founders, and digital teams who
          want to use AI in a simple, practical, and meaningful way. If you’re
          exploring collaborations, consulting, speaking, or need help building
          an AI workflow or content system — feel free to reach out.
        </Typography>
      </div>
    </section>
  );
}
