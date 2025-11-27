'use client';

import { Typography } from '@/components/ui/typography';
import { BrainCircuit, GraduationCap, Target } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      title: 'For Marketers',
      description:
        'Automate content creation, research, reporting & campaign workflows.',
      icon: <Target className="size-8" />,
    },
    {
      title: 'For Educators',
      description:
        'Streamline teaching, content development, communication & student support.',
      icon: <GraduationCap className="size-8" />,
    },
    {
      title: 'For Digital Teams',
      description:
        'Build clean, scalable systems that remove operational chaos.',
      icon: <BrainCircuit className="size-8" />,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            Simple AI Systems That Create Real Results
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            Most teams don’t need more AI tools — they need better systems. I
            design practical, plug-and-play AI workflows that reduce repetitive
            work, improve team efficiency, and help organizations create more in
            less time.
          </Typography>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {pillar.icon}
                </div>
                <Typography variant="h3" as="h3">
                  {pillar.title}
                </Typography>
              </div>
              <Typography variant="p" as="p" className="text-muted-foreground">
                {pillar.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
