/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import DiagnosticSection from "./components/DiagnosticSection";
import ProductPresentation from "./components/ProductPresentation";
import TargetAudience from "./components/TargetAudience";
import OfferSection from "./components/OfferSection";
import GarantiaSection from "./components/GarantiaSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Sparkles, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function App() {
  const checkoutRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // Scroll to checkout section smoothly
  const handleScrollToCheckout = () => {
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Monitor scroll height to trigger floating action bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-academy-cream selection:bg-academy-gold/30 selection:text-academy-blue overflow-x-hidden" id="app-root-container">
      
      {/* Premium Static Indicator Bar */}
      <div className="bg-academy-blue-dark text-white/80 py-2.5 text-center text-xs border-b border-white/5 tracking-[0.12em] font-mono select-none px-4 flex items-center justify-center gap-1.5 sm:gap-2 uppercase flex-wrap">
        <Sparkles className="w-3.5 h-3.5 text-academy-gold animate-pulse flex-shrink-0" />
        <span>Garantia de Conversão em até 7 Dias</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span className="text-academy-gold-light font-bold">Últimas licenças promocionais</span>
      </div>

      {/* Hero Section (Seção 1) */}
      <HeroSection onBuyClick={handleScrollToCheckout} />

      {/* Identification & Diagnosis (Seção 2) */}
      <DiagnosticSection />

      {/* Core Solution (Seção 3) */}
      <ProductPresentation />

      {/* Qualification criteria (Seção 4) */}
      <TargetAudience />

      {/* Irresistible Offer & Loss Calculator (Seção 5) */}
      <OfferSection checkoutRef={checkoutRef} />

      {/* Guarantee Section (Seção 6) */}
      <GarantiaSection />

      {/* FAQ Accordion Section (Seção 7) */}
      <FAQSection />

      {/* Trademark bottom footer */}
      <Footer />

      {/* Custom Sticky Header for High-Ticket conversion */}
      <div
        className={`fixed bottom-4 left-4 right-4 md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 md:right-auto md:w-full md:max-w-2xl bg-academy-blue/95 backdrop-blur-md border border-academy-gold/35 text-white py-3 px-5 rounded-full shadow-2xl flex items-center justify-between gap-4 z-50 transition-all duration-500 ease-in-out transform ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
        id="sticky-conversion-bar"
      >
        <div className="hidden sm:flex flex-col select-none text-left">
          <span className="text-[10px] font-mono tracking-wider text-academy-gold uppercase">Script Comercial</span>
          <span className="font-serif text-sm font-semibold text-white tracking-tight leading-none mt-0.5">Harmonização das Vendas</span>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right sm:pr-2">
            <span className="text-[10px] text-white/50 line-through mr-1.5">R$ 197</span>
            <span className="text-base sm:text-lg font-serif font-black text-academy-gold leading-none">R$ 67</span>
            <p className="text-[8px] font-mono text-white/40 uppercase tracking-tighter">Download em PDF</p>
          </div>
          
          <button
            onClick={handleScrollToCheckout}
            id="sticky-checkout-btn"
            className="px-5 py-2.5 bg-gradient-to-r from-academy-gold to-academy-gold-dark hover:from-academy-gold-light hover:to-academy-gold text-academy-blue text-xs font-bold uppercase rounded-full shadow-md tracking-wider flex items-center gap-1 cursor-pointer transition-all active:scale-95"
          >
            Obter Script
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}

