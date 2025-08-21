import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router for internal navigation

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBF5FE] text-[#002370] px-6 py-10">
      <div className="mx-auto max-w-page flex flex-col items-center text-center">
        {/* Logo */}
        <Link to="/#top" className="mb-6">
          <img
            src="/images/ClarityCoach_Logo.png"
            alt="ClarityCoach Logo"
            className="h-12 hover:opacity-80 transition"
          />
        </Link>

        {/* Nav Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-[#389DF9] transition"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/use-cases"
                className="hover:text-[#389DF9] transition"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#389DF9] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#389DF9] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="h-px w-full bg-[#389DF9] opacity-50 mb-6" />

        {/* Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} ClarityCoach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
