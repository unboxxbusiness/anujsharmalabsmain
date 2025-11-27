'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function IntroSection() {
  const benefits = [
    'Simple',
    'Practical',
    'Actionable',
    'Real-world tested',
    'Designed for non-technical teams',
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
            Simple, Practical AI Systems You Can Use Today
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p">
              Welcome to the AI Systems Library — your go-to resource for
              learning how to use AI the right way. Not with confusing tools or
              complicated tutorials, but with step-by-step workflows that save
              hours, increase output, and reduce manual work.
            </Typography>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {benefit}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Typography variant="p" as="p" className="text-lg text-muted-foreground">
            Use these systems to automate content, reporting, communication,
            research, teaching, planning, and more.
          </Typography>
        </div>
      </div>
    </section>
  );
}
