'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';
import Link from 'next/link';

export function AboutMeSection() {
  const { aboutImage } = placeholderImageData;

  return (
    <section id="about-me" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-3xl space-y-6">
          <Typography variant="h2" as="h2">
            About Me
          </Typography>
          <Typography variant="p" as="p" className="text-lg">
            I’m the Digital Head at Amity University, where I help marketers,
            educators, and digital teams adopt AI in a simple, practical, and
            results-driven way.
          </Typography>
        </div>
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          <div className="space-y-6">
            <Typography variant="p" as="p" className="text-muted-foreground">
              My work focuses on building real-world automation systems that
              reduce complexity, save time, and improve performance — using
              tools anyone can operate. If you want to bring AI into your
              organization without overwhelm or technical barriers, you’re in
              the right place.
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground">AI Systems Built</p>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/about-us">Read My Story</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              width={aboutImage.width}
              height={aboutImage.height}
              data-ai-hint={aboutImage.hint}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
