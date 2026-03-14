import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronRight } from "lucide-react";
import { FAQS } from "../data/constants";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4"
        >
          Insights & Details
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Common Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
        >
          Everything you need to know about the Awards Night.
        </motion.p>
      </div>
      <div className="space-y-6">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              layout
              key={i}
              className={`glass-card overflow-hidden transition-all duration-500 border-2 ${
                isOpen
                  ? "border-brand-blue shadow-[0_20px_40px_rgba(30,111,217,0.15)] bg-white/90"
                  : "border-transparent hover:border-brand-teal/30 hover:shadow-xl hover:bg-white/80"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full p-8 md:p-10 flex items-start gap-6 text-left group relative"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner ${
                    isOpen
                      ? "bg-gradient-to-br from-brand-blue to-blue-600 text-white shadow-xl shadow-brand-blue/40 rotate-12 scale-110"
                      : "bg-slate-50 text-slate-400 group-hover:bg-gradient-to-br group-hover:from-brand-teal/20 group-hover:to-brand-teal/10 group-hover:text-brand-teal group-hover:scale-110"
                  }`}
                >
                  <HelpCircle size={28} />
                </div>
                <div className="flex-grow pt-1">
                  <h3
                    className={`text-xl md:text-2xl font-black transition-colors duration-300 tracking-tight ${
                      isOpen ? "text-brand-blue" : "text-slate-900 group-hover:text-brand-teal"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <p className="pt-6 text-slate-600 font-medium leading-relaxed text-lg">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 mt-1 ${
                    isOpen
                      ? "border-brand-blue bg-brand-blue/10 text-brand-blue rotate-90"
                      : "border-slate-100 text-slate-300 group-hover:border-brand-teal/30 group-hover:text-brand-teal group-hover:bg-brand-teal/5"
                  }`}
                >
                  <ChevronRight size={24} className="transition-transform duration-500" />
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
