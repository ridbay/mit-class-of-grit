import React, { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { NOMINEES } from "../data/constants";
import { Nominee } from "../types";

export const StudentSpotlight = () => {
  const [spotlight, setSpotlight] = useState<Nominee | null>(null);

  useEffect(() => {
    const random = NOMINEES[Math.floor(Math.random() * NOMINEES.length)];
    setSpotlight(random);
  }, []);

  if (!spotlight) return null;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-card overflow-hidden flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative">
          <img
            src={spotlight.image}
            alt={spotlight.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8 bg-brand-teal text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
            Nominee Spotlight
          </div>
        </div>
        <div className="lg:w-1/2 p-12 lg:p-20">
          <span className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-4 block">
            Featured Student
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            Meet {spotlight.name}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed italic">
            "Innovation isn't just about the code; it's about the grit we show
            when the code fails. I'm honored to be nominated for{" "}
            {spotlight.category}."
          </p>
          <div className="flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 dark:text-white">
                {spotlight.category} Nominee
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Class of 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
