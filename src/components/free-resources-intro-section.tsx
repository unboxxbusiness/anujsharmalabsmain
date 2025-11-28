'use client';

import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';

export function FreeResourcesIntroSection() {
  const { freeResourcesImage } = placeholderImageData;
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <Image
          className="rounded-lg grayscale"
          src={freeResourcesImage.src}
          alt={freeResourcesImage.alt}
          width={freeResourcesImage.width}
          height={freeResourcesImage.height}
          data-ai-hint={freeResourcesImage.hint}
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <Typography as="h2" variant="h2" className="!border-none">
            Start Using AI the Right Way — Simple, Practical & Immediately
            Useful
          </Typography>
          <div className="space-y-6">
            <Typography
              variant="p"
              as="p"
              className="text-muted-foreground !mt-0"
            >
              Most AI content online is confusing or overly technical. These
              resources are different. They’re built to help real teams use AI
              today — with step-by-step systems, plug-and-play templates, and
              practical tools that save time and improve productivity.
            </Typography>
            <Typography
              variant="p"
              as="p"
              className="text-muted-foreground !mt-0"
            >
              Everything here is free and based on real experience building AI
              systems at Amity University and for marketing, education, and
              digital teams across industries.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
