'use client';

import { Typography } from '@/components/ui/typography';

export function WhatIDoNowSection() {
  const benefits = [
    {
      title: 'No Coding',
      description: 'No technical staff required.',
    },
    {
      title: 'Clarity & Systems',
      description: 'Built for practical, real-world results.',
    },
    {
      title: 'Day 1 Ready',
      description: 'Anyone can operate from the start.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <Typography variant="h2" as="h2" className="text-4xl font-medium lg:text-5xl !border-none">
            I Build AI Systems That Remove Chaos and Create Clarity
          </Typography>
          <Typography variant="p" as="p" className="text-muted-foreground !mt-4">
            Today, I help marketers, educators, and digital teams build
            powerful AI-powered systems using my proprietary S.I.M.P.L.E. AI
            System™ to design automation that anyone can operate from Day 1.
          </Typography>
        </div>

        <div className="grid gap-12 divide-y *:pt-8 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0 md:*:pt-0">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="text-4xl font-bold text-primary">{benefit.title}</div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
