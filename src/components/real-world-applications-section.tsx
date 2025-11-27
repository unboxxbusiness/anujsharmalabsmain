'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const applications = [
  'Create 30 days of content in an hour',
  'Summarize research and reports instantly',
  'Turn meetings into actionable tasks',
  'Automate student queries',
  'Scale marketing campaigns',
  'Generate teaching materials',
  'Build content engines',
  'Streamline operations',
  'Reduce manual workload by 60–80%',
];

export function RealWorldApplicationsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <Typography as="h2" variant="h2" className="!border-none">
            Real-World Applications
          </Typography>
          <Typography as="p" variant="p" className="text-muted-foreground mt-4">
            Teams use the S.I.M.P.L.E. AI System to:
          </Typography>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {applications.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {item}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Typography
            variant="p"
            as="p"
            className="text-lg text-muted-foreground"
          >
            This framework works across industries and team sizes.
          </Typography>
        </div>
      </div>
    </section>
  );
}
