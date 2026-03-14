import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/constants";

export const FeedbackPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Student Voices</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Hear from our students about their experiences and the impact
          of the Class of Grit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-white rounded-[2rem] border border-white/60 p-10 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-[0_10px_30px_rgba(30,111,217,0.06)] hover:shadow-[0_20px_40px_rgba(30,199,182,0.12)] transition-shadow"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-3xl object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="flex-grow text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "fill-brand-teal text-brand-teal"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <h4 className="text-lg font-bold text-slate-900">
                {t.name}
              </h4>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                Verified Student
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
