import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BookPreview from "@/components/BookPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <HowItWorks />
        <BookPreview />
        <OrderForm />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
