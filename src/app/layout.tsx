import type { Metadata } from 'next';
import './globals.css';
import { HeroHeader } from '@/components/hero-header';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Anuj Sharma | AI Automation & Digital Marketing',
  description:
    'Anuj Sharma helps marketers, educators, and digital teams build AI-powered workflows that replace manual work with smart automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <HeroHeader />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
