import React from "react";
import { motion } from "motion/react";
import { Trophy } from "lucide-react";

export const VotePage = ({
  matricNumber,
  studentName,
  password,
  handleIdentify,
  matricError,
  setMatricError,
  onLogout,
}: {
  matricNumber: string;
  studentName?: string;
  password: string;
  handleIdentify: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError: string;
  setMatricError: (err: string) => void;
  onLogout: () => void;
}) => {
  return (
    <section className="py-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 lg:p-20 max-w-4xl border-brand-teal/20 shadow-2xl shadow-brand-teal/10 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Trophy className="text-brand-blue animate-pulse" size={48} />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-display leading-tight">
            Voting will be <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
              Live Very Soon!
            </span>
          </h2>

          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            The voting period for the Class of GRIT Awards has not yet commenced. We're finalizing the nominee list. Stay tuned!
          </p>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
              Get Ready
            </span>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 rounded-full bg-brand-teal"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

