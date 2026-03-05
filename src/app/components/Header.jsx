'use client'

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos services", href: "#nos-services" },
  { label: "Notre processus", href: "#process" },
  { label: "Nos valeurs", href: "#nos-valeurs" },
  { label: "Contact", href: "#contact" },
];

export function Header({ onOpenProjetModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-[#D070E5]/20 shadow-[0_4px_30px_rgba(208,112,229,0.08)]"
          : "backdrop-blur-xl border-b border-[#D070E5]/30"
      }`}
      style={{
        background: scrolled
          ? "rgba(14, 14, 14, 0.92)"
          : "linear-gradient(180deg, rgba(14, 14, 14, 0.95) 0%, rgba(14, 14, 14, 0.88) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 md:py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/logosvg.svg" alt="Logo Lumina" className="w-20 md:w-24 h-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map(({ label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                className="relative px-2 xl:px-4 py-2 text-gray-300 hover:text-[#F42CFF] transition-colors text-sm xl:text-[0.95rem] font-light group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {label}
                <span className="absolute bottom-0 left-2 xl:left-4 right-2 xl:right-4 h-px bg-gradient-to-r from-[#D070E5] to-[#F42CFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onOpenProjetModal}
                className="relative bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-full px-6 py-2.5 border-0 overflow-hidden group text-sm font-medium"
                style={{
                  boxShadow: "0 0 20px rgba(208, 112, 229, 0.4), 0 0 40px rgba(208, 112, 229, 0.15)",
                }}
              >
                <span className="relative z-10">Discutons de votre projet</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-xl bg-white/[0.04] border border-[#D070E5]/20 hover:border-[#D070E5]/50 hover:bg-[#D070E5]/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#F42CFF]" /> : <Menu className="w-5 h-5 text-gray-300" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[#D070E5]/10"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6 space-y-1 max-w-7xl">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={closeMobile}
                  className="block py-3 px-4 text-gray-300 hover:text-[#F42CFF] hover:bg-[#D070E5]/10 rounded-xl transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  onClick={() => {
                    closeMobile();
                    onOpenProjetModal?.();
                  }}
                  className="w-full bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-xl py-6"
                >
                  Discutons de votre projet
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
