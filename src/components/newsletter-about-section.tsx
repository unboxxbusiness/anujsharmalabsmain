'use client';

import { Typography } from '@/components/ui/typography';
import Image from 'next/image';

export function NewsletterAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <Image
          className="rounded-lg grayscale"
          src="https://picsum.photos/seed/newsletter-about/1280/400"
          alt="Person writing in a notebook"
          width={1280}
          height={400}
          data-ai-hint="writing notebook"
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <Typography as="h2" variant="h2" className="!border-none">
            Learn How to Use AI the Right Way — With Systems, Not Chaos
          </Typography>
          <div className="space-y-6">
            <Typography
              variant="p"
              as="p"
              className="text-muted-foreground !mt-0"
            >
              AI is everywhere, but very few people know how to actually use it
              to get work done. This newsletter makes AI simple, practical, and
              immediately useful by sharing real workflows, templates, prompts,
              and automation systems that teams can use from Day 1.
            </Typography>
            <Typography
              variant="p"
              as="p"
              className="text-muted-foreground !mt-0"
            >
              Every issue is based on real experience designing AI systems for
              marketing teams, educators, and digital operations.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
