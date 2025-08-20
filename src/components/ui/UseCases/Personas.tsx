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
        description="Make every video land with impact. Refine your message, sharpen your delivery, and captivate your audience."
        scenarios={[
          "Deliver your messages with confidence and clarity.",
          "Collaborate with brands while keeping your authentic voice.",
          "Refine short-form content to maximize retention and engagement.",
        ]}
        image={{
          src: "/images/HeroPhoto5.jpg",
          alt: "Creator working on video content",
        }}
        animationDirection="left"
      />

      <PersonaSection
        heading="For Entrepreneurs"
        description="Communicate your vision with confidence. Present ideas that inspire trust, secure funding, and drive action."
        scenarios={[
          "Pitch to investors with clarity and confidence in every second.",
          "Share product demos that clearly convey value and benefits.",
          "Post founder updates that strengthen community trust.",
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
