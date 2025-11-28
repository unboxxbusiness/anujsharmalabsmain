'use client';

import { Typography } from '@/components/ui/typography';

export function StrongPositioningSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-8 text-center">
          <Typography
            variant="p"
            as="p"
            className="text-xl md:text-2xl font-semibold text-foreground !mt-0"
          >
            Here, you won’t find hype, complexity, or tool overload. Just clean,
            simple, effective systems that work in the real world.
          </Typography>
        </div>
      </div>
    </section>
  );
}
