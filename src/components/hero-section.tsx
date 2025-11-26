'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const menuItems = [
  { name: 'Features', href: '#' },
  { name: 'Solution', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
];

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <div className="absolute -right-60 -top-10 z-0 flex flex-col items-end blur-xl ">
        <div className="h-[10rem] w-[60rem] rounded-full bg-gradient-to-b from-purple-600 to-sky-600 blur-[6rem]"></div>
        <div className="h-[10rem] w-[90rem] rounded-full bg-gradient-to-b from-pink-900 to-yellow-400 blur-[6rem]"></div>
        <div className="h-[10rem] w-[60rem] rounded-full bg-gradient-to-b from-yellow-600 to-sky-500 blur-[6rem]"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            Join the revolution today!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Automate Marketing. Save Time. Scale with AI.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            I help marketers, educators, and digital teams build AI-powered
            workflows that replace manual work with smart automation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90"
            >
              Get the Toolkit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-gray-600 bg-transparent px-8 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              Book a Free Strategy Call
            </Button>
          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded bg-white/20 shadow-lg blur-[10rem]" />

            {/* Hero Image */}
            <Image
              src="https://picsum.photos/seed/hero/1200/600"
              alt="Hero Image"
              width={1200}
              height={600}
              data-ai-hint="abstract digital"
              className="relative w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="flex items-center text-sm text-gray-300 hover:text-white">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  );
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  );
}
