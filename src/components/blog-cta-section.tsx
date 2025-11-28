'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export function BlogCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="h2" variant="h2" className="!border-none">
          Get New Workflows Every Week
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Subscribe to AI Systems Weekly — my free newsletter for marketers,
          educators & digital teams who want practical AI systems that actually
          work.
        </Typography>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/newsletter">Join the Newsletter</Link>
        </Button>
      </div>
    </section>
  );
}
