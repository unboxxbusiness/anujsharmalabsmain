'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { ArrowRight } from 'lucide-react';

export function InvitationSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
        <Typography variant="h2" as="h2">
          Let’s Build Your First AI System Together
        </Typography>
        <Typography variant="p" as="p" className="text-lg text-muted-foreground">
          Whether you're starting small or planning a full transformation, we
          can begin with a simple step:
        </Typography>
        <div className="bg-background border rounded-lg p-6 space-y-4 text-left">
          <Typography variant="h4" as="h4">
            👉 Book a Free AI Workflow Audit Call
          </Typography>
          <Typography variant="p" as="p" className="text-muted-foreground">
            I’ll map out 1–2 workflows you can automate immediately.
          </Typography>
          <Button>
            Book Your Free Call <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="bg-background border rounded-lg p-6 space-y-4 text-left">
          <Typography variant="h4" as="h4">
            👉 Download the AI Workflow Guide
          </Typography>
          <Typography variant="p" as="p" className="text-muted-foreground">
            (Get 7 plug-and-play workflows you can use today.)
          </Typography>
          <Button>
            Download Now <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
