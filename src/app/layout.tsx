import type { Metadata } from 'next';
import './globals.css';
import { HeroHeader } from '@/components/hero-header';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const siteConfig = {
  name: 'Anuj Sharma | AI Automation & Digital Marketing',
  description:
    'I help marketers, educators, and digital teams build practical AI systems that automate workflows, scale content, and improve performance — without complexity or technical overwhelm.',
  url: 'https://anujsharma.app', // Replace with your actual domain
  ogImage:
    'https://res.cloudinary.com/dhrigocvd/image/upload/v1764312762/as_logo_npt3k0.png', // A general OG image
  author: 'Anuj Sharma',
  keywords:
    'Anuj Sharma, AI Automation, Digital Marketing, AI Systems, Content Automation, Workflow Automation, AI for Marketers, AI for Educators',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@anujsharma', // Replace with your Twitter handle
  },
  icons: {
    icon: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764314636/logo_as_icon_z4bwnc.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <HeroHeader />
        {children}
        <Toaster />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
