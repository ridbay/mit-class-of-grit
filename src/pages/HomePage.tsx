import React from "react";
import { motion } from "motion/react";
import { Trophy, Camera, Vote, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSlider } from "../components/HeroSlider";
import { SponsorsSection } from "../components/SponsorsSection";
import { StudentSpotlight } from "../components/StudentSpotlight";
import { FAQSection } from "../components/FAQSection";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSlider onVoteClick={() => navigate("/vote")} />

      <SponsorsSection />

      {/* Features Quick Look */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Trophy size={28} />,
                title: "Excellence Awards",
                desc: "Recognizing the top achievers in our department.",
                target: "/categories",
              },
              {
                icon: <Camera size={28} />,
                title: "Memorable Moments",
                desc: "Capturing the spirit of our academic journey.",
                target: "/gallery",
              },
              {
                icon: <Vote size={28} />,
                title: "Your Voice Matters",
                desc: "Participate in our strict-mode voting system.",
                target: "/vote",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
                onClick={() => navigate(item.target)}
                className="glass-card p-10 group cursor-pointer border-transparent hover:border-brand-teal/30 hover:bg-white/90"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-blue-600 group-hover:text-white shadow-inner group-hover:shadow-xl group-hover:shadow-brand-blue/30 group-hover:scale-110 group-hover:-rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-brand-blue transition-colors duration-300 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-base mb-8">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-[0.2em] group-hover:text-brand-teal transition-colors">
                  Explore <ChevronRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StudentSpotlight />

      <FAQSection />
    </motion.div>
  );
};
