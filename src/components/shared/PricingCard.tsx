"use client";

import { useState, useMemo } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

type PricingCardProps = {
  title: string;
  price: string;
  oldPrice?: string;
  highlightColor: string;
  features: string[];
  modalLinks: { label: string; url: string; value: string }[];
};

export default function PricingCard({
  title,
  price,
  oldPrice,
  highlightColor,
  features,
  modalLinks,
}: PricingCardProps) {
  const [selected, setSelected] = useState(modalLinks[0]?.value ?? "1");

  // Map selected value to pricing
  const { currentPrice, currentOldPrice, checkoutUrl } = useMemo(() => {
    if (title === "Basic") {
      switch (selected) {
        case "1":
          return {
            currentPrice: "9.99",
            currentOldPrice: "16.99",
            checkoutUrl: modalLinks[0].url,
          };
        case "6":
          return {
            currentPrice: "59.94",
            currentOldPrice: (16.99 * 6).toFixed(2),
            checkoutUrl: modalLinks[1].url,
          };
        case "12":
          return {
            currentPrice: "119.88",
            currentOldPrice: (16.99 * 12).toFixed(2),
            checkoutUrl: modalLinks[2].url,
          };
      }
    }

    if (title === "Pro") {
      switch (selected) {
        case "1":
          return {
            currentPrice: "14.99",
            currentOldPrice: "24.99",
            checkoutUrl: modalLinks[0].url,
          };
        case "6":
          return {
            currentPrice: "89.94",
            currentOldPrice: (24.99 * 6).toFixed(2),
            checkoutUrl: modalLinks[1].url,
          };
        case "12":
          return {
            currentPrice: "179.88",
            currentOldPrice: (24.99 * 12).toFixed(2),
            checkoutUrl: modalLinks[2].url,
          };
      }
    }

    // Default fallback (Free or unknown)
    return {
      currentPrice: price,
      currentOldPrice: oldPrice,
      checkoutUrl: modalLinks[0]?.url ?? "#",
    };
  }, [selected, title, modalLinks, price, oldPrice]);

  return (
    <div className="relative flex flex-col rounded-2xl border border-gray-50 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
      {/* ToggleGroup */}
      {title !== "Freemium" && (
        <div className="absolute right-3 top-3 z-10">
          <ToggleGroup.Root
            type="single"
            value={selected}
            onValueChange={(val) => val && setSelected(val)}
            className="inline-flex rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            {[
              { value: "1", label: "1M" },
              { value: "6", label: "6M" },
              { value: "12", label: "12M" },
            ].map(({ value, label }, idx) => (
              <ToggleGroup.Item
                key={value}
                value={value}
                className={`
                  px-4 py-2 text-xs font-medium transition-all duration-300 ease-in-out
                  focus:outline-none
                  ${idx === 0 ? "rounded-l-2xl" : ""}
                  ${idx === 2 ? "rounded-r-2xl" : ""}
                  ${
                    selected === value
                      ? "bg-[#002370] text-white"
                      : "bg-transparent text-[#002370] hover:bg-[#e6ecf5]"
                  }
                `}
              >
                {label}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
        </div>
      )}

      {/* Title & price */}
      <div className="mb-5">
        <h3
          className="mb-2 block text-[11px] md:text-sm font-medium tracking-widest uppercase"
          style={{ color: highlightColor }}
        >
          {title}
        </h3>
        <h2 className="flex items-center text-2xl md:text-4xl leading-none">
          <span>
            {title === "Freemium" ? currentPrice : `$${currentPrice}`}
          </span>
          {title !== "Freemium" && (
            <span className="ml-1 text-sm md:text-lg font-normal">/mo</span>
          )}
        </h2>
        {currentOldPrice && title !== "Freemium" && (
          <div className="mt-1">
            <span className="text-xs md:text-sm font-semibold text-red-600 line-through">
              ${currentOldPrice}
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="mb-5 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span
              className="mr-2 inline-flex flex-shrink-0"
              style={{ color: highlightColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 md:h-5 md:w-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                />
              </svg>
            </span>
            <span className="text-[12px] md:text-sm text-gray-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto flex justify-center">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-auto px-6 py-3 text-sm font-medium text-white rounded-full shadow hover:shadow-lg transition-colors duration-200 sm:text-base"
          style={{ backgroundColor: "#389DF9" }}
        >
          {title === "Freemium" ? "Start Free" : `Choose ${title}`}
        </a>
      </div>
    </div>
  );
}
