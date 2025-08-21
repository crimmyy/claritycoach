'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Inline SVG React components via SVGR (?react)
import UploadIcon from '@/assets/icons/Upload.svg?react'
import AnalyticsIcon from '@/assets/icons/Analytics.svg?react'
import ImprovementIcon from '@/assets/icons/Improvement.svg?react'

const steps = [
  {
    Icon: UploadIcon,
    title: 'Step 1: Upload Your Video',
    desc: "Pick any video file. That's it.",
  },
  {
    Icon: AnalyticsIcon,
    title: 'Step 2: Fill Out the Questions',
    desc:
      'Answer a few quick questions about your video to help us understand your goals.',
  },
  {
    Icon: ImprovementIcon,
    title: 'Step 3: See What to Improve',
    desc:
      "You’ll get a personalized report with clear insights on what’s working and what to tweak.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const LandingSteps: React.FC = () => {
  return (
    <section className="bg-white font-sans">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-32 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-med text-[#002370]">
            Three Simple Steps
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16"
        >
          {steps.map(({ Icon, title, desc }, i) => (
            <motion.div key={i} variants={item} className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                {/* color is inherited via currentColor; svgr icon=true helps */}
                <Icon
                  className="w-12 h-12 md:w-14 md:h-14 text-[#02370]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl md:text-5xl font-med text-[#002370] mb-3 md:mb-4">
                {title}
              </h3>
              <p className="text-gray-700 text-base md:text-md max-w-prose">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LandingSteps
