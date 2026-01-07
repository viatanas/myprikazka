"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OrderForm from "@/components/OrderForm";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BookPreview from "@/components/BookPreview";

export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmitSuccess = () => {
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <HowItWorks />
        <BookPreview />
        <OrderForm onSubmitSuccess={handleFormSubmitSuccess} />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
