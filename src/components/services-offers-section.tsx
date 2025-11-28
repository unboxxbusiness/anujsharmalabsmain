'use client';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import {
  IconHelp,
  IconTerminal2,
  IconFileText,
  IconUsers,
} from '@tabler/icons-react';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export function ServicesOffersSection() {
  const whatsappNumber = '918851481785';
  const message = 'Hello, I would like to book a free AI Workflow Audit.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const features = [
    {
      title: 'AI Workflow Audit (Free)',
      description:
        'A 15-min call to identify 1-2 workflows to automate and get a quick-win AI recommendation.',
      icon: <IconHelp />,
      href: whatsappUrl,
    },
    {
      title: 'AI System Buildout',
      description:
        'A fully functional, plug-and-play AI system your team can use from Day 1.',
      icon: <IconTerminal2 />,
      href: '/work-with-me',
    },
    {
      title: 'Content Engine Setup',
      description:
        'A complete system to produce 20-50 pieces of content a month with less effort.',
      icon: <IconFileText />,
      href: '/work-with-me',
    },
    {
      title: 'Team Training & Workshops',
      description:
        'Make your team confident and capable with AI through practical, custom-tailored training.',
      icon: <IconUsers />,
      href: '/work-with-me',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" as="h2" className="!border-none">
            Ways We Can Work Together
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground mt-4"
          >
            Below are the core ways I help teams build AI systems and adopt
            automation in a simple, manageable way.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
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
  href,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
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
      <div className="mt-auto pt-4 px-10">
        <Button variant="link" asChild className="p-0 h-auto">
          <Link
            href={href}
            target={href.startsWith('https') ? '_blank' : undefined}
            rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
          >
            {title.includes('Free') ? 'Book Now' : 'Learn More'}
          </Link>
        </Button>
      </div>
    </div>
  );
};
