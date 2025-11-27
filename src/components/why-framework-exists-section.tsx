'use client';

import { Typography } from '@/components/ui/typography';
import { X } from 'lucide-react';

export function WhyFrameworkExistsSection() {
  const problems = [
    'Overwhelmed by too many tools',
    'Inconsistent with their AI usage',
    'Slow to adopt new workflows',
    'Confused about how to apply AI',
    'Wasting time testing random tools',
    'Unsure how to get predictable results',
    'Producing random, low-quality output',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="space-y-6 md:space-y-8 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="!border-none"
          >
            AI Is Not About Tools — It’s About Systems
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p">
              AI tools are everywhere. But without a system, teams end up:
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {problems.map((problem) => (
            <li key={problem} className="flex items-center gap-3 list-none">
              <div className="bg-destructive/10 p-1.5 rounded-full">
                <X className="size-4 text-destructive" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {problem}
              </Typography>
            </li>
          ))}
        </div>
        <div className="text-center">
          <Typography variant="p" as="p" className="text-lg font-semibold text-foreground !mt-0">
            The S.I.M.P.L.E. AI System gives teams a structure that makes AI predictable and useful.
          </Typography>
        </div>
      </div>
    </section>
  );
}
