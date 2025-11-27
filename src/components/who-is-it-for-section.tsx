'use client';

import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';

const audience = [
  'Marketers wanting to automate content & campaigns',
  'Educators needing faster lesson creation, research & communication',
  'Digital Teams struggling with manual work',
  'Leaders wanting clarity in workflows & reporting',
  'Founders scaling with smaller teams',
  'Creatives who want fast content systems',
];

export function WhoIsItForSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="text-center">
          <Typography as="h2" variant="h2" className="!border-none">
            Perfect For:
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {audience.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Check className="size-4 text-primary" />
              </div>
              <Typography as="span" variant="body" className="text-foreground">
                {item}
              </Typography>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Typography
            as="p"
            variant="p"
            className="text-lg text-muted-foreground"
          >
            If you want to make AI a part of your daily workflow — this is for
            you.
          </Typography>
        </div>
      </div>
    </section>
  );
}
