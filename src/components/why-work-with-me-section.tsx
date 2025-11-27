'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function WhyWorkWithMeSection() {
  const benefits = [
    'Experience leading digital transformation at Amity University',
    'Focus on simplicity — no complex tools or coding',
    'Real-world systems, tested with real teams',
    'Fast implementation, fast results',
    'Built for non-technical users',
    'Framework-based, not tool-based',
    'Practical, actionable, repeatable',
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="space-y-6 md:space-y-8 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="!border-none"
          >
            Why Teams Choose Me
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 list-none">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {benefit}
              </Typography>
            </li>
          ))}
        </div>
        <div className="text-center space-y-4">
          <Typography variant="p" as="p" className="text-lg text-muted-foreground !mt-0">
            AI is confusing — but it doesn’t have to be.
          </Typography>
           <Typography variant="p" as="p" className="text-lg font-semibold text-foreground !mt-0">
            My job is to make it simple, accessible, and high-impact.
          </Typography>
        </div>
      </div>
    </section>
  );
}
