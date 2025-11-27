'use client';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import {
  Download,
  Library,
  Mail,
  PlayCircle,
} from 'lucide-react';
import React from 'react';

export function ServicesSection() {
  const steps = [
    {
      title: 'Download the AI Workflow Guide',
      description: 'Get 7 plug-and-play workflows that save 5–10 hours weekly.',
      icon: <Download size={24} />,
    },
    {
      title: 'Watch the 3-Minute AI Intro Video',
      description: 'Understand exactly how simple, effective AI systems work.',
      icon: <PlayCircle size={24} />,
    },
    {
      title: 'Explore the AI Systems Library',
      description: 'Learn the workflows, tools & templates top teams use.',
      icon: <Library size={24} />,
    },
    {
      title: 'Join My Newsletter',
      description:
        'Weekly insights on workflow automation & content systems.',
      icon: <Mail size={24} />,
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-white p-6 rounded-lg shadow-sm border flex"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-3xl font-bold text-primary/20">
                {index + 1}
              </div>
              <div>
                <Typography variant="h3" as="h3" className="mb-2">
                  {step.title}
                </Typography>
                <Typography variant="p" as="p" className="text-muted-foreground">
                  {step.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="#">Start With the Free Guide</a>
        </Button>
      </div>
    </section>
  );
}
