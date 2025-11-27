'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <h1 className="text-4xl md:text-6xl font-medium max-w-[850px] text-center mx-auto">
          AI Systems for Marketers, Educators & Digital Teams — Without
          Complexity
        </h1>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          I help teams automate workflows, scale content, and grow faster using
          simple, practical AI systems anyone can use — no technical expertise
          required.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button className="bg-slate-800 text-white hover:bg-black">
              Get My Free AI Workflow Guide
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Or</span>
            <Button variant="link" className="p-0">
              Explore the S.I.M.P.L.E. AI System™
            </Button>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Digital Head at Amity University | AI Systems & Automation Specialist
        </p>
      </div>
    </section>
  );
}
