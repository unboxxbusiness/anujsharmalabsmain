import { BlogClientPage } from '@/components/blog-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore actionable articles, insights, and workflows on AI for marketers, educators, and digital teams. Learn to automate workflows, scale content, and grow faster without complexity.',
  keywords: [
    'AI Blog',
    'AI Workflows',
    'Content Systems',
    'AI for Education',
    'Productivity',
    'AI Tools',
  ],
  openGraph: {
    title: 'AI Systems Blog | Insights, Workflows & Systems',
    description:
      'Actionable articles for marketers, educators & digital teams who want to automate workflows, scale content, and grow faster.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319284/Gemini_Generated_Image_8pxbn38pxbn38pxb_manjcm.png',
        width: 1280,
        height: 400,
        alt: 'Insights on AI Systems and Workflows',
      },
    ],
  },
  twitter: {
    title: 'AI Systems Blog | Insights, Workflows & Systems',
    description:
      'Actionable articles for marketers, educators & digital teams who want to automate workflows, scale content, and grow faster.',
    images: [
      'https://res.cloudinary.com/dhrigocvd/image/upload/v1764319284/Gemini_Generated_Image_8pxbn38pxbn38pxb_manjcm.png',
    ],
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
