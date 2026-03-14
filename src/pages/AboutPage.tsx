import React from "react";
import { motion } from "motion/react";

export const AboutPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4"
      >
        Our Story
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-title"
      >
        About the Event
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto"
      >
        The Class of Grit Awards Night is an evening dedicated to celebrating the brilliant minds, hard work, and unyielding determination of our IT students.
      </motion.p>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-12 mb-16 flex flex-col lg:flex-row gap-12 items-center"
    >
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-black text-slate-900">A Journey of Excellence</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Since its inception, the Class of Grit has been a testament to what students can achieve when they combine technical prowess with pure determination. This event brings together students, faculty, alumni, and industry leaders to recognize those who have pushed boundaries in technology and innovation.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium">
          Through rigorous coursework, groundbreaking projects, and countless sleepless nights, our students have shown what it takes to be true Masters of IT. Tonight, we celebrate their journey.
        </p>
      </div>
      <div className="flex-1 w-full">
         <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070" className="rounded-3xl shadow-xl object-cover h-80 w-full" alt="About Event" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      <div className="glass-card p-8 bg-blue-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-blue mb-2">500+</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Attendees</p>
      </div>
      <div className="glass-card p-8 bg-teal-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-teal mb-2">15</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Award Categories</p>
      </div>
      <div className="glass-card p-8 bg-blue-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-blue mb-2">1</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Unforgettable Night</p>
      </div>
    </motion.div>
  </section>
);
