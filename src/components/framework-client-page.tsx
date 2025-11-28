'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { FrameworkIntroSection } from '@/components/framework-intro-section';
import { WhyFrameworkExistsSection } from '@/components/why-framework-exists-section';
import { SimpleAiSystemSection } from '@/components/simple-ai-system-section';
import { RealWorldApplicationsSection } from '@/components/real-world-applications-section';
import { BenefitsSection } from '@/components/benefits-section';
import { FreeResourcesSection } from '@/components/free-resources-section';
import { InvitationSection } from '@/components/invitation-section';

function FrameworkHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-32 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          The S.I.M.P.L.E. AI System
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          A proven 6-step framework that helps marketers, educators & digital
          teams build powerful AI workflows using simple tools anyone can
          operate — no technical knowledge needed.
        </Typography>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/free-resources">Download the Free AI Workflow Guide</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FrameworkClientPage() {
  return (
    <main>
      <FrameworkHeroSection />
      <FrameworkIntroSection />
      <WhyFrameworkExistsSection />
      <SimpleAiSystemSection />
      <RealWorldApplicationsSection />
      <BenefitsSection />
      <FreeResourcesSection />
      <InvitationSection />
    </main>
  );
}
