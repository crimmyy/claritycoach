"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Drawer from "@/components/shared/Drawer";
import AirtableDrawer from "@/components/shared/AirtableDrawer";

type ImageProps = { src: string; alt?: string };
type SectionProps = { image: ImageProps; heading: string; description: string };

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type HowItWorksStepsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowItWorksStepsDefaults: Props = {
  heading: "Three Simple Steps",
  sections: [
    {
      image: { src: "/images/Step1.png", alt: "Step 1" },
      heading: "Step 1: Upload Your Video",
      description: "Pick any video file. That's it.",
    },
    {
      image: { src: "/images/Step2.png", alt: "Step 2" },
      heading: "Step 2: Get Instant Coaching",
      description:
        "Clarity Coach analyzes visuals, audio, pacing, and delivery in seconds.",
    },
    {
      image: { src: "/images/Step3.png", alt: "Step 3" },
      heading: "Step 3: See What to Improve",
      description:
        "You'll get a personalized report with clear insights on what's working and what to tweak.",
    },
  ],
};

export const HowItWorksSteps = (props: HowItWorksStepsProps) => {
  const { tagline, heading, description, sections, className = "", ...rest } = {
    ...HowItWorksStepsDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="how-it-works-steps"
      className={`bg-[#EBF5FE] px-[5%] py-8 md:py-8 lg:py-16 ${className}`} // reduced top/bottom padding
      {...rest}
    >
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-8 text-center"> {/* reduced spacing */}
            <div className="w-full max-w-2xl">
              {tagline && (
                <p className="mb-2 font-semibold text-slate-700 md:mb-3">
                  {tagline}
                </p>
              )}
              <h2 className="mb-4 text-4xl font-bold md:mb-5 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              {description && (
                <p className="text-slate-700 md:text-lg">{description}</p>
              )}
            </div>
          </div>

          {/* Steps Grid with animations */}
          <motion.div
            className="grid w-full grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:gap-x-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex h-full flex-col items-center text-center"
              >
                <div className="h-auto w-[20rem] rounded-lg overflow-hidden mb-6"> {/* added bottom margin */}
                  <img
                    src={section.image.src}
                    alt={section.image.alt ?? ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-3 text-2xl mt-6 font-semibold md:mb-4 md:text-3xl md:leading-[1.3]"> {/* reduced margin */}
                  {section.heading}
                </h3>
                <p className="max-w-md text-slate-700">{section.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:mt-16 lg:mt-20">
          <Drawer
  trigger={
    <button className="px-6 py-2.5 rounded-[16px] bg-[#389DF9] text-white">
      Get Started
    </button>
  }
/>


            <a
              href="/UseCases"
              className="inline-block rounded-[16px] border border-[#C8D0D8] bg-[#EBF5FE] px-5 py-3 text-sm sm:text-base font-medium text-black shadow-sm transition-colors hover:bg-[#dceefa]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
