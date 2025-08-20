'use client'

import React, { useRef, useState, useEffect } from 'react'

interface VideoProps {
  desktopSrc: string
  mobileSrc: string
  alt?: string
}

const Video: React.FC<VideoProps> = ({ desktopSrc, mobileSrc, alt }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      onClick={handleClick}
      // Single source of truth for radius/overflow/shadow
      className="relative cursor-pointer rounded-[16px] overflow-hidden shadow-md bg-black"
    >
      <video
        ref={videoRef}
        src={isMobile ? mobileSrc : desktopSrc}
        // Make sure the video actually respects the corner radius
        className="block w-full h-auto transition-all duration-300 ease-in-out"
        style={{ borderRadius: 'inherit' }}
        playsInline
      />
      {/* Fade overlay inherits the same radius */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white text-4xl transition-all duration-300 ease-in-out ${
          isPlaying ? 'bg-black/0 opacity-0' : 'bg-black/40 opacity-100'
        }`}
        style={{ borderRadius: 'inherit' }}
      >
        {!isPlaying && <span className="transition-transform">▶</span>}
      </div>
    </div>
  )
}

export default Video
