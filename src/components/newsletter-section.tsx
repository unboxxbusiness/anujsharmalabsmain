'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Mail, SendHorizontal } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            AI Systems Weekly
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            Learn how to automate workflows, scale content & grow faster. Join
            marketers, educators & digital leaders upgrading their teams with
            AI.
          </Typography>

          <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Enter your email"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  aria-label="submit"
                  className="rounded-[var(--radius)]"
                >
                  <span className="hidden md:block">Join the Newsletter</span>
                  <SendHorizontal className="relative mx-auto size-5 md:hidden" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
