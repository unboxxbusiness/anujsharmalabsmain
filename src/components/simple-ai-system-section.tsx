
'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

export function SimpleAiSystemSection() {
  const steps = [
    {
      letter: 'S',
      title: 'Simplify the Problem',
      description: 'Find the real bottleneck and remove noise.',
    },
    {
      letter: 'I',
      title: 'Integrate AI Tools',
      description: 'Choose tools that are simple, practical, and actionable.',
    },
    {
      letter: 'M',
      title: 'Map the Workflow',
      description: 'Turn complex processes into clean, step-by-step flows.',
    },
    {
      letter: 'P',
      title: 'Produce Templates',
      description:
        'Build prompt libraries, content systems & automation templates.',
    },
    {
      letter: 'L',
      title: 'Launch Automations',
      description: 'Deploy workflows that run on autopilot.',
    },
    {
      letter: 'E',
      title: 'Evaluate & Improve',
      description: 'Optimize regularly for better performance.',
    },
  ];

  return (
    <section id="framework" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            The S.I.M.P.L.E. AI System™
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            A 6-step method to automate any workflow inside any team.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {steps.map((step, index) => (
            <Feature
              key={step.title}
              letter={step.letter}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            This system works across marketing, education, digital operations,
            and leadership workflows.
          </Typography>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  letter,
  title,
  description,
  index,
}: {
  letter: string;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        index === 0 || index === 3 ? 'lg:border-l dark:border-neutral-800' : '',
        index < 3 ? 'lg:border-b dark:border-neutral-800' : '',
        index === 2 || index === 5 ? 'lg:border-r-0' : ''
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 px-10">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">
          {letter}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <Typography
          variant="h3"
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block"
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
