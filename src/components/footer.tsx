'use client';

import { Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Input } from './ui/input';

export function Footer() {
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '#about-me' },
        { label: 'Framework', href: '#framework' },
        { label: 'Work With Me', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'AI Systems Library', href: '#solutions' },
        { label: 'Blog', href: '#' },
        { label: 'Newsletter', href: '#newsletter' },
        { label: 'Free Resources', href: '#services' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="size-4" />,
      href: '#',
      label: 'Twitter',
      tooltip: 'Follow us on Twitter',
    },
    {
      icon: <Linkedin className="size-4" />,
      href: '#',
      label: 'LinkedIn',
      tooltip: 'Connect with us on LinkedIn',
    },
    {
      icon: <Youtube className="size-4" />,
      href: '#',
      label: 'YouTube',
      tooltip: 'Subscribe on YouTube',
    },
  ];

  return (
    <footer className="relative border-t bg-slate-50 text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Typography variant="h3" as="h3" className="mb-4">
              Anuj Sharma
            </Typography>
            <Typography variant="p" as="p" className="mb-6 text-muted-foreground">
              AI Automation & Digital Marketing Specialist
            </Typography>
          </div>
          <div>
            <Typography variant="h4" as="h4" className="mb-4 font-semibold">
              Quick Links
            </Typography>
            <nav className="space-y-2 text-sm">
              {footerLinks
                .flatMap((section) => section.links)
                .map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
          </div>
          <div>
            <Typography variant="h4" as="h4" className="mb-4 font-semibold">
              Contact
            </Typography>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <Link href="#contact" className="block transition-colors hover:text-primary">
                Work With Me
              </Link>
            </address>
          </div>
          <div className="relative">
            <Typography variant="h4" as="h4" className="mb-4 font-semibold">
              Follow Us
            </Typography>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" size="icon" className="rounded-full">
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
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <Typography variant="p" as="p" className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anuj Sharma. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
