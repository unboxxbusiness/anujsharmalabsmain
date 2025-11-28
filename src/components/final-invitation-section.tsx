'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import {
  IconActivity,
  IconSitemap,
  IconChecklist,
  IconTrendingUp,
  IconSchool,
  IconRepeat,
} from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

export function FinalInvitationSection() {
  const benefits = [
    {
      title: 'Remove Repetitive Work',
      icon: <IconRepeat />,
    },
    {
      title: 'Build Content Systems',
      icon: <IconSitemap />,
    },
    {
      title: 'Streamline Operations',
      icon: <IconActivity />,
    },
    {
      title: 'Automate Workflows',
      icon: <IconChecklist />,
    },
    {
      title: 'Improve Performance',
      icon: <IconTrendingUp />,
    },
    {
      title: 'Stay Ahead',
      icon: <IconSchool />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Typography as="h2" variant="h2" className="!border-none">
          Make AI Your Competitive Advantage
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Every week, I’ll help you:
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {benefits.map((benefit, index) => (
            <Feature
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>
        <Typography
          as="p"
          variant="p"
          className="text-lg font-semibold text-foreground mt-8"
        >
          AI isn’t the future — AI systems are. Let’s build them, one workflow
          at a time.
        </Typography>
        <Button size="lg" className="mt-8" asChild>
          <Link href="https://edu.anujsharmalabs.live" target="_blank" rel="noopener noreferrer">Join the Newsletter</Link>
        </Button>
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
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 capitalize"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
