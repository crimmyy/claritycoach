import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import UseCasesHeader from "@/components/ui/UseCases/UseCasesHeader";
import Personas from "@/components/ui/UseCases/Personas";
import { Cta, CtaDefaults } from '@/components/shared/Cta'

export default function UseCases() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <UseCasesHeader />
        <Personas />
      </main>
      {/* <Cta {...CtaDefaults} heading="Get Started with ClarityCoach Today" /> */}
      <Footer />
    </>
  );
}
