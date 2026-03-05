'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ProjetModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-md border-0 bg-transparent p-0 overflow-visible sm:max-w-lg shadow-none [&>button]:hidden"
        style={{ perspective: 1200 }}
      >
        {/* Contenu de la modale - effet page de livre (gauche vers droite) */}
        <motion.div
          className="relative rounded-2xl border border-[#D070E5]/30 bg-[#0E0E0E]/98 backdrop-blur-xl overflow-hidden"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 0 1px rgba(208, 112, 229, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 80px -20px rgba(208, 112, 229, 0.3)',
          }}
          initial={{ opacity: 0.3, rotateY: -95 }}
          animate={open ? { 
            opacity: 1, 
            rotateY: 0,
            transition: { 
              rotateY: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.4 }
            }
          } : { opacity: 0.3, rotateY: -95, transition: { duration: 0.25 } }}
        >
          {/* Glow décoratif */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D070E5]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#F42CFF]/15 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Bouton fermer */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D070E5]/10 border border-transparent hover:border-[#D070E5]/30 transition-all duration-200"
            aria-label="Fermer"
          >
            <span className="text-xl leading-none">×</span>
          </button>

          <div className="relative p-6 sm:p-8">
            <DialogHeader className="space-y-3 pb-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                className="space-y-1"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D070E5]/20 to-[#F42CFF]/20 flex items-center justify-center border border-[#D070E5]/30">
                    <Sparkles className="w-5 h-5 text-[#F42CFF]" />
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl font-semibold text-white">
                    Discutons de votre projet
                  </DialogTitle>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <DialogDescription className="text-gray-400 text-sm sm:text-base leading-relaxed pt-1">
                    Remplissez ce formulaire et nous vous recontacterons sous 24h pour échanger sur votre vision et vos objectifs.
                  </DialogDescription>
                </motion.div>
              </motion.div>
            </DialogHeader>

            <form 
              className="flex flex-col gap-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                className="space-y-5"
              >
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="nom" className="text-gray-300 text-sm font-medium">
                    Nom complet
                  </Label>
                  <Input
                    id="nom"
                    placeholder="Votre nom"
                    className="h-11 bg-white/[0.03] border-[#D070E5]/20 focus:border-[#D070E5] focus:ring-2 focus:ring-[#D070E5]/20 text-white placeholder:text-gray-500 rounded-xl transition-all duration-200"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@exemple.com"
                    className="h-11 bg-white/[0.03] border-[#D070E5]/20 focus:border-[#D070E5] focus:ring-2 focus:ring-[#D070E5]/20 text-white placeholder:text-gray-500 rounded-xl transition-all duration-200"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="entreprise" className="text-gray-300 text-sm font-medium">
                    Entreprise / Projet
                  </Label>
                  <Input
                    id="entreprise"
                    placeholder="Nom de votre entreprise ou projet"
                    className="h-11 bg-white/[0.03] border-[#D070E5]/20 focus:border-[#D070E5] focus:ring-2 focus:ring-[#D070E5]/20 text-white placeholder:text-gray-500 rounded-xl transition-all duration-200"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
                    Décrivez votre projet
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Parlez-nous de votre projet, vos objectifs et vos délais..."
                    className="flex w-full rounded-xl border border-[#D070E5]/20 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#D070E5] focus:outline-none focus:ring-2 focus:ring-[#D070E5]/20 transition-all duration-200 resize-none"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={open ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white rounded-xl font-medium shadow-[0_0_30px_rgba(208,112,229,0.3)] hover:shadow-[0_0_40px_rgba(208,112,229,0.4)] transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenChange(false);
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma demande
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
