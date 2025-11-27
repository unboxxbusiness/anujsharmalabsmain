'use client';

import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  IconEngine,
  IconListCheck,
  IconMail,
  IconSearch,
  IconCalendar,
  IconBook,
  IconSitemap,
} from '@tabler/icons-react';
import React from 'react';

const resources = [
  {
    title: 'AI Content Engine Blueprint',
    icon: <IconEngine />,
  },
  {
    title: 'Meeting → Action Tasks System',
    icon: <IconListCheck />,
  },
  {
    title: 'AI Email Automation Workflow',
    icon: <IconMail />,
  },
  {
    title: 'Research Summary Workflow',
    icon: <IconSearch />,
  },
  {
    title: 'Content Calendar Automation',
    icon: <IconCalendar />,
  },
  {
    title: 'Prompt Library',
    icon: <IconBook />,
  },
  {
    title: 'Workflow Templates',
    icon: <IconSitemap />,
  },
];

export function FreeResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Start Using the Framework Today
          </Typography>
          <Typography as="p" variant="p" className="text-muted-foreground mt-4">
            Explore resources based on this framework:
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {resources.map((resource, index) => (
            <Feature key={resource.title} {...resource} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="#">Download the AI Workflow Guide</Link>
          </Button>
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
    </div>
  );
};
