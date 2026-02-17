'use client'

import { Eye, Users } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export function Values() {
  return (
    <section id="nos-valeurs" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D070E5] tracking-widest uppercase text-sm">Notre ADN</span>
          </motion.div>
          
          <h2 
            className="mb-6 tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem]"
            style={{ fontWeight: '200' }}
          >
            Nos valeurs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-[1.125rem]">
            Entre transparence technologique et proximité humaine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Transparence */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glow effect on hover */}
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-[#D070E5] to-[#D070E5] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
            />
            
            {/* Glass card */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-[#D070E5]/20 rounded-3xl p-6 md:p-10 overflow-hidden">
              
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D070E5]/20 to-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-[#D070E5]/30 group-hover:border-[#D070E5]/60 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    boxShadow: '0 0 20px rgba(208, 112, 229, 0.15)'
                  }}
                >
                  <Eye className="w-10 h-10 text-[#D070E5]" />
                </motion.div>
                
                <h3 className="mb-4 text-white text-xl md:text-[1.75rem]" style={{ fontWeight: '300' }}>
                  Transparence
                </h3>
                <TextReveal className="text-gray-400 leading-relaxed">
                  Communication cristalline et honnête à chaque étape. Nous croyons en un partenariat 
                  basé sur la confiance, la clarté et l'ouverture totale. Aucune surprise, que des solutions.
                </TextReveal>
              </div>

              {/* Decorative lines */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D070E5]/25 to-transparent" />
            </div>
          </motion.div>

          {/* Proximité */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glow effect on hover */}
            <div 
              className="absolute -inset-1 bg-gradient-to-l from-[#D070E5] to-[#D070E5] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
            />
            
            {/* Glass card */}
            <div className="relative backdrop-blur-xl bg-gradient-to-bl from-white/[0.05] to-white/[0.02] border border-[#D070E5]/20 rounded-3xl p-6 md:p-10 overflow-hidden">
              
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D070E5]/20 to-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-[#D070E5]/30 group-hover:border-[#D070E5]/60 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  style={{
                    boxShadow: '0 0 20px rgba(208, 112, 229, 0.15)'
                  }}
                >
                  <Users className="w-10 h-10 text-[#D070E5]" />
                </motion.div>
                
                <h3 className="mb-4 text-white text-xl md:text-[1.75rem]" style={{ fontWeight: '300' }}>
                  Proximité
                </h3>
                <TextReveal className="text-gray-400 leading-relaxed">
                  Une collaboration humaine et accessible. Nous sommes à vos côtés, véritables partenaires 
                  de votre réussite digitale. L'écoute, l'empathie et la réactivité au cœur de notre méthode.
                </TextReveal>
              </div>

              {/* Decorative lines */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D070E5]/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Connecting line between cards */}
        <motion.div 
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#D070E5]/30 via-[#D070E5]/20 to-[#D070E5]/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
