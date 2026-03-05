'use client'

import { motion } from "framer-motion";
import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Échange",
    description: "Nous écoutons vos besoins et définissons ensemble les objectifs de votre projet.",
    step: "01",
  },
  {
    icon: PenTool,
    title: "Conception",
    description: "Création de maquettes et validation de la direction créative avant le développement.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Développement",
    description: "Construction de votre solution avec les technologies les plus adaptées.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Livraison",
    description: "Mise en ligne, formation et accompagnement pour une mise en œuvre réussie.",
    step: "04",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D070E5] tracking-widest uppercase text-sm">
            Notre méthodologie
          </span>
          <h2
            className="mt-4 mb-6 text-white text-2xl sm:text-3xl md:text-[2.5rem]"
            style={{ fontWeight: "200", fontFamily: "Obviously" }}
          >
            Comment nous travaillons
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Une approche structurée et collaborative pour transformer vos idées en réalité digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                className="relative group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.12, type: "spring", stiffness: 60, damping: 15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="relative h-full p-6 sm:p-8 rounded-2xl border border-[#D070E5]/10 bg-white/[0.02] hover:border-[#D070E5]/25 transition-all duration-300"
                  whileHover={{ boxShadow: "0 20px 40px -15px rgba(208, 112, 229, 0.15)" }}
                >
                  <motion.span
                    className="absolute top-6 right-6 text-4xl font-light text-[#D070E5]/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.12 + 0.2 }}
                  >
                    {step.step}
                  </motion.span>
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-[#D070E5]/10 flex items-center justify-center mb-6 border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ rotate: { duration: 0.6 }, scale: { duration: 0.2 } }}
                  >
                    <Icon className="w-7 h-7 text-[#D070E5]" />
                  </motion.div>
                  <motion.h3
                    className="text-white text-xl font-light mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.12 + 0.15 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.12 + 0.25 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] overflow-hidden bg-white/5 rounded">
                    <motion.div
                      className="h-full w-full bg-gradient-to-r from-[#D070E5]/40 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.12 + 0.5, duration: 0.5 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
