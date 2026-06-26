import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Mail, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  SPONSORS,
  SPONSORSHIP_TIERS,
  SPECIAL_PARTNERSHIPS,
  COMPARISON_TABLE,
} from "../data/constants";
import { SponsorshipTierCard } from "../components/SponsorshipTierCard";
import { SponsorsSection } from "../components/SponsorsSection";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export const SponsorsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/10"
          >
            Partner With MIT Connect &rsquo;26
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-950"
          >
            Partner With the Next Generation of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              Technology Leaders
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium space-y-4"
          >
            <p>
              MIT Connect &rsquo;26: Creating What&rsquo;s Next? offers brands
              and organizations a premium platform to connect with
              postgraduate IT professionals, alumni, innovators,
              entrepreneurs, lecturers, university representatives, corporate
              guests, and future technology leaders.
            </p>
            <p className="font-bold text-slate-900">
              This is more than sponsorship. It is visibility, access,
              goodwill, brand positioning, and long-term relationship-building.
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
                  .getElementById("packages")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary w-full sm:w-auto whitespace-nowrap"
            >
              View Partnership Packages
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="btn-secondary w-full sm:w-auto whitespace-nowrap"
            >
              Request Proposal
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-4 font-black text-slate-700 border-2 border-slate-200 rounded-full hover:bg-slate-50 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              Contact Partnership Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
      {SPONSORS.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
              Already Standing With Us
            </h4>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-10 sm:gap-16"
            >
             			<SponsorsSection />
						 
            </motion.div>
          </div>
        </section>
      )}

      {/* Partnership Packages */}
      <section id="packages" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title max-w-3xl mx-auto"
          >
            Choose a Partnership Package That Matches Your Brand Goals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
          >
            We have designed flexible partnership packages for organizations
            that want to support MIT Connect &rsquo;26 while gaining
            meaningful visibility before, during, and after the event. Each
            package gives your brand access to a focused audience of
            postgraduate students, working professionals, founders, builders,
            executives, alumni, lecturers, and technology stakeholders.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...SPONSORSHIP_TIERS]
              .reverse()
              .slice(0, 3)
              .map((tier, idx) => (
                <SponsorshipTierCard key={idx} {...tier} />
              ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[...SPONSORSHIP_TIERS]
              .reverse()
              .slice(3)
              .map((tier, idx) => (
                <SponsorshipTierCard key={idx} {...tier} />
              ))}
          </div>
        </motion.div>
      </section>

      {/* Special Partnership Categories */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center max-w-3xl mx-auto mb-16"
        >
          Special Partnership Categories
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SPECIAL_PARTNERSHIPS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-brand-teal/30 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium mb-6">
                {item.desc}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {item.benefits.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed"
                  >
                    <Check
                      size={16}
                      className="text-brand-teal flex-shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 font-black text-brand-blue group-hover:gap-3 transition-all text-sm sm:text-base"
              >
                {item.cta} <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Comparison Table */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center max-w-3xl mx-auto mb-16"
        >
          Benefits Comparison
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm"
        >
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide sticky left-0 bg-slate-50">
                  Benefit
                </th>
                {COMPARISON_TABLE.columns.map((col, i) => (
                  <th
                    key={i}
                    className="p-4 sm:p-5 text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide text-center whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-slate-100 hover:bg-brand-teal/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                >
                  <td className="p-4 sm:p-5 text-sm font-bold text-slate-700 sticky left-0 bg-inherit">
                    {row.label}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className="p-4 sm:p-5 text-sm text-center text-slate-600 font-medium whitespace-nowrap"
                    >
                      {val === "—" ? (
                        <X size={16} className="text-slate-300 mx-auto" />
                      ) : val === "Yes" ? (
                        <Check size={16} className="text-brand-teal mx-auto" />
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-title">Why Partner With MIT Connect &rsquo;26?</h2>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium mb-4">
            MIT Connect &rsquo;26 gives your organization the opportunity to
            be seen by a focused and high-value audience.
          </p>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium mb-4">
            Our audience includes postgraduate IT students, working
            professionals, alumni, lecturers, entrepreneurs, innovators,
            founders, corporate guests, and future technology leaders.
          </p>
          <p className="text-slate-900 leading-relaxed text-base sm:text-lg font-bold">
            By partnering with MIT Connect &rsquo;26, your brand is not just
            supporting an event. You are supporting education, innovation,
            leadership, excellence, and the next wave of technology-driven
            professionals.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto glass-card p-10 sm:p-16 text-center bg-gradient-to-br from-brand-blue to-brand-teal text-white border-white/20 shadow-[0_30px_60px_rgba(30,111,217,0.3)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight !leading-snug relative z-10">
            Let&rsquo;s Create What&rsquo;s Next Together
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 font-medium text-base sm:text-lg leading-relaxed relative z-10">
            MIT Connect &rsquo;26 is open to corporate partnerships, strategic
            collaborations, product support, media support, hospitality
            support, innovation support, and customized brand partnerships.
            Whether your organization wants visibility, engagement, goodwill,
            talent access, or direct alignment with innovation and education,
            there is a place for you at MIT Connect &rsquo;26.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-brand-blue font-black py-4 px-8 rounded-full hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
            >
              Request Partnership Proposal
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 hidden border-white/60 text-white font-black py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
            >
              Discuss Custom Partnership
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white/60 text-white font-black py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
            >
              Contact the Planning Committee
            </button>
          </div>

          <a
            href="mailto:classofgrit@gmail.com"
            className="inline-flex items-center gap-2 text-white/90 font-bold text-sm sm:text-base relative z-10 hover:text-white transition-colors"
          >
            <Mail size={18} /> classofgrit@gmail.com
          </a>
        </div>
      </motion.section>
    </div>
  );
};
