'use client';

import { Typography } from '@/components/ui/typography';
import { X, Check } from 'lucide-react';

export function WhyFrameworkExistsSection() {
  const problems = [
    'Overwhelmed by too many tools',
    'Inconsistent with their AI usage',
    'Slow to adopt new workflows',
    'Confused about how to apply AI',
    'Wasting time testing random tools',
    'Unsure how to get predictable results',
    'Producing random, low-quality output',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="space-y-6 md:space-y-8 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="!border-none"
          >
            AI Is Not About Tools — It’s About Systems
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground">
            <Typography variant="p" as="p">
              AI tools are everywhere. But without a system, teams end up with chaos. The S.I.M.P.L.E. AI System gives teams a structure that makes AI predictable, useful, and clear.
            </Typography>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left font-semibold text-lg">The Problem</th>
                <th className="p-4 text-center font-semibold text-lg bg-destructive/10 text-destructive rounded-t-lg">Chaos (Without a System)</th>
                <th className="p-4 text-center font-semibold text-lg bg-primary/10 text-primary rounded-t-lg">Clarity (With S.I.M.P.L.E.)</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-muted-foreground">{problem}</td>
                  <td className="p-4 bg-destructive/10 text-center">
                    <div className="inline-flex justify-center items-center size-6 bg-destructive/20 rounded-full">
                        <X className="size-4 text-destructive" />
                    </div>
                  </td>
                  <td className="p-4 bg-primary/10 text-center">
                    <div className="inline-flex justify-center items-center size-6 bg-primary/20 rounded-full">
                        <Check className="size-4 text-primary" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
