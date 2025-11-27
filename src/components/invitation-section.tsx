'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { ArrowRight, Calendar, Download, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

const IntegrationCard = ({
  title,
  description,
  children,
  link = '#',
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10 text-primary">{children}</div>
        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export function InvitationSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-balance text-3xl font-semibold md:text-4xl !border-none"
          >
            Let’s Build Your First AI System
          </Typography>
          <Typography
            as="p"
            variant="p"
            className="text-muted-foreground mt-6"
          >
            You don’t need more tools. You need systems that simplify work,
            remove chaos, and create clarity.
          </Typography>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <IntegrationCard
            title="Book a Free AI Workflow Audit Call"
            description="I’ll map out 1–2 workflows you can automate immediately."
          >
            <Calendar />
          </IntegrationCard>

          <IntegrationCard
            title="Download the AI Workflow Guide"
            description="Get 7 plug-and-play workflows you can use today."
          >
            <Download />
          </IntegrationCard>
        </div>
      </div>
    </section>
  );
}
