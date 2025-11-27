
'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const steps = [
  {
    letter: 'S',
    title: 'Simplify the Problem',
    description: 'Identify the real bottleneck first.',
    details: [
      'Most teams try to automate everything at once — and fail. This step helps you:',
    ],
    points: [
      'Find the highest-impact workflow',
      'Identify manual, repetitive tasks',
      'Ignore noise and focus on value',
    ],
    subHeader: 'Questions we answer:',
    subPoints: [
      'What slows you down the most?',
      'What is repetitive and predictable?',
      'What can be improved immediately?',
    ],
  },
  {
    letter: 'I',
    title: 'Integrate Simple AI Tools',
    description: 'Choose tools you can actually use.',
    details: [
      'AI adoption dies when teams pick complex tools. This step ensures you choose tools that are:',
    ],
    points: ['Simple', 'Intuitive', 'Accessible', 'Low-maintenance'],
    subHeader: 'Examples: ChatGPT, Notion, Sheets, Make/Zapier.',
    subPoints: ['Outcome: A lean, efficient AI stack.'],
  },
  {
    letter: 'M',
    title: 'Map the Workflow',
    description: 'Turn chaos into a clean step-by-step flow.',
    details: ['We break the workflow into clear stages:'],
    points: [
      'Inputs',
      'Processing',
      'Outputs',
      'Decision points',
      'Automations',
    ],
    subPoints: [
      'This creates clarity, improves collaboration, and sets the foundation for automation.',
    ],
  },
  {
    letter: 'P',
    title: 'Produce Templates & Prompts',
    description: 'Templates make your system repeatable and scalable.',
    details: ['We create:'],
    points: [
      'Prompt libraries',
      'Content templates',
      'Automation templates',
      'SOPs',
      'Checklists',
      'Reusable workflows',
    ],
    subPoints: ['This removes inconsistency and speeds up team adoption.'],
  },
  {
    letter: 'L',
    title: 'Launch Automations',
    description: 'Deploy workflows that run on autopilot.',
    details: ['Using simple automation tools, we connect your workflows:'],
    points: [
      'Content systems',
      'Reporting',
      'Notifications',
      'Research',
      'Communication',
      'Task creation',
      'Repurposing pipelines',
    ],
    subPoints: ['No coding. No engineers. No complexity.'],
  },
  {
    letter: 'E',
    title: 'Evaluate & Improve',
    description: 'Optimize your AI system every 30 days.',
    details: ['We analyze:'],
    points: [
      'Time saved',
      'Output quality',
      'Bottlenecks',
      'Team adoption',
      'Tool performance',
    ],
    subPoints: ['Then we refine the workflow to keep it efficient and aligned with goals.'],
  },
];

export function SimpleAiSystemSection() {
  return (
    <section id="framework" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="text-center">
          <Typography variant="h2" as="h2">
            The S.I.M.P.L.E. AI System
          </Typography>
          <Typography
            variant="p"
            as="p"
            className="mx-auto mt-4 max-w-3xl text-muted-foreground"
          >
            A 6-step method to automate any workflow inside any team.
          </Typography>
        </div>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">
                  {step.letter}
                </div>
              </div>
              <div className="space-y-4 pt-1">
                <Typography variant="h3" as="h3" className='text-2xl'>
                  {step.title}
                </Typography>
                <Typography variant="p" as="p" className="text-lg text-muted-foreground !mt-2">
                  {step.description}
                </Typography>
                {step.details?.map((detail) => (
                  <Typography
                    key={detail}
                    variant="p"
                    as="p"
                    className="text-muted-foreground !mt-4"
                  >
                    {detail}
                  </Typography>
                ))}
                {step.points && (
                  <ul className="space-y-2 !mt-4">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <Check className="size-4 text-primary" />
                        </div>
                        <Typography
                          as="span"
                          variant="body"
                          className="text-foreground"
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
                {step.subHeader && (
                  <Typography variant="p" as="p" className="text-muted-foreground !mt-4 italic">
                    {step.subHeader}
                  </Typography>
                )}
                {step.subPoints?.map((subPoint) => (
                  <Typography
                    key={subPoint}
                    variant="p"
                    as="p"
                    className="text-muted-foreground !mt-2"
                  >
                    {subPoint}
                  </Typography>
                ))}
              </div>
            </div>
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
