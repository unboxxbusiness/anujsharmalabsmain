'use client';
import { Button } from '@/components/ui/button';
import {
  IconClipboardList,
  IconPlayerPlay,
  IconPencil,
  IconFileText,
} from '@tabler/icons-react';
import React from 'react';

export function ServicesSection() {
  const tools = [
    {
      title: 'AI Workflow Library',
      description:
        'Copy/paste-ready automated workflows for marketing, content, and funnels.',
      cta: 'Use It Free',
      icon: <IconClipboardList size={24} />,
    },
    {
      title: 'AI Tool Finder Quiz',
      description: 'Not sure which AI tools you need? Answer 6 questions.',
      cta: 'Take the Quiz',
      icon: <IconPencil size={24} />,
    },
    {
      title: 'Free Automation Audit',
      description: 'Get a customized report on what you can automate today.',
      cta: 'Start the Audit',
      icon: <IconPlayerPlay size={24} />,
    },
    {
      title: 'AI Content Engine Template (Notion)',
      description: 'Create 10–30 pieces of content weekly using automated workflows.',
      cta: 'Download Free Template',
      icon: <IconFileText size={24} />,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-medium lg:text-5xl">
          Start Here — My Free AI Automation Tools
        </h2>
        <p className="text-muted-foreground mt-4">
          These free tools will save you hours immediately.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="bg-white p-6 rounded-lg shadow-sm border flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 text-primary p-2 rounded-full">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold">{tool.title}</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              {tool.description}
            </p>
            <Button asChild>
              <a href="#">{tool.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
