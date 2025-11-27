'use client';
import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconCalendar,
  IconClipboardCheck,
  IconCode,
  IconFileText,
  IconMail,
} from '@tabler/icons-react';
import { Button } from './ui/button';
import { Typography } from './ui/typography';
import Link from 'next/link';

export function SolutionsSection() {
  const features = [
    {
      title: 'AI Content Engine Blueprint',
      description:
        'Create 20–50 content pieces per month using simple AI workflows.',
      icon: <IconFileText />,
    },
    {
      title: 'Content Repurposing Automation',
      description: 'Turn 1 video, blog, or script into 20+ pieces instantly.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Meeting Notes → Action Tasks Workflow',
      description:
        'Convert transcripts or notes into clean summaries, tasks & follow-ups.',
      icon: <IconClipboardCheck />,
    },
    {
      title: 'AI Research Assistant',
      description:
        'Summarize articles, PDFs, reports & web pages automatically.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Email Automation System',
      description: 'Draft replies, templates & outreach emails in seconds.',
      icon: <IconMail />,
    },
    {
      title: 'Content Calendar Automation',
      description: 'Generate 30 days of content in 15 minutes.',
      icon: <IconCalendar />,
    },
  ];
  return (
    <section className="py-16 md:py-32">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <Typography variant="h2" as="h2">
          Most Popular AI Workflows
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
        <Button asChild>
          <Link href="/ai-systems-library">Explore All Workflows</Link>
        </Button>
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
