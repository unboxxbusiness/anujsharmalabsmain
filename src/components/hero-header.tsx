
'use client';
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/ui/typography';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function HeroHeader() {
  const menu = [
    { title: 'About', url: '/about-us' },
    {
      title: 'Resources',
      items: [
        {
          title: 'AI Systems Library',
          url: '/ai-systems-library',
        },
        {
          title: 'Framework',
          url: '/framework',
        },
        {
          title: 'Free Resources',
          url: '/free-resources',
        },
        {
          title: 'Blog',
          url: '/blog',
        },
        {
          title: 'Newsletter',
          url: '/newsletter',
        },
      ],
    },
    { title: 'Work With Me', url: '/work-with-me' },
    { title: 'Contact', url: '/contact-us' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 inset-x-0 z-40 w-full bg-background border-b">
      <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent">
        <NavbarLogo>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dhrigocvd/image/upload/v1764312762/as_logo_npt3k0.png"
              alt="Anuj Sharma Logo"
              width={150}
              height={150}
            />
          </Link>
        </NavbarLogo>
        <div className="hidden lg:flex items-center gap-2">
          {menu.map((item) =>
            item.items ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
                  {item.title}
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.title} asChild>
                      <Link href={subItem.url}>{subItem.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.url!}
                className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
              >
                {item.title}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center gap-4">
          <NavbarButton asChild>
            <Link href="/contact-us">Get in Touch</Link>
          </NavbarButton>
        </div>
      </div>

      <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden">
        <MobileNavHeader>
          <NavbarLogo>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1764312762/as_logo_npt3k0.png"
                alt="Anuj Sharma Logo"
                width={150}
                height={150}
              />
            </Link>
          </NavbarLogo>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <Accordion type="multiple" className="w-full">
            {menu.map((item) =>
              item.items ? (
                <AccordionItem
                  value={item.title}
                  key={item.title}
                  className="border-b-0"
                >
                  <AccordionTrigger className="relative text-neutral-600 dark:text-neutral-300 px-4 py-2 text-base font-normal hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 pb-0">
                    <div className="flex flex-col gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.url}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="relative text-neutral-600 dark:text-neutral-300 py-2"
                        >
                          <span className="block">{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={item.title}
                  href={item.url!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative block text-neutral-600 dark:text-neutral-300 px-4 py-2"
                >
                  <span className="block">{item.title}</span>
                </Link>
              ),
            )}
          </Accordion>
          <div className="flex w-full flex-col gap-4 mt-4 px-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
              asChild
            >
              <Link href="/contact-us">Get in Touch</Link>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </div>
    </div>
  );
}
