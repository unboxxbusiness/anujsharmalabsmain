'use client';

import { Check, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Typography } from './ui/typography';
import React from 'react';
import { cn } from '@/lib/utils';

export function ResultsSection() {
  const proofPoints = [
    {
      title: 'Automated content workflows',
      description: 'Automated content workflows at scale.',
      icon: <CheckCircle className="size-6" />,
    },
    {
      title: 'Reduced manual workload',
      description: 'Reduced manual workload for digital teams.',
      icon: <CheckCircle className="size-6" />,
    },
    {
      title: 'Improved turnaround time',
      description: 'Improved turnaround time on content & operations.',
      icon: <CheckCircle className="size-6" />,
    },
    {
      title: 'Simplified AI adoption',
      description: 'Simplified AI adoption across departments.',
      icon: <CheckCircle className="size-6" />,
    },
  ];

  return (
    <section id="results" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 text-center md:space-y-12">
        <Typography variant="h2" as="h2">
          Trusted By Teams Who Want Practical AI Systems
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
          {proofPoints.map((point, index) => (
            <Feature
              key={point.title}
              {...point}
              index={index}
              className={cn(
                index === 0 && 'lg:border-l',
                index === 3 && 'lg:border-r-0'
              )}
            />
          ))}
        </div>

        <Button size="lg" disabled>
          See Case Studies
        </Button>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        'lg:border-b dark:border-neutral-800',
        className
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
