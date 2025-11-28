'use client';

import {
  Check,
  Lightbulb,
  Heart,
  Users,
  TestTube2,
  FileCheck,
} from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import React from 'react';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center text-primary">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export function IntroSection() {
  const { aiLibraryImage } = placeholderImageData;
  const benefits = [
    {
      icon: <Lightbulb />,
      name: 'Simple',
      description: 'Easy to understand and implement.',
    },
    {
      icon: <FileCheck />,
      name: 'Practical',
      description: 'Focused on real-world applications.',
    },
    {
      icon: <Heart />,
      name: 'Actionable',
      description: 'Clear steps you can take immediately.',
    },
    {
      icon: <TestTube2 />,
      name: 'Real-world Tested',
      description: 'Proven to work in real business scenarios.',
    },
    {
      icon: <Users />,
      name: 'For Non-Technical Teams',
      description: 'No coding or special expertise required.',
    },
  ];
  return (
    <section>
      <div className="bg-slate-50 dark:bg-background py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <Typography
                variant="h2"
                as="h2"
                className="text-balance text-3xl font-semibold md:text-4xl !border-none"
              >
                Simple, Practical AI Systems You Can Use Today
              </Typography>
              <Typography variant="p" as="p" className="text-muted-foreground !mt-4">
                Welcome to the AI Systems Library — your go-to resource for
                learning how to use AI the right way. Not with confusing tools
                or complicated tutorials, but with step-by-step workflows that
                save hours, increase output, and reduce manual work.
              </Typography>
            </div>

            <div className="mt-auto space-y-4">
              <Typography variant="p" as="p" className="text-foreground">
                Use these systems to automate content, reporting,
                communication, research, teaching, planning, and more.
              </Typography>
            </div>
          </div>

          <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
              <Image
                src={aiLibraryImage.src}
                alt={aiLibraryImage.alt}
                width={aiLibraryImage.width}
                height={aiLibraryImage.height}
                data-ai-hint={aiLibraryImage.hint}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
