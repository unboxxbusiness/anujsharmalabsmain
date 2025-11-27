'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { IntroSection } from '@/components/intro-section';
import { SolutionsSection } from '@/components/solutions-section';
import { AllWorkflowsSection } from '@/components/all-workflows-section';
import { ToolStackSection } from '@/components/tool-stack-section';
import { TemplatesSection } from '@/components/templates-section';
import { HowToUseSection } from '@/components/how-to-use-section';

function AiSystemsLibraryHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          AI Systems Library
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          A collection of practical AI workflows, templates, tutorials & tools
          designed to help marketers, educators & digital teams automate
          workflows, scale content, and work smarter — without complexity.
        </Typography>
        <div className="mt-8 flex justify-center">
          <Button size="lg">Download the AI Workflow Guide</Button>
        </div>
      </div>
    </section>
  );
}

export default function AiSystemsLibraryPage() {
  return (
    <main>
      <AiSystemsLibraryHeroSection />
      <IntroSection />
      <SolutionsSection />
      <AllWorkflowsSection />
      <ToolStackSection />
      <TemplatesSection />
      <HowToUseSection />
    </main>
  );
}
