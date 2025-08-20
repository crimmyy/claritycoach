"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

type Question = { title: string; answer: React.ReactNode };

type Props = {
  heading: string;
  description: string;
  questions: Question[];
  footerHeading: string;
  footerDescription: string;
};

export type FAQMainProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FAQMainDefaults: Props = {
  heading: "FAQs",
  description:
    "Below are some common questions we get, but if you still have any that aren’t covered, contact us below and we will get back to you!",
  questions: [
    {
      title: "Is ClarityCoach an AI-video editor?",
      answer: (
        <p>
          No. We’re not an editing tool—think of us like a coach or a mentor. ClarityCoach gives you
          guidance to help you improve as a creator, not just a clip.
        </p>
      ),
    },
    {
      title:
        "I’m not showing myself on-camera in my video—can ClarityCoach still help me improve my content?",
      answer: (
        <p>
          Absolutely! Whether your content includes narration, visuals, or both, ClarityCoach offers
          helpful tips to make your message clearer and more engaging.
        </p>
      ),
    },
    {
      title: "What if I already make great content!",
      answer: (
        <p>
          That’s amazing! But even the best creators benefit from a second set of eyes. ClarityCoach
          offers thoughtful, objective input to help you grow even further.
        </p>
      ),
    },
    {
      title: "How can I try ClarityCoach?",
      answer: (
        <p>
          We’re targeting a launch in Fall 2025. Join the waitlist to be one of the first to get
          access!
        </p>
      ),
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "If you didn’t find what you were looking for, reach out and we’ll get back to you quickly.",
};

export const FAQMain: React.FC<FAQMainProps> = (props) => {
  const { heading, description, questions, footerHeading, footerDescription, className = "", ...rest } =
    { ...FAQMainDefaults, ...props };

  return (
    <section
      id="faq-main"
      className={`px-[5%] py-16 md:py-16 lg:py-16 ${className}`}
      style={{ backgroundColor: "#f2f2f2" }}
      {...rest}
    >
      <div className="container">
        {/* Intro */}
        <div className="mb-12 w-full max-w-2xl md:mb-18 lg:mb-20">

          {/* Secondary heading per your content */}
          <h3 className="mt-8 text-2xl font-semibold md:text-5xl">{heading}</h3>
          <p className="mt-2 text-neutral-700 md:text-md">{description}</p>
        </div>

        {/* FAQ List */}
        <Accordion type="multiple">
          {questions.map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="md:py-8 md:text-md">{q.title}</AccordionTrigger>
              <AccordionContent className="md:pb-6">{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-semibold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="text-neutral-700 md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-[16px] border border-[#389DF9] bg-[#389DF9] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#2185d0]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQMain;
