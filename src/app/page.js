'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsSection } from "./components/StatsSection";
import { Services } from "./components/Services";
import { ProcessSection } from "./components/ProcessSection";
import { Projects } from "./components/Projects";
import { Values } from "./components/Values";
import { QuoteSection } from "./components/QuoteSection";
import { CTABand } from "./components/CTABand";
import { Footer } from "./components/Footer";
import { ProjetModal } from "./components/ProjetModal";
import { SmokeBackground } from "./components/SmokeBackground";

export default function App() {
  const [projetModalOpen, setProjetModalOpen] = useState(false);

  return (
    <motion.div 
      className="min-h-screen relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SmokeBackground />
      <div className="relative z-10">
      <Header onOpenProjetModal={() => setProjetModalOpen(true)} />
      <main>
        <Hero onOpenProjetModal={() => setProjetModalOpen(true)} />
        <StatsSection />
        <Services />
        <ProcessSection />
        <Projects />
        <Values />
        <QuoteSection />
        <CTABand onOpenProjetModal={() => setProjetModalOpen(true)} />
      </main>
      <Footer onOpenProjetModal={() => setProjetModalOpen(true)} />
      </div>
      <ProjetModal open={projetModalOpen} onOpenChange={setProjetModalOpen} />
    </motion.div>
  );
}
