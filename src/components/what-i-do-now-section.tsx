'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const whoIHelp = [
  'Marketers automate content, research, reporting & campaigns',
  'Educators streamline content creation, teaching & communication',
  'Digital Teams build powerful workflow and content systems',
  'Leaders adopt AI in ways that empower teams, not overwhelm them',
];

const benefits = [
  'No coding.',
  'No technical staff required.',
  'Just clarity + systems + results.',
];

export function WhatIDoNowSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-6 md:space-y-8">
        <Typography variant="h2" as="h2" className="text-center">
          I Build AI Systems That Remove Chaos and Create Clarity
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="text-lg text-center text-muted-foreground"
        >
          Today, I help:
        </Typography>

        <ul className="space-y-4">
          {whoIHelp.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body">
                {item}
              </Typography>
            </li>
          ))}
        </ul>

        <div className="space-y-6 text-lg text-muted-foreground">
          <Typography variant="p" as="p">
            I use my proprietary framework — The S.I.M.P.L.E. AI System™ — to
            design automation systems that anyone can operate from Day 1.
          </Typography>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="bg-background border rounded-lg p-4 text-center"
            >
              <Typography variant="p" as="p" className="font-semibold">
                {benefit}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
