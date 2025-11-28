'use client';

import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
  IconEngine,
  IconListCheck,
  IconSearch,
  IconMail,
  IconCalendar,
  IconSchool,
  IconFileText,
} from '@tabler/icons-react';
import React from 'react';
import Link from 'next/link';

const tutorials = [
  {
    title: 'How to Build an AI Content Engine',
    icon: <IconEngine />,
  },
  {
    title: 'How to Automate Meeting Notes',
    icon: <IconListCheck />,
  },
  {
    title: 'How to Create a Research Assistant',
    icon: <IconSearch />,
  },
  {
    title: 'How to Build an Email Automation System',
    icon: <IconMail />,
  },
  {
    title: 'How to Automate a Content Calendar',
    icon: <IconCalendar />,
  },
  {
    title: 'How to Build a Student Support AI Assistant',
    icon: <IconSchool />,
  },
  {
    title: 'How to Create SOPs Automatically',
    icon: <IconFileText />,
  },
];

export function TutorialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Free Tutorials & How-To Guides
          </Typography>
          <Typography as="p" variant="p" className="text-muted-foreground mt-4">
            Learn how to set up simple, effective AI systems with these
            step-by-step tutorials.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {tutorials.map((tutorial, index) => (
            <Feature key={tutorial.title} {...tutorial} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="#">See All Tutorials</Link>
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
        index < 4 ? 'lg:border-b dark:border-neutral-800' : ''
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
