'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTABand({ onOpenProjetModal }) {
  return (
    <motion.section
      className="py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="relative rounded-2xl md:rounded-3xl border border-[#D070E5]/20 bg-gradient-to-br from-[#D070E5]/5 to-transparent p-6 sm:p-10 md:p-12 lg:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(208,112,229,0.08)_0%,transparent_70%)]" />
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ opacity: 0.5 }}
          >
            <motion.div
              className="absolute w-1/2 h-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(208,112,229,0.15), transparent)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </motion.div>
          <div className="relative z-10">
            <motion.p
              className="text-[#D070E5] tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
            >
              Prêt à démarrer ?
            </motion.p>
            <motion.h2
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "Obviously", lineHeight: 1.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              Parlons de votre prochain projet digital.
              <motion.span
                className="text-[#D070E5]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                {" "}La première étape est un échange.
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6 md:mb-10 max-w-xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              Rien d&apos;engageant, juste une conversation pour comprendre vos besoins et voir comment nous pouvons vous accompagner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onOpenProjetModal}
                className="bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-full px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg"
              >
                <span className="flex items-center gap-2">
                  Réserver un échange gratuit
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
