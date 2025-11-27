'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

export function WhatIDoNowSection() {
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

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <Typography variant="h2" as="h2" className="text-4xl font-medium !border-none">
            I Build AI Systems That Remove Chaos and Create Clarity
          </Typography>
          <div className="space-y-6">
            <Typography variant="p" as="p" className="text-lg text-muted-foreground !mt-0">
              Today, I help marketers, educators, and digital teams build powerful AI-powered systems. I use my proprietary framework — The S.I.M.P.L.E. AI System™ — to design automation systems that anyone can operate from Day 1.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-background border rounded-lg p-4 text-center flex-1"
                >
                  <Typography variant="p" as="p" className="font-semibold !mt-0">
                    {benefit}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
