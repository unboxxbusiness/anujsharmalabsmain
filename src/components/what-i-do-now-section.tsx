'use client';

import { Typography } from '@/components/ui/typography';
import {
  IconCode,
  IconReplace,
  IconUsers,
} from '@tabler/icons-react';
import React from 'react';
import { cn } from '@/lib/utils';

export function WhatIDoNowSection() {
  const benefits = [
    {
      title: 'No Coding',
      description: 'No technical staff required.',
      icon: <IconCode />,
    },
    {
      title: 'Clarity & Systems',
      description: 'Built for practical, real-world results.',
      icon: <IconReplace />,
    },
    {
      title: 'Day 1 Ready',
      description: 'Anyone can operate from the start.',
      icon: <IconUsers />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="text-4xl font-medium lg:text-5xl !border-none"
          >
            I Build AI Systems That Remove Chaos and Create Clarity
          </Typography>
          <Typography variant="p" as="p" className="text-muted-foreground !mt-4">
            Today, I help marketers, educators, and digital teams build
            powerful AI-powered systems using my proprietary S.I.M.P.L.E. AI
            System™ to design automation that anyone can operate from Day 1.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {benefits.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        index === 0 && 'lg:border-l dark:border-neutral-800',
        index < 3 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <Typography
          variant="span"
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </Typography>
      </div>
      <Typography
        variant="p"
        as="p"
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
      >
        {description}
      </Typography>
    </div>
  );
};
