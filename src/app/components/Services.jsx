"use client";

import { Code, Palette, Rocket, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives qui séduisent et convertissent.",
  },
  {
    icon: Code,
    title: "Développement",
    description:
      "Sites web sur mesure, performants et optimisés pour tous les devices.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Visibilité optimale et analyse en temps réel de vos performances.",
  },
  {
    icon: Rocket,
    title: "Accompagnement",
    description:
      "Support continu et évolution de votre plateforme selon vos besoins.",
  },
];

export function Services() {
  return (
    <section
      id="nos-services"
      className="py-32 bg-[#0E0E0E] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D070E5]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#E3BDFF]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D070E5] tracking-widest uppercase text-sm">
              Expertise complète
            </span>
          </motion.div>

          <h2
            className="mb-6 tracking-tight text-white"
            style={{ fontSize: "3.5rem", fontWeight: "200" }}
          >
            Nos services
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            Des solutions digitales complètes pour donner vie à vos ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#D070E5] to-[#E3BDFF] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                {/* Card */}
                <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#D070E5]/10 group-hover:border-[#D070E5]/40 rounded-2xl p-8 overflow-hidden transition-all duration-300">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D070E5]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon container */}
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20 group-hover:border-[#D070E5]/40 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        boxShadow: "0 0 20px rgba(208, 112, 229, 0)",
                      }}
                    >
                      <Icon className="w-8 h-8 text-[#E3BDFF]" />
                    </motion.div>

                    <h3
                      className="mb-3 text-white"
                      style={{ fontSize: "1.25rem", fontWeight: "300" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom line decoration */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connection dots */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#D070E5]/30"
              animate={{
                scale: [1.5, 1],
                opacity: [0.8, 0.3],
              }}
              transition={{
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
