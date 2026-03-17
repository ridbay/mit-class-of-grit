import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Users,
  Mic2,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  const stats = [
    { label: "Expected Attendance", value: "250+", icon: Users },
    { label: "Award Categories", value: "16", icon: Award },
    { label: "Honorees", value: "Students & Lecturers", icon: Star },
  ];

  const details = [
    {
      label: "Date",
      value: "November 2026",
      subValue: "(Exact date to be announced)",
      icon: Calendar,
    },
    {
      label: "Venue",
      value: "To be announced",
      subValue: "University of Lagos vicinity",
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden pb-24">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
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
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.1] tracking-tighter text-slate-950"
          >
            What is the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              Class of Grit
            </span>{" "}
            <br />
            Awards Night?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-semibold"
          >
            The{" "}
            <span className="text-slate-900 font-black">
              Class of Grit Networking, Awards & Dinner Night
            </span>{" "}
            is the flagship event of the MIT Class of 2026, School of
            Postgraduate Studies (SPGS), University of Lagos.
          </motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-slate-200/50 bg-slate-50/50 backdrop-blur-3xl shadow-xl shadow-slate-200/40"
          >
            <p className="text-xl md:text-3xl text-slate-800 leading-relaxed font-light mb-8 italic">
              "It is an evening dedicated to celebrating the resilience,
              excellence, and innovation of an exceptional cohort."
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Bringing together{" "}
              <span className="text-brand-blue font-black text-2xl">
                over 250 guests
              </span>
              , including students, lecturers, educators, industry
              professionals, and guest speakers — this event is a powerful
              convergence of minds, achievements, and possibilities.
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

      {/* Recognition & Speakers */}
      <section className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-brand-blue/30 transition-all cursor-default shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Award className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-3xl font-black mb-6 text-slate-900">
              🏆 Recognition & Awards
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6 font-medium">
              The night will feature{" "}
              <b className="text-brand-blue">16 award categories</b>,
              recognizing outstanding contributions from both{" "}
              <span className="text-brand-teal font-black uppercase tracking-wider">
                students and lecturers
              </span>
              .
            </p>
            <p className="text-slate-500 leading-relaxed">
              Excellence in this class is not limited to one side of the
              classroom. Every effort, every sacrifice, and every breakthrough
              deserves to be celebrated.
            </p>
          </motion.div>

          {/* Speakers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-brand-teal/30 transition-all cursor-default shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Mic2 className="text-brand-teal" size={32} />
            </div>
            <h3 className="text-3xl font-black mb-6 text-slate-900">
              🎤 Guest Speakers
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6 font-medium">
              The event will host a distinguished lineup of{" "}
              <span className="text-brand-blue font-black">
                guest speakers and educators
              </span>
              .
            </p>
            <p className="text-slate-500 leading-relaxed">
              Thought leaders who will inspire, challenge, and pour into the
              next generation of technology professionals in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-black uppercase tracking-[0.4em] text-brand-blue mb-12 text-center"
        >
          📅 Event Details
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Date",
              value: "Nov 2026",
              color: "from-blue-500/5",
              icon: Calendar,
              sub: "TBA",
              text: "text-blue-600",
            },
            {
              label: "Attendance",
              value: "250+",
              color: "from-teal-500/5",
              icon: Users,
              sub: "Guests",
              text: "text-teal-600",
            },
            {
              label: "Awards",
              value: "16",
              color: "from-purple-500/5",
              icon: Award,
              sub: "Categories",
              text: "text-purple-600",
            },
            {
              label: "Honorees",
              value: "Lec & Stu",
              color: "from-emerald-500/5",
              icon: Star,
              sub: "Combined",
              text: "text-emerald-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2.5rem] bg-gradient-to-b ${item.color} to-white border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}
            >
              <item.icon className={`${item.text} opacity-40 mb-6`} size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                {item.label}
              </span>
              <span className={`text-3xl font-black ${item.text}`}>
                {item.value}
              </span>
              <span className="text-[10px] font-black text-slate-400 uppercase mt-2">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statement Footer */}
      <section className="py-32 px-6 relative bg-slate-50/50">
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
