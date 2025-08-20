"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionStyle } from "framer-motion";

type FeaturesProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  features: FeaturesProps[];
};

export type WhatYouGetProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const WhatYouGet = (props: WhatYouGetProps) => {
  const { tagline, heading, features } = {
    ...props,
    ...WhatYouGetDefaults,
  };

  return (
    <section id="what-you-get" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 font-semibold md:mb-4 text-lg md:text-xl text-gray-700">
            {tagline}
          </p>
          <h2 className="mb-10 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {heading}
          </h2>
        </div>

        {/* Features row */}
        <div className="flex flex-wrap gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex w-full sm:w-[45%] lg:w-[22%] flex-col items-start"
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={feature.icon.src}
                  alt={feature.icon.alt}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* Text */}
              <h6 className="mb-2 text-base md:text-lg font-bold leading-snug">
                {feature.heading}
              </h6>
              <p className="text-sm md:text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatYouGetDefaults: Props = {
  // tagline: "Your Benefits",
  heading: "What You'll Get",
  features: [
    {
      icon: {
        src: "/images/WhatYouGet1.jpg",
        alt: "Clear feedback icon",
      },
      heading: "Clear, constructive feedback",
      description: "Know exactly what's landing and what isn't.",
    },
    {
      icon: {
        src: "/images/WhatYouGet2.jpg",
        alt: "Holistic analysis icon",
      },
      heading: "Holistic video analysis",
      description: "From visuals and sound to structure and accessibility.",
    },
    {
      icon: {
        src: "/images/WhatYouGet3.jpg",
        alt: "Tailored recommendations icon",
      },
      heading: "Tailored recommendations",
      description:
        "Reports are based on your visual and vocal presence in addition to your audience and goals.",
    },
    {
      icon: {
        src: "/images/WhatYouGet4.jpg",
        alt: "Grow with ClarityCoach icon",
      },
      heading: "Early growth advantage",
      description:
        "Be one of the first to get access and start growing with ClarityCoach!",
    },
  ],
};

export default WhatYouGet;
