"use client";

import { motion } from "framer-motion";
import ScrollableText from "./ScrollableText";


export function Projects() {
  return (
    <motion.section 
      id="projets" 
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden overflow-x-clip"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >   
      <ScrollableText text={["Créativité", "Dynamisme", "Proximité"]} separator={["★"]} separatorColor="#D070E5" font="Obviously" left={[30, 45, 60]} />
    </motion.section>
  );
}
