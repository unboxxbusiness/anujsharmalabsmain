'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const workflowCategories = [
  {
    title: 'Marketing',
    workflows: [
      'AI Content Engine System',
      '30-Day Content Calendar Automation',
      'AI Copywriting Templates',
      'Campaign Research Workflow',
      'Social Media Repurposing System',
      'Ad Copy + Creative Automation',
      'Landing Page Copywriting AI Workflow',
      'Competitor Research Workflow',
      'Audience Insight Extraction Workflow',
    ],
  },
  {
    title: 'Education',
    workflows: [
      'Lecture → Content Automation',
      'Syllabus/Notes Summarization Workflow',
      'Student Support Bot',
      'Assignment Evaluation Framework',
      'FAQ Automation',
      'Lesson Plan Builder',
      'Teaching Material Generator',
      'Student Communication Assistant',
    ],
  },
  {
    title: 'Operations',
    workflows: [
      'Meeting Notes → Summary → Tasks',
      'Weekly Reports Automation',
      'Department Coordination Workflow',
      'Email Reply System',
      'SOP Creation Workflow',
      'Employee Onboarding Assistant',
      'Executive Summary Generator',
    ],
  },
  {
    title: 'Content',
    workflows: [
      'Video Script Generator',
      'Carousel Outline Template',
      'Blog Writer Workflow',
      'Research-to-Post Pipeline',
      'Podcast/Interview Summary System',
      'Short-Form Video Idea Engine',
      'Webinar/Workshop Automation',
    ],
  },
  {
    title: 'Productivity',
    workflows: [
      'Task Prioritization Assistant',
      'Daily Planner Workflow',
      'Project Outline Generator',
      'AI Brainstorming Framework',
      'Analytics Summary Assistant',
    ],
  },
];

export function AllWorkflowsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="!border-none">
            Browse All AI Workflows
          </Typography>
        </div>
        <Tabs defaultValue={workflowCategories[0].title.toLowerCase()}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            {workflowCategories.map((category) => (
              <TabsTrigger
                key={category.title}
                value={category.title.toLowerCase()}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {workflowCategories.map((category) => (
            <TabsContent
              key={category.title}
              value={category.title.toLowerCase()}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.title} Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {category.workflows.map((workflow) => (
                      <li key={workflow} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <Check className="size-4 text-primary" />
                        </div>
                        <Typography
                          as="span"
                          variant="body"
                          className="text-foreground"
                        >
                          {workflow}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}