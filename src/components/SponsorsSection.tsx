import React from "react";
import { SPONSORS } from "../data/constants";

export const SponsorsSection = () => (
  <section className="py-20 overflow-hidden border-y border-white/20 bg-white/30 backdrop-blur-sm relative z-10">
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">
        Our Prestigious Partners
      </h4>
    </div>
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[...SPONSORS, ...SPONSORS].map((s, i) => (
        <div
          key={i}
          className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
        >
          <img
            src={s.logo}
            alt={s.name}
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-black text-slate-400 dark:text-slate-600">
            {s.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);
