'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Check, Bot, BookOpen, PenTool, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function WorkWithMeSection() {
  const offers = [
    {
      title: 'AI Workflow Audit (Free)',
      description:
        'A 15-minute call to map one workflow you can automate immediately.',
      icon: <Check size={24} />,
    },
    {
      title: 'AI System Buildout',
      description:
        'Done-for-you workflows, templates & automation setup for your team.',
      icon: <Bot size={24} />,
    },
    {
      title: 'Content Engine Setup',
      description: 'A system to produce daily content consistently using AI.',
      icon: <BookOpen size={24} />,
    },
    {
      title: 'Team Training & Consulting',
      description: 'Teach your team how to use AI in a simple, effective way.',
      icon: <Users size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            Work With Me
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            Whether you want one workflow automated or an entire content engine
            built, I help teams install AI systems that reduce chaos and
            increase output — without adding complexity.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {offers.map((offer, index) => (
            <Feature key={offer.title} {...offer} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/work-with-me">Book the Free AI Workflow Audit</Link>
          </Button>
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
        index < 4 && 'lg:border-b dark:border-neutral-800'
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
