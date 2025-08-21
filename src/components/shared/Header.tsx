import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Drawer from "@/components/shared/Drawer";

interface HeaderProps {
  onWatchDemoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onWatchDemoClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <img
              src="/images/ClarityCoach_Logo.png"
              alt="ClarityCoach Logo"
              className="h-12"
            />
          </Link>

          {/* Right: Nav + Buttons */}
          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/use-cases">Use Cases</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {/* Desktop drawer button */}
            <div className="hidden sm:flex items-center gap-2">
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} />
            </div>

            {/* Mobile dropdown */}
            <div className="block md:hidden">
              <DropdownMenu.Root
                open={dropdownOpen}
                onOpenChange={(open) => {
                  // ✅ prevent closing if drawer is open
                  if (!drawerOpen) {
                    setDropdownOpen(open);
                  }
                }}
              >
                <DropdownMenu.Trigger asChild>
                  <button className="rounded-sm bg-secondary p-2 text-primary transition focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content
                  sideOffset={8}
                  className={`
                    bg-white rounded-lg w-48 p-2
                    shadow-lg ring-1 ring-gray-200
                    data-[state=open]:animate-slideDownAndFade
                    data-[state=closed]:animate-slideUpAndFade
                  `}
                  align="end"
                >
                  <DropdownMenu.Item asChild>
                    <Link to="/how-it-works" className="block px-3 py-2 rounded">
                      How It Works
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/use-cases" className="block px-3 py-2 rounded">
                      Use Cases
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/faq" className="block px-3 py-2 rounded">
                      FAQ
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/contact" className="block px-3 py-2 rounded">
                      Contact
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="my-2 h-px bg-gray-200" />

                  <DropdownMenu.Item
                    onSelect={(e) => {
                      e.preventDefault();
                      setDrawerOpen(true); // ✅ open drawer
                    }}
                    className="block px-3 py-2 rounded-xl bg-[#389DF9] text-white text-center cursor-pointer"
                  >
                    Get Started
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
