'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function MyMissionSection() {
  const beliefs = [
    'AI should reduce work, not increase it',
    'Simplicity beats complexity',
    'Teams should feel empowered, not confused',
    'Systems matter more than tools',
    'Content should scale predictably, not painfully',
    'Anyone can use AI the right way with the right framework',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 space-y-6 md:space-y-8">
        <Typography variant="h2" as="h2" className="text-center">
          AI Should Make Work Easier — Not Harder
        </Typography>
        <div className="space-y-6 text-lg text-muted-foreground">
          <Typography variant="p" as="p">
            Too many teams feel overwhelmed by AI. Too many companies chase shiny
            tools, instead of building systems.
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="text-xl font-semibold text-foreground text-center"
          >
            My mission is simple: Make AI usable, useful, and effective for
            every team — especially non-technical ones.
          </Typography>
          <Typography variant="p" as="p">
            I believe:
          </Typography>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {beliefs.map((belief) => (
            <li key={belief} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body">
                {belief}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-lg text-muted-foreground">
          <Typography variant="p" as="p" className="text-center italic">
            This philosophy shapes every workflow I design.
          </Typography>
        </div>
      </div>
    </section>
  );
}
