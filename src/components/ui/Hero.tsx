import React from "react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-[#0e172c] lg:grid lg:h-1/4 lg:place-content-center font-sans">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-16">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-[#002370] sm:text-5xl dark:text-white">
            ClarityCoach helps you make{" "}
            <strong className="text-[#389DF9]">better content,</strong> faster
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Upload a video. Get instant, AI-powered feedback on how to imrpve your message, delivery, and audience impact.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded-[16px] border border-[#389DF9] bg-[#389DF9] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#2185d0]"
              href="#"
            >
              Sign Up
            </a>

            <a
              className="inline-block rounded-[16px] border border-[#EBF5FE] bg-[#EBF5FE] px-5 py-3 font-medium text-[#389DF9] shadow-sm transition-colors hover:bg-[#dceefa]"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
