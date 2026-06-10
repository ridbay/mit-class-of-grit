import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, CheckCircle2, User } from "lucide-react";
import { CATEGORIES, CATEGORY_DESCRIPTIONS, CATEGORY_GROUPS, STUDENTS, LECTURERS } from "../data/constants";
import { supabase } from "../lib/supabase";

export const NominationForm = ({
  matricNumber,
  onComplete,
}: {
  matricNumber: string;
  onComplete: (selections: Record<string, string>) => void;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = CATEGORIES[currentStep];

  // Determine if the current category is for lecturers or students
  const isLecturerCategory = CATEGORY_GROUPS.find(
    (g) => g.name === "Merit Awards for Lecturers"
  )?.categories.some((c) => c.name === currentCategory);

  const baseNominees = useMemo(() => {
    const list = isLecturerCategory ? [...LECTURERS] : [...STUDENTS];
    
    // Only shuffle for student categories
    if (!isLecturerCategory) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    return list;
  }, [isLecturerCategory, currentCategory]);

  const categoryNominees = useMemo(() => {
    if (!searchQuery) return baseNominees;
    return baseNominees.filter((n) =>
      n.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [baseNominees, searchQuery]);

  const handleSelect = (nomineeId: string) => {
    setSelections((prev) => ({
      ...prev,
      [currentCategory]: nomineeId,
    }));
  };

  const handleNext = async () => {
    if (!selections[currentCategory]) {
      setError("Whoops! You forgot to pick a nominee. Don't leave them hanging!");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      // Map all selected IDs to their actual names for readable database storage
      const allNominees = [...LECTURERS, ...STUDENTS];
      const selectionsWithNames = Object.fromEntries(
        Object.entries(selections).map(([cat, id]) => {
          const nominee = allNominees.find((n) => n.id === id);
          return [cat, nominee ? nominee.name : id];
        })
      ) as Record<string, string>;

      // Auto-submit to Supabase
      const { error: dbError } = await supabase
        .from("nominations")
        .upsert(
          {
            student_matric: matricNumber,
            selections: selectionsWithNames,
          },
          { onConflict: "student_matric" }
        );

      if (dbError) throw dbError;

      if (currentStep < CATEGORIES.length - 1) {
        setCurrentStep((prev) => prev + 1);
        setSearchQuery(""); // clear search on next
      } else {
        onComplete(selectionsWithNames);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Yikes, we couldn't save that nomination. The internet gremlins might be at it again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrev = () => {
    setError("");
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setSearchQuery(""); // clear search on prev
    }
  };

  const progress = ((currentStep + 1) / CATEGORIES.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div
          className="bg-brand-blue h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className="text-center font-bold text-slate-500 uppercase tracking-widest text-xs">
        Category {currentStep + 1} of {CATEGORIES.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8 md:p-12 border-brand-blue/20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-display">
              {currentCategory}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {CATEGORY_DESCRIPTIONS[currentCategory] ||
                "Select the most deserving nominee for this category."}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-center font-bold text-sm">
              {error}
            </div>
          )}

          <div className="mb-8">
            <input
              type="text"
              placeholder={`Search ${isLecturerCategory ? 'lecturers' : 'students'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 outline-none focus:border-brand-blue focus:bg-white transition-all font-medium text-slate-900"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 mb-12 max-h-[500px] overflow-y-auto p-2">
            {categoryNominees.length > 0 ? (
              categoryNominees.map((nominee) => {
                const isSelected = selections[currentCategory] === nominee.id;
                return (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={nominee.id}
                    onClick={() => handleSelect(nominee.id)}
                    className={`cursor-pointer rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 border-2 flex items-center justify-center text-center relative ${
                      isSelected
                        ? "border-brand-blue bg-brand-blue/5 shadow-md shadow-brand-blue/10"
                        : "border-slate-100 bg-white hover:border-brand-blue/30 hover:shadow-md"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 text-brand-blue">
                        <CheckCircle2 size={16} className="fill-brand-blue text-white" />
                      </div>
                    )}
                    <h3 className={`font-bold text-xs sm:text-base leading-tight ${isSelected ? "text-brand-blue" : "text-slate-700"}`}>
                      {nominee.name}
                    </h3>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12 text-slate-400 font-medium">
                No nominees available for this category yet.
                <br />
                You can skip this category or contact support.
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0 || isSubmitting}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                currentStep === 0
                  ? "opacity-0 cursor-default"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>
            <button
              onClick={handleNext}
              disabled={isSubmitting || (categoryNominees.length > 0 && !selections[currentCategory])}
              className="btn-primary py-3 px-8 flex items-center gap-2"
            >
              {isSubmitting ? "Saving..." : currentStep === CATEGORIES.length - 1 ? "Finish" : "Next Category"}
              {!isSubmitting && <ChevronRight size={20} />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
