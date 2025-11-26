"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              hyderabadenquiry2026
            </h1>
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
