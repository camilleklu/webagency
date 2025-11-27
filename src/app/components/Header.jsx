'use client'

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#D070E5]/10"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with gradient glow */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span 
              className="tracking-tight bg-gradient-to-r from-white via-[#E3BDFF] to-[#D070E5] bg-clip-text text-transparent"
              style={{ 
                fontSize: '1.75rem', 
                fontWeight: '300',
                textShadow: '0 0 30px rgba(208, 112, 229, 0.5)'
              }}
            >
              Lumina
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Accueil', 'Nos services', 'Projets', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-gray-300 hover:text-[#E3BDFF] transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              className="relative bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] hover:from-[#E3BDFF] hover:to-[#D070E5] text-white rounded-full px-6 border-0 overflow-hidden group"
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
