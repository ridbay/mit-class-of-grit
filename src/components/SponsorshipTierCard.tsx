import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface SponsorshipTierProps {
  level: string;
  icon: string;
  price: string;
  tagline: string;
  color: string;
  benefits: string[];
  popular?: boolean;
  exclusive?: boolean;
}

export const SponsorshipTierCard: React.FC<SponsorshipTierProps> = ({
  level,
  icon,
  price,
  tagline,
  color,
  benefits,
  popular,
  exclusive,
}) => {
  const isPremium = popular || exclusive;
  const highlightColor = exclusive ? "#2DD4BF" : popular ? "#FDE047" : "#94A3B8";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="relative h-full group"
    >
      {/* Card Body */}
      <div
        className={`h-full bg-[#242938] rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col overflow-hidden ${
          isPremium ? "" : "border-slate-800"
        }`}
        style={{ 
          borderColor: isPremium ? highlightColor : "rgba(30, 41, 59, 0.5)",
          boxShadow: isPremium ? `0 0 30px ${highlightColor}20` : "none"
        }}
      >
        {/* Header Section with Asymmetric Curve */}
        <div className="relative p-8 pt-10 pb-12">
          {/* Asymmetric Background Shape */}
          <div 
            className={`absolute inset-0 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1`}
            style={{ 
              backgroundColor: isPremium ? highlightColor : "rgba(255, 255, 255, 0.03)",
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 20% 100%, 0 85%)",
              opacity: isPremium ? 1 : 0.8
            }}
          />
          
          <div className="relative z-10 flex flex-col items-start gap-4">
            <div className={`text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${isPremium ? "text-brand-blue bg-white/20" : "text-slate-400 bg-white/5"}`}>
              {level} Sponsorship
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className={`text-4xl font-black tracking-tighter ${isPremium ? "text-brand-blue" : "text-white"}`}>
                {price}
              </h3>
              <p className={`text-[12px] font-bold ${isPremium ? "text-brand-blue/70" : "text-slate-500"}`}>
                {tagline}
              </p>
            </div>
          </div>

          {/* Icon Float */}
          <div className="absolute top-8 right-8 text-4xl group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100">
            {icon}
          </div>
        </div>

        {/* Benefits List */}
        <div className="flex-grow p-8 pt-6 space-y-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 group/item">
              <div 
                className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isPremium ? "bg-white/10" : "bg-slate-800"}`}
              >
                <Check className="w-3 h-3 text-brand-teal" style={{ color: isPremium ? highlightColor : "#1EC7B6" }} />
              </div>
              <p className="text-slate-400 text-[13px] leading-relaxed group-hover/item:text-slate-200 transition-colors">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="p-8 pb-10 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-3xl font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-300 ${
              isPremium 
                ? "bg-white text-brand-blue shadow-xl border-white" 
                : "bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white"
            }`}
            style={{ 
              backgroundColor: isPremium ? "#ffffff" : "transparent"
            }}
          >
            Start Partnering
          </motion.button>
        </div>
      </div>

      {/* Background Subtle Glow for Premium */}
      {isPremium && (
        <div 
          className="absolute -inset-4 blur-3xl opacity-10 pointer-events-none -z-10 rounded-[3rem] transition-opacity duration-700 group-hover:opacity-20"
          style={{ backgroundColor: highlightColor }}
        />
      )}
    </motion.div>
  );
};

