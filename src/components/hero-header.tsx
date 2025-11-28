"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function HeroHeader() {
  const menu = [
    { title: "About", url: "/about-us" },
    {
      title: "Resources",
      items: [
        {
          title: "AI Systems Library",
          url: "/ai-systems-library",
        },
        {
          title: "Framework",
          url: "/framework",
        },
        {
          title: "Free Resources",
          url: "/free-resources",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Newsletter",
          url: "/newsletter",
        },
      ],
    },
    { title: "Work With Me", url: "/work-with-me" },
    { title: "Contact", url: "/contact-us" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo>
            <Link href="/" className="flex items-center gap-2">
              <Typography variant="h3" as="span">
                Anuj Sharma
              </Typography>
            </Link>
          </NavbarLogo>
          <div className="flex items-center gap-2">
            {menu.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
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
                  className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton asChild variant="secondary">
              <Link href="/contact-us">Get in Touch</Link>
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <Link href="/" className="flex items-center gap-2">
                <Typography variant="h3" as="span">
                  Anuj Sharma
                </Typography>
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
            {menu.flatMap((item) =>
              item.items
                ? item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="block">{subItem.title}</span>
                    </Link>
                  ))
                : (
                  <Link
                    key={item.title}
                    href={item.url!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.title}</span>
                  </Link>
                )
            )}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                asChild
              >
                <Link href="/contact-us">Get in Touch</Link>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
