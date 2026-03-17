import React from "react";
import { motion } from "motion/react";
import { Ticket, Rocket, Star, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-6 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden relative"
        >
          {/* Decorative icons */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-brand-blue/20"
          >
            <Ticket size={200} />
          </motion.div>

          <div className="mb-12 relative flex justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-teal rounded-3xl flex items-center justify-center shadow-lg shadow-brand-blue/20 rotate-12 relative z-10">
                <Rocket size={40} className="text-white" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -left-4 text-brand-teal"
              >
                <Sparkles size={32} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block py-2 px-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-6 border border-brand-blue/20">
              Ticket Portal Prepping
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Secure Your Seat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-400">
                In The Arena
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              We're currently fine-tuning our high-frequency trading systems to ensure 
              the smoothest ticket acquisition experience in the Class of Grit history. 
              The gates to greatness will open shortly! 🗳️💎
            </p>
          </motion.div>

          {/* Fun Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 px-4">
            {[
              { icon: ShieldCheck, label: "Encrypted Transactions", color: "text-emerald-400" },
              { icon: Zap, label: "Lightning FAST", color: "text-yellow-400" },
              { icon: Star, label: "VIP Access", color: "text-brand-blue" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 backdrop-blur-md"
              >
                <feature.icon size={24} className={feature.color} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => navigate("/gallery")}
              className="px-10 py-5 bg-white text-slate-950 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              Check Past Highlights
            </button>
            <button 
              onClick={() => navigate("/")}
              className="text-white font-black text-lg flex items-center gap-2 hover:text-brand-teal transition-colors"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
