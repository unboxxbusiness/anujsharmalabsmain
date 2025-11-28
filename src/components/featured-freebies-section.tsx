'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconSitemap,
  IconEngine,
  IconRepeat,
  IconListCheck,
  IconFileText,
  IconHelp,
  IconBook,
} from '@tabler/icons-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const freebies = [
  {
    title: 'AI Workflow Guide (Starter Kit)',
    description:
      '7 plug-and-play workflows that automate content, reporting, communication & more.',
    icon: <IconBook />,
    cta: 'Download Guide',
    href: '/ai-systems-library',
  },
  {
    title: 'Content Engine Blueprint',
    description:
      'A simple system to create 20–50 content pieces per month using AI.',
    icon: <IconEngine />,
    cta: 'Get Blueprint',
    href: '/ai-systems-library',
  },
  {
    title: 'Content Repurposing Checklist',
    description: 'Turn a single piece of content into 20+ assets automatically.',
    icon: <IconRepeat />,
    cta: 'Download Checklist',
    href: '/free-resources',
  },
  {
    title: 'Meeting Notes → Tasks Automation Template',
    description: 'Instant summaries, action items & follow-ups.',
    icon: <IconListCheck />,
    cta: 'Get Template',
    href: '/free-resources',
  },
  {
    title: 'AI Prompt Library',
    description:
      '30+ ready-made prompts for marketing, content, and education workflows.',
    icon: <IconFileText />,
    cta: 'Download Prompts',
    href: '/free-resources',
  },
  {
    title: 'S.I.M.P.L.E. AI System™ Overview',
    description: 'Your 6-step framework for building any AI workflow.',
    icon: <IconHelp />,
    cta: 'Learn the Framework',
    href: '/framework',
  },
];

export function FeaturedFreebiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Most Popular Free Resources
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {freebies.map((freebie, index) => (
            <Feature key={freebie.title} {...freebie} index={index} />
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
  cta,
  href,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  href: string;
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
      <div className="mt-auto pt-4 px-10">
        <Button variant="link" asChild className="p-0 h-auto">
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </div>
  );
};
