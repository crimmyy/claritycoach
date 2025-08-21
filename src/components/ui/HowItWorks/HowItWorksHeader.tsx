'use client'

import * as React from "react";
import { motion } from "framer-motion";

type ImageProps = { src: string; alt?: string };
type Props = { heading: string; description: string; image: ImageProps };

export type HowItWorksHeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HowItWorksHeaderDefaults: Props = {
  heading: "How Clarity Coach Works",
  description: "Clarity Coach gives you instant personalized feedback so you can improve with every video.",
  image: { src: "/images/HowItWorksBgImage.png", alt: "Background showing creator working on video" },
};

export const HowItWorksHeader = (props: HowItWorksHeaderProps) => {
  const { heading, description, image, className = "", ...rest } = {
    ...HowItWorksHeaderDefaults,
    ...props,
  };

  return (
    <motion.section
      id="relume"
      className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className}`}
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="w-full max-w-xl">
          <h1 className="mb-5 text-3xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
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
