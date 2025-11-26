import Image from 'next/image';
import {
  BrainCircuit,
  TrendingUp,
  Target,
  BarChart,
  Briefcase,
  FileText,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'AI Automation for Marketing',
    description: 'Leverage artificial intelligence to automate and optimize your marketing workflows for unparalleled efficiency and results.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Advanced SEO Strategies',
    description: 'Dominate search engine rankings with cutting-edge SEO techniques that drive organic traffic and increase visibility.',
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'PPC Campaign Management',
    description: 'Maximize your ROI with meticulously managed Pay-Per-Click campaigns on Google, Facebook, and more.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers through data-driven A/B testing and user experience enhancements.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Digital Strategy Consulting',
    description: 'Get expert guidance to build a cohesive and effective digital marketing strategy that aligns with your business goals.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Content Marketing',
    description: 'Engage your audience and build brand authority with high-quality, relevant, and consistent content.',
  },
];

const caseStudies = [
  {
    id: 'portfolio-1',
    title: 'AI-Powered Lead Generation',
    description: 'Implemented an AI-driven system that increased qualified leads by 300% for a SaaS client.',
    category: 'AI Automation',
  },
  {
    id: 'portfolio-2',
    title: 'E-commerce SEO Overhaul',
    description: 'Boosted organic traffic by 150% and online sales by 80% in 6 months for a major online retailer.',
    category: 'SEO',
  },
  {
    id: 'portfolio-3',
    title: 'Multi-channel PPC Success',
    description: 'Achieved a 4x return on ad spend (ROAS) across Google and social media for a B2C brand.',
    category: 'PPC',
  },
];

export default function Home() {
  const authorImage = PlaceHolderImages.find((img) => img.id === 'anuj-sharma-portrait');
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Anuj Sharma
                  </h1>
                  <p className="text-xl text-primary font-semibold">
                    AI Automation & Digital Marketing Leader
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Driving business growth through the strategic integration of artificial intelligence and innovative digital marketing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg">Get In Touch</Button>
                  </Link>
                  <Link href="#portfolio">
                    <Button size="lg" variant="outline">View My Work</Button>
                  </Link>
                </div>
              </div>
              {authorImage && (
                <Image
                  src={authorImage.imageUrl}
                  alt="Portrait of Anuj Sharma"
                  width={550}
                  height={550}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                  data-ai-hint={authorImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am a results-oriented digital marketing leader with over a decade of experience in crafting and executing strategies that drive growth. My passion lies at the intersection of technology and marketing, where I leverage AI and automation to unlock new levels of performance and efficiency. I help businesses navigate the complexities of the digital landscape to achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Services & Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I offer a comprehensive suite of services designed to elevate your brand and accelerate your growth in the digital age.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center gap-2">
                  {service.icon}
                  <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Portfolio & Case Studies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of my work and see how I've helped businesses like yours achieve remarkable results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-12">
              {caseStudies.map((study) => {
                const studyImage = PlaceHolderImages.find((img) => img.id === study.id);
                return (
                  <Card key={study.title} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    {studyImage && (
                      <Image
                        src={studyImage.imageUrl}
                        alt={`Case study: ${study.title}`}
                        width={600}
                        height={400}
                        className="aspect-video w-full object-cover"
                        data-ai-hint={studyImage.imageHint}
                      />
                    )}
                    <CardHeader>
                      <Badge className="w-fit">{study.category}</Badge>
                      <CardTitle className="pt-2">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{study.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to discuss how I can help your business grow? Let's connect.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
