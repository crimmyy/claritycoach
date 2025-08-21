import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ContactUs } from "@/components/ui/Contact/ContactUs";
import { Cta, CtaDefaults } from '@/components/shared/Cta'
export default function Contact() {
  return (
    <>
      <Header />
        <ContactUs />
      {/* <Cta {...CtaDefaults} heading="Get Started with ClarityCoach Today" /> */}
      <Footer />
    </>
  );
}
