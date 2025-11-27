'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconSitemap,
  IconFileText,
  IconBook,
  IconTools,
  IconBulb,
  IconActivity,
} from '@tabler/icons-react';
import React from 'react';

const benefits = [
  {
    title: 'One Practical AI Workflow',
    description: 'A step-by-step process you can apply instantly.',
    icon: <IconSitemap />,
  },
  {
    title: 'Templates, Scripts & Prompt Libraries',
    description: 'Plug-and-play resources for content, operations & education.',
    icon: <IconFileText />,
  },
  {
    title: 'Real-World Case Studies',
    description: 'How teams (including Amity University) automate faster.',
    icon: <IconBook />,
  },
  {
    title: 'Tools & Automation Tips',
    description: 'Only simple, easy-to-use tools — no complexity.',
    icon: <IconTools />,
  },
  {
    title: 'AI Insights & Trends',
    description: 'Clear explanations of what actually matters.',
    icon: <IconBulb />,
  },
  {
    title: 'Actionable Productivity Systems',
    description: 'Work smarter, reduce chaos, and get more done.',
    icon: <IconActivity />,
  },
];

export function WeeklyNewsletterBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Every Edition Includes:
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {benefits.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Typography
            as="p"
            variant="p"
            className="text-lg text-muted-foreground italic"
          >
            A powerful AI lesson in under 5 minutes. Every week. Free.
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
        index === 0 || index === 3 ? 'lg:border-l dark:border-neutral-800' : '',
        index < 3 ? 'lg:border-b dark:border-neutral-800' : ''
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <Typography
          variant="h3"
          as="h3"
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 text-lg"
        >
          {title}
        </Typography>
      </div>
      <Typography
        variant="p"
        as="p"
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 !mt-0"
      >
        {description}
      </Typography>
    </div>
  );
};
