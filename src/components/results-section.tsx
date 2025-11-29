'use client';

import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Typography } from './ui/typography';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';
import Link from 'next/link';

export function ResultsSection() {
  const { resultsImage } = placeholderImageData;
  const proofPoints = [
    'Automated content workflows at scale',
    'Reduced manual workload for digital teams',
    'Improved turnaround time on content & operations',
    'Simplified AI adoption across departments',
  ];

  return (
    <section id="results" className="py-16 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-24">
        <div className="flex flex-col justify-center">
          <Typography variant="h2" as="h2" className="mb-6">
            Practical AI Systems That Deliver Real Results
          </Typography>
          <Typography variant="lead" as="p" className="mb-8">
            My work focuses on building real-world automation systems that
            reduce complexity, save time, and improve performance — using tools
            anyone can operate.
          </Typography>
          <ul className="space-y-4">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1.5 mr-4">
                  <Check className="size-4 text-primary" />
                </div>
                <Typography variant="body" as="span">
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-10 max-w-xs" asChild>
            <Link href="/blog">See Case Studies</Link>
          </Button>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={resultsImage.src}
            alt={resultsImage.alt}
            width={resultsImage.width}
            height={resultsImage.height}
            data-ai-hint={resultsImage.hint}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
