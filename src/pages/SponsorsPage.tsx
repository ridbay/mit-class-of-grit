import React from "react";
import { motion } from "motion/react";
import { SPONSORS, SPONSORSHIP_TIERS } from "../data/constants";
import { SponsorshipTierCard } from "../components/SponsorshipTierCard";

export const SponsorsPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen overflow-hidden">
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
        We are grateful to the organizations and individuals who are already
        standing with us to make the Class of Grit Networking, Awards & Dinner
        Night a reality. Their early commitment to investing in tech talent
        means a great deal to this Class. <br />
        We are still welcoming more sponsors and partners who share our vision
        of celebrating excellence and innovation in Nigeria's tech space.
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
            staggerChildren: 0.1,
          },
        },
      }}
      className="flex flex-wrap justify-center gap-6 mb-32"
    >
      {SPONSORS.map((s, i) => {
        const initials = s.name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              },
            }}
            className="bg-[#242938] border border-slate-700/50 rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-2 hover:border-brand-teal/40 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(30,199,182,0.1)] overflow-hidden w-full max-w-[240px]"
          >
            <div className="w-20 h-20 rounded-full border-2 border-brand-teal/50 flex items-center justify-center mb-5 group-hover:border-brand-teal group-hover:bg-brand-teal/10 transition-colors duration-300 overflow-hidden bg-slate-800">
              {s.logo ? (
                <img src={s.logo} alt={s.name} className="w-full h-full object-contain p-2" />
              ) : (
                <span className="text-xl font-medium text-[#1EC7B6] tracking-wide">{initials}</span>
              )}
            </div>
            <h4 className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide">
              {s.name}
            </h4>
          </motion.div>
        );
      })}
    </motion.div>

    {/* Sponsorship Tiers Section */}
    <div className="mb-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-teal/20">
            Support the class
          </span>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"
        >
          <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
            Sponsorship Tiers
          </span>
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-24 h-2 bg-brand-teal mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(30,199,182,0.5)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg font-medium"
        >
          Partner with us to support the next generation of IT leaders and gain
          visibility among top talent.
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
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-8"
      >
        {/* Top Tiers (Headline, Platinum, Gold) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...SPONSORSHIP_TIERS]
            .reverse()
            .slice(0, 3)
            .map((tier, idx) => (
              <SponsorshipTierCard key={idx} {...tier} />
            ))}
        </div>

        {/* Bottom Tiers (Silver, Bronze) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[...SPONSORSHIP_TIERS]
            .reverse()
            .slice(3)
            .map((tier, idx) => (
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

      <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight relative z-10">
        Become a Partner Today
      </h3>
      <p className="max-w-2xl mx-auto mb-10 text-white/90 font-medium text-lg leading-relaxed relative z-10">
        The Class of Grit Networking, Awards & Dinner Night is more than just an
        event. It's a celebration of resilience, brilliance, and the future of
        Nigeria's technology industry. We are calling on individuals and
        organizations who believe in nurturing talent to partner with us and be
        part of this historic night.
        <br />
        Whether you're a company looking to connect with top-tier IT graduate
        talent, or an individual who wants to celebrate and invest in the next
        generation, there's a sponsorship opportunity for you.
      </p>
      <button className="bg-white text-brand-blue font-black py-5 px-12 rounded-full hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-lg relative z-10">
        Contact Partnership Team
      </button>
    </motion.div>
  </section>
);
