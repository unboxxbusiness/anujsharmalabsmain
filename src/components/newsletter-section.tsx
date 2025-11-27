'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <Typography variant="h2" as="h2">
          AI Systems Weekly
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="text-lg text-muted-foreground"
        >
          Learn how to automate workflows, scale content & grow faster. Join
          marketers, educators & digital leaders upgrading their teams with AI.
        </Typography>
        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button className="bg-slate-800 text-white hover:bg-black">
              Join the Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
