'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';

const toolCategories = [
  {
    title: 'AI Tools',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
  },
  {
    title: 'Automation Tools',
    tools: ['Zapier / Make', 'Notion', 'Sheets + AI', 'Descript'],
  },
  {
    title: 'Content Tools',
    tools: ['Notion', 'CapCut', 'Opus Clip', 'Canva'],
  },
  {
    title: 'Education Tools',
    tools: ['Moodle AI', 'Botpress', 'Fireflies'],
  },
];

export function ToolStackSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="!border-none">
            My Recommended AI Tool Stack
          </Typography>
          <Typography as="p" variant="p" className="mt-4 text-muted-foreground">
            Tools I use to build AI systems — simple, reliable, and easy to
            adopt.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool}>
                      <Typography as="span" variant="body" className="text-foreground">
                        {tool}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">See My Full Tool Stack</Button>
        </div>
      </div>
    </section>
  );
}
