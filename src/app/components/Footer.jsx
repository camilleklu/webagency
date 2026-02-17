"use client";

import { Mail, Phone, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos services", href: "#nos-services" },
  { label: "Notre processus", href: "#process" },
  { label: "Nos valeurs", href: "#nos-valeurs" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: TikTokIcon, label: "TikTok", href: "#" },
];

export function Footer({ onOpenProjetModal }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
    >
      <div className="relative py-20 md:py-24">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E0E0E]/50 to-[#0E0E0E]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D070E5]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F42CFF]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand column */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <img src="/logosvg.svg" alt="Logo Lumina" className="w-48 md:w-56" />
              </div>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed text-[0.95rem]">
                Votre agence web créative et visionnaire, à la frontière entre
                innovation technologique et proximité humaine.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-xl bg-white/[0.04] border border-[#D070E5]/15 hover:border-[#D070E5]/50 hover:bg-[#D070E5]/10 transition-all duration-300"
                    aria-label={label}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#F42CFF] transition-colors" />
                    <span className="text-gray-400 group-hover:text-[#F42CFF] text-sm transition-colors">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-[#D070E5] text-xs font-medium tracking-widest uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <a
                      href={href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#F42CFF] transition-colors duration-300 py-1"
                    >
                      <span className="w-0 h-px bg-gradient-to-r from-[#D070E5] to-[#F42CFF] group-hover:w-5 transition-all duration-300" />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-[#D070E5] text-xs font-medium tracking-widest uppercase mb-6">
                Contact
              </h4>
              <ul className="space-y-5">
                <motion.li
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <div className="w-11 h-11 rounded-xl backdrop-blur-xl bg-white/[0.04] border border-[#D070E5]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D070E5]/50 group-hover:bg-[#D070E5]/10 transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#D070E5]" />
                  </div>
                  <a
                    href="mailto:contact@lumina.fr"
                    className="text-gray-400 hover:text-[#F42CFF] transition-colors duration-300"
                  >
                    contact@lumina.fr
                  </a>
                </motion.li>
                <motion.li
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="w-11 h-11 rounded-xl backdrop-blur-xl bg-white/[0.04] border border-[#D070E5]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D070E5]/50 group-hover:bg-[#D070E5]/10 transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#D070E5]" />
                  </div>
                  <a
                    href="tel:+33123456789"
                    className="text-gray-400 hover:text-[#F42CFF] transition-colors duration-300"
                  >
                    +33 1 23 45 67 89
                  </a>
                </motion.li>
              </ul>
              {onOpenProjetModal && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    onClick={onOpenProjetModal}
                    variant="ghost"
                    className="group text-gray-400 hover:text-[#F42CFF] hover:bg-[#D070E5]/10 border border-[#D070E5]/20 hover:border-[#D070E5]/50 rounded-full px-6"
                  >
                    <span className="flex items-center gap-2">
                      Discutons de votre projet
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Lumina. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 md:gap-8 text-sm">
              {legalLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-500 hover:text-[#F42CFF] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  whileHover={{ x: 2 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-500 hover:text-[#D070E5] transition-colors duration-300 text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Retour en haut</span>
              <ArrowUpRight className="w-4 h-4 rotate-[-135deg]" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
