'use client';

import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function SocialLinksSection() {
  const socialLinks = [
    {
      icon: <Linkedin className="size-4" />,
      href: '#',
      label: 'LinkedIn',
      tooltip: 'Connect with me on LinkedIn',
    },
    {
      icon: <Youtube className="size-4" />,
      href: '#',
      label: 'YouTube',
      tooltip: 'Subscribe on YouTube',
    },
    {
      icon: <Twitter className="size-4" />,
      href: '#',
      label: 'Twitter',
      tooltip: 'Follow me on Twitter',
    },
    {
      icon: <Instagram className="size-4" />,
      href: '#',
      label: 'Instagram',
      tooltip: 'Follow me on Instagram',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Typography as="h2" variant="h2" className="!border-none">
          Connect With Me
        </Typography>
        <Typography as="p" variant="p" className="text-muted-foreground mt-4">
          Follow me for AI workflows, content systems, and insights:
        </Typography>
        <div className="mt-8 flex justify-center space-x-4">
          <TooltipProvider>
            {socialLinks.map((social) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Link href={social.href}>
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
