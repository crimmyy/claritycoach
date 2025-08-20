'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Hero from '@/components/ui/Hero'
import Footer from '@/components/shared/Footer'
import VideoShowcase from '@/components/shared/VideoShowcase'
import { Cta, CtaDefaults } from '@/components/shared/Cta'
import LandingSteps from '@/components/ui/LandingSteps'
import Testimonials from '@/components/ui/Home/Testimonials'  // ✅ import

export default function LandingPage() {
  const [autoplayKey, setAutoplayKey] = useState(0)

  return (
    <div id="top">
      <Header onWatchDemoClick={() => setAutoplayKey(prev => prev + 1)} />
      <Hero onWatchDemoClick={() => setAutoplayKey(prev => prev + 1)} />
      <LandingSteps />

      {/* <VideoShowcase
        desktopSrc="/videos/CC Mobile Demo Video.mp4"
        mobileSrc="/videos/CC Mobile Demo Video.mp4"
      /> */}

      {/* ✅ Drop Testimonials here */}
      <Testimonials />

      <Cta {...CtaDefaults} heading="Get Started with ClarityCoach Today" />

      <Footer />
    </div>
  )
}
