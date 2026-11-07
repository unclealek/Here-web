import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { DiscoverSection } from "@/components/sections/discover-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { VibesSection } from "@/components/sections/vibes-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { StorySection } from "@/components/sections/story-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return <main className="min-h-screen overflow-clip bg-[#F7F4EE]">
    <Header />
    <HeroSection />
    <PhilosophySection />
    <DiscoverSection />
    <ExperienceSection />
    <GallerySection />
    <VibesSection />
    <EditorialSection />
    <StorySection />
    <FooterSection />
  </main>;
}
