'use client'

import React from 'react'
import AirtableDrawer from '@/components/shared/AirtableDrawer'
import Video from '@/components/shared/Video'
import { motion } from 'framer-motion'

interface VideoShowcaseProps {
  desktopSrc: string
  mobileSrc: string
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ desktopSrc, mobileSrc }) => {
  return (
    <section className="bg-[#EBF5FE] font-sans">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Left: copy + CTAs */}
        <motion.div
          className="flex items-center md:pl-8 lg:pl-12 xl:pl-16" // extra breathing room on desktop
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002370]">
              Create Stronger Content with ClarityCoach
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-700">
              Whether you're a creator, educator, or business owner, ClarityCoach helps you deliver your
              message clearly and confidently. Just upload a video and get instant, AI-powered
              feedback on your <span className="font-medium">visuals, audio, delivery,</span> and{' '}
              <span className="font-medium">messaging.</span>
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-700">
              We’ll show you what’s working, what’s not, and how to improve so your content connects better with the right audience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AirtableDrawer
                trigger={
                  <a
                    href="#"
                    className="inline-block rounded-[16px] border border-[#389DF9] bg-[#389DF9] px-5 py-3 text-sm sm:text-base font-medium text-white shadow-sm transition-colors hover:bg-[#2185d0]"
                  >
                    Try It Free
                  </a>
                }
              />

              <a
                href="/how-it-works"
                className="inline-block rounded-[16px] border border-[#C8D0D8] bg-[#EBF5FE] px-5 py-3 text-sm sm:text-base font-medium text-black shadow-sm transition-colors hover:bg-[#dceefa]"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Video (anchor target for smooth scroll) */}
        <motion.div
          id="video-section"
          className="w-full flex justify-center scroll-mt-24 md:scroll-mt-28" // offsets sticky header on scrollIntoView
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-[85%] md:w-[80%] lg:w-[50%]">
            <Video desktopSrc={desktopSrc} mobileSrc={mobileSrc} alt="ClarityCoach Demo" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase
