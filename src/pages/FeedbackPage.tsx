import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/constants";

export const FeedbackPage = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
            Testimonials
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-5xl md:text-6xl"
        >
          Student Voices
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mt-6 font-medium"
        >
          Hear from our students about their experiences and the impact
          of the Class of Grit.
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      >
        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="glass-card p-10 lg:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start transition-shadow hover:border-brand-blue/30 cursor-pointer group"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-brand-teal rounded-3xl translate-x-2 translate-y-2 opacity-20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl object-cover relative z-10 border-4 border-white shadow-md group-hover:shadow-xl transition-shadow duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "fill-[#FFB800] text-[#FFB800] drop-shadow-sm group-hover:scale-110 transition-transform delay-75"
                        : "text-slate-200 fill-slate-100"
                    }
                    style={{ transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed text-lg font-medium relative z-10">
                <span className="text-4xl text-brand-blue/20 absolute -top-4 -left-3 font-serif opacity-50">"</span>
                {t.quote}
                <span className="text-4xl text-brand-blue/20 absolute -bottom-6 -right-2 font-serif opacity-50">"</span>
              </p>
              <div>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                  {t.name}
                </h4>
                <p className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em] mt-1">
                  Verified Student
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
