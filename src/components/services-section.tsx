'use client';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Download, Library, Mail, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function ServicesSection() {
  const steps = [
    {
      title: 'Download the AI Workflow Guide',
      description: 'Get 7 plug-and-play workflows that save 5–10 hours weekly.',
      icon: <Download size={24} />,
      href: '/ai-systems-library',
    },
    {
      title: 'Watch the 3-Minute AI Intro Video',
      description: 'Understand exactly how simple, effective AI systems work.',
      icon: <PlayCircle size={24} />,
      href: '/about-us',
    },
    {
      title: 'Explore the AI Systems Library',
      description: 'Learn the workflows, tools & templates top teams use.',
      icon: <Library size={24} />,
      href: '/ai-systems-library',
    },
    {
      title: 'Join My Newsletter',
      description:
        'Weekly insights on workflow automation & content systems.',
      icon: <Mail size={24} />,
      href: '/newsletter',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <Typography variant="h2" as="h2">
          New? Start Here.
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="text-muted-foreground mt-4 max-w-3xl mx-auto"
        >
          If you’re beginning your AI journey, follow this simple path to get
          the maximum value and start building your first automated workflow.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Link href={step.href} key={step.title}>
            <Feature
              {...step}
              index={index}
              className={cn(
                index === 0 && 'lg:border-l',
                index === 3 && 'lg:border-r-0'
              )}
            />
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/ai-systems-library">Start With the Free Guide</Link>
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
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 h-full',
        'lg:border-b dark:border-neutral-800',
        className
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
