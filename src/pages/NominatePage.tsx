import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, ChevronRight, CheckCircle2, UserPlus } from "lucide-react";
import { CATEGORIES, STUDENTS } from "../data/constants";
import { IdentificationForm } from "../components/IdentificationForm";

export const NominatePage = ({
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

  if (!matricNumber || !middleName) {
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
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
              Nomination Phase
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl"
          >
            Nominate Your Peers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mt-6 font-medium"
          >
            Help us identify the stars of our class. You can nominate any
            student for any category.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-5 py-2.5 rounded-full border border-brand-teal/20 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
              Nominating as: <span className="text-slate-700">{middleName}</span> <span className="text-slate-400 font-mono">({matricNumber})</span>
            </span>
            <button
              onClick={onLogout}
              className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
            >
              Change Details
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Categories Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-brand-blue/10 rounded-xl">
                 <Filter size={18} className="text-brand-blue" /> 
              </div>
              Select Category
            </h3>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left p-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-between border ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-brand-blue to-[#155BB5] text-white shadow-lg shadow-brand-blue/20 border-transparent scale-[1.02]"
                      : "glass-card text-slate-600 hover:border-brand-blue/30 hover:bg-white/60 hover:-translate-y-1"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && <ChevronRight size={18} className="animate-in slide-in-from-left-2 duration-300" />}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Student Selection */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 lg:p-10 shadow-xl shadow-brand-blue/5 border-white/60">
              <div className="relative mb-8 group">
                <Filter
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand-blue"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search students by name or matric number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/50 border-2 border-slate-100 focus:border-brand-blue focus:bg-white focus:shadow-[0_0_0_4px_rgba(30,111,217,0.1)] outline-none transition-all font-bold text-slate-900 placeholder:font-medium placeholder:text-slate-400"
                />
              </div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredStudents.map((student) => {
                    const isNominated = (
                      nominations[selectedCategory] || []
                    ).includes(student.id);
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        key={student.id}
                        className={`p-6 rounded-3xl border-2 transition-all duration-300 flex items-center justify-between group ${
                          isNominated
                            ? "border-brand-teal bg-brand-teal/5 shadow-md shadow-brand-teal/10"
                            : "border-slate-100 bg-white hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1"
                        }`}
                      >
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                            {student.name}
                          </h4>
                          <p className="text-xs text-slate-400 font-mono mt-1">
                            {student.matric}
                          </p>
                        </div>
                        <button
                          onClick={() => handleNominate(student.id)}
                          disabled={isNominated}
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            isNominated
                              ? "bg-brand-teal text-white shadow-md"
                              : "bg-slate-50 text-slate-400 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-md group-hover:scale-110"
                          }`}
                        >
                          {isNominated ? (
                            <CheckCircle2 size={20} className="animate-in zoom-in duration-300" />
                          ) : (
                            <UserPlus size={20} />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              {filteredStudents.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white/40 rounded-3xl border-2 border-dashed border-slate-200 mt-4"
                >
                  <p className="text-slate-400 font-bold text-lg">
                    No students found matching your search.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-brand-teal to-[#15a89a] text-white px-8 py-5 rounded-2xl shadow-[0_20px_40px_rgba(30,199,182,0.3)] flex items-center gap-4 font-bold z-[100] border border-white/20"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <CheckCircle2 size={24} />
            </div>
            Nomination submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
