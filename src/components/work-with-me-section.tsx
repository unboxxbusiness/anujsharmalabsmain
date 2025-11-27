'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function WorkWithMeSection() {
  const offers = [
    {
      title: 'AI Workflow Audit (Free)',
      description:
        'A 15-minute call to map one workflow you can automate immediately.',
    },
    {
      title: 'AI System Buildout',
      description:
        'Done-for-you workflows, templates & automation setup for your team.',
    },
    {
      title: 'Content Engine Setup',
      description: 'A system to produce daily content consistently using AI.',
    },
    {
      title: 'Team Training & Consulting',
      description: 'Teach your team how to use AI in a simple, effective way.',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Work With Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Whether you want one workflow automated or an entire content engine
            built, I help teams install AI systems that reduce chaos and
            increase output — without adding complexity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Book the Free AI Workflow Audit</Button>
        </div>
      </div>
    </section>
  );
}
