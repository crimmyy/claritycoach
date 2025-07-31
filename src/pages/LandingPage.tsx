'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Hero from '@/components/ui/Hero'
import Video from '@/components/ui/Video'
import Footer from '@/components/ui/Footer'

export default function LandingPage() {
  const [autoplayKey, setAutoplayKey] = useState(0)

  return (
    <div id="top">
      <Header onWatchDemoClick={() => setAutoplayKey(prev => prev + 1)} />
      <Hero onWatchDemoClick={() => setAutoplayKey(prev => prev + 1)} />

      <div id="video-section">
        <Video
          key={autoplayKey}
          desktopSrc="/videos/CC Desktop Demo Video.mp4"
          mobileSrc="/videos/CC Mobile Demo Video.mp4"
          alt="Intro Video"
          shouldAutoPlay
        />
      </div>

      <Footer />
    </div>
  )
}
