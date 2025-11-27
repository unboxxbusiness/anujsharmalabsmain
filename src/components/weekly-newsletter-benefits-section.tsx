'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: 'One Practical AI Workflow',
    description: 'A step-by-step process you can apply instantly.',
  },
  {
    title: 'Templates, Scripts & Prompt Libraries',
    description: 'Plug-and-play resources for content, operations & education.',
  },
  {
    title: 'Real-World Case Studies',
    description: 'How teams (including Amity University) automate faster.',
  },
  {
    title: 'Tools & Automation Tips',
    description: 'Only simple, easy-to-use tools — no complexity.',
  },
  {
    title: 'AI Insights & Trends',
    description: 'Clear explanations of what actually matters.',
  },
  {
    title: 'Actionable Productivity Systems',
    description: 'Work smarter, reduce chaos, and get more done.',
  },
];

export function WeeklyNewsletterBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="text-center">
          <Typography as="h2" variant="h2" className="!border-none">
            Every Edition Includes:
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1">
                <Check className="size-5 text-primary" />
              </div>
              <div>
                <Typography as="h3" variant="h3" className="text-lg font-semibold">
                  {benefit.title}
                </Typography>
                <Typography as="p" variant="p" className="text-muted-foreground !mt-1">
                  {benefit.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Typography
            as="p"
            variant="p"
            className="text-lg text-muted-foreground italic"
          >
            A powerful AI lesson in under 5 minutes. Every week. Free.
          </Typography>
        </div>
      </div>
    </section>
  );
}
