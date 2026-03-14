import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Trophy, ChevronRight, Vote, BarChart3 } from "lucide-react";
import { CATEGORIES, NOMINEES } from "../data/constants";
import { IdentificationForm } from "../components/IdentificationForm";
import { ResultsDashboard } from "../components/ResultsDashboard";

export const VotePage = ({
  matricNumber,
  middleName,
  handleIdentify,
  matricError,
  setMatricError,
  onLogout,
}: {
  matricNumber: string;
  middleName: string;
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
    if (matricNumber && middleName) {
      const savedVotes = localStorage.getItem(`grit_votes_${matricNumber}_${middleName}`);
      if (savedVotes) {
        setVotes(JSON.parse(savedVotes));
      } else {
        setVotes({});
      }
    }
  }, [matricNumber, middleName]);

  const handleVote = (category: string, nomineeId: string) => {
    if (!matricNumber || !middleName) return;
    const newVotes = { ...votes, [category]: nomineeId };
    setVotes(newVotes);
    localStorage.setItem(
      `grit_votes_${matricNumber}_${middleName}`,
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

        {matricNumber && middleName && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-5 py-2.5 rounded-full border border-brand-teal/20 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
              Voting as: <span className="text-slate-700">{middleName}</span> <span className="text-slate-400 font-mono">({matricNumber})</span>
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

      {!matricNumber || !middleName ? (
        <IdentificationForm
          onSubmit={handleIdentify}
          error={matricError}
          onClearError={() => setMatricError("")}
          description="Please enter your 9-digit Matric Number and Middle Name to proceed with voting. This ensures a fair and strict voting process."
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-24">
            {CATEGORIES.map((category) => (
              <div key={category} className="glass-card p-8 lg:p-12 shadow-xl shadow-brand-blue/5 border-white/60">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-slate-100/50 pb-6 gap-4">
                  <h3 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-2xl">
                       <Trophy className="text-brand-blue" size={28} /> 
                    </div>
                    {category}
                  </h3>
                  {votes[category] && (
                    <div className="flex items-center gap-2 text-brand-teal font-black text-sm bg-brand-teal/10 px-4 py-2 rounded-full border border-brand-teal/20">
                      <CheckCircle2 size={18} /> Vote Recorded
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {NOMINEES.filter((n) => n.category === category).map(
                    (nominee) => (
                      <motion.div
                        layout
                        key={nominee.id}
                        onClick={() => handleVote(category, nominee.id)}
                        whileHover={
                          !votes[category] ? { y: -4, scale: 1.01 } : {}
                        }
                        whileTap={
                          !votes[category] ? { scale: 0.98 } : {}
                        }
                        animate={{
                          scale:
                            votes[category] === nominee.id ? 1.02 : 1,
                          boxShadow:
                            votes[category] === nominee.id
                              ? "0 20px 40px rgba(30,199,182,0.15)"
                              : "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
                        }}
                        className={`group relative p-6 lg:p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${
                          votes[category] === nominee.id
                            ? "border-brand-teal bg-gradient-to-br from-white to-brand-teal/5 z-10"
                            : votes[category]
                              ? "border-slate-100 opacity-50 grayscale bg-white"
                              : "border-slate-100 bg-white hover:border-brand-blue/30 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-brand-blue/5"
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow relative flex-shrink-0">
                            <img
                              src={nominee.image}
                              alt={nominee.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <AnimatePresence>
                              {votes[category] === nominee.id && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute inset-0 bg-brand-teal/40 flex items-center justify-center backdrop-blur-[2px]"
                                >
                                  <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white rounded-full p-2 shadow-lg"
                                  >
                                    <CheckCircle2
                                      className="text-brand-teal"
                                      size={32}
                                    />
                                  </motion.div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                              {nominee.name}
                            </h4>
                            <p className="text-slate-500 text-sm mb-6 font-medium">
                              Nominee for {category}
                            </p>
                            <AnimatePresence mode="wait">
                              {votes[category] === nominee.id ? (
                                <motion.div
                                  key="selected"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className="flex items-center gap-3"
                                >
                                  <span className="text-xs font-black text-brand-teal uppercase tracking-[0.2em] bg-brand-teal/10 px-3 py-1.5 rounded-full">
                                    Selected
                                  </span>
                                  <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                                </motion.div>
                              ) : (
                                <motion.button
                                  key="select"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-[10px] font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 group-hover:gap-3 transition-all"
                                >
                                  {votes[category]
                                    ? "Change Selection"
                                    : "Cast Vote"}{" "}
                                  <ChevronRight size={14} className="bg-brand-blue/10 rounded-full p-0.5" />
                                </motion.button>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            {isSubmitted ? (
              <div className="glass-card p-12 max-w-2xl mx-auto border-emerald-100 bg-emerald-50/30">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-200">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {ipVoted || deviceVoted
                    ? "Vote Already Recorded"
                    : "Votes Submitted!"}
                </h3>
                <p className="text-slate-500 mb-8">
                  {ipVoted || deviceVoted
                    ? "Our records show that a vote has already been cast from this IP address or device. To maintain fairness, only one submission is allowed."
                    : `Thank you, ${middleName} (${matricNumber}). Your voice has been heard. You can still change your votes until the deadline.`}
                </p>

                <div className="mt-12 text-left max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal">
                      <BarChart3 size={20} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      Live Results Analytics
                    </h4>
                  </div>

                  <ResultsDashboard globalVotes={globalVotes} />
                </div>

                {!ipVoted && !deviceVoted && (
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 text-brand-blue font-bold hover:underline block mx-auto"
                  >
                    Edit My Votes
                  </button>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowVoteModal(true)}
                  disabled={
                    Object.keys(votes).length < CATEGORIES.length
                  }
                  className="btn-primary px-12 py-4 text-lg shadow-xl shadow-brand-blue/20"
                >
                  Submit Final Votes
                </button>
                <p className="mt-4 text-xs text-slate-400 font-medium">
                  {Object.keys(votes).length} of {CATEGORIES.length}{" "}
                  categories voted
                </p>
              </>
            )}
          </div>

          {/* Vote Confirmation Modal */}
          <AnimatePresence>
            {showVoteModal && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowVoteModal(false)}
                  className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                >
                  <div className="p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                        <Vote size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          Confirm Your Votes
                        </h3>
                        <p className="text-sm text-slate-400">
                          Review your selections for each category.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {CATEGORIES.map((cat) => (
                        <div
                          key={cat}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
                        >
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            {cat}
                          </span>
                          <span className="font-bold text-slate-900">
                            {NOMINEES.find((n) => n.id === votes[cat])
                              ?.name || "Not Selected"}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={async () => {
                          try {
                            // Record vote on server (IP check)
                            const res = await fetch(
                              "/api/record-vote",
                              { method: "POST" },
                            );
                            if (!res.ok) {
                              const data = await res.json();
                              setMatricError(
                                data.error || "Voting failed",
                              );
                              setShowVoteModal(false);
                              return;
                            }

                            // Update simulated global votes
                            const updatedGlobal = { ...globalVotes };
                            Object.entries(votes).forEach(
                              ([cat, nomineeId]) => {
                                const catData = {
                                  ...(updatedGlobal[cat as string] ||
                                    {}),
                                };
                                catData[nomineeId as string] =
                                  (catData[nomineeId as string] || 0) +
                                  1;
                                updatedGlobal[cat as string] = catData;
                              },
                            );
                            setGlobalVotes(updatedGlobal);
                            localStorage.setItem(
                              "grit_global_votes",
                              JSON.stringify(updatedGlobal),
                            );

                            // Record device vote
                            localStorage.setItem(
                              "grit_has_voted_device",
                              "true",
                            );
                            setDeviceVoted(true);

                            setShowVoteModal(false);
                            setIsSubmitted(true);
                            window.scrollTo(0, 0);
                          } catch (err) {
                            console.error("Submission failed:", err);
                            setMatricError(
                              "Connection error. Please try again.",
                            );
                            setShowVoteModal(false);
                          }
                        }}
                        className="btn-primary w-full py-4 text-lg"
                      >
                        Confirm & Submit
                      </button>
                      <button
                        onClick={() => setShowVoteModal(false)}
                        className="w-full py-4 text-slate-500 dark:text-slate-400 font-bold hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                      >
                        Go Back & Edit
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};
