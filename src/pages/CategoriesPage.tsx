import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, ChevronRight, CheckCircle2, X } from "lucide-react";
import { CATEGORY_GROUPS } from "../data/constants";

export const CategoriesPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-24 px-6 max-w-7xl mx-auto min-h-screen"
    >
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
            The Honors
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-5xl md:text-6xl"
        >
          Award Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6"
        >
          Discover the prestigious awards we present to our outstanding
          lecturers and students.
        </motion.p>
      </div>

      <div className="space-y-32">
        {CATEGORY_GROUPS.map((group) => (
          <div key={group.name}>
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4">{group.name}</h2>
              <p className="text-slate-500 font-medium text-lg">{group.description}</p>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
            >
              {group.categories.map((category) => (
                <motion.div
                  key={category.name}
                  onClick={() => setShowComingSoon(true)}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
                  }}
                  className="glass-card p-10 lg:p-12 text-center group cursor-pointer border-transparent hover:border-brand-teal/30 hover:bg-white/90 flex flex-col h-full"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 mx-auto mb-8 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white shadow-inner group-hover:shadow-xl group-hover:shadow-brand-teal/30 group-hover:scale-110 group-hover:rotate-12">
                    <Trophy size={36} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-blue transition-colors duration-300 tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm flex-grow">
                    {category.description}
                  </p>
                  <div
                    className="mt-auto text-brand-teal font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group-hover:text-brand-blue transition-colors duration-300 pt-4 border-t border-slate-50"
                  >
                    View Nominees <ChevronRight size={14} className="transition-transform duration-500 group-hover:translate-x-3" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg glass-card p-12 text-center border-brand-teal/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowComingSoon(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="w-20 h-20 bg-brand-teal/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-teal animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Nominees Revealed Soon! 🕵️‍♂️</h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                The suspense is building! We're currently tallying the final choices. 
                Stay tuned for the official reveal of this year's top contenders!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="btn-primary w-full py-4 text-lg"
              >
                Can't Wait! 🚀
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
