"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer as ShadDrawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import PricingCard from "@/components/shared/PricingCard";

const HIGHLIGHT = "#002370";

type DrawerProps = {
  trigger?: React.ReactElement;
  title?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const DefaultTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>((props, ref) => (
  <Button
    ref={ref}
    className="rounded-xl px-4 py-5 text-white"
    style={{ backgroundColor: "#389DF9" }}
    {...props}
  >
    Get Started
  </Button>
));
DefaultTrigger.displayName = "DefaultTrigger";

export default function Drawer({
  trigger,
  title = "Early Access Offer",
  open,
  onOpenChange,
}: DrawerProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open]);

  return (
    <ShadDrawer open={open} onOpenChange={onOpenChange}>
      {/* only render a trigger if passed in */}
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      {!trigger && !open && (
        <DrawerTrigger asChild>
          <DefaultTrigger />
        </DrawerTrigger>
      )}

      <DrawerContent
        className="p-0 border-0 sm:rounded-t-2xl flex flex-col"
        style={{
          maxHeight: "80vh",
          backgroundImage: `url('https://cdn.devdojo.com/images/september2021/mesh-bg.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto w-full max-w-6xl mx-auto px-4 md:px-8"
        >
          {/* Handle bar */}
          <div className="flex justify-center pt-3">
            <div
              className="rounded-full w-[100px] h-2"
              style={{ backgroundColor: HIGHLIGHT }}
            />
          </div>

          {/* Header */}
          <DrawerHeader className="shrink-0">
            <DrawerTitle className="text-center text-xl font-semibold md:text-2xl lg:text-4xl text-[#002370] drop-shadow-md">
              {title}
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Pricing details for Freemium, Basic, and Pro subscription tiers
            </DrawerDescription>
            <p
              className="mx-auto text-center text-xs md:text-sm font-medium max-w-2xl"
              style={{ color: HIGHLIGHT }}
            >
              Includes <strong>2 week of early access</strong> to ClarityCoach
              before public launch. Secure your spot now! This offer is only
              available until launch or while spots last.
            </p>
          </DrawerHeader>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
            {/* Freemium card → single button */}
            <PricingCard
              title="Freemium"
              price="Free"
              highlightColor={HIGHLIGHT}
              features={[
                "5 video analyses/mo (≤ 60s each)",
                "Overall score and category breakdowns",
                "2–3 tips per category",
                "Basic hook analyzer",
                "Exportable reports",
              ]}
              modalLinks={[
                {
                  label: "Start Free",
                  url: "https://buy.stripe.com/5kQ6oI6D7fBD6Pa2bT1oI04",
                },
              ]}
            />

            {/* Basic */}
            <PricingCard
              title="Basic"
              price="$9.99"
              oldPrice="$16.99"
              highlightColor={HIGHLIGHT}
              features={[
                "Includes everything in Free version",
                "15 video analyses/mo (≤ 2 min each)",
                "2–6 tailored recommendations per video",
                "In-depth hook analyzer",
                "Brand consistency checker",
                "Priority processing (short ads)",
              ]}
              modalLinks={[
                {
                  label: "1 Month",
                  url: "https://buy.stripe.com/7sYaEYe5z4WZflG7wd1oI01",
                },
                {
                  label: "6 Months",
                  url: "https://buy.stripe.com/7sY6oI6D72ORb5q03L1oI02",
                },
                {
                  label: "12 Months",
                  url: "https://buy.stripe.com/eVq28s3qVahjddy8Ah1oI03",
                },
              ]}
            />

            {/* Pro */}
            <PricingCard
              title="Pro"
              price="$14.99"
              oldPrice="$24.99"
              highlightColor={HIGHLIGHT}
              badgeText="BEST VALUE"
              features={[
                "Includes everything in Basic version",
                "50 video analyses/mo (≤ 5 min each)",
                "Advanced AI insights (micro-timing suggestions)",
                "Accessibility deep-dive (captions, clarity)",
                "Early access to new features",
                "No ads",
              ]}
              modalLinks={[
                {
                  label: "1 Month",
                  url: "https://buy.stripe.com/28E7sM1iN6134H22bT1oI05",
                },
                {
                  label: "6 Months",
                  url: "https://buy.stripe.com/3cIbJ2f9Dblnb5q6s91oI06",
                },
                {
                  label: "12 Months",
                  url: "https://buy.stripe.com/8x29AUaTn3SVflGbMt1oI07",
                },
              ]}
            />
          </div>

          {/* Refund policy */}
          <div className="mt-2 rounded-2xl bg-white/70 p-3 md:p-4 text-xs text-gray-800 ring-1 ring-gray-200">
            <p>
              <strong>Refund policy:</strong> Customers may request a full
              refund at any time prior to the public launch of the app, which
              occurs one week after the early access period begins.
            </p>
          </div>

          {/* Footer */}
          <DrawerFooter className="flex justify-center">
            <DrawerClose asChild>
              <Button
                className="relative inline-flex items-center justify-center h-auto px-6 py-1.5 my-4 w-1/3 text-sm font-medium text-white rounded-full shadow hover:shadow-lg sm:text-base"
                style={{ backgroundColor: HIGHLIGHT }}
              >
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </ShadDrawer>
  );
}
