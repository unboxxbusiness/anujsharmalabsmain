'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import * as React from 'react';

export function InvitationSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="blockquote" variant="blockquote" className="text-2xl font-semibold !border-l-0">
          “AI shouldn’t be complex.”
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-6">
          If you want to explore how AI can simplify your workflows, scale your
          content, or empower your team — I’m here to help.
        </Typography>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/work-with-me">Book the Free AI Workflow Audit</Link>
        </Button>
      </div>
    </section>
  );
}
