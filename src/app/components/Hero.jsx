'use client'

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Chargement du cube sans SSR
const CubeScene = dynamic(() => import("../components/CubeScene"), { ssr: false });

export function Hero({ onOpenProjetModal }) {
  return (
    <section id="accueil" className="relative w-full h-screen overflow-hidden">
      
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
      <div className="relative z-10 container mx-auto h-full px-4 sm:px-6 flex flex-col justify-center lg:flex-row lg:items-center pointer-events-none max-w-7xl">
        
        {/* Colonne Gauche : Contenu Texte */}
        {/* Sur mobile : centré. Sur Desktop : aligné à gauche et largeur limitée à 50% pour ne pas toucher le cube central */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-24 sm:pt-28 lg:pt-0">
          

          <motion.div
            className="mb-6 tracking-tight font-extralight leading-[1.1] flex flex-col items-center pointer-events-auto lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-white flex flex-col lg:block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {["Créons", "le", "lien", "entre", "vous", "et"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 100 }}
                  className="inline-block mr-[0.15em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                className="inline-block lg:ml-4 font-semibold bg-gradient-to-r from-[#D070E5] via-[#F42CFF] to-[#D070E5] bg-clip-text text-transparent"
                style={{ textShadow: '0 0 80px rgba(208, 112, 229, 0.5)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 80 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.85, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  le web
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.p 
            className="mb-6 text-gray-400 max-w-lg text-base sm:text-lg lg:text-xl pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Une approche créative à la frontière entre innovation technologique et proximité humaine.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10 pointer-events-auto justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {["Sites sur mesure", "Réponse 24h", "Accompagnement personnalisé"].map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-[#D070E5]/20 text-gray-400 text-sm hover:border-[#D070E5]/50 hover:text-[#D070E5] transition-colors duration-300"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
            <Button 
              onClick={onOpenProjetModal}
              className="bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-[0_0_30px_rgba(208,112,229,0.4)] hover:shadow-[0_0_50px_rgba(208,112,229,0.6)] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Démarrer un projet
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Colonne Droite : Espace vide pour le cube */}
        <div className="hidden lg:block lg:w-1/2 h-full pointer-events-none">
            {/* Cet espace est laissé vide intentionnellement pour voir le cube */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.span 
          className="text-gray-500 text-xs uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Découvrir
        </motion.span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[#D070E5]/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#D070E5]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative lines */}
      <motion.div 
        className="absolute bottom-24 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#D070E5]/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      
      {/* Fade at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
}