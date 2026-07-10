import React from "react";
import { motion } from "motion/react";
import { Lock } from "lucide-react";

export const NominatePage = ({
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
  password?: string;
  handleIdentify: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError: string;
  setMatricError: (err: string) => void;
  onLogout: () => void;
  hasEmail?: boolean;
  setHasEmail?: (val: boolean) => void;
}) => {
  return (
    <section className="py-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 lg:p-20 max-w-4xl border-red-500/20 shadow-2xl shadow-red-500/10 relative overflow-hidden"
      >
        <div className="w-24 h-24 bg-red-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-red-500 shadow-inner">
          <Lock size={48} />
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-display">
          Nominations Are <span className="text-red-500">Closed</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          The nomination period for the Class of GRIT Awards has officially ended. Thank you to everyone who participated!
        </p>
      </motion.div>
    </section>
  );
};

