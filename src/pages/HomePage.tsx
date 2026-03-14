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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy />,
                title: "Excellence Awards",
                desc: "Recognizing the top achievers in our department.",
                target: "/categories",
              },
              {
                icon: <Camera />,
                title: "Memorable Moments",
                desc: "Capturing the spirit of our academic journey.",
                target: "/gallery",
              },
              {
                icon: <Vote />,
                title: "Your Voice Matters",
                desc: "Participate in our strict-mode voting system.",
                target: "/vote",
              },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.target)}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-black">{item.title}</h3>
                <p className="text-black font-medium leading-relaxed text-sm">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentSpotlight />

      <FAQSection />
    </motion.div>
  );
};
