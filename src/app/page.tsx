import { AboutSection } from '@/components/about-section';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
