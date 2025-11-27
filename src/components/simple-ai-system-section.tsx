
'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function SimpleAiSystemSection() {
  const steps = [
    {
      letter: 'S',
      title: 'Simplify the Problem',
      description: 'Identify inefficiencies, bottlenecks & repetitive tasks.',
    },
    {
      letter: 'I',
      title: 'Integrate AI Tools',
      description:
        'Choose simple, easy-to-use tools the team can adopt instantly.',
    },
    {
      letter: 'M',
      title: 'Map the Workflow',
      description:
        'Turn processes into clear, step-by-step automation-ready flows.',
    },
    {
      letter: 'P',
      title: 'Produce Templates',
      description: 'Build prompts, templates, and content engines.',
    },
    {
      letter: 'L',
      title: 'Launch Automations',
      description: 'Deploy workflows that run on autopilot.',
    },
    {
      letter: 'E',
      title: 'Evaluate & Improve',
      description: 'Optimize every 30 days for better performance.',
    },
  ];

  return (
    <section id="framework" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            My 6-Step Framework for Automating Any Workflow
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            The S.I.M.P.L.E. AI System™ is the framework I use to build custom AI
            systems for marketing, education, and digital operations.
          </Typography>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">
                  {step.letter}
                </div>
                <Typography variant="h3" as="h3">
                  {step.title}
                </Typography>
              </div>
              <Typography variant="p" as="p" className="text-muted-foreground">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Learn the Framework</Button>
        </div>
      </div>
    </section>
  );
}
