'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function MyValuesSection() {
  const values = [
    { name: 'Simplicity', description: 'If it\'s complicated, it won\'t be used' },
    {
      name: 'Practicality',
      description: 'Real systems, real results',
    },
    { name: 'Clarity', description: 'Clean workflows, clear decisions' },
    {
      name: 'Empowerment',
      description: 'Teams should feel confident, not dependent',
    },
    {
      name: 'Consistency',
      description: 'Systems create predictable output',
    },
    {
      name: 'Innovation',
      description: 'AI is a multiplier, not a replacement',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-8">
        <Typography variant="h2" as="h2" className="text-center">
          What I Stand For
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.name}
              className="bg-background p-6 rounded-lg border flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-2 rounded-full mb-4">
                <Check className="size-6 text-primary" />
              </div>
              <Typography variant="h4" as="h4" className="mb-2">
                {value.name}
              </Typography>
              <Typography variant="p" as="p" className="text-muted-foreground text-sm !mt-0">
                {value.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
