'use client'

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quote = "Le digital n'est pas qu'une question de technologie, c'est avant tout une histoire de lien humain et de compréhension mutuelle.";

export function QuoteSection() {
  return (
    <motion.section
      className="py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#D070E5]/30 mx-auto mb-6 md:mb-8" />
          </motion.div>
          <blockquote
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-6 md:mb-8"
            style={{ fontFamily: "Obviously" }}
          >
            <span className="inline-block">&ldquo;</span>
            {quote.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + i * 0.03, duration: 0.4 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <span className="inline-block">&rdquo;</span>
          </blockquote>
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            L&apos;équipe Lumina
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
