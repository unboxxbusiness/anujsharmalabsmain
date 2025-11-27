'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';
import Link from 'next/link';

export function FinalInvitationSection() {
  const benefits = [
    'remove repetitive work',
    'build content systems',
    'streamline operations',
    'automate workflows',
    'improve performance',
    'stay ahead in marketing & education',
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="h2" variant="h2" className="!border-none">
          Make AI Your Competitive Advantage
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Every week, I’ll help you:
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-8 text-left">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography
                as="span"
                variant="body"
                className="text-foreground capitalize"
              >
                {benefit}
              </Typography>
            </div>
          ))}
        </div>
        <Typography
          as="p"
          variant="p"
          className="text-lg font-semibold text-foreground"
        >
          AI isn’t the future — AI systems are. Let’s build them, one workflow at a time.
        </Typography>
        <Button size="lg" className="mt-8" asChild>
          <Link href="#">Join the Newsletter</Link>
        </Button>
      </div>
    </section>
  );
}
