'use client';

import { BlogCategoriesSection } from '@/components/blog-categories-section';
import { Typography } from '@/components/ui/typography';

function BlogHeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <div className="pt-48 md:pt-40">
        <Typography
          variant="h1"
          as="h1"
          className="max-w-[850px] text-center mx-auto"
        >
          Insights, Workflows & Systems to Help You Work Smarter with AI
        </Typography>

        <Typography
          variant="p"
          as="p"
          className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2"
        >
          Actionable articles for marketers, educators & digital teams who want
          to automate workflows, scale content, and grow faster — without
          complexity.
        </Typography>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main>
      <BlogHeroSection />
      <BlogCategoriesSection />
    </main>
  );
}
