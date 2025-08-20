import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AirtableDrawer from "@/components/shared/AirtableDrawer";
import Drawer from "@/components/shared/Drawer";

interface HeaderProps {
  onWatchDemoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onWatchDemoClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Works on landing, or navigates there and uses a hash so our ScrollToHash helper can scroll
  const handleWatchDemoClick = () => {
    onWatchDemoClick?.();
    if (location.pathname === "/") {
      const el = document.getElementById("video-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#video-section");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white font-sans transition-all duration-300 ${
        scrolled ? "shadow-md border-b border-gray-200" : ""
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link className="block" to="/">
            <span className="sr-only">ClarityCoach Home</span>
            <img src="/images/ClarityCoach_Logo.png" alt="ClarityCoach Logo" className="h-12" />
          </Link>

          {/* Right: Nav + Buttons */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link to="/how-it-works" className="hover:text-primary">How It Works</Link>
              <Link to="/use-cases" className="hover:text-primary">Use Cases</Link>
              <Link to="/faq" className="hover:text-primary">FAQ</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
            </nav>
            <div className="hidden sm:flex items-center gap-2">
              {/* <button
                className="rounded-xl bg-[#EBF5FE] px-5 py-2.5 text-sm font-medium text-[#389DF9]"
                onClick={handleWatchDemoClick}
              >
                Watch Demo
              </button> */}

              {/* Default trigger uses brand blue; replace children later with the Airtable form */}
              <Drawer />
            </div>


            {/* Mobile Menu Icon (placeholder) */}
            <div className="block md:hidden">
              <button className="rounded-sm bg-secondary p-2 text-primary transition hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
