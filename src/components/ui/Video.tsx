import React, { useRef, useState, useEffect } from 'react';

interface VideoProps {
  desktopSrc: string;
  mobileSrc: string;
  alt?: string;
}

const Video: React.FC<VideoProps> = ({ desktopSrc, mobileSrc, alt }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    
    <div
      className="relative w-full max-w-4xl mx-auto cursor-pointer rounded-[16px] overflow-hidden"
      onClick={togglePlay}
    >
<video
  ref={videoRef}
  src={isMobile ? mobileSrc : desktopSrc}
  className={`w-full max-h-[80vh] h-auto transition-all duration-300 ${
    isPlaying ? '' : 'filter blur-sm'
  }`}
  playsInline
  muted
  loop
/>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#389DF9]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
