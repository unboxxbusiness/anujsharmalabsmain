'use client';

import { CheckCircle } from 'lucide-react';
import { InfiniteSlider } from './ui/infinite-slider';
import { Button } from './ui/button';

export function ResultsSection() {
  const proofPoints = [
    'Automated content workflows at scale',
    'Reduced manual workload for digital teams',
    'Improved turnaround time on content & operations',
    'Simplified AI adoption across departments',
  ];

  const logos = [
    'https://cdn.worldvectorlogo.com/logos/larsen-toubro-l-t.svg',
    'https://cdn.worldvectorlogo.com/logos/upwork-1.svg',
    'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
    'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg',
    'https://cdn.worldvectorlogo.com/logos/dribbble-icon.svg',
    'https://cdn.worldvectorlogo.com/logos/amazon-2.svg',
  ];

  return (
    <section id="results" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center md:space-y-12">
        <h2 className="text-4xl font-medium lg:text-5xl">
          Trusted By Teams Who Want Practical AI Systems
        </h2>

        <div className="mx-auto max-w-4xl">
          <InfiniteSlider gap={64}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo ${index}`}
                className="h-8 w-auto object-contain dark:invert"
              />
            ))}
          </InfiniteSlider>
        </div>

        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle className="mt-1 size-5 shrink-0 text-primary" />
              <p className="text-lg text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
        <Button size="lg" disabled>See Case Studies</Button>
      </div>
    </section>
  );
}
