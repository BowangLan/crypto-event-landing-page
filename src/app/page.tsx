import SpeakerSection from "@/components/SpeakerSection";
import AboutSection from "@/components/AboutSection";
import SponsorSection from "@/components/SponsorSection";
import TalksSection from "@/components/TalkSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-0" id="learn-more-anchor"></div>
      <AboutSection />
      <SponsorSection />
      <TalksSection />
      <SpeakerSection />
    </>
  );
}
