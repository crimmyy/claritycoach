// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"


// Pages
import LandingPage from "@/pages/Home"
import HowItWorks from "@/pages/HowItWorks"
import UseCases from "@/pages/UseCases"
import FAQ from "@/pages/FAQ"
import Contact from "@/pages/Contact"

// Helpers
import ScrollToTop from "@/components/utility/ScrollToTop"
import ScrollToHash from "@/components/utility/ScrollToHash"

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top when navigating between routes */}
      <ScrollToTop />

      {/* Smooth scroll when a URL has a hash (#faq, #contact, etc.) */}
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: catch-all */}
        {/* <Route path="*" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
