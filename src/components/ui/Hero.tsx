'use client'

import React, { useEffect, useRef, useState } from 'react'
import AirtableDrawer from '@/components/shared/AirtableDrawer'
import Drawer from "@/components/shared/Drawer";

interface HeroProps {
  onWatchDemoClick?: () => void
}

const Hero: React.FC<HeroProps> = ({ onWatchDemoClick }) => {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  const handleWatchDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onWatchDemoClick?.()
    const videoSection = document.getElementById('video-section')
    if (videoSection) videoSection.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120)

    const getSpeed = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 0
      if (w >= 1024) return 0.25
      if (w >= 768) return 0.2
      return 0.1
    }

    let raf = 0
    const onScroll = () => {
      if (!leftRef.current || !rightRef.current || !loaded) return
      const y = window.scrollY
      const k = getSpeed()
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        leftRef.current!.style.transform = `translateY(${y * k}px)`
        rightRef.current!.style.transform = `translateY(${-y * k}px)`
      })
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [loaded])

  return (
    <section className="bg-white container font-sans">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8 py-8 md:py-0 md:min-h-[88vh]">
        {/* Left: centered text */}
        <div className="flex items-center">
          <div
            className={`flex flex-col max-w-md transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl font-bold text-[#002370] sm:text-5xl">
              ClarityCoach helps you make{' '}
              <strong className="text-[#389DF9]">better</strong> content,{' '}
              <strong className="text-[#389DF9]">faster</strong>
            </h1>

            <p className="mt-8 text-base text-gray-700 sm:text-lg/relaxed">
            Boost your view count, engagement, and audience through AI-powered analysis and instant coaching reports.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Drawer />

              {/* <a
                href="#"
                onClick={handleWatchDemoClick}
                className="inline-block rounded-[16px] border border-[#EBF5FE] bg-[#EBF5FE] px-5 py-3 font-medium text-[#389DF9] shadow-sm transition-colors hover:bg-[#dceefa]"
              >
                Watch Demo
              </a> */}
            </div>
          </div>
        </div>

        {/* Right: image columns */}
        <div className="relative mx-auto h-[60vh] md:h-[84vh] lg:h-[88vh] overflow-hidden max-w-md md:max-w-xl lg:max-w-2xl w-full">
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div
              ref={leftRef}
              className={`flex flex-col gap-4 md:gap-5 lg:gap-6 -mt-8 md:-mt-14 lg:-mt-16 transform transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
              }`}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[8/9] w-full rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={`/images/HeroPhoto${i}.jpg`}
                    alt={`Hero Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div
              ref={rightRef}
              className={`flex flex-col gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-12 lg:mt-14 transform transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {[4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-[8/9] w-full rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={`/images/HeroPhoto${i}.jpg`}
                    alt={`Hero Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Blur overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-28 lg:h-40 bg-gradient-to-b from-white to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-36 lg:h-48 bg-gradient-to-t from-white to-transparent z-20" />
        </div>
      </div>
    </section>
  )
}

export default Hero
