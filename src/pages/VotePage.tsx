import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Trophy, ChevronRight, Vote, BarChart3 } from "lucide-react";
import { CATEGORIES, NOMINEES, CATEGORY_DESCRIPTIONS } from "../data/constants";
import { IdentificationForm } from "../components/IdentificationForm";
import { ResultsDashboard } from "../components/ResultsDashboard";

export const VotePage = ({
  matricNumber,
  password,
  handleIdentify,
  matricError,
  setMatricError,
  onLogout,
}: {
  matricNumber: string;
  password: string;
  handleIdentify: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError: string;
  setMatricError: (err: string) => void;
  onLogout: () => void;
}) => {
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [globalVotes, setGlobalVotes] = useState<Record<string, Record<string, number>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [ipVoted, setIpVoted] = useState(false);
  const [deviceVoted, setDeviceVoted] = useState(false);

  // Initialize Global Votes
  useEffect(() => {
    const savedGlobal = localStorage.getItem("grit_global_votes");
    if (savedGlobal) {
      setGlobalVotes(JSON.parse(savedGlobal));
    } else {
      const initial: Record<string, Record<string, number>> = {};
      CATEGORIES.forEach((cat) => {
        initial[cat] = {};
        NOMINEES.filter((n) => n.category === cat).forEach((n) => {
          initial[cat][n.id] = Math.floor(Math.random() * 50) + 10;
        });
      });
      setGlobalVotes(initial);
      localStorage.setItem("grit_global_votes", JSON.stringify(initial));
    }
  }, []);

  // Check IP and Device Status
  useEffect(() => {
    const hasVoted = localStorage.getItem("grit_has_voted_device");
    if (hasVoted === "true") {
      setDeviceVoted(true);
      setIsSubmitted(true);
    }

    fetch("/api/check-ip")
      .then((res) => res.json())
      .then((data) => {
        if (data.hasVoted) {
          setIpVoted(true);
          setIsSubmitted(true);
        }
      })
      .catch((err) => console.error("IP check failed:", err));
  }, []);

  // Load user votes when matric changes
  useEffect(() => {
    if (matricNumber && password) {
      const savedVotes = localStorage.getItem(`grit_votes_${matricNumber}_${password}`);
      if (savedVotes) {
        setVotes(JSON.parse(savedVotes));
      } else {
        setVotes({});
      }
    }
  }, [matricNumber, password]);

  const handleVote = (category: string, nomineeId: string) => {
    if (!matricNumber || !password) return;
    const newVotes = { ...votes, [category]: nomineeId };
    setVotes(newVotes);
    localStorage.setItem(
      `grit_votes_${matricNumber}_${password}`,
      JSON.stringify(newVotes),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-24 px-6 max-w-7xl mx-auto min-h-screen"
    >
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-teal/20">
            Strict Mode Enabled
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title text-5xl md:text-6xl"
        >
          Vote for Nominees
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mt-6 font-medium"
        >
          One vote per category. Your selection is final once submitted.
        </motion.p>

        {matricNumber && password && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-5 py-2.5 rounded-full border border-brand-teal/20 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
              Voting as: <span className="text-slate-700">{matricNumber}</span>
            </span>
            <button
              onClick={onLogout}
              className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
            >
              Change Details
            </button>
          </motion.div>
        )}
      </div>

      {!matricNumber || !password ? (
        <IdentificationForm
          onSubmit={handleIdentify}
          error={matricError}
          onClearError={() => setMatricError("")}
          description="Please enter your 9-digit Matric Number and Password to proceed with voting. This ensures a fair and strict voting process."
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto glass-card p-12 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Trophy className="text-brand-blue animate-pulse" size={48} />
            </div>

            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Voting will be <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
                Live Very Soon!
              </span>
            </h3>

            <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-medium">
              Thank you, <span className="text-brand-teal font-black">{matricNumber}</span>. Your identification was successful. We're putting the final touches on the nominees list to ensure a fair and exciting grit-filled awards ceremony.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">
                  Stay Tuned
                </span>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-brand-teal"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Wrong matric number?
              </p>
              <button
                onClick={onLogout}
                className="text-xs font-black text-brand-blue hover:text-brand-teal transition-colors flex items-center gap-2 group"
              >
                Logout and Try Again
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
