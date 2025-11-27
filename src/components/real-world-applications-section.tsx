'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconCalendarEvent,
  IconFileText,
  IconListCheck,
  IconMessageCircleQuestion,
  IconTrendingUp,
  IconBook,
  IconEngine,
  IconSitemap,
  IconClockHour4,
} from '@tabler/icons-react';
import React from 'react';

const applications = [
  {
    title: 'Create 30 days of content in an hour',
    icon: <IconCalendarEvent />,
  },
  {
    title: 'Summarize research and reports instantly',
    icon: <IconFileText />,
  },
  {
    title: 'Turn meetings into actionable tasks',
    icon: <IconListCheck />,
  },
  {
    title: 'Automate student queries',
    icon: <IconMessageCircleQuestion />,
  },
  {
    title: 'Scale marketing campaigns',
    icon: <IconTrendingUp />,
  },
  {
    title: 'Generate teaching materials',
    icon: <IconBook />,
  },
  {
    title: 'Build content engines',
    icon: <IconEngine />,
  },
  {
    title: 'Streamline operations',
    icon: <IconSitemap />,
  },
  {
    title: 'Reduce manual workload by 60–80%',
    icon: <IconClockHour4 />,
  },
];

export function RealWorldApplicationsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Real-World Applications
          </Typography>
          <Typography as="p" variant="p" className="text-muted-foreground mt-4">
            Teams use the S.I.M.P.L.E. AI System to:
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {applications.map((item, index) => (
            <Feature key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground"
          >
            This framework works across industries and team sizes.
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
  const isTopRow = index < 3;
  const isMiddleRow = index >= 3 && index < 6;
  const isBottomRow = index >= 6;

  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 3 || index === 6) &&
          'lg:border-l dark:border-neutral-800',
        index < 6 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {isTopRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {(isMiddleRow || isBottomRow) && (
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
