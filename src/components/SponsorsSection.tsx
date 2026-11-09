import React from "react";
import { SPONSORS } from "../data/constants";

export const SponsorsSection = () => (
  <section className="w-full py-12 overflow-hidden border-y border-white/20 bg-white/30 backdrop-blur-sm relative z-10">
    <div className="flex w-max items-center gap-16 pr-16 animate-marquee whitespace-nowrap">
      {[...SPONSORS, ...SPONSORS].map((s, i) => {
        const initials = s.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .substring(0, 2)
          .toUpperCase();
        const content = (
          <div className="h-20 sm:h-24 w-auto max-w-[180px] sm:max-w-[220px] flex-shrink-0 overflow-hidden flex items-center justify-center rounded-xl">
            {s.logo ? (
              <img
                src={s.logo}
                alt={s.name}
                className="h-full w-auto max-w-full object-contain rounded-xl"
              />
            ) : (
              <span className="text-lg font-bold text-brand-teal tracking-wide">
                {initials}
              </span>
            )}
          </div>
        );

        return s.url ? (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
          >
            {content}
          </a>
        ) : (
          <div
            key={i}
            title={s.name}
            className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
          >
            {content}
          </div>
        );
      })}
    </div>
  </section>
);
