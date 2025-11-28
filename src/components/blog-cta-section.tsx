'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function BlogCtaSection() {
  const benefits = [
    '1 actionable AI workflow',
    '1 template or prompt pack',
    '1 system you can apply immediately',
  ];
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="h2" variant="h2" className="!border-none">
          Want New AI Workflows Every Week?
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Join AI Systems Weekly — my free newsletter for marketers, educators &
          digital leaders.
        </Typography>
        <ul className="mt-8 space-y-4 inline-block text-left">
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
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Delivered every week in under 5 minutes.
        </Typography>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/newsletter">Subscribe for Free</Link>
        </Button>
      </div>
    </section>
  );
}
