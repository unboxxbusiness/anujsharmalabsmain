'use client';

import { Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

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
    { icon: <Twitter className="size-5" />, href: '#' },
    { icon: <Linkedin className="size-5" />, href: '#' },
    { icon: <Youtube className="size-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Anuj Sharma</h3>
            <p className="mt-2 text-muted-foreground">
              AI Automation & Digital Marketing Specialist
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anuj Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary"
                aria-label={`social link ${index}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
