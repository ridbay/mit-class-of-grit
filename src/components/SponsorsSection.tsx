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
      {[...SPONSORS, ...SPONSORS].map((s, i) => {
        const initials = s.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
        return (
          <div
            key={i}
            className="flex items-center gap-4 bg-[#242938] border border-slate-700/50 rounded-2xl p-4 pr-6 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:border-brand-teal/40 group overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full border-2 border-brand-teal/50 flex flex-shrink-0 items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal/10 transition-colors duration-300 overflow-hidden bg-slate-800">
              {s.logo ? (
                <img src={s.logo} alt={s.name} className="w-full h-full object-contain p-1" />
              ) : (
                <span className="text-sm font-medium text-[#1EC7B6] tracking-wide">{initials}</span>
              )}
            </div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap">
              {s.name}
            </span>
          </div>
        );
      })}
    </div>
  </section>
);
