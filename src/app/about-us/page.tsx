'use client';

import { Check } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import { WhatIDoNowSection } from '@/components/what-i-do-now-section';
import { SimpleAiSystemSection } from '@/components/simple-ai-system-section';
import { MyMissionSection } from '@/components/my-mission-section';
import { MyValuesSection } from '@/components/my-values-section';
import { WhoIWorkWithSection } from '@/components/who-i-work-with-section';
import { InvitationSection } from '@/components/invitation-section';

function AboutUsHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Helping Marketers, Educators & Digital Teams Use AI — Without
          Complexity
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          I build simple, practical AI systems that help teams automate
          workflows, scale content, and grow faster. No overwhelm. No jargon.
          No technical headaches.
        </Typography>
      </div>
    </section>
  );
}

function OriginStorySection() {
  const benefits = [
    'Work became faster',
    'Content scaled effortlessly',
    'Teams collaborated better',
    'Reporting improved',
    'Output became consistent',
    'Decision-making became sharper',
  ];

  return (
    <section className="py-16 md:py-24 bg-background-dark text-foreground-dark">
      <div className="mx-auto max-w-3xl px-6 space-y-12 md:space-y-16">
        <div className="space-y-6 md:space-y-8">
          <Typography
            variant="h2"
            as="h2"
            className="text-center !border-none text-foreground-dark"
          >
            My Journey Into AI Systems
          </Typography>
          <div className="space-y-6 text-lg text-muted-foreground-dark">
            <Typography variant="p" as="p">
              I’ve spent the last several years leading digital transformation
              at Amity University, one of the largest educational institutions
              in India. Working across marketing, content, admissions, digital
              operations, and cross-functional teams taught me one truth:
            </Typography>
            <blockquote className="border-l-4 pl-4 italic text-xl font-semibold text-foreground-dark">
              👉 Most teams don’t need more tools. They need better systems.
            </blockquote>
            <Typography variant="p" as="p">
              Teams weren’t struggling because they lacked skill. They were
              struggling because their workflows were slow, repetitive, and
              chaotic.
            </Typography>
            <Typography variant="p" as="p">
              When I started applying AI strategically — not as a tool, but as a
              system — everything changed.
            </Typography>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <div className="bg-primary-dark/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary-dark" />
              </div>
              <Typography as="span" variant="body" className="text-foreground-dark">
                {benefit}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-lg text-muted-foreground-dark">
          <Typography variant="p" as="p">
            That’s when I realized my mission: To help organizations implement
            AI in a simple, accessible, and meaningful way — without complexity
            or technical barriers.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHeroSection />
      <OriginStorySection />
      <WhatIDoNowSection />
      <SimpleAiSystemSection />
      <MyMissionSection />
      <MyValuesSection />
      <WhoIWorkWithSection />
      <InvitationSection />
    </main>
  );
}
