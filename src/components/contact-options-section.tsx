'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';
import { Check, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

const contactOptions = [
  {
    title: 'General Inquiries',
    description:
      'For any questions about AI systems, automation, partnerships, or collaborations.',
    contact: {
      type: 'email',
      text: 'Email: anuj@email.com',
      href: 'mailto:anuj@email.com',
      icon: <Mail className="size-4 mr-2" />,
    },
  },
  {
    title: 'Work With Me / Consulting',
    description: 'Want help building your AI workflows or content systems?',
    contact: {
      type: 'button',
      text: 'Book a Free AI Workflow Audit',
      href: '#',
      icon: <Calendar className="size-4 mr-2" />,
    },
    subtext: 'I’ll map out 1–2 workflows your team can automate immediately.',
  },
  {
    title: 'Speaking & Workshops',
    description: 'I speak on:',
    list: [
      'AI for Marketing',
      'AI for Education',
      'AI Systems & Workflow Automation',
      'Content Engines',
      'Digital Transformation',
    ],
    contact: {
      type: 'email',
      text: 'Email: anuj@email.com',
      href: 'mailto:anuj@email.com',
      icon: <Mail className="size-4 mr-2" />,
    },
    subtext: 'Interested in inviting me to speak for your team, university, or event?',
  },
  {
    title: 'Media & Press',
    description: 'For interviews, guest articles, podcasts, or media mentions.',
    contact: {
      type: 'email',
      text: 'Email: anuj@email.com',
      href: 'mailto:anuj@email.com',
      icon: <Mail className="size-4 mr-2" />,
    },
  },
];

export function ContactOptionsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center">
          <Typography as="h2" variant="h2" className="!border-none">
            How You Can Reach Me
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactOptions.map((option, index) => (
            <Card key={option.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {index + 1}. {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <Typography
                  as="p"
                  variant="p"
                  className="text-muted-foreground !mt-0"
                >
                  {option.description}
                </Typography>
                {option.list && (
                  <ul className="space-y-2 my-4">
                    {option.list.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <Check className="size-4 text-primary" />
                        </div>
                        <Typography
                          as="span"
                          variant="body"
                          className="text-foreground"
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-4">
                  {option.subtext && (
                    <Typography
                      as="p"
                      variant="p"
                      className="text-muted-foreground text-sm !mt-0 mb-4"
                    >
                      {option.subtext}
                    </Typography>
                  )}
                  {option.contact.type === 'email' ? (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={option.contact.href}>
                        {option.contact.icon}
                        {option.contact.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href={option.contact.href}>
                        {option.contact.icon}
                        {option.contact.text}
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
