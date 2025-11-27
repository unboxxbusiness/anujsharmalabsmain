import { AboutMeSection } from '@/components/about-me-section';
import { AboutSection } from '@/components/about-section';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { SimpleAiSystemSection } from '@/components/simple-ai-system-section';
import { SolutionsSection } from '@/components/solutions-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SimpleAiSystemSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutMeSection />
    </main>
  );
}
