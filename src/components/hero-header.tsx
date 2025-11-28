"use client";
import {
  Navbar,
  NavBody,
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
import Image from "next/image";

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
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1764312762/as_logo_npt3k0.png"
                alt="Anuj Sharma Logo"
                width={40}
                height={40}
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
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton asChild>
              <Link href="/contact-us">Get in Touch</Link>
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dhrigocvd/image/upload/v1764312762/as_logo_npt3k0.png"
                  alt="Anuj Sharma Logo"
                  width={40}
                  height={40}
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
            {menu.flatMap((item) =>
              item.items
                ? [
                    <Typography
                      key={item.title}
                      variant="h4"
                      as="h4"
                      className="px-4 font-semibold"
                    >
                      {item.title}
                    </Typography>,
                    ...item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.url}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-neutral-600 dark:text-neutral-300 px-8 py-2"
                      >
                        <span className="block">{subItem.title}</span>
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={item.title}
                      href={item.url!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-neutral-600 dark:text-neutral-300 px-4 py-2"
                    >
                      <span className="block">{item.title}</span>
                    </Link>,
                  ]
            )}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
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
