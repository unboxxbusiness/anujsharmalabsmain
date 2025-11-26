'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <h1 className="text-4xl md:text-6xl font-medium max-w-[850px] text-center mx-auto">
          Automate Marketing. Save Time. Scale with AI.
        </h1>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          I help marketers, educators, and digital teams build AI-powered
          workflows that replace manual work with smart automation.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 mx-auto">
          <p className="font-medium">
            Enter your email to get my free AI Automation Toolkit
          </p>
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button className="bg-slate-800 text-white hover:bg-black">
              Get the Toolkit
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Or</span>
            <Button variant="link" className="p-0">
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}