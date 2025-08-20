"use client";

import { motion } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type PersonaProps = {
  heading: string;
  description: string;
  scenarios: string[];
  image: ImageProps;
  bgColor?: string;
  animationDirection?: "left" | "right";
};

const PersonaSection = ({
  heading,
  description,
  scenarios,
  image,
  bgColor,
  animationDirection = "left",
}: PersonaProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: animationDirection === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="px-[10%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <div className="container">
        <motion.div
          className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          {/* Text block */}
          <div className="max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              {heading}
            </h2>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              {description}
            </p>
            <div>
              <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-gray-900">
                Scenarios
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-base leading-relaxed">
                {scenarios.map((scenario, idx) => (
                  <li key={idx}>{scenario}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Personas() {
  return (
    <>
      <PersonaSection
        heading="For Creators"
        description="Boost your view count, engagement, and audience retention by utilizing ClarityCoach’s AI-powered feedback reports to help you deliver your messages with confidence and clarity."
        scenarios={[
          "Convert viewers into a loyal follower base through masterful storytelling.",
          "Build a recognizable, unique brand to attract collaborations and sponsorships.",
          "Increase confidence in every post by having a second set of eyes review your content before sharing publicly.",
        ]}
        image={{
          src: "/images/HeroPhoto5.jpg",
          alt: "Creator working on video content",
        }}
        animationDirection="left"
      />

      <PersonaSection
        heading="For Entrepreneurs"
        description="Building a strong online presence means creating trust, not just visibility. ClarityCoach helps you turn attention into lasting connections with holistic AI-powered video feedback."
        scenarios={[
          "Post updates that grow your community and strengthen relationships.",
          "Create product demos that resonate and convert customers.",
          "Craft marketing videos that turn attention into action.",
        ]}
        image={{
          src: "/images/HeroPhoto3.jpg",
          alt: "Entrepreneur presenting ideas",
        }}
        bgColor="#f2f2f2"
        animationDirection="right"
      />

      {/* <PersonaSection
        heading="For Educators"
        description="Design and deliver lessons that stick. Keep learners engaged, focused, and motivated wherever they are."
        scenarios={[
          "Record clear, engaging lessons for online courses.",
          "Create captivating videos that simplify complex topics.",
          "Produce training content that keeps remote learners on track.",
        ]}
        image={{
          src: "/images/HeroPhoto2.jpg",
          alt: "Educator recording online lesson",
        }}
        animationDirection="left"
      /> */}
    </>
  );
}
