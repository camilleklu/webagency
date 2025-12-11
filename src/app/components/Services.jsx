"use client";

import { Code, Palette, Rocket, Search, FolderHeart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives qui séduisent et convertissent.",
    size: "small", // Petite carte
  },
  {
    icon: Code,
    title: "Développement",
    description:
      "Sites web sur mesure, performants et optimisés pour tous les devices.",
    size: "large", // Grande carte
  },
  {
    icon: Search,
    title: "Stratégie digitale & Analytics", //SEO (terme SEO trop ciblé ?)
    description:
      "Visibilité optimale et analyse en temps réel de vos performances.",
    size: "medium", // Carte moyenne
  },
  {
    icon: Rocket,
    title: "Accompagnement",
    description:
      "Support continu et évolution de votre plateforme selon vos besoins.",
    size: "medium", // Carte moyenne
  },
  {
    icon: FolderHeart,
    title: "Amour",
    description: "Nous diffusons l'amour.",
    size: "medium", // Carte moyenne
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
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          {/* Left side - Title */}
          <motion.div
            className="lg:max-w-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4"
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
              style={{
                fontSize: "3rem",
                fontWeight: "200",
                lineHeight: "1.1",
                fontFamily: "Obviously",
                color: "#D070E5",
              }}
            >
              Nos expertises
            </h2>
            <p className="text-gray-400" style={{ fontSize: "1.125rem" }}>
              Des solutions digitales complètes pour donner vie à vos ambitions
            </p>
          </motion.div>

          {/* Right side - Bento Grid */}
          <motion.div
            className="flex-1 max-w-4xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Grid Layout Bento */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[160px]">
              {/* Petite carte - top left */}
              {services
                .filter((s) => s.size === "small")
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      className="group relative col-span-1 row-span-1"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#D070E5] to-[#E3BDFF] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                      {/* Card */}
                      <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#D070E5]/10 group-hover:border-[#D070E5]/40 rounded-2xl p-6 overflow-hidden transition-all duration-300">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20 group-hover:border-[#D070E5]/40 transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6 text-[#E3BDFF]" />
                          </motion.div>

                          <div>
                            <h3 className="text-white text-base font-light">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  );
                })}

              {/* Cartes moyennes - top middle, top right, bottom left */}
              {services
                .filter((s) => s.size === "medium")
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      className="group relative col-span-1 row-span-1"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#D070E5] to-[#E3BDFF] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                      {/* Card */}
                      <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#D070E5]/10 group-hover:border-[#D070E5]/40 rounded-2xl p-6 overflow-hidden transition-all duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D070E5]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <motion.div
                            className="w-14 h-14 rounded-xl bg-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20 group-hover:border-[#D070E5]/40 transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-7 h-7 text-[#E3BDFF]" />
                          </motion.div>

                          <div>
                            <h3 className="text-white text-lg font-light mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  );
                })}

              {/* Grande carte - bottom right (2 colonnes, 2 rangées) */}
              {services
                .filter((s) => s.size === "large")
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      className="group relative col-span-2 row-span-2"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#D070E5] to-[#E3BDFF] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                      {/* Card */}
                      <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#D070E5]/10 group-hover:border-[#D070E5]/40 rounded-2xl p-8 overflow-hidden transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D070E5]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <motion.div
                            className="w-20 h-20 rounded-xl bg-[#D070E5]/10 backdrop-blur-sm flex items-center justify-center border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20 group-hover:border-[#D070E5]/40 transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-10 h-10 text-[#E3BDFF]" />
                          </motion.div>

                          <div>
                            <h3
                              className="text-white mb-4"
                              style={{ fontSize: "1.5rem", fontWeight: "300" }}
                            >
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
