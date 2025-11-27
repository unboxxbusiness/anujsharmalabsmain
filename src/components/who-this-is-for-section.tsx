'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function WhoThisIsForSection() {
  const targetAudiences = [
    'Marketing teams looking to automate content, research, reporting & planning',
    'Educators & institutions wanting to modernize teaching, content & communication',
    'Digital teams needing workflow clarity & automation',
    'Leaders who want AI adoption without complexity',
    'Agencies needing predictable content systems',
    'Founders wanting to scale output with small teams',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="space-y-6 md:space-y-8 text-center">
          <Typography variant="h2" as="h2" className="!border-none">
            I Work With Teams Who Want Real, Practical Results
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground"
          >
            This is perfect for:
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {targetAudiences.map((audience) => (
            <li key={audience} className="flex items-center gap-3 list-none">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {audience}
              </Typography>
            </li>
          ))}
        </div>
        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground"
          >
            If your team is spending too much time on repetitive tasks, this
            will transform how you work.
          </Typography>
        </div>
      </div>
    </section>
  );
}
