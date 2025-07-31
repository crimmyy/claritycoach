'use client'

import React from 'react'
import AirtableDrawer from '@/components/ui/AirtableDrawer'

interface HeroProps {
  onWatchDemoClick?: () => void
}

const Hero: React.FC<HeroProps> = ({ onWatchDemoClick }) => {
  const handleWatchDemoClick = () => {
    onWatchDemoClick?.()
    const videoSection = document.getElementById('video-section')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white dark:bg-[#0e172c] lg:grid lg:h-1/4 lg:place-content-center font-sans">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-16">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-[#002370] sm:text-5xl dark:text-white">
            Create <strong className="text-[#389DF9]">stronger</strong> content with ClarityCoach
          </h1>

          <p className="mt-8 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Whether you’re a creator, educator, or executive, ClarityCoach helps you deliver your message clearly and confidently.
            Just upload a video and get instant, AI-powered feedback on your visuals, audio, delivery, and messaging.
          </p>

          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            We’ll show you what’s working, what’s not, and how to improve so your content hits harder with the right audience.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <AirtableDrawer />

            <button
              onClick={handleWatchDemoClick}
              className="inline-block rounded-[16px] border border-[#EBF5FE] bg-[#EBF5FE] px-5 py-3 font-medium text-[#389DF9] shadow-sm transition-colors hover:bg-[#dceefa]"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
