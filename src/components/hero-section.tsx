'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center bg-no-repeat pb-44 text-sm">
      <div className="mx-auto mt-32 flex max-w-4xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-medium md:text-6xl">
          Want to Automate Your Marketing, Save Hours of Work, and Scale Faster
          With AI?
        </h1>
        <p className="mt-6 max-w-2xl text-base">
          I help marketers, educators, and digital teams build AI-powered
          workflows that replace manual work with smart automation.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4">
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
