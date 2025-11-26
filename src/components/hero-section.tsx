"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              Want to Automate Your Marketing, Save Hours of Work, and Scale
              Faster With AI?
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              I help marketers, educators, and digital teams build AI-powered
              workflows that replace manual work with smart automation.
            </p>
            <div className="w-full max-w-md">
              <p className="mb-2 text-sm text-muted-foreground">
                Enter your email to get my free AI Automation Toolkit
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto flex-grow"
                />
                <Button>Get the Toolkit</Button>
              </div>
              <p className="my-4 text-sm text-muted-foreground">Or</p>
              <Button variant="outline" className="w-full sm:w-auto">
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
          <Image
            data-ai-hint="abstract digital"
            src="https://picsum.photos/seed/1/600/400"
            alt="AI Automation"
            width={600}
            height={400}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};
