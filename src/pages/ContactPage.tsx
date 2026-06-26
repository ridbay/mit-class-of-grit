import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MessageSquare,
  Users,
  ShieldCheck,
  Crown,
  ClipboardList,
} from "lucide-react";

const CONTACT_TOPICS = [
  {
    icon: MessageSquare,
    title: "General Enquiries",
    desc: "For questions about the event, attendance, program, or participation.",
    email: "classofgrit@gmail.com",
  },
  {
    icon: Users,
    title: "Partnerships",
    desc: "For sponsorship, partnership, brand collaboration, product support, media partnership, or customized support.",
    email: "classofgrit@gmail.com",
  },
  {
    icon: ShieldCheck,
    title: "Nominations and Voting",
    desc: "For questions about award categories, nomination eligibility, voting access, or award process.",
    email: "classofgrit@gmail.com",
  },
];

const LEAD_CONTACTS = [
  {
    name: "Barry Ifeanyi Ekwebelem",
    role: "Class Governor / Lead Convener",
    phone: "08164845671",
    email: "ekwebelembarry@gmail.com",
    icon: Crown,
  },
  {
    name: "Abioye Tomiwa",
    role: "Committee Chairman",
    phone: "08162311689",
    email: "tabioye97@gmail.com",
    icon: Users,
  },
  {
    name: "Ikeri Priscilla Oluchukwu",
    role: "Committee Secretary",
    phone: "09074549591",
    email: "ikeripriscilla94@gmail.com",
    icon: ClipboardList,
  },
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

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/20"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-900"
          >
            Contact the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
              MIT Connect &rsquo;26
            </span>{" "}
            Planning Committee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Have a question about MIT Connect &rsquo;26, partnerships,
            nominations, voting, media, attendance, or general participation?
            Reach out to the planning committee and the appropriate team
            will respond.
          </motion.p>
        </div>
      </section>

      {/* Contact Topics */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {CONTACT_TOPICS.map((topic, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 sm:p-10 bg-slate-50/50 border-slate-100 hover:border-brand-blue/20 transition-colors group h-full flex flex-col"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300"
              >
                <topic.icon size={24} />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 text-slate-900 tracking-tight">
                {topic.title}
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed mb-6 flex-grow">
                {topic.desc}
              </p>
              <a
                href={`mailto:${topic.email}`}
                className="inline-flex items-center gap-2 text-brand-blue font-black text-sm sm:text-base hover:text-brand-teal transition-colors"
              >
                <Mail size={16} /> {topic.email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lead Contacts */}
      <section className="mt-32 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center max-w-2xl mx-auto mb-16"
        >
          Lead Contact
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {LEAD_CONTACTS.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 sm:p-10 bg-slate-50/50 border-slate-100 hover:border-brand-teal/20 transition-colors group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300"
              >
                <member.icon size={24} />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-black mb-2 text-slate-900 tracking-tight">
                {member.name}
              </h3>
              <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-6">
                {member.role}
              </p>
              <a
                href={`tel:+234${member.phone.slice(1)}`}
                className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-brand-blue transition-colors block mb-3"
              >
                {member.phone}
              </a>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-brand-teal transition-colors break-all"
              >
                <Mail size={14} className="flex-shrink-0" /> {member.email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
