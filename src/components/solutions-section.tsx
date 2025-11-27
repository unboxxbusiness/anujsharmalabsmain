'use client';
import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconRobot,
  IconFileText,
  IconUsers,
  IconCode,
  IconBriefcase,
  IconCalendar,
  IconMail,
  IconClipboardCheck,
} from '@tabler/icons-react';
import { Button } from './ui/button';
import { Typography } from './ui/typography';

export function SolutionsSection() {
  const features = [
    {
      title: 'AI Content Engine Blueprint',
      description:
        'A complete guide to building an automated content creation system.',
      icon: <IconFileText />,
    },
    {
      title: 'Workflow: Automated Content Calendar',
      description: 'Plan and schedule your content with AI-driven automation.',
      icon: <IconCalendar />,
    },
    {
      title: 'Workflow: Meeting Notes → Tasks',
      description:
        'Automatically convert meeting transcripts into actionable tasks.',
      icon: <IconClipboardCheck />,
    },
    {
      title: 'Workflow: Research Summarizer',
      description:
        'Summarize long articles, reports, and research papers in seconds.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Workflow: Email Automation',
      description: 'Automate your email marketing and follow-up sequences.',
      icon: <IconMail />,
    },
    {
      title: 'Framework: S.I.M.P.L.E. AI System™',
      description: 'The core framework for building any AI-powered workflow.',
      icon: <IconCode />,
    },
  ];
  return (
    <section className="py-16 md:py-32">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <Typography variant="h2" as="h2">
          Explore Practical AI Workflows & Tutorials
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="text-muted-foreground mt-4 max-w-3xl mx-auto"
        >
          A growing collection of resources designed to help you automate
          faster, create better, and work smarter — without complexity.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button>Browse the Library</Button>
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
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 3 || index === 6) &&
          'lg:border-l dark:border-neutral-800',
        index < 3 && 'lg:border-b dark:border-neutral-800',
        index >= 3 && 'lg:border-b dark:border-neutral-800'
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
    </div>
  );
};
