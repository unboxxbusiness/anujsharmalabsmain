import { ContactUsClientPage } from '@/components/contact-us-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Get in touch with Anuj Sharma. Whether you want to automate a workflow, build an AI system, collaborate, or ask a question, I would love to hear from you.',
  keywords: [
    'Contact Anuj Sharma',
    'AI Consulting',
    'Workflow Audit',
    'AI Speaker',
    'AI Collaboration',
    'Media Inquiries',
  ],
  openGraph: {
    title: 'Contact Anuj Sharma',
    description:
      'Reach out to discuss AI systems, workflow automation, speaking opportunities, or any other inquiries.',
  },
  twitter: {
    title: 'Contact Anuj Sharma',
    description:
      'Reach out to discuss AI systems, workflow automation, speaking opportunities, or any other inquiries.',
  },
};

export default function ContactUsPage() {
  return <ContactUsClientPage />;
}
