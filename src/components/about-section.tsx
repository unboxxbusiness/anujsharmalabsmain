'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import {
  IconTargetArrow,
  IconPencil,
  IconAssembly,
} from '@tabler/icons-react';
import React from 'react';

export function AboutSection() {
  const pillars = [
    {
      title: 'For Marketers',
      description:
        'Automate content creation, research, reporting & campaign workflows.',
      icon: <IconTargetArrow />,
    },
    {
      title: 'For Educators',
      description:
        'Streamline teaching, content development, communication & student support.',
      icon: <IconPencil />,
    },
    {
      title: 'For Digital Teams',
      description:
        'Build clean, scalable systems that remove operational chaos.',
      icon: <IconAssembly />,
    },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Typography variant="h2" as="h2" id="about-heading">
            Simple AI Systems That Create Real Results
          </Typography>
          <Typography
            variant="lead"
            as="p"
            className="mx-auto mt-4 max-w-3xl"
          >
            Most teams don’t need more AI tools — they need better systems. I
            design practical, plug-and-play AI workflows that reduce repetitive
            work, improve team efficiency, and help organizations create more in
            less time.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {pillars.map((pillar, index) => (
            <Feature key={pillar.title} {...pillar} index={index} />
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
    <article
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        index === 0 && 'lg:border-l dark:border-neutral-800',
        index < 3 && 'lg:border-b dark:border-neutral-800'
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
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 !text-lg !border-none !p-0"
        >
          {title}
        </Typography>
      </div>
      <Typography
        variant="small"
        as="p"
        className="text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
      >
        {description}
      </Typography>
    </article>
  );
};
