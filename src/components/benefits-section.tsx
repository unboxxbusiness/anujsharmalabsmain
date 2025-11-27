'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconActivity,
  IconChartBar,
  IconChecklist,
  IconClock,
  IconCopy,
  IconDiamond,
  IconFilterOff,
  IconRocket,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react';
import React from 'react';

const benefits = [
  {
    title: 'Faster workflows',
    icon: <IconRocket />,
  },
  {
    title: 'More content in less time',
    icon: <IconCopy />,
  },
  {
    title: 'Better collaboration',
    icon: <IconUsers />,
  },
  {
    title: 'Higher consistency',
    icon: <IconDiamond />,
  },
  {
    title: 'Clear processes',
    icon: <IconChecklist />,
  },
  {
    title: 'Fewer bottlenecks',
    icon: <IconFilterOff />,
  },
  {
    title: 'Lower operational load',
    icon: <IconActivity />,
  },
  {
    title: 'Smarter decision-making',
    icon: <IconSparkles />,
  },
  {
    title: 'Better reporting',
    icon: <IconChartBar />,
  },
  {
    title: 'Happier, more empowered teams',
    icon: <IconClock />,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            What You Get With a S.I.M.P.L.E. AI System
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10">
          {benefits.map((benefit, index) => (
            <Feature key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground font-semibold"
          >
            AI becomes easy, predictable, and useful.
          </Typography>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 5) && 'lg:border-l dark:border-neutral-800',
        index < 5 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 5 && (
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
    </div>
  );
};
