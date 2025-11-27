'use client';

import { Button } from '@/components/ui/button';

export function AboutMeSection() {
  return (
    <section id="about-me" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <h2 className="text-4xl font-medium lg:text-5xl">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I’m the Digital Head at Amity University, and I help marketers,
          educators, and digital teams adopt AI in a simple, practical, and
          results-driven way. My work focuses on building real-world automation
          systems that reduce complexity, save time, and improve performance —
          using tools anyone can operate.
        </p>
        <p className="font-semibold text-lg">
          If you want to bring AI into your organization without overwhelm or
          technical barriers, you’re in the right place.
        </p>
        <Button size="lg">Read My Story</Button>
      </div>
    </section>
  );
}
