import React from "react"
import ClarityCoachLogo from "@/assets/images/ClarityCoach_Logo.png"

const Header = () => {
  return (
<header className="bg-white font-sans">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-8">
        <a className="block" href="#">
          <span className="sr-only">ClarityCoach Home</span>
          <img src={ClarityCoachLogo} alt="ClarityCoach Logo" className="h-12" />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          {/* <ul className="flex items-center gap-6 text-sm text-gray-700">
            <li><a className="hover:text-primary transition" href="#">How it Works</a></li>
            <li><a className="hover:text-primary transition" href="#">Use Cases</a></li>
            <li><a className="hover:text-primary transition" href="#">Founders</a></li>
            <li><a className="hover:text-primary transition" href="#">FAQ</a></li>
            <li><a className="hover:text-primary transition" href="#">Contact</a></li>
          </ul> */}
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="#">
              Sign Up
            </a>

            <div className="hidden sm:flex">
              <a className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-primary" href="#">
                Learn More
              </a>
            </div>
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
