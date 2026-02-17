'use client'

import { motion } from "framer-motion";
import { Briefcase, Users, Zap, Award } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: Briefcase, value: "50", label: "Projets réalisés", suffix: "+" },
  { icon: Users, value: "35", label: "Clients satisfaits", suffix: "+" },
  { icon: Zap, value: "24h", label: "Réponse garantie", suffix: "" },
  { icon: Award, value: "100", label: "Engagement qualité", suffix: "%" },
];

export function StatsSection() {
  return (
    <motion.section
      className="py-16 md:py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isNumeric = ["50", "35", "100"].includes(stat.value);
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-[#D070E5]/10 hover:border-[#D070E5]/25 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-[#D070E5]/10 flex items-center justify-center border border-[#D070E5]/20 group-hover:bg-[#D070E5]/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-[#D070E5]" />
                </motion.div>
                <div>
                  <span className="text-3xl md:text-4xl font-light text-white">
                    {isNumeric ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.2} />
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {stat.value}
                      </motion.span>
                    )}
                  </span>
                  <motion.p
                    className="text-gray-400 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
