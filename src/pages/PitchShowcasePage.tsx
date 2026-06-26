import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Rocket,
  ChevronRight,
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Cpu,
  Wallet,
  BookOpen,
  Brain,
  BarChart3,
  HeartPulse,
  Shield,
  Settings,
  Building2,
  Globe2,
  Palette,
} from "lucide-react";

const WHO_CAN_PITCH = [
  { icon: GraduationCap, text: "Students with technology ideas" },
  { icon: Rocket, text: "Founders with early-stage startups" },
  { icon: Layers, text: "Builders with SaaS products" },
  { icon: Code2, text: "Developers with working prototypes" },
  { icon: Users, text: "Teams solving real problems" },
  { icon: Briefcase, text: "Class members with scalable business ideas" },
  {
    icon: TrendingUp,
    text: "Innovators looking for feedback, visibility, or support",
  },
];

const LOOKING_FOR = [
  { icon: Target, text: "Clear problem" },
  { icon: Lightbulb, text: "Practical solution" },
  { icon: Cpu, text: "Technology relevance" },
  { icon: TrendingUp, text: "Market opportunity" },
  { icon: Rocket, text: "Execution potential" },
  { icon: Users, text: "Team capability" },
  { icon: HeartPulse, text: "Impact" },
  { icon: BarChart3, text: "Presentation quality" },
];

const FOCUS_AREAS = [
  { icon: Layers, text: "Software and SaaS" },
  { icon: Wallet, text: "Fintech" },
  { icon: BookOpen, text: "Education technology" },
  { icon: Brain, text: "Artificial intelligence" },
  { icon: BarChart3, text: "Data and analytics" },
  { icon: HeartPulse, text: "Health technology" },
  { icon: Shield, text: "Cybersecurity" },
  { icon: Settings, text: "Business automation" },
  { icon: Building2, text: "Enterprise solutions" },
  { icon: Globe2, text: "Social impact technology" },
  { icon: Palette, text: "Creative technology" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export const PitchShowcasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/10"
          >
            MIT Connect &rsquo;26 Pitch Showcase
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-950"
          >
            Ideas deserve a room.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              Builders deserve visibility.
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium space-y-4"
          >
            <p>
              The MIT Connect &rsquo;26 Pitch Showcase is designed to
              spotlight promising ideas, products, startups, SaaS solutions,
              and technology-driven projects from members of the MIT
              community.
            </p>
            <p className="font-bold text-slate-900">
              This is where innovation meets opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() => navigate("/contact")}
              className="btn-primary w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2"
            >
              Apply to Pitch <ChevronRight size={18} />
            </button>
            <button
              onClick={() => navigate("/sponsors")}
              className="btn-secondary w-full sm:w-auto whitespace-nowrap"
            >
              Partner With the Pitch Showcase
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Pitch */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center max-w-3xl mx-auto mb-16"
          >
            Who Can Pitch?
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHO_CAN_PITCH.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue/10 transition-transform duration-300">
                  <item.icon size={22} />
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base leading-snug">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Are Looking For */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center max-w-3xl mx-auto mb-16"
          >
            What We Are Looking For
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
          >
            {LOOKING_FOR.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group glass-card p-6 sm:p-8 text-center border-transparent hover:border-brand-teal/30 hover:bg-white/90 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-5 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white shadow-inner group-hover:scale-110 group-hover:rotate-6">
                  <item.icon size={24} />
                </div>
                <span className="text-slate-700 font-bold text-xs sm:text-sm leading-snug">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pitch Focus Areas */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-16"
          >
            Pitch Focus Areas
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {FOCUS_AREAS.map((item, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm sm:text-base hover:border-brand-teal/40 hover:text-brand-teal hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
              >
                <item.icon size={16} className="text-brand-teal" />
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto glass-card p-10 sm:p-16 text-center bg-gradient-to-br from-brand-blue to-brand-teal text-white border-white/20 shadow-[0_30px_60px_rgba(30,111,217,0.3)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight !leading-snug relative z-10">
            Ready to Show the Room What You&rsquo;re Building?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 font-medium text-base sm:text-lg leading-relaxed relative z-10">
            Whether you have an idea, a prototype, or a growing product —
            the Pitch Showcase is your platform to be seen by industry,
            alumni, and the technology ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-brand-blue font-black py-4 px-8 rounded-full hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2"
            >
              Apply to Pitch <Check size={18} />
            </button>
            <button
              onClick={() => navigate("/sponsors")}
              className="border-2 border-white/60 text-white font-black py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
            >
              Partner With the Pitch Showcase
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
