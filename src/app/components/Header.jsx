'use client'

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Header({ onOpenProjetModal }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[#D070E5]/30"
      style={{
        background: 'linear-gradient(180deg, rgba(14, 14, 14, 0.95) 0%, rgba(14, 14, 14, 0.88) 100%)',
        boxShadow: '0 1px 0 0 rgba(208, 112, 229, 0.2), 0 0 40px rgba(208, 112, 229, 0.05)'
      }}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with gradient glow */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/logosvg.svg" alt="Logo Lumina" className="w-24" />
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Accueil', 'Nos services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-gray-300 hover:text-[#F42CFF] transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F42CFF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={onOpenProjetModal}
              className="relative bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-full px-6 border-0 overflow-hidden group"
              style={{
                boxShadow: '0 0 20px rgba(208, 112, 229, 0.5), 0 0 40px rgba(208, 112, 229, 0.2)'
              }}
            >
              <span className="relative z-10">Discutons de votre projet</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
