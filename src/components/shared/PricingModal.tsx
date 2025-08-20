"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";

type PricingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planTitle: string;
  links: { label: string; url: string }[];
};

export default function PricingModal({
  open,
  onOpenChange,
  planTitle,
  links,
}: PricingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent
          className="sm:rounded-2xl p-6 border-0 bg-white"
          style={{
            backgroundImage: `url('https://cdn.devdojo.com/images/september2021/mesh-bg.jpeg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <DialogHeader>
            <DialogTitle
              className="text-center text-xl font-semibold md:text-2xl lg:text-3xl drop-shadow-md"
              style={{ color: "#002370" }}
            >
              Select a {planTitle} Plan
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              Choose your preferred billing option below. You’ll be taken to a
              secure Stripe checkout page.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full px-4 py-2 text-center text-white font-medium shadow hover:shadow-lg transition"
                style={{ backgroundColor: "#389DF9" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
