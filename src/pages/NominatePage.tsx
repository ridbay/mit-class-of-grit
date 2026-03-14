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
    <section className="py-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4">
            Nomination Phase
          </span>
          <h2 className="section-title">Nominate Your Peers</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Help us identify the stars of our class. You can nominate any
            student for any category.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-4 py-2 rounded-full border border-brand-teal/20">
              Nominating as: {middleName} ({matricNumber})
            </span>
            <button
              onClick={onLogout}
              className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
            >
              Change Details
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <Filter size={20} className="text-brand-blue" /> Select Category
            </h3>
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left p-4 rounded-2xl font-bold transition-all flex items-center justify-between ${
                    selectedCategory === cat
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && <ChevronRight size={18} />}
                </button>
              ))}
            </div>
          </div>

          {/* Student Selection */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <div className="relative mb-8">
                <Filter
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search students by name or matric number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredStudents.map((student) => {
                  const isNominated = (
                    nominations[selectedCategory] || []
                  ).includes(student.id);
                  return (
                    <div
                      key={student.id}
                      className={`p-6 rounded-3xl border-2 transition-all flex items-center justify-between ${
                        isNominated
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-slate-100 bg-white hover:border-brand-blue"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {student.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono">
                          {student.matric}
                        </p>
                      </div>
                      <button
                        onClick={() => handleNominate(student.id)}
                        disabled={isNominated}
                        className={`p-3 rounded-xl transition-all ${
                          isNominated
                            ? "bg-emerald-500 text-white"
                            : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
                        }`}
                      >
                        {isNominated ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          <UserPlus size={20} />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {filteredStudents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-400 font-bold">
                    No students found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold z-[100]"
          >
            <CheckCircle2 size={24} />
            Nomination submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
