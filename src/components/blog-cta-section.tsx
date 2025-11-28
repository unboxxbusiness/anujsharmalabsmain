'use client';

import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Check, Mail, Zap, DraftingCompass, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import placeholderImageData from '@/lib/placeholder-images.json';

export function BlogCtaSection() {
  const { newsletterCtaImage } = placeholderImageData;
  const benefits = [
    {
      text: '1 actionable AI workflow',
      icon: <Zap className="size-5" />,
    },
    {
      text: '1 template or prompt pack',
      icon: <DraftingCompass className="size-5" />,
    },
    {
      text: '1 system you can apply immediately',
      icon: <Activity className="size-5" />,
    },
    {
      text: 'Delivered every week in under 5 minutes',
      icon: <Mail className="size-5" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <Typography as="h2" variant="h2" className="!border-none text-4xl lg:text-5xl">
                Want New AI Workflows Every Week?
              </Typography>
              <Typography as="p" variant="p" className="mt-6">
                Join AI Systems Weekly — my free newsletter for marketers,
                educators & digital leaders.
              </Typography>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              {benefits.map((benefit) => (
                <li key={benefit.text}>
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link href="/newsletter">Subscribe for Free</Link>
            </Button>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-linear-to-b aspect-[76/59] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src={newsletterCtaImage.src}
                alt={newsletterCtaImage.alt}
                width={newsletterCtaImage.width}
                height={newsletterCtaImage.height}
                data-ai-hint={newsletterCtaImage.hint}
                className="rounded-[15px] shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
