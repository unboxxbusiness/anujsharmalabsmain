'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Check, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

const comparisonData = [
  {
    feature: 'Automate repetitive tasks',
    marketers: true,
    educators: true,
    digitalTeams: true,
  },
  {
    feature: 'Scale content creation',
    marketers: true,
    educators: true,
    digitalTeams: true,
  },
  {
    feature: 'Improve productivity',
    marketers: true,
    educators: true,
    digitalTeams: true,
  },
  {
    feature: 'Eliminate bottlenecks',
    marketers: true,
    educators: false,
    digitalTeams: true,
  },
  {
    feature: 'Adopt AI without overwhelm',
    marketers: true,
    educators: true,
    digitalTeams: true,
  },
  {
    feature: 'Build a consistent content engine',
    marketers: true,
    educators: false,
    digitalTeams: true,
  },
];

export function WhoIWorkWithSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center mb-12">
          <Typography variant="h2" as="h2" className="!border-none">
            Grow Smarter, Not Harder
          </Typography>
          <Typography variant="p" as="p" className="text-muted-foreground !mt-4">
            I help teams install AI systems that reduce chaos and increase
            output. See how I can help your specific team.
          </Typography>
        </div>
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-full border-separate border-spacing-x-0 md:border-spacing-x-3">
            <thead className="bg-background sticky top-0">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3 text-center">
                  <span className="block">Marketers</span>
                </th>
                <th className="bg-muted rounded-t-lg space-y-3 px-4 text-center">
                  <span className="block">Educators</span>
                </th>
                <th className="space-y-3 text-center">
                  <span className="block">Digital Teams</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="*:py-3">
                <td className="flex items-center gap-2 font-medium">
                  <Sparkles className="size-4" />
                  <span>What You Get</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {comparisonData.map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td className="text-center">
                    {row.marketers && (
                      <Check className="size-4 text-primary mx-auto" />
                    )}
                  </td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3 text-center">
                      {row.educators && (
                        <Check className="size-4 text-primary mx-auto" />
                      )}
                    </div>
                  </td>
                  <td className="text-center">
                    {row.digitalTeams && (
                      <Check className="size-4 text-primary mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="bg-muted rounded-b-lg border-none px-4"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Typography
          variant="p"
          as="p"
          className="text-center text-lg font-semibold text-foreground !mt-12"
        >
          ... and for Founders, Agencies, & Training Organizations, I can help
          too.
        </Typography>
      </div>
    </section>
  );
}
