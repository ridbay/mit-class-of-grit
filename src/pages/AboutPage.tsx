import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Star,
  Zap,
  Compass,
  Target,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EVENT_DETAILS } from "../data/constants";

const GOALS = [
  "Celebrate the MIT Class of 2026",
  "Recognize outstanding students, lecturers, and contributors",
  "Create a strong alumni and industry connection",
  "Provide visibility for student-led innovation and startups",
  "Build a platform for sponsors and partners to engage future technology leaders",
  "Strengthen the public identity of the Class of Grit",
  "Leave behind a legacy that future MIT cohorts can build on",
];

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

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden pb-24">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/10"
          >
            The Flagship Event
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.1] tracking-tighter text-slate-950"
          >
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              MIT Connect &rsquo;26
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-semibold"
          >
            <span className="text-slate-900 font-black">
              MIT Connect &rsquo;26: Creating What&rsquo;s Next?
            </span>{" "}
            is the flagship event of the Masters&rsquo;s of Information
            Technology Class of 2026, popularly known as the{" "}
            <span className="text-brand-blue font-black">Class of Grit</span>.
          </motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-slate-200/50 bg-slate-50/50 backdrop-blur-3xl shadow-xl shadow-slate-200/40"
          >
            <p className="text-lg sm:text-xl md:text-3xl text-slate-800 leading-relaxed font-light mb-8 italic">
              "The event is designed as a premium gathering for technology,
              innovation, networking, pitching, dinner, and awards."
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              It brings together students, alumni, lecturers, university
              representatives, entrepreneurs, innovators, corporate guests,
              executives, and key stakeholders within the{" "}
              <span className="text-brand-blue font-black">
                technology ecosystem
              </span>
              . MIT Connect &rsquo;26 is not just a celebration of a class —
              it is a bridge between academia, industry, leadership,
              innovation, and legacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-brand-blue/10 rounded-[3rem] blur-3xl group-hover:bg-brand-blue/20 transition-colors" />
            <motion.img
              src="/matric_pix.jpg"
              alt="MIT Class"
              initial={{ filter: "grayscale(0) contrast(1)" }}
              whileHover={{ filter: "grayscale(0) contrast(1.05)", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-brand-blue/0 group-hover:border-brand-blue/20 z-20 transition-colors pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* About the Class of Grit */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About the Class of Grit</h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg md:text-xl font-bold mb-6">
              The Class of Grit represents resilience, discipline, ambition,
              and the courage to keep moving forward.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
              We are postgraduate students, professionals, founders,
              builders, analysts, developers, managers, entrepreneurs, and
              future technology leaders. We are people who have balanced
              academics, work, business, family, leadership, pressure,
              deadlines, and growth.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              The name &ldquo;Class of Grit&rdquo; reflects who we are: a
              class that does not quit, a class that keeps showing up, and a
              class determined to leave a strong legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-brand-blue/30 hover:-translate-y-2 transition-all duration-300 cursor-default shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-transform duration-300">
              <Compass className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
              To create a meaningful platform that connects postgraduate
              technology talent with opportunity, industry, alumni, academic
              excellence, innovation, and recognition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-brand-teal/30 hover:-translate-y-2 transition-all duration-300 cursor-default shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-teal/10 transition-transform duration-300">
              <Target className="text-brand-teal" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
              To host a premium event that celebrates excellence, strengthens
              professional relationships, showcases innovation, recognizes
              impact, and positions the MIT Class of 2026 as a forward-thinking
              technology community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Want to Achieve */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Rocket className="text-brand-blue mx-auto mb-4" size={28} />
          <h2 className="section-title">What We Want to Achieve</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {GOALS.map((goal, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-teal/30 hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles className="text-brand-teal flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed">
                {goal}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Official Event Information */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-black uppercase tracking-[0.4em] text-brand-blue mb-12 text-center"
        >
          Official Event Information
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Date",
              value: EVENT_DETAILS.date,
              color: "from-blue-500/5",
              icon: Calendar,
              text: "text-blue-600",
            },
            {
              label: "Time",
              value: EVENT_DETAILS.time,
              color: "from-teal-500/5",
              icon: Clock,
              text: "text-teal-600",
            },
            {
              label: "Venue",
              value: EVENT_DETAILS.venue,
              color: "from-purple-500/5",
              icon: MapPin,
              text: "text-purple-600",
            },
            {
              label: "Organized By",
              value: "UNILAG MIT",
              color: "from-emerald-500/5",
              icon: Star,
              text: "text-emerald-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-b ${item.color} to-white border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}
            >
              <item.icon className={`${item.text} opacity-40 mb-6`} size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                {item.label}
              </span>
              <span className={`text-sm sm:text-base font-black ${item.text} leading-snug`}>
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-3">
            Organized By
          </p>
          <p className="text-slate-600 font-bold text-sm sm:text-base">
            {EVENT_DETAILS.organizedBy.join(" · ")}
          </p>
        </motion.div>
      </section>

      {/* Statement Footer */}
      <section className="py-32 px-4 sm:px-6 relative bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <Zap
                  key={i}
                  size={20}
                  className="text-brand-blue animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>

            {/* <p className="text-3xl md:text-5xl lg:text-5xl font-black leading-tight tracking-tight px-4 text-slate-900">
              This is more than an awards night. <br />
              <span className="relative inline-block mt-6 hover:scale-105 transition-transform duration-500 cursor-default group">
                <span className="absolute -inset-4 bg-brand-teal/10 blur-2xl rounded-full opacity-100 group-hover:bg-brand-teal/20 transition-all"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue bg-[length:200%_auto] animate-shimmer italic font-black uppercase tracking-tighter decoration-brand-blue/20 underline underline-offset-[12px] text-5xl md:text-8xl lg:text-9xl block transform -rotate-1">
                  It is a statement
                </span>
              </span>
              <span className="block mt-10 text-slate-600 font-bold">
                That this class showed up, worked hard, and left a mark.
              </span>
            </p> */}

            <h2 className="text-4xl md:text-6xl font-black text-brand-blue uppercase tracking-tighter leading-none">
              Come celebrate with us.
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8"
            >
              <Link to="/gallery">
                <button className="px-12 py-6 bg-brand-blue text-white rounded-full font-black text-xl shadow-2xl shadow-brand-blue/30 hover:bg-brand-blue/90 transition-all flex items-center gap-4">
                  View Highlights <ChevronRight />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
