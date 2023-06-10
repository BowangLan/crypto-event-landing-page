import {
  AboutSection,
  SpeakersSection,
  SponsorsSection,
  TalksSection,
} from "@/components/SectionContainer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-0" id="learn-more-anchor"></div>
      <AboutSection />
      <SponsorsSection />
      <TalksSection />
      <SpeakersSection />
    </>
  );
}
