'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

const offerings = [
  'AI Workflow Audit (Free)',
  'AI System Buildout',
  'Content Engine Setup',
  'Team Training & Consulting',
];

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
            Want Your Own S.I.M.P.L.E. AI System Built for Your Team?
          </Typography>
          <Typography
            as="p"
            variant="p"
            className="text-muted-foreground mt-6 text-lg"
          >
            If you want plug-and-play workflows designed for your specific
            tasks, I can help.
          </Typography>
        </div>

        <Card className="mt-12">
          <CardContent className="p-8">
            <Typography
              as="h3"
              variant="h3"
              className="font-semibold text-xl mb-6 text-center"
            >
              Choose from:
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {offerings.map((offer) => (
                <div key={offer} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="size-4 text-primary" />
                  </div>
                  <Typography
                    as="span"
                    variant="body"
                    className="text-foreground"
                  >
                    {offer}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#">Book the Free Workflow Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
