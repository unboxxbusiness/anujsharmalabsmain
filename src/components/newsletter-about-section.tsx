'use client';

import { Typography } from '@/components/ui/typography';

export function NewsletterAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-8">
        <div className="space-y-6 text-center">
          <Typography variant="h2" as="h2" className="!border-none">
            Learn How to Use AI the Right Way — With Systems, Not Chaos
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p">
              AI is everywhere, but very few people know how to actually use it
              to get work done. This newsletter makes AI simple, practical, and
              immediately useful by sharing real workflows, templates, prompts,
              and automation systems that teams can use from Day 1.
            </Typography>
            <Typography variant="p" as="p">
              Every issue is based on real experience designing AI systems for
              marketing teams, educators, and digital operations.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
