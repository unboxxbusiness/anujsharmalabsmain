'use client';

import React from 'react';

export function HeroHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      // Check if the click is on the menu itself or the open button
      if (
        menuRef.current?.contains(e.target as Node) ||
        (e.target as HTMLElement).closest('#open-menu')
      ) {
        return;
      }
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full absolute top-0 left-0 z-20">
      <a
        href="#"
        aria-label="Anuj Sharma home"
        className="flex items-center text-2xl font-bold"
      >
        Anuj Sharma
      </a>

      <div
        id="menu"
        ref={menuRef}
        className={[
          'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-transform max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/80 dark:max-md:bg-black/80 max-md:backdrop-blur-lg',
          'flex items-center gap-8 font-medium text-gray-800 dark:text-gray-200',
          'max-md:flex-col max-md:justify-center',
          menuOpen
            ? 'max-md:w-full max-md:translate-x-0'
            : 'max-md:w-0 max-md:-translate-x-full',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <a href="#about" className="hover:text-primary">
          About Me
        </a>
        <a href="#services" className="hover:text-primary">
          Services
        </a>
        <a href="#portfolio" className="hover:text-primary">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-primary">
          Contact
        </a>

        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md aspect-square font-medium transition"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <a
        href="#contact"
        className="hidden md:inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition"
      >
        Get in Touch
      </a>

      <button
        id="open-menu"
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 rounded-md aspect-square font-medium transition text-gray-800 dark:text-gray-200"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
    </nav>
  );
}
