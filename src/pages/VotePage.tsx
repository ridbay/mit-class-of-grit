import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  LogOut,
  ChevronRight,
  Star,
  BookOpen,
  Users,
  Shield,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { VotingForm } from "../components/VotingForm";
import { IdentificationForm } from "../components/IdentificationForm";

// ─── Award sections summary displayed on the landing ─────────────────────────

const AWARD_SECTIONS = [
  {
    icon: <Trophy size={20} />,
    name: "Student Merit Awards",
    count: 4,
    color: "#F59E0B",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    awards: [
      "Outstanding Student of the Year",
      "Most Supportive Classmate",
      "Best Team Player",
      "Class Contribution Award",
    ],
  },
  {
    icon: <Star size={20} />,
    name: "Student Recognition Awards",
    count: 10,
    color: "#8B5CF6",
    bg: "bg-violet-50",
    border: "border-violet-200",
    textColor: "text-violet-700",
    awards: [
      "Best Presenter",
      "Most Tech-Savvy Student",
      "Most Innovative Thinker",
      "The Connector Award",
      "Most Enterprising Student",
      "Best Dressed Male & Female",
      "Most Creative Student",
      "Most Engaging Participant",
      "Charisma Award",
    ],
  },
  {
    icon: <BookOpen size={20} />,
    name: "Lecturer Awards",
    count: 3,
    color: "#10B981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    awards: [
      "Outstanding Lecturer of the Year",
      "Most Impactful Lecturer of the Year",
      "Student Choice Lecturer of the Year",
    ],
  },
];

// ─── Landing / intro before voting starts ─────────────────────────────────────

const VoteLanding = ({ onStart }: { onStart: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="w-full max-w-4xl mx-auto"
  >
    {/* Intro blurb */}
    <div className="text-center mb-10">
      <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
        You have{" "}
        <span className="text-brand-blue font-black">17 categories</span> to
        vote in across 3 award sections. For each category, browse nominees and
        click on a photo card to cast your vote.
      </p>
    </div>

    {/* Section cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      {AWARD_SECTIONS.map((section, i) => (
        <motion.div
          key={section.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`rounded-2xl border-2 ${section.border} ${section.bg} p-6`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
              style={{ background: section.color }}
            >
              {section.icon}
            </div>
            <div>
              <h3 className={`font-black text-sm ${section.textColor}`}>
                {section.name}
              </h3>
              <span className="text-xs text-slate-500 font-bold">
                {section.count} categories
              </span>
            </div>
          </div>
          <ul className="space-y-1.5">
            {section.awards.map((award) => (
              <li
                key={award}
                className="flex items-center gap-2 text-xs text-slate-600 font-medium"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: section.color }}
                />
                {award}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {/* Rules */}
    <div className="glass-card p-6 border-blue-100 mb-8">
      <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2">
        <Shield size={18} className="text-brand-blue" /> Voting Rules
      </h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {[
          "Each student may vote once per category",
          "You can skip categories if you choose",
          "You can go back to change a selection",
          "All votes are saved automatically",
          "Results are announced at the event",
          "Voting is strictly for MIT Connect '26 students",
        ].map((rule) => (
          <li
            key={rule}
            className="flex items-center gap-2 text-sm text-slate-600 font-medium"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
            {rule}
          </li>
        ))}
      </ul>
    </div>

    {/* CTA */}
    <div className="text-center">
      <motion.button
        id="start-voting-btn"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-black text-lg shadow-xl transition-all"
        style={{
          background: "linear-gradient(135deg, #1E6FD9, #1EC7B6)",
          boxShadow: "0 12px 40px rgba(30,111,217,0.35)",
        }}
      >
        <Sparkles size={22} />
        Start Voting Now
        <ChevronRight size={22} />
      </motion.button>
      <p className="text-slate-400 text-sm font-medium mt-4">
        17 categories · Takes about 5–8 minutes
      </p>
    </div>
  </motion.div>
);

// ─── Main VotePage ─────────────────────────────────────────────────────────────

export const VotePage = ({
  matricNumber,
  studentName,
  // password,
  handleIdentify,
  matricError,
  setMatricError,
  onLogout,
  hasEmail,
  setHasEmail,
}: {
  matricNumber: string;
  studentName?: string;
  // password: string;
  handleIdentify: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError: string;
  setMatricError: (err: string) => void;
  onLogout: () => void;
  hasEmail?: boolean;
  setHasEmail?: (val: boolean) => void;
}) => {
  const [hasStarted, setHasStarted] = useState(false);
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

  const [emailInput, setEmailInput] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailLoading(true);
    setEmailError("");
    try {
      const response = await fetch("/api/auth/update-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matric: matricNumber, email: emailInput }),
      });
      const data = (await response.json()) as any;

      if (!response.ok) {
        setEmailError(data.error || "Failed to save email. Please try again.");
      } else {
        localStorage.setItem("grit_hasEmail", "true");
        setHasEmail?.(true);
      }
    } catch (err: any) {
      setEmailError("Network error. Please try again.");
    } finally {
      setEmailLoading(false);
    }
  };

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
              🏆 Cast Your Vote · Shape the Legacy 🏆
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

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        {!matricNumber ? (
          /* ── Auth Gate ────────────────────────────────────────────────── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-4">
                <Shield size={16} />
                Secure Voting Portal
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-3">
                Verify Your Identity
              </h2>
              <p className="text-slate-500 font-medium">
                Only registered MIT Connect &apos;26 students can vote. Enter
                your details to access the ballot.
              </p>
            </div>
            <IdentificationForm
              onSubmit={handleIdentify}
              error={matricError}
              onClearError={() => setMatricError("")}
              // hidePassword={true}
              title="Who goes there? 🎓"
              description="Enter your Full Name and 9-digit Matric Number to access the voting ballot."
            />
          </motion.div>
        ) : !hasEmail ? (
          /* ── Email Collection Gate ────────────────────────────────────── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-4">
                <Shield size={16} />
                One Last Thing
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-3">
                Your Email Address
              </h2>
              <p className="text-slate-500 font-medium">
                We need your email address to send you important updates
                regarding MIT Connect &apos;26.
              </p>
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-blue/5 border border-slate-100"
            >
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setEmailError("");
                    }}
                    required
                    className={`w-full px-4 py-4 rounded-2xl bg-slate-50 border-2 outline-none transition-all font-bold text-slate-900 ${emailError ? "border-red-500 bg-red-50" : "border-transparent focus:border-brand-blue focus:bg-white"}`}
                  />
                </div>

                {emailError && (
                  <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-xl">
                    <ShieldAlert className="flex-shrink-0 mt-0.5" size={16} />
                    {emailError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={emailLoading}
                  className="w-full btn-primary py-4 rounded-2xl text-lg mt-2 flex items-center justify-center gap-2"
                >
                  {emailLoading ? "Saving..." : "Continue to Voting"}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* ── Voting Area ──────────────────────────────────────────────── */
          <AnimatePresence mode="wait">
            {localStorage.getItem("grit_hasVoted") === "true" ? (
              <motion.div
                key="already_voted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <div className="w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                  <Trophy size={48} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                  Vote Cast Successfully!
                </h2>
                <p className="text-slate-500 font-medium text-lg mb-8 max-w-lg mx-auto">
                  Thank you for participating in the MIT Connect &apos;26
                  Excellence Awards. Your selections have been securely
                  recorded. Multiple submissions are not allowed.
                </p>
                <button
                  onClick={onLogout}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Log out securely
                </button>
              </motion.div>
            ) : !hasStarted ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Welcome header */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 border border-green-200 font-black text-sm mb-5 shadow-sm"
                  >
                    <Users size={16} />
                    Voting as:{" "}
                    {studentName
                      ?.split(" ")
                      .slice(0, 2)
                      .map(
                        (w) =>
                          w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
                      )
                      .join(" ")}
                    <button
                      id="logout-vote-btn"
                      onClick={onLogout}
                      className="ml-2 text-slate-400 hover:text-red-500 transition-colors"
                      title="Log out"
                    >
                      <LogOut size={14} />
                    </button>
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                    Welcome to the Ballot! <span className="text-4xl">🗳️</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
                    You&apos;re about to vote across{" "}
                    <strong className="text-brand-blue">
                      17 award categories
                    </strong>{" "}
                    for the MIT Connect &apos;26 Excellence Awards.
                  </p>
                </div>

                <VoteLanding onStart={() => setHasStarted(true)} />
              </motion.div>
            ) : (
              <motion.div
                key="voting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Voting header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">
                      Cast Your Votes
                    </h2>
                    <p className="text-slate-400 font-medium text-sm">
                      MIT Connect &apos;26 Excellence Awards
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-500 hidden sm:block">
                      {studentName
                        ?.split(" ")
                        .slice(0, 2)
                        .map(
                          (w) =>
                            w.charAt(0).toUpperCase() +
                            w.slice(1).toLowerCase(),
                        )
                        .join(" ")}
                    </span>
                    <button
                      id="logout-voting-btn"
                      onClick={onLogout}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all text-sm font-bold border border-slate-200"
                    >
                      <LogOut size={14} /> Log out
                    </button>
                  </div>
                </div>

                <VotingForm
                  matricNumber={matricNumber}
                  studentName={studentName}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
