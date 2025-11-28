'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-32 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          AI Systems for Marketers, Educators & Digital Teams — Without
          Complexity
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          I help teams automate workflows, scale content, and grow faster using
          simple, practical AI systems anyone can use — no technical expertise
          required.
        </Typography>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button className="bg-slate-800 text-white hover:bg-black" asChild>
              <Link href="/free-resources">Get My Free AI Workflow Guide</Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Typography variant="span" className="text-muted-foreground">
              Or
            </Typography>
            <Button variant="link" className="p-0" asChild>
              <Link href="/framework">Explore the S.I.M.P.L.E. AI System</Link>
            </Button>
          </div>
        </div>
        <Typography
          variant="p"
          as="p"
          className="text-center text-sm text-muted-foreground mt-4"
        >
          Digital Head at Amity University | AI Systems & Automation Specialist
        </Typography>
      </div>
    </section>
  );
}
