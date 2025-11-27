'use client'

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0E0E0E]">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #D070E5 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.2, 1],
          opacity: [0.5, 0.3],
          x: [50, 0],
          y: [-50, 0]
        }}
        transition={{
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #E3BDFF 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.3, 1],
          opacity: [0.4, 0.2],
          x: [-30, 0],
          y: [40, 0]
        }}
        transition={{
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#D070E5 1px, transparent 1px), linear-gradient(90deg, #D070E5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-[#D070E5]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              boxShadow: '0 0 30px rgba(208, 112, 229, 0.2)'
            }}
          >
            <Sparkles className="w-4 h-4 text-[#E3BDFF]" />
            <span className="text-[#E3BDFF]">Agence web visionnaire</span>
          </motion.div>

          <motion.h1 
            className="mb-8 tracking-tight"
            style={{ fontSize: '5rem', fontWeight: '200', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-white">Créons le lien</span>
            <br />
            <span className="text-white">entre vous et </span>
            <span 
              className="bg-gradient-to-r from-[#D070E5] via-[#E3BDFF] to-[#D070E5] bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 80px rgba(208, 112, 229, 0.5)'
              }}
            >
              le web
            </span>
          </motion.h1>

          <motion.p 
            className="mb-12 text-gray-400 max-w-3xl mx-auto"
            style={{ fontSize: '1.25rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Une agence web créative à la frontière entre innovation technologique et proximité humaine. 
            Nous transformons vos visions en expériences digitales mémorables.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              className="relative bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] hover:from-[#E3BDFF] hover:to-[#D070E5] text-white rounded-full px-10 py-7 border-0 group overflow-hidden"
              style={{ 
                fontSize: '1.125rem',
                boxShadow: '0 0 40px rgba(208, 112, 229, 0.6), 0 0 80px rgba(208, 112, 229, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="ghost"
              className="rounded-full px-10 py-7 border border-[#D070E5]/50 text-[#E3BDFF] hover:bg-[#D070E5]/10 hover:border-[#D070E5] backdrop-blur-sm"
              style={{ fontSize: '1.125rem' }}
            >
              Explorer nos créations
            </Button>
          </motion.div>

          {/* Connection lines decoration */}
          <motion.div 
            className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#D070E5]/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-transparent to-[#D070E5]/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
