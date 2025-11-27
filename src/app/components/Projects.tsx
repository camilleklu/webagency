import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "E-commerce Mode",
    category: "Développement & Design",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYwMzAwMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Application SaaS",
    category: "Interface Web",
    image: "https://images.unsplash.com/photo-1704213684422-cd2543e560d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjAzNDkzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Portfolio Créatif",
    category: "Design & SEO",
    image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3NjAyOTcwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Projects() {
  return (
    <section id="projets" className="py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D070E5]/10 blur-[150px] rounded-full" />
      
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
            <span className="text-[#D070E5] tracking-widest uppercase text-sm">Portfolio</span>
          </motion.div>
          
          <h2 
            className="mb-6 tracking-tight text-white"
            style={{ fontSize: '3.5rem', fontWeight: '200' }}
          >
            Projets récents
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Quelques réalisations qui incarnent notre vision créative
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              {/* Glowing border effect */}
              <div 
                className="absolute -inset-[1px] bg-gradient-to-br from-[#D070E5] via-[#E3BDFF] to-[#D070E5] rounded-2xl opacity-0 group-hover:opacity-60 blur-sm transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #D070E5, #E3BDFF, #D070E5)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}
              />
              
              {/* Card container */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-[#D070E5]/20 group-hover:border-[#D070E5]/40 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Hover icon */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full backdrop-blur-md bg-white/10 border border-[#E3BDFF]/40 flex items-center justify-center"
                      style={{
                        boxShadow: '0 0 40px rgba(227, 189, 255, 0.6)'
                      }}
                    >
                      <ExternalLink className="w-7 h-7 text-[#E3BDFF]" />
                    </div>
                  </motion.div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D070E5]/0 group-hover:border-[#D070E5]/60 transition-all duration-500 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D070E5]/0 group-hover:border-[#D070E5]/60 transition-all duration-500 rounded-br-2xl" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-white group-hover:text-[#E3BDFF] transition-colors duration-300" style={{ fontSize: '1.25rem', fontWeight: '300' }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D070E5] to-[#E3BDFF] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button 
            className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/[0.05] border border-[#D070E5]/30 text-[#E3BDFF] hover:border-[#D070E5] hover:bg-white/[0.08] transition-all duration-300 group"
            style={{
              boxShadow: '0 0 30px rgba(208, 112, 229, 0.2)'
            }}
          >
            <span className="flex items-center gap-2">
              Voir tous les projets
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
