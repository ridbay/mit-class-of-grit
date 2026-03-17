import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO_SLIDES } from "../data/constants";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-31T23:59:59").getTime();
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
    <div className="flex gap-2 sm:gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-5xl font-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="mt-2 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const HeroSlider = ({ onVoteClick }: { onVoteClick: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 17000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90svh] min-h-[600px] md:h-[85vh] w-full overflow-hidden">
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
          <motion.img
            src={HERO_SLIDES[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
            initial={{ objectPosition: "0% 50%", scale: 1.1 }}
            animate={{
              objectPosition: "100% 50%",
              scale: 1,
            }}
            transition={{
              duration: 15,
              ease: "linear",
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-16 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4 md:mb-6 tracking-tighter drop-shadow-lg px-2">
            Class of GRIT Networking, Awards & Dinner Night
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100 drop-shadow-sm inline-block mt-2 sm:mt-0">
              THEME: Celebrating Excellence & Innovation
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow mb-8 md:mb-12 font-medium max-w-2xl mx-auto px-4">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="mb-10 md:mb-16">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <button
              onClick={onVoteClick}
              className="btn-primary flex items-center justify-center gap-2 px-8 sm:px-10 py-4 text-base sm:text-lg drop-shadow-md w-full sm:w-auto"
            >
              Vote Now <ChevronRight size={20} />
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="px-8 sm:px-10 py-4 text-base sm:text-lg font-black text-white hover:text-teal-200 drop-shadow-md transition-colors flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <Play size={18} fill="currentColor" />
              </div>
              View Highlights
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-8 sm:w-12 h-1 rounded-full transition-all ${currentSlide === i ? "bg-brand-teal w-12 sm:w-16" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};
