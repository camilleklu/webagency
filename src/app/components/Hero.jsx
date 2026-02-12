'use client'

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Chargement du cube sans SSR
const CubeScene = dynamic(() => import("../components/CubeScene"), { ssr: false });

export function Hero() {
  return (
    <section id="accueil" className="relative w-full h-screen overflow-hidden bg-[#0E0E0E]">
      
      {/* --- LAYER 0 : BACKGROUND SCENE (CUBE) --- */}
      {/* Z-0 pour rester derrière. Inset-0 pour prendre tout l'écran. */}
      <div className="absolute inset-0 z-0">
        <CubeScene />
      </div>

      {/* --- LAYER 1 : DECORATIVE ORBS (Subtils derrière le texte) --- */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D070E5 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grid pattern overlay (très léger) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#D070E5 1px, transparent 1px), linear-gradient(90deg, #D070E5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* --- LAYER 2 : CONTENU (UI) --- */}
      {/* z-10 pour être au dessus. pointer-events-none pour laisser passer les clics vers le cube ailleurs */}
      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col justify-center lg:flex-row lg:items-center pointer-events-none">
        
        {/* Colonne Gauche : Contenu Texte */}
        {/* Sur mobile : centré. Sur Desktop : aligné à gauche et largeur limitée à 50% pour ne pas toucher le cube central */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0">
          

          <motion.div
            className="mb-6 tracking-tight font-extralight leading-[1.1] flex flex-col items-center pointer-events-auto lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Responsive Text Size */}
            <h1 className="text-white flex flex-col lg:block text-5xl md:text-6xl lg:text-7xl">Créons le lien entre vous et 
              <span 
                className="text-5xl md:text-6xl lg:ml-4 lg:text-7xl font-semibold bg-gradient-to-r from-[#D070E5] via-[#E3BDFF] to-[#D070E5] bg-clip-text text-transparent"
                style={{ textShadow: '0 0 80px rgba(208, 112, 229, 0.5)' }}
              >
                  le web
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="mb-10 text-gray-400 max-w-lg text-lg lg:text-xl pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Une approche créative à la frontière entre innovation technologique et proximité humaine.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              className="bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] hover:from-[#E3BDFF] hover:to-[#D070E5] text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(208,112,229,0.4)] hover:shadow-[0_0_50px_rgba(208,112,229,0.6)] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Démarrer un projet
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            
            <Button 
              variant="ghost"
              className="rounded-full px-8 py-6 text-lg border border-[#D070E5]/30 text-[#E3BDFF] hover:bg-[#D070E5]/10 backdrop-blur-sm"
            >
              Nos créations
            </Button>
          </motion.div>
        </div>

        {/* Colonne Droite : Espace vide pour le cube */}
        <div className="hidden lg:block lg:w-1/2 h-full pointer-events-none">
            {/* Cet espace est laissé vide intentionnellement pour voir le cube */}
        </div>
      </div>

      {/* Decorative lines (Déplacées pour encadrer le layout) */}
      <motion.div 
        className="absolute bottom-10 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#D070E5]/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      
      {/* Fade at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
    </section>
  );
}