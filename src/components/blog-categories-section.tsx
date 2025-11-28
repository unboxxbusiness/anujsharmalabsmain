'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconSitemap,
  IconEngine,
  IconSchool,
  IconRocket,
  IconTools,
} from '@tabler/icons-react';
import React from 'react';

const categories = [
  {
    title: 'AI Workflows & Automation',
    description:
      'Clear, step-by-step processes for automating content, reporting, communication & operations.',
    icon: <IconSitemap />,
  },
  {
    title: 'Content Systems & Growth',
    description:
      'Learn how to build content engines that produce consistently — with less effort.',
    icon: <IconEngine />,
  },
  {
    title: 'AI for Educators & Institutions',
    description:
      'Practical applications of AI in teaching, communication, research & student support.',
    icon: <IconSchool />,
  },
  {
    title: 'Productivity & Leadership',
    description:
      'Frameworks for smarter work, better decisions, and high-performing digital teams.',
    icon: <IconRocket />,
  },
  {
    title: 'Tools, Templates & Frameworks',
    description: 'My favorite tools, prompt libraries, and plug-and-play templates.',
    icon: <IconTools />,
  },
];

export function BlogCategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" as="h2" className="!border-none">
            What You’ll Learn Inside This Blog
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {categories.map((category, index) => (
            <Feature key={category.title} {...category} index={index} />
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
  const isTopRow = index < 3;
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        index === 0 || index === 3 ? 'lg:border-l dark:border-neutral-800' : '',
        'lg:border-b dark:border-neutral-800'
      )}
    >
      {isTopRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {!isTopRow && (
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
