// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";

// type Props = {
//   heading: string;
//   description: string;
//   button: ButtonProps;
//   inputNamePlaceholder: string;
//   inputEmailPlaceholder: string;
//   inputMessagePlaceholder: string;
// };

// export type ContactUsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// export const ContactUsDefaults: Props = {
//   heading: "Contact us",
//   description: "We'd love to hear from you!",
//   button: { title: "Submit" },
//   inputNamePlaceholder: "Full name",
//   inputEmailPlaceholder: "Your email address",
//   inputMessagePlaceholder: "Type your message…",
// };

// export const ContactUs = (props: ContactUsProps) => {
//   const {
//     heading,
//     description,
//     button,
//     inputNamePlaceholder,
//     inputEmailPlaceholder,
//     inputMessagePlaceholder,
//     className = "",
//     ...rest
//   } = { ...ContactUsDefaults, ...props };

//   const [nameInput, setNameInput] = useState("");
//   const [emailInput, setEmailInput] = useState("");
//   const [messageInput, setMessageInput] = useState("");
//   const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);
//   const [termsError, setTermsError] = useState("");

//   const canSubmit =
//     nameInput.trim().length > 0 &&
//     emailInput.trim().length > 0 &&
//     messageInput.trim().length > 0 &&
//     acceptTerms === true;

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (acceptTerms !== true) {
//       setTermsError("Please accept the Terms to continue.");
//       return;
//     }
//     setTermsError("");
//     // TODO: hook to backend / Airtable
//     console.log({ nameInput, emailInput, messageInput, acceptTerms });
//   };

//   return (
//     <section
//       id="contact"
//       className={`relative px-[5%] py-12 md:py-16 ${className}`}
//       style={{ backgroundColor: "#f2f2f2" }}
//       {...rest}
//     >
//       <div className="max-w-2xl">
//         {/* Heading */}
//         <h2 className="mb-3 text-3xl leading-[1.2] text-black md:mb-4 md:text-10xl">
//           {heading}
//         </h2>
//         <p className="mb-8 text-base text-neutral-700 md:text-lg">{description}</p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <Label htmlFor="fullName" className="mb-1 text-sm text-neutral-800">
//               Name
//             </Label>
//             <Input
//               id="fullName"
//               type="text"
//               placeholder={inputNamePlaceholder}
//               value={nameInput}
//               onChange={(e) => setNameInput(e.target.value)}
//               required
//               className="w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
//             />
//           </div>

//           <div>
//             <Label htmlFor="email" className="mb-1 text-sm text-neutral-800">
//               Email
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder={inputEmailPlaceholder}
//               value={emailInput}
//               onChange={(e) => setEmailInput(e.target.value)}
//               required
//               className="w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
//             />
//           </div>

//           <div>
//             <Label htmlFor="message" className="mb-1 text-sm text-neutral-800">
//               Message
//             </Label>
//             <Textarea
//               id="message"
//               placeholder={inputMessagePlaceholder}
//               value={messageInput}
//               onChange={(e) => setMessageInput(e.target.value)}
//               required
//               className="min-h-[10rem] w-full rounded-none border-0 border-b border-neutral-400 bg-transparent px-0 py-2 text-black placeholder:text-neutral-500 focus:border-black focus:ring-0"
//             />
//           </div>
//           {/* Terms Checkbox */}
// <div className="flex items-center gap-2">
//   <Checkbox
//     id="terms"
//     checked={acceptTerms}
//     onCheckedChange={(val) => {
//       const v = val === true;            // normalize to boolean
//       setAcceptTerms(v as true | false); // keep your state type happy
//       if (v) setTermsError("");
//     }}
//   />
//   <Label htmlFor="terms" className="cursor-pointer text-sm text-neutral-800">
//     I accept the{" "}
//     <a className="underline" href="/terms" target="_blank" rel="noopener noreferrer">
//       Terms and Conditions
//     </a>
//   </Label>
// </div>
// {termsError && <p className="text-xs text-red-600">{termsError}</p>}

// {/* Submit Button */}
// <Button
//   variant="custom"
//   disabled={!canSubmit}
//   className="rounded-[16px] px-6 py-3 font-medium text-white hover:opacity-90 disabled:!opacity-100 disabled:pointer-events-none"
//   style={{ backgroundColor: "#389DF9" }}
// >
//   {button.title}
// </Button>


//         </form>
//       </div>
//     </section>
//   );
// };

"use client";

import * as React from "react";

type Props = {
  heading: string;
  description: string;
};

export type ContactUsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ContactUsDefaults: Props = {
  heading: "Contact us",
  description: "We'd love to hear from you!",
};

export const ContactUs = (props: ContactUsProps) => {
  const { heading, description, className = "", ...rest } = {
    ...ContactUsDefaults,
    ...props,
  };

  return (
    <section
      id="contact"
      className={`relative px-[5%] py-12 md:py-16 ${className}`}
      style={{ backgroundColor: "#f2f2f2" }}
      {...rest}
    >
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="mb-3 text-3xl leading-[1.2] text-black md:mb-4 md:text-5xl font-bold">
          {heading}
        </h2>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">{description}</p>

        {/* Airtable Embed */}
        <div className="w-full h-auto overflow-hidden rounded-lg border border-neutral-300 shadow-sm">
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/appx2HC4nGxpGSOUd/pagr30Zr2DdZu8kXA/form"
            frameBorder="0"
            width="100%"
            height="1000" // taller so no internal scroll
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
