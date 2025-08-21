import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { HowItWorksHeader } from "@/components/ui/HowItWorks/HowItWorksHeader";
import { HowItWorksSteps } from "@/components/ui/HowItWorks/HowItWorksSteps";
import WhatYouGet from "@/components/ui/HowItWorks/WhatYouGet";
import VideoShowcase from '@/components/shared/VideoShowcase'
import { Cta, CtaDefaults } from '@/components/shared/Cta'

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HowItWorksHeader />
        <HowItWorksSteps />
        <WhatYouGet />
        {/* <VideoShowcase
        desktopSrc="/videos/CC Mobile Demo Video.mp4"
        mobileSrc="/videos/CC Mobile Demo Video.mp4"
      /> */}
      </main>
      {/* <Cta {...CtaDefaults} heading="Get Started with ClarityCoach Today" /> */}
      <Footer />
    </>
  );
}