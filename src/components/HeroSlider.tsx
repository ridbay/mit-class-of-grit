import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO_SLIDES, EVENT_DETAILS } from "../data/constants";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-11-14T00:00:00").getTime(); 
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
export const HeroSlider = () => {
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
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/70 to-brand-teal/70 mix-blend-multiply z-10" />
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

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-48 pb-24 md:pb-32 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl w-full"
        >
          <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-teal-200 drop-shadow mb-4 sm:mb-6">
            Class of Grit presents
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 md:mb-8 tracking-tighter drop-shadow-lg px-2">
            MIT Connect &rsquo;26: Creating What&rsquo;s Next?
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/90 text-sm sm:text-base font-bold mb-10 md:mb-12 px-4">
            <span className="flex items-center gap-2">
              <Calendar size={18} /> {EVENT_DETAILS.date}
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <Clock size={18} /> {EVENT_DETAILS.time}
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <MapPin size={18} /> {EVENT_DETAILS.venue}
            </span>
          </div>

          <div className="mb-7 md:mb-9">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white/60 mb-2">
              Organized By
            </p>
            <p className="text-sm sm:text-sm text-white/85 font-medium">
              {EVENT_DETAILS.organizedBy.join(" · ")}
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <CountdownTimer />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl mx-auto px-4 sm:px-0">
            <button
              onClick={() => navigate("/sponsors")}
              className="btn-primary flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base drop-shadow-md w-full"
            >
              Become a Partner <ChevronRight size={18} />
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base drop-shadow-md w-full"
            >
              Reserve Your Seat <ChevronRight size={18} />
            </button>
            <button
              onClick={() => navigate("/nominate")}
              className="px-6 py-4 text-sm sm:text-base font-black text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors w-full"
            >
              Nominate a Gritter
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("event-details")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-4 text-sm sm:text-base font-black text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors w-full"
            >
              View Event Details
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
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
