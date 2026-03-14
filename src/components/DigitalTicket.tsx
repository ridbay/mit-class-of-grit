import React from "react";
import { motion } from "motion/react";
import { QrCode, ExternalLink } from "lucide-react";

export const DigitalTicket = ({ name, matric }: { name: string; matric: string }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="relative max-w-md mx-auto"
  >
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
      <div className="bg-brand-blue p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex justify-between items-start mb-8">
          <img src="/MIT_Logo.png" alt="MIT Logo" className="w-10 h-10 object-contain drop-shadow" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
            Official Ticket
          </span>
        </div>
        <h3 className="text-2xl font-black mb-1">Class of Grit</h3>
        <p className="text-xs font-bold opacity-80 uppercase tracking-widest">
          Awards Night 2026
        </p>
      </div>

      <div className="p-8 space-y-8 relative">
        <div className="flex justify-between gap-4">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Attendee
            </p>
            <p className="font-black text-slate-900 dark:text-white">{name}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Matric No.
            </p>
            <p className="font-black text-slate-900 dark:text-white">
              {matric}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Date
            </p>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              May 15, 2026
            </p>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Time
            </p>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              19:00 PM
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
            <QrCode size={80} className="text-slate-900 dark:text-white" />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Scan at Entrance
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 text-center">
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
          Non-Transferable • Valid for 1 Entry
        </p>
      </div>
    </div>

    <button className="mt-8 w-full btn-primary py-4 flex items-center justify-center gap-2">
      Download PDF <ExternalLink size={18} />
    </button>
  </motion.div>
);
