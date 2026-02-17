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
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export function ProjetModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-[#D070E5]/20 bg-[#0E0E0E] text-white sm:max-w-lg">
        <DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={open ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
          <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-[#D070E5] to-[#F42CFF] bg-clip-text text-transparent">
            Discutons de votre projet
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais pour échanger sur votre projet web.
          </DialogDescription>
          </motion.div>
        </DialogHeader>

        <form className="flex flex-col gap-4 py-4">
          <motion.div className="space-y-2" custom={0} variants={formVariants} initial="hidden" animate={open ? "visible" : "hidden"}>
            <Label htmlFor="nom" className="text-gray-300">
              Nom complet
            </Label>
            <Input
              id="nom"
              placeholder="Votre nom"
              className="bg-black/40 border-[#D070E5]/30 focus:border-[#D070E5] text-white placeholder:text-gray-500"
            />
          </motion.div>
          <motion.div className="space-y-2" custom={1} variants={formVariants} initial="hidden" animate={open ? "visible" : "hidden"}>
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@exemple.com"
              className="bg-black/40 border-[#D070E5]/30 focus:border-[#D070E5] text-white placeholder:text-gray-500"
            />
          </motion.div>
          <motion.div className="space-y-2" custom={2} variants={formVariants} initial="hidden" animate={open ? "visible" : "hidden"}>
            <Label htmlFor="entreprise" className="text-gray-300">
              Entreprise / Projet
            </Label>
            <Input
              id="entreprise"
              placeholder="Nom de votre entreprise ou projet"
              className="bg-black/40 border-[#D070E5]/30 focus:border-[#D070E5] text-white placeholder:text-gray-500"
            />
          </motion.div>
          <motion.div className="space-y-2" custom={3} variants={formVariants} initial="hidden" animate={open ? "visible" : "hidden"}>
            <Label htmlFor="message" className="text-gray-300">
              Décrivez votre projet
            </Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Parlez-nous de votre projet, vos objectifs et vos délais..."
              className="flex w-full rounded-md border border-[#D070E5]/30 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[#D070E5] focus:outline-none focus:ring-1 focus:ring-[#D070E5]/50 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </motion.div>
        </form>

        <DialogFooter>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#D070E5] to-[#F42CFF] hover:from-[#F42CFF] hover:to-[#D070E5] text-white"
            onClick={(e) => {
              e.preventDefault();
              onOpenChange(false);
              // TODO: Envoyer le formulaire
            }}
          >
            <Send className="w-4 h-4 mr-2" />
            Envoyer ma demande
          </Button>
          </motion.div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
