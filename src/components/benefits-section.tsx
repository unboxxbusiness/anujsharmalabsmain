'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const benefits = [
    'Faster workflows',
    'More content in less time',
    'Better collaboration',
    'Higher consistency',
    'Clear processes',
    'Fewer bottlenecks',
    'Lower operational load',
    'Smarter decision-making',
    'Better reporting',
    'Happier, more empowered teams',
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            What You Get With a S.I.M.P.L.E. AI System
          </Typography>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {benefits.map((item) => (
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
        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground font-semibold"
          >
            AI becomes easy, predictable, and useful.
          </Typography>
        </div>
      </div>
    </section>
  );
}
