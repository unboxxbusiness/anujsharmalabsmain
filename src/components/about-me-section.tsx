'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function AboutMeSection() {
  return (
    <section id="about-me" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <Typography variant="h2" as="h2">
          About Me
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="text-lg text-muted-foreground"
        >
          I’m the Digital Head at Amity University, and I help marketers,
          educators, and digital teams adopt AI in a simple, practical, and
          results-driven way. My work focuses on building real-world automation
          systems that reduce complexity, save time, and improve performance —
          using tools anyone can operate.
        </Typography>
        <Typography variant="p" as="p" className="font-semibold text-lg">
          If you want to bring AI into your organization without overwhelm or
          technical barriers, you’re in the right place.
        </Typography>
        <Button size="lg">Read My Story</Button>
      </div>
    </section>
  );
}
