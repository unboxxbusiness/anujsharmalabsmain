'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function FrameworkIntroSection() {
  const applications = [
    'Marketing',
    'Education',
    'Digital & content teams',
    'Operations',
    'Leadership workflows',
  ];

  const designPrinciples = [
    'Simple',
    'Practical',
    'Easy to adopt',
    'Tool-agnostic',
    'Scalable',
    'Team-friendly',
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            A Practical, Actionable AI Framework for Real Teams
          </Typography>
          <Typography as="p" variant="p" className="text-lg text-muted-foreground">
            Most teams struggle with AI because they focus on tools, not
            systems. The S.I.M.P.L.E. AI System™ fixes this by turning AI into
            clear, repeatable workflows that save time, eliminate chaos, and
            increase output.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 rounded-lg border p-8 bg-background">
          <div>
            <Typography
              as="h3"
              variant="h3"
              className="text-xl font-semibold mb-4"
            >
              This framework works across:
            </Typography>
            <ul className="space-y-2 !mt-0">
              {applications.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="size-4 text-primary" />
                  </div>
                  <Typography as="span" variant="body" className="text-foreground">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography
              as="h3"
              variant="h3"
              className="text-xl font-semibold mb-4"
            >
              And it’s designed to be:
            </Typography>
            <ul className="grid grid-cols-2 gap-y-2 !mt-0">
              {designPrinciples.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="size-4 text-primary" />
                  </div>
                  <Typography as="span" variant="body" className="text-foreground">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
