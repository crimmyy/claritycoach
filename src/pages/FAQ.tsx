// src/pages/FAQ.tsx
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FAQHeader from "@/components/ui/FAQ/FAQHeader";
import FAQMain from "@/components/ui/FAQ/FAQMain";

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FAQHeader />
        <FAQMain />
      </main>
      <Footer />
    </>
  );
}
