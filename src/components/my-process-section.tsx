'use client';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import {
  IconFilter,
  IconReplace,
  IconSitemap,
  IconFileText,
  IconPlayerPlay,
  IconActivity,
} from '@tabler/icons-react';
import React from 'react';

export function MyProcessSection() {
  const steps = [
    {
      title: 'Step 1 — Simplify the Problem',
      description: 'We identify your biggest bottlenecks.',
      icon: <IconFilter />,
    },
    {
      title: 'Step 2 — Integrate the Right Tools',
      description:
        'We choose simple, accessible tools your team can use instantly.',
      icon: <IconReplace />,
    },
    {
      title: 'Step 3 — Map the Workflow',
      description: 'We design a clean, step-by-step flow.',
      icon: <IconSitemap />,
    },
    {
      title: 'Step 4 — Produce Templates',
      description:
        'We build your prompts, content systems & automation templates.',
      icon: <IconFileText />,
    },
    {
      title: 'Step 5 — Launch Automations',
      description: 'We install workflows that run on autopilot.',
      icon: <IconPlayerPlay />,
    },
    {
      title: 'Step 6 — Evaluate & Improve',
      description: 'We refine the system every 30 days.',
      icon: <IconActivity />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" as="h2" className="!border-none">
            How It Works
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground mt-4"
          >
            I follow my proprietary S.I.M.P.L.E. AI System, a 6-step method to
            build clean, scalable workflows.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {steps.map((feature, index) => (
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
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
      >
        {description}
      </Typography>
    </div>
  );
};
