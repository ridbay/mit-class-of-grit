import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, ChevronRight, CheckCircle2, UserPlus } from "lucide-react";
import { CATEGORIES, STUDENTS } from "../data/constants";
import { IdentificationForm } from "../components/IdentificationForm";

export const NominatePage = ({
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [nominations, setNominations] = useState<Record<string, string[]>>({}); // category -> studentIds[]
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("grit_nominations");
    if (saved) setNominations(JSON.parse(saved));
  }, []);

  const filteredStudents = STUDENTS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.matric.includes(searchQuery),
  );

  const handleNominate = (studentId: string) => {
    const currentNoms = nominations[selectedCategory] || [];
    if (currentNoms.includes(studentId)) return; // Already nominated

    const updated = {
      ...nominations,
      [selectedCategory]: [...currentNoms, studentId],
    };
    setNominations(updated);
    localStorage.setItem("grit_nominations", JSON.stringify(updated));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (!matricNumber || !password) {
    return (
      <section className="py-24 px-6 min-h-screen bg-slate-50 flex items-center justify-center">
        <IdentificationForm
          onSubmit={handleIdentify}
          error={matricError}
          onClearError={() => setMatricError("")}
          title="Identify for Nominations"
          description="Please identify yourself before you can nominate your peers."
        />
      </section>
    );
  }

  return (
    <section className="py-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-16 max-w-2xl border-brand-blue/20 shadow-2xl shadow-brand-blue/10"
      >
        <div className="w-24 h-24 bg-brand-blue/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 text-brand-blue animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display">
          Hold Your Horses! 🐎
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
          The nomination portal is currently undergoing its final "grit"
          polishing. We'll be live faster than you can say "Masters of IT!"
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
            Identified as: <span className="text-brand-blue">{matricNumber}</span>
          </div>
          <button
            onClick={onLogout}
            className="text-sm font-black text-brand-teal hover:underline uppercase tracking-widest"
          >
            Not you? Logout
          </button>
        </div>
      </motion.div>
    </section>
  );
};
