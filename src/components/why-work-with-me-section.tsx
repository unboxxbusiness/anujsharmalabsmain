'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconMedal,
  IconAdjustmentsBolt,
  IconUsers,
  IconRocket,
  IconAccessible,
  IconSitemap,
  IconRepeat,
} from '@tabler/icons-react';
import React from 'react';

export function WhyWorkWithMeSection() {
  const benefits = [
    {
      title: 'Proven Experience',
      description: 'Experience leading digital transformation at Amity University',
      icon: <IconMedal />,
    },
    {
      title: 'Focus on Simplicity',
      description: 'No complex tools or coding required.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Real-World Systems',
      description: 'Tested with real teams for practical results.',
      icon: <IconUsers />,
    },
    {
      title: 'Fast Implementation',
      description: 'Quick to set up, delivering fast results.',
      icon: <IconRocket />,
    },
    {
      title: 'Built for Non-Technical Users',
      description: 'Accessible and easy for anyone to use.',
      icon: <IconAccessible />,
    },
    {
      title: 'Framework-Based',
      description: 'A systematic approach, not just a collection of tools.',
      icon: <IconSitemap />,
    },
    {
      title: 'Practical & Actionable',
      description: 'Provides practical, actionable, and repeatable solutions.',
      icon: <IconRepeat />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" as="h2" className="!border-none">
            Why Teams Choose Me
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {benefits.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center space-y-4">
          <Typography variant="p" as="p" className="text-lg text-muted-foreground !mt-0">
            AI is confusing — but it doesn’t have to be.
          </Typography>
          <Typography variant="p" as="p" className="text-lg font-semibold text-foreground !mt-0">
            My job is to make it simple, accessible, and high-impact.
          </Typography>
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
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
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
