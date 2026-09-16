import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Lock,
  LogOut,
  ChevronRight,
  Sparkles,
  Award,
  ShieldCheck,
  Calendar,
  Image,
} from "lucide-react";

export const VotePage = ({
  matricNumber,
  studentName,
  onLogout,
}: {
  matricNumber: string;
  studentName?: string;
  password?: string;
  handleIdentify?: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError?: string;
  setMatricError?: (err: string) => void;
  onLogout: () => void;
  hasEmail?: boolean;
  setHasEmail?: (val: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [floatingStars] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      size: 8 + Math.random() * 16,
    })),
  );

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-[80vh] pb-24 relative overflow-hidden">
      {/* Ambient background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {floatingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background:
                star.id % 3 === 0
                  ? "#F59E0B"
                  : star.id % 3 === 1
                    ? "#8B5CF6"
                    : "#1EC7B6",
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + star.delay,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <div className="w-full relative overflow-hidden">
        <div
          className="relative w-full"
          style={{
            background:
              "linear-gradient(135deg, #0A1628 0%, #0D2040 40%, #0F2D50 70%, #0A1628 100%)",
            minHeight: "280px",
          }}
        >
          {/* Circuit pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(30,199,182,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(30,199,182,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Golden glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Confetti stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400 opacity-60 select-none pointer-events-none"
              style={{
                left: `${5 + ((i * 4.8) % 90)}%`,
                top: `${10 + ((i * 7.3) % 80)}%`,
                fontSize: `${8 + (i % 4) * 4}px`,
              }}
              animate={{
                y: [-4, 4, -4],
                rotate: [0, 20, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              ✦
            </motion.div>
          ))}

          {/* Banner image + overlay content */}
          <div className="relative z-10 flex flex-col items-center justify-center py-12 px-6 text-center">
            {/* Logo area */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <img
                src="/MIT_Logo.png"
                alt="MIT Logo"
                className="w-14 h-14 object-contain drop-shadow-2xl"
              />
              <div className="text-left">
                <div className="text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
                  University of Lagos
                </div>
                <div className="text-white font-black text-lg tracking-tight leading-none">
                  Masters of Information Technology
                </div>
              </div>
            </motion.div>

            {/* Event title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-3"
              style={{
                background:
                  "linear-gradient(135deg, #F59E0B 0%, #FBBF24 30%, #FDE68A 60%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 4px 20px rgba(245,158,11,0.5))",
              }}
            >
              MIT Connect &apos;26
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-2xl sm:text-3xl font-black text-white mb-4"
            >
              Excellence Awards
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 font-bold text-sm uppercase tracking-[0.3em]"
            >
              🏆 Voting Concluded · Celebrating Excellence 🏆
            </motion.p>

            {/* Golden divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 h-px w-48 mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #F59E0B, transparent)",
              }}
            />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 mt-5 text-white/70"
            >
              {[
                { label: "Award Categories", value: "17" },
                { label: "Student Nominees", value: "53" },
                { label: "Lecturer Nominees", value: "13" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content: Voting Ended State ────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-14 border-red-500/20 shadow-2xl shadow-red-500/5 text-center relative overflow-hidden"
        >
          {/* Top subtle glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 font-black text-sm mb-6 shadow-sm">
            <Lock size={16} className="text-red-500" />
            Voting Period Closed
          </div>

          {/* Large Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-5 font-display tracking-tight">
            Voting Has <span className="text-red-500">Ended</span>
          </h2>

          {/* Descriptive Body */}
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            The voting period for the{" "}
            <strong className="text-slate-900">MIT Connect &apos;26 Excellence Awards</strong> has
            officially drawn to a close. Thank you to every student and faculty member who
            participated and cast their votes to honor the hard work, brilliance, and spirit of
            the Class of Grit!
          </p>

          {/* Info Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-amber-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-3 shadow-xs">
                <Trophy size={20} />
              </div>
              <h4 className="font-black text-slate-900 text-sm mb-1">
                17 Categories
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Votes cast across Student Merit, Recognition, and Lecturer honors.
              </p>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3 shadow-xs">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-black text-slate-900 text-sm mb-1">
                Audited & Verified
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All submissions are securely sealed and audited for complete fairness.
              </p>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-3 shadow-xs">
                <Sparkles size={20} />
              </div>
              <h4 className="font-black text-slate-900 text-sm mb-1">
                Gala Night Reveal
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Winners will be officially revealed and celebrated live on stage!
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/categories")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-black text-base shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #1E6FD9, #1EC7B6)",
                boxShadow: "0 10px 30px rgba(30,111,217,0.3)",
              }}
            >
              <Award size={18} />
              View Award Categories
              <ChevronRight size={18} />
            </button>

            <button
              onClick={() => navigate("/payment")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-base hover:bg-slate-800 transition-colors"
            >
              <Calendar size={18} />
              Get Gala Tickets
            </button>

            <button
              onClick={() => navigate("/gallery")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-700 font-black text-base hover:bg-slate-50 transition-colors"
            >
              <Image size={18} />
              View Gallery
            </button>
          </div>

          {/* User Session status footer if previously logged in */}
          {matricNumber && (
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
              <span>
                Identified as:{" "}
                <strong className="text-slate-800">
                  {studentName || matricNumber}
                </strong>
              </span>
              <button
                onClick={onLogout}
                className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1 font-bold ml-2"
                title="Sign out"
              >
                <LogOut size={12} /> Sign out
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
