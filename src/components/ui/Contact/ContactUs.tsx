"use client";

import * as React from "react";
import { useState } from "react";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
};

export type ContactUsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactUsDefaults: Props = {
  heading: "Contact us",
  description: "We'd love to hear from you!",
};

export const ContactUs = (props: ContactUsProps) => {
  const { heading, description, className = "", ...rest } = {
    ...ContactUsDefaults,
    ...props,
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const canSubmit =
    nameInput.trim().length > 0 &&
    emailInput.trim().length > 0 &&
    messageInput.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/airtable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: nameInput,
          email: emailInput,
          message: messageInput,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Something went wrong");

      setStatus("success");
      setNameInput("");
      setEmailInput("");
      setMessageInput("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section
      id="contact"
      className={`relative px-[5%] py-12 md:py-16 ${className}`}
      style={{ backgroundColor: "#f2f2f2" }}
      {...rest}
    >
      <div className="max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black md:mb-4 md:text-5xl">
          {heading}
        </h2>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">{description}</p>

        {status === "success" ? (
          <div className="rounded-lg bg-green-100 p-6 text-green-800 shadow">
            ✅ Thanks for reaching out! We’ll read your message shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="mb-1 text-sm text-neutral-800">
                Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Full name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
                className="w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-1 text-sm text-neutral-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-1 text-sm text-neutral-800">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message…"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                required
                className="min-h-[10rem] w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                ❌ Error: {errorMessage}
              </p>
            )}

            <Button
              variant="custom"
              disabled={!canSubmit || status === "loading"}
              className="rounded-[16px] px-6 py-3 font-medium text-white hover:opacity-90 disabled:!opacity-50"
              style={{ backgroundColor: "#389DF9" }}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;

// "use client";

// import * as React from "react";

// type Props = {
//   heading: string;
//   description: string;
// };

// export type ContactUsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// export const ContactUsDefaults: Props = {
//   heading: "Contact us",
//   description: "We'd love to hear from you!",
// };

// export const ContactUs = (props: ContactUsProps) => {
//   const { heading, description, className = "", ...rest } = {
//     ...ContactUsDefaults,
//     ...props,
//   };

//   return (
//     <section
//       id="contact"
//       className={`relative px-[5%] py-12 md:py-16 ${className}`}
//       style={{ backgroundColor: "#f2f2f2" }}
//       {...rest}
//     >
//       <div className="max-w-3xl">
//         {/* Heading */}
//         <h2 className="mb-3 text-3xl leading-[1.2] text-black md:mb-4 md:text-5xl font-bold">
//           {heading}
//         </h2>
//         <p className="mb-8 text-base text-neutral-700 md:text-lg">{description}</p>

//         {/* Airtable Embed */}
//         <div className="w-full h-auto overflow-hidden rounded-lg border border-neutral-300 shadow-sm">
//           <iframe
//             className="airtable-embed"
//             src="https://airtable.com/embed/appx2HC4nGxpGSOUd/pagr30Zr2DdZu8kXA/form"
//             frameBorder="0"
//             width="100%"
//             height="1000" // taller so no internal scroll
//             style={{ background: "transparent" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
