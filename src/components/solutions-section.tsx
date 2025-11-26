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
  IconBriefcase
} from '@tabler/icons-react';
import { Button } from './ui/button';

export function SolutionsSection() {
  const features = [
    {
      title: 'AI Marketing Automation',
      description:
        'Automate campaigns, reporting, and multi-step marketing tasks.',
      icon: <IconRobot />,
    },
    {
      title: 'AI Content Systems',
      description: 'Create AI-powered content pipelines that scale output 3–5x.',
      icon: <IconFileText />,
    },
    {
      title: 'CRM & Funnel Automation',
      description:
        'Fix follow-up speed, improve conversions, and eliminate manual lead handling.',
      icon: <IconUsers />,
    },
    {
      title: 'No-Code Workflow Automation',
      description:
        'Connect your tools, sync your systems, and automate your operations.',
      icon: <IconCode />,
    },
    {
        title: "Corporate AI Training",
        description: "Train your team to use AI effectively with proven workflows and templates.",
        icon: <IconBriefcase />,
      },
  ];
  return (
    <section className="py-16 md:py-32">
        <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-medium lg:text-5xl">
            Get AI Automation That Actually Works
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
         <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
            )}
        >
             <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                <IconHeart />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                And so much more...
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                Custom solutions to fit your unique business needs.
            </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button>Explore Services</Button>
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
        (index === 0 || index === 3 || index === 6) && 'lg:border-l dark:border-neutral-800',
        index < 3 && 'lg:border-b dark:border-neutral-800',
        index >=3 && 'lg:border-b dark:border-neutral-800'
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
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
