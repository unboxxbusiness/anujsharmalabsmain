'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Use Cases', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Pricing', href: '#' },
];

function NavItem({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <Link
      href="#"
      className="flex items-center text-sm text-gray-300 hover:text-white"
    >
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
    </Link>
  );
}

function MobileNavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white"
    >
      <span>{label}</span>
      <X className="h-4 w-4 text-gray-400" />
    </Link>
  );
}

export const HeroHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <span className="font-bold">⚡</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">
                LeadGenie
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <div className="flex items-center space-x-6">
              <NavItem label="Use Cases" hasDropdown />
              <NavItem label="Products" hasDropdown />
              <NavItem label="Resources" hasDropdown />
              <NavItem label="Pricing" />
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 p-4 md:hidden"
          >
            <div className="mt-16 flex flex-col space-y-6">
              {menuItems.map((item) => (
                <MobileNavItem key={item.name} {...item} />
              ))}
              <div className="pt-4">
                <Button className="w-full justify-start border border-gray-700 text-white">
                  Log in
                </Button>
              </div>
              <Button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Get Started For Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
