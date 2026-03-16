import React from "react";
import { motion } from "motion/react";
import { SPONSORS, SPONSORSHIP_TIERS } from "../data/constants";
import { SponsorshipTierCard } from "../components/SponsorshipTierCard";

export const SponsorsPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block py-2 px-4 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-teal/20">
          Our Partners
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title text-5xl md:text-6xl"
      >
        Event Sponsors
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6"
      >
        We are incredibly grateful to the organizations that make the Class of Grit Awards Night possible. Their commitment to fostering new tech talent is deeply appreciated.
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
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-32"
    >
      {SPONSORS.map((s, i) => {
        // Generate initials for the circle (e.g., "Tech Corp" -> "TC")
        const initials = s.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
        
        return (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
            }}
            className="bg-[#242938] border border-slate-700/50 rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-2 hover:border-brand-teal/40 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(30,199,182,0.1)]"
          >
            <div className="w-20 h-20 rounded-full border-2 border-brand-teal/50 flex items-center justify-center mb-5 group-hover:border-brand-teal group-hover:bg-brand-teal/10 transition-colors duration-300">
              <span className="text-xl font-medium text-[#1EC7B6] tracking-wide">{initials}</span>
            </div>
            <h4 className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide">{s.name}</h4>
          </motion.div>
        );
      })}
    </motion.div>

    {/* Sponsorship Tiers Section */}
    <div className="mb-32">
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-white mb-6"
        >
          Sponsorship Tiers
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg"
        >
          Partner with us to support the next generation of IT leaders and gain visibility among top talent.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="space-y-8"
      >
        {/* Top Tiers (Headline, Platinum, Gold) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...SPONSORSHIP_TIERS].reverse().slice(0, 3).map((tier, idx) => (
            <SponsorshipTierCard key={idx} {...tier} />
          ))}
        </div>
        
        {/* Bottom Tiers (Silver, Bronze) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[...SPONSORSHIP_TIERS].reverse().slice(3).map((tier, idx) => (
            <SponsorshipTierCard key={idx} {...tier} />
          ))}
        </div>
      </motion.div>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="glass-card p-16 text-center bg-gradient-to-br from-brand-blue to-brand-teal text-white border-white/20 shadow-[0_30px_60px_rgba(30,111,217,0.3)] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
      
      <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight relative z-10">Become a Partner Today</h3>
      <p className="max-w-2xl mx-auto mb-10 text-white/90 font-medium text-lg leading-relaxed relative z-10">
        Ready to make an impact? Download our sponsorship brochure or contact us directly to discuss how we can partner for the Class of Grit Awards Night.
      </p>
      <button className="bg-white text-brand-blue font-black py-5 px-12 rounded-full hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-lg relative z-10">
        Contact Partnership Team
      </button>
    </motion.div>
  </section>
);

