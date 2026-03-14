import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronRight } from "lucide-react";
import { FAQS } from "../data/constants";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title">Common Questions</h2>
        <p className="text-slate-500">
          Everything you need to know about the Awards Night.
        </p>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
            >
              <span className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-4">
                <HelpCircle className="text-brand-blue" size={20} /> {faq.q}
              </span>
              <div
                className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              >
                <ChevronRight size={20} className="text-slate-400" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
