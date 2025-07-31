import React from "react"
import AirtableDrawer from "@/components/ui/AirtableDrawer"

interface HeaderProps {
  onWatchDemoClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ onWatchDemoClick }) => {
  const handleWatchDemoClick = () => {
    onWatchDemoClick?.()
    const videoSection = document.getElementById('video-section')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white font-sans">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-8">
            <a className="block" href="#">
              <span className="sr-only">ClarityCoach Home</span>
              <img src="/images/ClarityCoach_Logo.png" alt="ClarityCoach Logo" className="h-12" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <AirtableDrawer />
              <div className="hidden sm:flex">
                <button
                  className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-primary"
                  onClick={handleWatchDemoClick}
                >
                  Watch Demo
                </button>
              </div>
              <div className="block md:hidden">
                <button className="rounded-sm bg-secondary p-2 text-primary transition hover:opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
