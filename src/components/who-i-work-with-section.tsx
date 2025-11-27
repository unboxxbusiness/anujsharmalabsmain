'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function WhoIWorkWithSection() {
  const whoIWorkWith = [
    'Marketing teams',
    'Education institutions',
    'Digital & content teams',
    'Founders & leaders',
    'Agencies',
    'Training organizations',
  ];

  const whatIHelpWith = [
    'automate repetitive tasks',
    'scale content',
    'improve productivity',
    'eliminate bottlenecks',
    'adopt AI without overwhelm',
    'build a consistent content engine',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            Teams That Want to Grow Smarter, Not Harder
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <Typography variant="h4" as="h4">
              I work with:
            </Typography>
            <ul className="space-y-3">
              {whoIWorkWith.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="size-4 text-primary" />
                  </div>
                  <Typography as="span" variant="body">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <Typography variant="h4" as="h4">
              If your team wants to:
            </Typography>
            <ul className="space-y-3">
              {whatIHelpWith.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="size-4 text-primary" />
                  </div>
                  <Typography as="span" variant="body">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Typography
          variant="p"
          as="p"
          className="text-center text-lg font-semibold text-foreground"
        >
          ... I can help.
        </Typography>
      </div>
    </section>
  );
}
