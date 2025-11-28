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
  navigationMenuTriggerStyle,
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
import { cn } from '@/lib/utils';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

const resourcesMenuItems: MenuItem[] = [
  {
    title: 'AI Systems Library',
    url: '/ai-systems-library',
    description:
      'A library of AI workflows, templates, and tutorials for teams.',
    icon: <Zap />,
  },
  {
    title: 'Framework',
    url: '/framework',
    description: 'The S.I.M.P.L.E. AI System for building powerful workflows.',
    icon: <Trees />,
  },
  {
    title: 'Free Resources',
    url: '/free-resources',
    description: 'Free guides, checklists, and templates to get started.',
    icon: <Sunset />,
  },
  {
    title: 'Blog',
    url: '/blog',
    description:
      'Insights, workflows, and systems to help you work smarter with AI.',
    icon: <Book />,
  },
];

const menu: MenuItem[] = [
  { title: 'About', url: '/about-us' },
  { title: 'Work With Me', url: '/work-with-me' },
  {
    title: 'Resources',
    url: '#',
    items: [
      ...resourcesMenuItems,
      {
        title: 'Newsletter',
        url: '/newsletter',
        description: 'Get weekly AI workflows and systems in your inbox.',
      },
    ],
  },
  { title: 'Contact', url: '/contact-us' },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

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
                  {menu.map((item) =>
                    item.items ? (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {item.items.map((component) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.url}
                              >
                                {component.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      renderMenuItem(item)
                    )
                  )}
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
                    {menu.map((item) =>
                      item.items ? (
                        <Accordion
                          type="single"
                          collapsible
                          key={item.title}
                          className="w-full"
                        >
                          <AccordionItem value={item.title}>
                            <AccordionTrigger className="font-semibold text-lg py-2">
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="pl-4">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.url}
                                  className="block font-normal text-base py-2 text-muted-foreground"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="font-semibold text-lg py-2"
                          onClick={closeMobileMenu}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
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
    <NavigationMenuItem key={item.title}>
      <Link href={item.url} legacyBehavior={false}>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
