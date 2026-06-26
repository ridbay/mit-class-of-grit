import React from "react";
import { SPONSORS } from "../data/constants";

export const SponsorsSection = () => (
  <section className="py-12 overflow-hidden border-y border-white/20 bg-white/30 backdrop-blur-sm relative z-10">
 
    <div className="flex gap-16 animate-marquee whitespace-nowrap">
      {[...SPONSORS, ...SPONSORS].map((s, i) => {
        const initials = s.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
        return (
          <div
            key={i}
            className="flex items-center gap-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden flex items-center justify-center">
              {s.logo ? (
                <img src={s.logo} alt={s.name} className="w-full h-full object-contain" />
              ) : (
                <span className="text-lg font-bold text-brand-teal tracking-wide">{initials}</span>
              )}
            </div>
          
          </div>
        );
      })}
    </div>
  </section>
);
