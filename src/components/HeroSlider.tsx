import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Play } from "lucide-react";
import { HERO_SLIDES } from "../data/constants";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-15T19:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const HeroSlider = ({ onVoteClick }: { onVoteClick: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-teal/80 mix-blend-multiply z-10" />
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter drop-shadow-lg">
            Class of Grit Awards Night <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100 drop-shadow-sm">
              Celebrating Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 font-medium max-w-2xl mx-auto">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="mb-16">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onVoteClick}
              className="btn-primary flex items-center gap-2 px-10 py-4 text-lg drop-shadow-md"
            >
              Vote Now <ChevronRight size={20} />
            </button>
            <button className="px-10 py-4 text-lg font-black text-white hover:text-teal-200 drop-shadow-md transition-colors flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </div> 
              View Highlights
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-12 h-1 rounded-full transition-all ${currentSlide === i ? "bg-brand-teal w-16" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};
