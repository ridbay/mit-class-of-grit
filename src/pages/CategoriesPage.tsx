import React from "react";
import { motion } from "motion/react";
import { Trophy, ChevronRight } from "lucide-react";
import { CATEGORIES } from "../data/constants";
import { useNavigate } from "react-router-dom";

export const CategoriesPage = () => {
  const navigate = useNavigate();
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
          students and projects.
        </motion.p>
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
        {CATEGORIES.map((category) => (
          <motion.div
            key={category}
            onClick={() => navigate("/vote")}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
            }}
            className="glass-card p-10 lg:p-12 text-center group cursor-pointer border-transparent hover:border-brand-teal/30 hover:bg-white/90"
          >
            <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-400 mx-auto mb-8 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white shadow-inner group-hover:shadow-xl group-hover:shadow-brand-teal/30 group-hover:scale-110 group-hover:rotate-12">
              <Trophy size={44} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-blue transition-colors duration-300 tracking-tight">
              {category}
            </h3>
            <p className="text-slate-600 mb-8 font-medium leading-relaxed">
              Recognizing excellence and dedication in the field of{" "}
              <span className="font-bold text-slate-800">{category.toLowerCase()}</span>.
            </p>
            <div
              className="mt-auto text-brand-teal font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 group-hover:text-brand-blue transition-colors duration-300"
            >
              View Nominees <ChevronRight size={16} className="transition-transform duration-500 group-hover:translate-x-3" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
