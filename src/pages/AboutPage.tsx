import React from "react";
import { motion } from "motion/react";

export const AboutPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
          Our Story
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title text-5xl md:text-6xl"
      >
        Welcome To The Night
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6"
      >
        The Class of Grit Awards Night is an evening dedicated to celebrating the brilliant minds, hard work, and unyielding determination of our IT students.
      </motion.p>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="glass-card p-12 lg:p-16 mb-24 flex flex-col lg:flex-row gap-16 items-center shadow-[0_20px_50px_rgba(30,111,217,0.08)] border-white/80"
    >
      <div className="flex-1 space-y-8">
        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Excellence</span></h3>
        <p className="text-slate-600 leading-relaxed font-medium text-lg">
          Since its inception, the Class of Grit has been a testament to what students can achieve when they combine technical prowess with pure determination. This event brings together students, faculty, alumni, and industry leaders to recognize those who have pushed boundaries in technology and innovation.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium text-lg">
          Through rigorous coursework, groundbreaking projects, and countless sleepless nights, our students have shown what it takes to be true Masters of IT. Tonight, we celebrate their journey.
        </p>
      </div>
      <div className="flex-1 w-full relative group">
         <div className="absolute inset-0 bg-brand-blue rounded-3xl translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
         <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070" className="rounded-3xl shadow-2xl object-cover h-96 w-full relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2" alt="About Event" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      {[
        { value: "500+", label: "Attendees", color: "text-brand-blue" },
        { value: "15", label: "Award Categories", color: "text-brand-teal" },
        { value: "1", label: "Unforgettable Night", color: "text-brand-blue" }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
          }}
          className="glass-card py-12 px-8 flex flex-col items-center justify-center border-transparent hover:border-brand-teal/20 transition-all duration-500 group"
        >
           <h4 className={`text-6xl font-black ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-md`}>{stat.value}</h4>
           <div className="h-1 w-12 bg-slate-200 rounded-full mb-6 group-hover:bg-brand-teal group-hover:w-20 transition-all duration-500"></div>
           <p className="font-bold text-slate-500 uppercase tracking-[0.2em] text-xs">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
