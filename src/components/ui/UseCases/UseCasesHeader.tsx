'use client'

import * as React from "react";
import { motion } from "framer-motion";

type ImageProps = { src: string; alt?: string };
type Props = { heading: string; description: string; image: ImageProps };

export type UseCasesHeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const UseCasesHeaderDefaults: Props = {
  heading: "ClarityCoach Works for Creators and Entrepreneurs",
  description:
    "Upload your video and get tailored AI-powered feedback. Whether you're growing your audience or starting the next big thing.",
  image: {
    src: "/images/HowItWorksBgImage.png",
    alt: "Background showing people creating, teaching, and collaborating",
  },
};

export const UseCasesHeader = (props: UseCasesHeaderProps) => {
  const { heading, description, image, className = "", ...rest } = {
    ...UseCasesHeaderDefaults,
    ...props,
  };

  return (
    <motion.section
      id="usecases-header"
      className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className}`}
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="w-full max-w-xl">
          <h1 className="mb-5 text-3xl font-bold text-white md:mb-6 md:text-6xl lg:text-4xl">
            {heading}
          </h1>
          <p className="text-white/90 md:text-lg">{description}</p>
        </div>
      </div>

      {/* Background image & overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={image.src}
          alt={image.alt ?? ""}
          aria-hidden={image.alt ? undefined : true}
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </motion.section>
  );
};

export default UseCasesHeader;
