'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import * as React from 'react';

export function InvitationSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-balance font-semibold !border-none"
          >
            Let’s Build Something Simple, Powerful & Meaningful
          </Typography>
          <Typography
            as="p"
            variant="p"
            className="text-muted-foreground !mt-4"
          >
            AI shouldn’t be complex. If you want to explore how AI can simplify
            your workflows, scale your content, or empower your team — I’m here
            to help.
          </Typography>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/work-with-me">Book the Free AI Workflow Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
