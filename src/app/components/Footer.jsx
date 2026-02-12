"use client";

import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-20 relative overflow-hidden border-t border-[#D070E5]/10"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#D070E5]/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img src="/logosvg.svg" alt="Logo Lumina" className="w-64" />
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Votre agence web créative et visionnaire, à la frontière entre
              innovation technologique et proximité humaine. Transformons
              ensemble vos idées en expériences digitales inoubliables.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/[0.05] border border-[#D070E5]/20 hover:border-[#D070E5]/60 flex items-center justify-center group overflow-hidden transition-all duration-300"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -4 }}
                  style={{
                    boxShadow: "0 0 20px rgba(208, 112, 229, 0)",
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#E3BDFF] transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D070E5]/20 to-[#E3BDFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="mb-6 text-white"
              style={{ fontSize: "1.125rem", fontWeight: "300" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Accueil", "Nos services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-gray-400 hover:text-[#E3BDFF] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#D070E5] group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="mb-6 text-white"
              style={{ fontSize: "1.125rem", fontWeight: "300" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/[0.05] border border-[#D070E5]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D070E5]/60 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#D070E5]" />
                </div>
                <div>
                  <a
                    href="mailto"
                    className="text-gray-400 hover:text-[#E3BDFF] transition-colors duration-300 block"
                  >
                    contact@lumina.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/[0.05] border border-[#D070E5]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D070E5]/60 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#D070E5]" />
                </div>
                <div>
                  <a
                    href="tel"
                    className="text-gray-400 hover:text-[#E3BDFF] transition-colors duration-300 block"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-[#D070E5]/10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Lumina. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-[#E3BDFF] transition-colors duration-300"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#E3BDFF] transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#E3BDFF] transition-colors duration-300"
            >
              CGV
            </a>
          </div>
        </motion.div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D070E5]/30 to-transparent" />
      </div>
    </footer>
  );
}
