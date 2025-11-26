'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { aboutImage } from '@/lib/placeholder-images.json';

export function AboutSection() {
  const benefits = [
    'Save 10–20 hours every week',
    'Scale content without burnout',
    'Fix broken funnels & follow-up gaps',
    'Build workflows that run automatically',
    'Operate faster with fewer mistakes',
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Hi, I’m Anuj Sharma.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Digital Head at Amity University.
            <br />
            AI Automation & Digital Marketing Specialist.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          <div className="relative mb-6 sm:mb-0">
            <div className="aspect-[76/59] relative rounded-2xl">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
                data-ai-hint={aboutImage.hint}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <h3 className="text-2xl font-bold">
              I design simple, practical, high-impact AI automation systems that
              help teams:
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-xl font-semibold leading-relaxed text-center">
                If you want AI to actually work for your marketing and
                operations, you’re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
