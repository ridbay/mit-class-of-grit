import React from "react";
import { motion } from "motion/react";
import { SPONSORS } from "../data/constants";

export const SponsorsPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block py-2 px-4 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-widest mb-4"
      >
        Our Partners
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-title"
      >
        Event Sponsors
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto"
      >
        We are incredibly grateful to the organizations that make the Class of Grit Awards Night possible. Their commitment to fostering new tech talent is deeply appreciated.
      </motion.p>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      {SPONSORS.map((s, i) => (
        <div key={i} className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform cursor-pointer">
          <img src={s.logo} alt={s.name} className="w-24 h-24 object-contain mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
          <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{s.name}</h4>
        </div>
      ))}
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-20 glass-card p-12 text-center bg-gradient-to-br from-brand-blue to-brand-teal text-white border-0"
    >
      <h3 className="text-3xl font-black mb-4 text-white">Become a Sponsor</h3>
      <p className="max-w-xl mx-auto mb-8 text-white/90 font-medium">
        Interested in supporting the next generation of IT leaders? We offer various sponsorship packages giving you excellent visibility among top graduate talent.
      </p>
      <button className="bg-white text-brand-blue font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all hover:scale-105 active:scale-95 shadow-md">
        Download Sponsor Pack
      </button>
    </motion.div>
  </section>
);
