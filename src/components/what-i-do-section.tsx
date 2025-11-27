'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function WhatIDoSection() {
  const benefits = [
    'Automate repetitive workflows',
    'Build content engines that scale',
    'Improve team productivity & collaboration',
    'Reduce operational bottlenecks',
    'Speed up decision-making',
    'Create clarity with streamlined systems',
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
            I Build Simple, Effective AI Systems That Help Teams Work Smarter
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p">
              Whether you’re a marketing team, an education institution, or a digital operations unit, I help you turn AI into a powerful advantage — using systems that save time, reduce chaos, and increase output.
            </Typography>
            <blockquote className="border-l-4 border-primary pl-4 italic text-xl font-semibold text-foreground text-left">
              👉 My approach is based on a single belief: AI should simplify your work, not complicate it.
            </blockquote>
          </div>
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
        <div className="text-center">
          <Typography variant="p" as="p" className="text-lg text-muted-foreground">
            If your team feels overwhelmed, understaffed, or stuck in manual tasks, this is for you.
          </Typography>
        </div>
      </div>
    </section>
  );
}
