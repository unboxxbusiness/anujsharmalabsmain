'use client';

import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
  IconCpu,
  IconPlayerPlay,
  IconPencil,
  IconSchool,
} from '@tabler/icons-react';
import React from 'react';

const toolCategories = [
  {
    title: 'AI Tools',
    description: 'ChatGPT, Claude, Gemini, Perplexity',
    icon: <IconCpu />,
  },
  {
    title: 'Automation Tools',
    description: 'Zapier / Make, Notion, Sheets + AI, Descript',
    icon: <IconPlayerPlay />,
  },
  {
    title: 'Content Tools',
    description: 'Notion, CapCut, Opus Clip, Canva',
    icon: <IconPencil />,
  },
  {
    title: 'Education Tools',
    description: 'Moodle AI, Botpress, Fireflies',
    icon: <IconSchool />,
  },
];

export function ToolStackSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="!border-none">
            My Recommended AI Tool Stack
          </Typography>
          <Typography as="p" variant="p" className="mt-4 text-muted-foreground">
            Tools I use to build AI systems — simple, reliable, and easy to
            adopt.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {toolCategories.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">See My Full Tool Stack</Button>
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
        index === 0 && 'lg:border-l dark:border-neutral-800',
        'lg:border-b dark:border-neutral-800'
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
