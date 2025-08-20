"use client";

import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
  tagline?: string;
  heading: string;
  description: string;
};

export type FAQHeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FAQHeaderDefaults: Props = {

  heading: "Your Questions, Thoughtfully Answered",
  description:
    "Explore our FAQ to find answers to common questions about ClarityCoach and its features.",
};

export const FAQHeader: React.FC<FAQHeaderProps> = (props) => {
  const { tagline, heading, description, className = "", ...rest } = {
    ...FAQHeaderDefaults,
    ...props,
  };

  return (
    <section
      id="faq-hero"
      className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}
      {...rest}
    >
      <div className="container">
        <div className="w-full max-w-lg">
          {tagline ? <p className="mb-3 font-semibold text-slate-700 md:mb-4">{tagline}</p> : null}
          <h1 className="mb-5 text-4xl md:mb-6 md:text-8xl lg:text-10xl">
            {heading}
          </h1>
          <p className="text-slate-700 md:text-md">{description}</p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {/* Primary: Learn More (How It Works) */}
            <Link
              to="/how-it-works"
              className="inline-block rounded-[16px] border border-[#389DF9] bg-[#389DF9] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#2185d0]"
            >
              Learn More
            </Link>

            {/* Secondary: Contact Us */}
            <Link
              to="/contact"
              className="inline-block rounded-[16px] border border-[#EBF5FE] bg-[#EBF5FE] px-5 py-3 font-medium text-[#389DF9] shadow-sm transition-colors hover:bg-[#dceefa]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHeader;
