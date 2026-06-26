import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, ChevronRight, CheckCircle2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CATEGORY_GROUPS } from "../data/constants";

const PHILOSOPHY_LINES = [
  "Some people lead.",
  "Some people build.",
  "Some people support.",
  "Some people teach.",
  "Some people inspire.",
  "Some people hold the class together quietly.",
  "Some people show up when it is difficult.",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export const CategoriesPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen"
    >
      {/* Hero / Intro */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/10"
          >
            The Honors
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-950"
          >
            MIT Connect &rsquo;26{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              Awards
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium space-y-4"
          >
            <p>
              The awards segment of MIT Connect &rsquo;26 celebrates the
              people who have shown excellence, resilience, service,
              leadership, support, innovation, and true Grit throughout the
              MIT journey.
            </p>
            <p>
              These awards are designed to recognize not only academic
              brilliance, but also contribution, consistency, class spirit,
              leadership, impact, and the people who made the journey better
              for others.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary w-full sm:w-auto whitespace-nowrap"
            >
              View Categories
            </button>
            <button
              onClick={() => navigate("/nominate")}
              className="btn-secondary w-full sm:w-auto whitespace-nowrap"
            >
              Nominate Someone
            </button>
            <button
              onClick={() => navigate("/vote")}
              className="px-10 py-4 font-black text-slate-700 border-2 border-slate-200 rounded-full hover:bg-slate-50 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              Vote When Voting Opens
            </button>
          </motion.div>
        </div>
      </section>

      {/* Award Philosophy */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Award Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 font-black text-lg sm:text-xl mb-10"
          >
            We believe excellence is not one-dimensional.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-3 mb-10"
          >
            {PHILOSOPHY_LINES.map((line, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-slate-600 font-semibold text-base sm:text-lg hover:text-brand-teal hover:translate-x-1 transition-all duration-300"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed"
          >
            The MIT Connect &rsquo;26 Awards will recognize the many ways
            people contribute to the strength of the Class of Grit.
          </motion.p>
        </div>
      </section>

      <div id="categories" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl sm:text-5xl md:text-6xl"
          >
            Award Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium mt-6"
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
