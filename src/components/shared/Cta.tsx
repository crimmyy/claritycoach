"use client";

import { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  inputNamePlaceholder: string;
  inputEmailPlaceholder: string;
  termsAndConditions: string;
};

export type CtaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta = (props: CtaProps) => {
  const {
    heading,
    description,
    inputNamePlaceholder,
    inputEmailPlaceholder,
    button,
    termsAndConditions,
  } = { ...CtaDefaults, ...props };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ fullName, email });
  };

  return (
    <section
      id="relume"
      className="relative px-[5%] py-12 md:py-16"
      style={{ backgroundColor: "#4c4c4c" }}
    >
      <div className="mx-auto max-w-page">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_minmax(0,420px)] md:gap-12 lg:gap-16">

          {/* Left: Heading + subtext */}
          <div className="flex items-center">
            <div className="flex flex-col justify-center w-full max-w-2xl">
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white md:mb-4 md:text-4xl lg:text-4xl">
                    {heading}
                </h2>
                <p className="text-gray-200 text-base md:text-lg">{description}</p>
            </div>

          </div>

          {/* Right: Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-3">
              <Input
                id="fullName"
                type="text"
                placeholder={inputNamePlaceholder}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-[16px] bg-transparent text-white placeholder:text-gray-300 border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30"
              />

              <Input
                id="email"
                type="email"
                placeholder={inputEmailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[16px] bg-transparent text-white placeholder:text-gray-300 border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30"
              />

              <Button
                {...button}
                className="w-full rounded-[16px] bg-white text-black hover:bg-white/90 px-6 py-3 font-medium"
              >
                {button.title}
              </Button>
            </form>

            <div
              className="mt-3 text-xs text-gray-200"
              dangerouslySetInnerHTML={{ __html: termsAndConditions }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const CtaDefaults: Props = {
  heading: "Join ClarityCoach Today!",
  description: "Transform your videos with AI-powered feedback.",
  inputNamePlaceholder: "Full name",
  inputEmailPlaceholder: "Your email address",
  button: { title: "Join Now" },
  termsAndConditions:
    "By clicking <strong>Join Now</strong>, you agree to our <a href='/terms' class='underline'>Terms and Conditions</a>.",
};

export default Cta;
