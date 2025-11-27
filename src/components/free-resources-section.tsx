'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const resources = [
  'AI Content Engine Blueprint',
  'Meeting → Action Tasks System',
  'AI Email Automation Workflow',
  'Research Summary Workflow',
  'Content Calendar Automation',
  'Prompt Library',
  'Workflow Templates',
];

export function FreeResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Start Using the Framework Today
          </Typography>
          <Typography as="p" variant="p" className="text-muted-foreground mt-4">
            Explore resources based on this framework:
          </Typography>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {resources.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {item}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="#">Download the AI Workflow Guide</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
