'use client';

import { Typography } from '@/components/ui/typography';

export function FreeResourcesIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-8">
        <div className="text-center space-y-4">
          <Typography variant="h2" as="h2" className="!border-none">
            Start Using AI the Right Way — Simple, Practical & Immediately
            Useful
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p" className="!mt-0">
              Most AI content online is confusing or overly technical. These
              resources are different. They’re built to help real teams use AI
              today — with step-by-step systems, plug-and-play templates, and
              practical tools that save time and improve productivity.
            </Typography>
            <Typography variant="p" as="p" className="!mt-0">
              Everything here is free and based on real experience building AI
              systems at Amity University and for marketing, education, and
              digital teams across industries.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
