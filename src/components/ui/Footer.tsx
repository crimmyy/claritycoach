import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBF5FE] text-[#002370] rounded-[16px] mt-16 px-6 py-10">
      <div className="flex justify-center">
        <a href="#top">
          <img
            src="/images/ClarityCoach_Logo.png"
            alt="ClarityCoach Logo"
            className="h-12 hover:opacity-80 transition"
          />
        </a>
      </div>

      <div className="mt-8 border-[#389DF9] pt-4 text-xs text-center">
        © {new Date().getFullYear()} ClarityCoach. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
        <img src="/images/ClarityCoach_Logo.png" alt="ClarityCoach Logo" className="h-12" />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[#389DF9] transition">How it Works</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">Use Cases</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">Founders</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">FAQ</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[#389DF9] transition">Twitter</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#389DF9] transition">GitHub</a></li>
          </ul>
        </div>
      </div> */}