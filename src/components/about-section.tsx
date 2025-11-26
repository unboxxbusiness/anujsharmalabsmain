'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const benefits = [
    'Save 10–20 hours every week',
    'Scale content without burnout',
    'Fix broken funnels & follow-up gaps',
    'Build workflows that run automatically',
    'Operate faster with fewer mistakes',
  ];

  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Hi, I’m Anuj Sharma.
          </h2>
          <p className="text-muted-foreground">
            Digital Head at Amity University.
            <br />
            <span className="font-medium text-foreground">
              AI Automation & Digital Marketing Specialist.
            </span>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p className="text-muted-foreground">
              I design simple, practical, high-impact AI automation systems that
              help teams:
            </p>
            <div className="mb-12 mt-12 grid grid-cols-1 gap-6 md:mb-0">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-xl font-semibold leading-relaxed">
                If you want AI to actually work for your marketing and
                operations, you’re in the right place.
              </p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium not-italic">
                  Anuj Sharma
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
