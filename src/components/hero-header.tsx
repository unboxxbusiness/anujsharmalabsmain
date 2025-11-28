'use client';

import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Typography } from '@/components/ui/typography';
import * as React from 'react';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

const menu: MenuItem[] = [
  { title: 'About Us', url: '/about-us' },
  { title: 'Work With Me', url: '/work-with-me' },
  { title: 'AI Systems Library', url: '/ai-systems-library' },
  { title: 'Framework', url: '/framework' },
  { title: 'Free Resources', url: '/free-resources' },
  { title: 'Newsletter', url: '/newsletter' },
  { title: 'Blog', url: '/blog' },
  { title: 'Contact Us', url: '/contact-us' },
];

export function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="py-4 bg-background/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Typography variant="h3" as="span">
                Anuj Sharma
              </Typography>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <Link href="/contact-us">Get in Touch</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Typography variant="h3" as="span">
                Anuj Sharma
              </Typography>
            </Link>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={closeMobileMenu}
                    >
                      <Typography variant="h3" as="span">
                        Anuj Sharma
                      </Typography>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="font-semibold text-lg py-2"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <Link href="/contact-us" onClick={closeMobileMenu}>
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const renderMenuItem = (item: MenuItem) => {
  return (
    <Link
      key={item.title}
      href={item.url}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
    >
      {item.title}
    </Link>
  );
};
