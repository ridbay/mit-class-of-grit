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
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Award Categories</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Discover the prestigious awards we present to our outstanding
          students and projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((category) => (
          <div
            key={category}
            className="bg-white p-10 rounded-[2.5rem] border border-brand-teal/20 text-center group hover:shadow-[0_20px_40px_rgba(30,199,182,0.15)] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-[2rem] flex items-center justify-center text-brand-teal mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-inner">
              <Trophy size={44} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              {category}
            </h3>
            <p className="text-slate-500 mb-6">
              Recognizing excellence and dedication in the field of{" "}
              {category.toLowerCase()}.
            </p>
            <button
              onClick={() => navigate("/vote")}
              className="text-brand-teal font-black uppercase tracking-widest text-xs flex items-center gap-2 mx-auto group-hover:gap-4 transition-all"
            >
              View Nominees <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
