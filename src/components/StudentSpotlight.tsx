import React from "react";
import { Award } from "lucide-react";
import { motion } from "motion/react";

export const StudentSpotlight = () => {
  const governance = {
    title: "Meet Barry & Hannah",
    role: "Class Governance",
    image: "/Barry_Hannah.jpeg",
    intro:
      "Barry Ekwebelem serves as the MIT Class Governor of the 2024-2026 cohort at the University of Lagos; elected by his peers to lead, represent, and champion the collective excellence of the MIT Class. Alongside him, Hannah Ochim serves as his assistant, ensuring that every vision is translated into action with precision and dedication. Together, they lead with purpose, integrity, and grit; committed to the growth and celebration of every member of this class. The Class of Grit Awards Night is a celebration of this class; every member, every struggle, every breakthrough.",
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass-card overflow-hidden flex flex-col lg:flex-row items-center border-0 shadow-[0_20px_50px_rgba(30,111,217,0.1)]"
      >
        <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative overflow-hidden group bg-slate-900/50">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={governance.image}
            alt={governance.title}
            className="w-full h-full object-contain object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-8 left-8 bg-gradient-to-r from-brand-teal to-[#15A89A] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-brand-teal/30"
          >
            Class Leadership
          </motion.div>
        </div>
        <div className="lg:w-1/2 p-12 lg:p-20 relative bg-white/40">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs font-black text-brand-blue uppercase tracking-[0.3em] mb-4 block"
          >
            Governance Spotlight
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight"
          >
            {governance.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 mb-10 leading-relaxed italic font-medium"
          >
            "{governance.intro}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-5 p-6 bg-white/80 backdrop-blur-md border border-white/80 rounded-3xl shadow-lg shadow-brand-blue/5 hover:-translate-y-1 transition-transform cursor-default"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-inner shadow-white/20">
              <Award size={28} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">
                {governance.role}
              </h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
                Governor & Assistant
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
