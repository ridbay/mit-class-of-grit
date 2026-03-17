import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const ContactPage = () => {
  const committee = [
    {
      name: "Barry Ekwebelem",
      phone: "+234 816 484 5671",
      role: "Class Governor",
    },
    {
      name: "Priscilla",
      phone: "+234 907 454 9591",
      role: "Organizing Committee",
    },
    // { name: "Technical Support", phone: "070-TECH-SUPPORT", role: "IT & Systems" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-2 px-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/20"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-slate-900"
          >
            Connect With The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
              Organizing Committee
            </span>
          </motion.h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Have questions about the Class of Grit awards, sponsorship, or the
            dinner night? Our team is here to help you.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {committee.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 bg-slate-50/50 border-slate-100 hover:border-brand-blue/20 transition-all group"
          >
            <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-2xl font-black mb-2 text-slate-900">
              {member.name}
            </h3>
            <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-6">
              {member.role}
            </p>
            <a
              href={`tel:${member.phone.replace(/[\s\+]/g, "")}`}
              className="text-3xl font-black text-slate-900 hover:text-brand-blue transition-colors block mb-2"
            >
              {member.phone}
            </a>
            <p className="text-slate-500 text-sm font-medium">
              Available Mon - Fri, 9am - 5pm
            </p>
          </motion.div>
        ))}
      </section>

      <section className="mt-32 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 bg-gradient-to-br from-brand-blue/5 to-transparent border-slate-100 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6 text-slate-900 font-bold">
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">
              Preferred Email?
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              For official correspondence, media inquiries, or documented
              sponsorship proposals, please use our departmental email.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <Mail size={18} className="text-brand-teal" />
                </div>
                awards@classofgrit.com
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-teal" />
                </div>
                MIT Dept, UNILAG, Lagos
              </div>
            </div>
          </div>
          {/* 
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center max-w-[300px] w-full">
            <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare size={32} className="text-brand-blue" />
            </div>
            <h4 className="font-black text-xl mb-4 text-white">Chat with us</h4>
            <p className="text-slate-400 text-sm mb-8 font-medium">
              Join our community group for instant updates.
            </p>
            <button className="w-full py-4 bg-brand-blue text-white rounded-full font-black hover:bg-slate-700 transition-colors">
              Join WhatsApp
            </button>
          </div> */}
        </motion.div>
      </section>
    </div>
  );
};
