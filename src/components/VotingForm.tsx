import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Trophy,
  Star,
  Users,
  BookOpen,
  PartyPopper,
  Search,
  X,
  AlertCircle,
} from "lucide-react";
import fpPromise from "@fingerprintjs/fingerprintjs";
import { STUDENTS, LECTURERS } from "../data/constants";

// ─── Voting Category Definitions ──────────────────────────────────────────────

interface VoteCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  isLecturer: boolean;
  sectionId: string;
  nominees?: string[];
}

interface VoteSection {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  badgeColor: string;
  categories: VoteCategory[];
}

const VOTE_SECTIONS: VoteSection[] = [
  {
    id: "student-merit",
    name: "Student Merit Awards",
    subtitle: "Celebrating exceptional character, leadership & contribution",
    icon: <Trophy size={22} />,
    color: "#F59E0B",
    bgGradient: "from-amber-500/10 to-yellow-500/5",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-200",
    categories: [
      {
        id: "sm1",
        name: "Outstanding Student of the Year",
        description:
          "Recognizes a student who has shown exceptional academic effort, leadership, class participation, and overall positive impact within the MIT Class of Grit.",
        icon: "🏆",
        isLecturer: false,
        sectionId: "student-merit",
        nominees: ["s48", "s43", "s21", "s100", "s10", "s51"],
      },
      {
        id: "sm2",
        name: "Most Supportive Classmate",
        description:
          "Celebrates a student who consistently supports others, offers help when needed, and contributes to the success and comfort of classmates.",
        icon: "🤝",
        isLecturer: false,
        sectionId: "student-merit",
        nominees: ["s96", "s21", "s100", "s10", "s208", "s92"],
      },
      {
        id: "sm3",
        name: "Best Team Player",
        description:
          "Honors a student who works well with others, contributes positively to group tasks, and helps build a strong spirit of collaboration.",
        icon: "⚡",
        isLecturer: false,
        sectionId: "student-merit",
        nominees: ["s21", "s256", "s59", "s10", "s92", "s34"],
      },
      {
        id: "sm4",
        name: "Class Contribution Award",
        description:
          "Recognizes a student who has made meaningful contributions to class activities, discussions, coordination, and overall class growth.",
        icon: "🌟",
        isLecturer: false,
        sectionId: "student-merit",
        nominees: ["s96", "s252", "s55", "s120", "s66", "s216"],
      },
    ],
  },
  {
    id: "student-recognition",
    name: "Student Recognition Awards",
    subtitle: "Fun, inclusive awards celebrating personalities & talents",
    icon: <Star size={22} />,
    color: "#8B5CF6",
    bgGradient: "from-violet-500/10 to-purple-500/5",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-200",
    categories: [
      {
        id: "sr1",
        name: "Best Presenter",
        description:
          "Recognizes a student with strong presentation skills, confidence, clarity, and the ability to communicate ideas effectively.",
        icon: "🎤",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s77", "s219", "s195", "s9", "s216", "s51"],
      },
      {
        id: "sr2",
        name: "Most Tech-Savvy Student",
        description:
          "Celebrates a student who shows strong interest, confidence, and ability in technology, digital tools, and tech-related discussions.",
        icon: "💻",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s140", "s48", "s62", "s21", "s10", "s188"],
      },
      {
        id: "sr3",
        name: "Most Innovative Thinker",
        description:
          "Honors a student who brings fresh ideas, creative solutions, and forward-thinking contributions to class or group activities.",
        icon: "💡",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s183", "s252", "s100", "s47", "s28", "s39"],
      },
      {
        id: "sr4",
        name: "The Connector Award",
        description:
          "Recognizes a student who naturally brings people together, encourages interaction, and helps strengthen class relationships.",
        icon: "🔗",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s169", "s91", "s7", "s123", "s233", "s104"],
      },
      {
        id: "sr5",
        name: "Most Enterprising Student",
        description:
          "Celebrates a student with business-minded thinking, initiative, drive, and the ability to identify or create opportunities.",
        icon: "🚀",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s177", "s14", "s76", "s23", "s258", "s1"],
      },
      {
        id: "sr6",
        name: "Best Dressed Male",
        description:
          "Recognizes a male student with outstanding style, neatness, confidence, and consistent fashion presence.",
        icon: "👔",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s41", "s14", "s76", "s111", "s230", "s137"],
      },
      {
        id: "sr7",
        name: "Best Dressed Female",
        description:
          "Recognizes a female student with outstanding style, elegance, confidence, and consistent fashion presence.",
        icon: "👗",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s13", "s7", "s59", "s12", "s35", "s119"],
      },
      {
        id: "sr8",
        name: "Most Creative Student",
        description:
          "Honors a student who demonstrates originality, imagination, and creative expression in class activities or personal presentation.",
        icon: "🎨",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s140", "s183", "s252", "s47", "s39", "s230"],
      },
      {
        id: "sr9",
        name: "Most Engaging Class Participant",
        description:
          "Recognizes a student who actively participates, contributes to discussions, and brings positive energy to class interactions.",
        icon: "🙋",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s183", "s217", "s255", "s200", "s83", "s66"],
      },
      {
        id: "sr10",
        name: "Charisma Award",
        description:
          "Celebrates a student with strong presence, confidence, personality, and the ability to leave a memorable impression.",
        icon: "✨",
        isLecturer: false,
        sectionId: "student-recognition",
        nominees: ["s67", "s73", "s179", "s35", "s99", "s123"],
      },
    ],
  },
  {
    id: "lecturer-awards",
    name: "Lecturer Awards",
    subtitle: "Honouring the educators who shaped our journey",
    icon: <BookOpen size={22} />,
    color: "#10B981",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    categories: [
      {
        id: "l1",
        name: "Outstanding Lecturer of the Year",
        description:
          "Recognizes a lecturer who has delivered excellent teaching, strong academic guidance, and outstanding overall impact on students.",
        icon: "🏅",
        isLecturer: true,
        sectionId: "lecturer-awards",
        nominees: ["lec1", "lec5", "lec7", "lec10", "lec18", "lec6"],
      },
      {
        id: "l2",
        name: "Most Impactful Lecturer of the Year",
        description:
          "Honors a lecturer whose teaching, mentorship, and academic support have made a big positive difference to students.",
        icon: "💫",
        isLecturer: true,
        sectionId: "lecturer-awards",
        nominees: ["lec15", "lec9", "lec8", "lec14", "lec10", "lec18"],
      },
      {
        id: "l3",
        name: "Student Choice Lecturer of the Year",
        description:
          "Celebrates the lecturer most appreciated by students for teaching style, accessibility, support, and overall student experience.",
        icon: "❤️",
        isLecturer: true,
        sectionId: "lecturer-awards",
        nominees: ["lec13", "lec1", "lec5", "lec11", "lec18", "lec16"],
      },
    ],
  },
];

// Flatten all categories for step tracking
const ALL_CATEGORIES: VoteCategory[] = VOTE_SECTIONS.flatMap(
  (s) => s.categories,
);

// ─── Avatar / Photo Card ───────────────────────────────────────────────────────

import avatarMap from '../data/avatarMap.json';

const getAvatarUrl = (name: string, seed: string) => {
  const idMatch = seed.match(/^(s\d+|lec\d+)/);
  if (idMatch) {
    const id = idMatch[1];
    // Check if there is a known mapped file for this ID
    const mappedUrl = (avatarMap as Record<string, string>)[id];
    if (mappedUrl) {
      return mappedUrl;
    }
    // Fallback to strict ID naming
    return `/avatars/${id}.jpg`;
  }

  const encoded = encodeURIComponent(seed);
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encoded}&backgroundColor=1E6FD9,1EC7B6,8B5CF6,F59E0B,10B981,EC4899&backgroundType=gradientLinear&fontSize=36&fontWeight=600`;
};

// ─── Nominee Card ─────────────────────────────────────────────────────────────

const NomineeCard = ({
  nominee,
  isSelected,
  onSelect,
  sectionColor,
}: {
  nominee: { id: string; name: string };
  isSelected: boolean;
  onSelect: () => void;
  sectionColor: string;
}) => {
  const [imgError, setImgError] = useState(false);
  const avatarUrl = getAvatarUrl(nominee.name, nominee.id + nominee.name);

  const displayName = nominee.name
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      id={`nominee-${nominee.id}`}
      aria-pressed={isSelected}
      aria-label={`Vote for ${displayName}`}
      className={`relative cursor-pointer rounded-2xl p-0 transition-all duration-300 border-2 flex flex-col items-center text-center overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isSelected
          ? "border-transparent shadow-xl shadow-black/10"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
      }`}
      style={
        isSelected
          ? {
              borderColor: sectionColor,
              boxShadow: `0 8px 30px ${sectionColor}30`,
              background: `linear-gradient(135deg, white 60%, ${sectionColor}08)`,
            }
          : {}
      }
    >
      {/* Selected badge */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-2 right-2 z-20 rounded-full p-0.5"
            style={{ background: sectionColor }}
          >
            <CheckCircle2 size={16} className="text-white fill-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo / Avatar */}
      <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 relative">
        {!imgError ? (
          <img
            src={avatarUrl}
            alt={displayName}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-3xl font-black text-white"
            style={{ background: sectionColor }}
          >
            {displayName
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: `${sectionColor}CC` }}
        >
          <span className="text-white font-black text-sm tracking-wide uppercase">
            {isSelected ? "✓ Selected" : "Vote"}
          </span>
        </div>

        {/* Selected overlay */}
        {isSelected && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: sectionColor }}
          />
        )}
      </div>

      {/* Name */}
      <div className="px-3 py-3 w-full">
        <p
          className={`font-bold text-xs sm:text-sm leading-tight transition-colors ${
            isSelected ? "text-slate-900" : "text-slate-700"
          }`}
          style={isSelected ? { color: sectionColor } : {}}
        >
          {displayName}
        </p>
      </div>
    </motion.button>
  );
};

// ─── Section Header Chip ──────────────────────────────────────────────────────

const SectionChip = ({
  section,
  isActive,
  isComplete,
}: {
  section: VoteSection;
  isActive: boolean;
  isComplete: boolean;
}) => (
  <div
    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
      isActive
        ? "text-white border-transparent shadow-md"
        : isComplete
          ? "border-transparent text-white opacity-80"
          : "bg-white border-slate-200 text-slate-400"
    }`}
    style={
      isActive || isComplete
        ? { background: section.color, borderColor: section.color }
        : {}
    }
  >
    {isComplete && <CheckCircle2 size={12} />}
    <span className="hidden sm:inline">{section.name.split(" ")[0]}</span>
    <span className="sm:hidden">{section.name.split(" ")[0][0]}</span>
  </div>
);

// ─── Confetti ─────────────────────────────────────────────────────────────────

const Confetti = () => {
  const colors = [
    "#F59E0B",
    "#8B5CF6",
    "#10B981",
    "#EC4899",
    "#3B82F6",
    "#EF4444",
  ];
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
    size: 6 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [1, 1, 0],
            rotate: p.rotation + 720,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
          className="absolute top-0"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
};

// ─── Thank You Screen ─────────────────────────────────────────────────────────

const ThankYouScreen = ({ studentName }: { studentName?: string }) => (
  <div className="relative">
    <Confetti />
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="text-center px-8 py-16 max-w-2xl mx-auto"
    >
      {/* Trophy icon */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-8 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #F59E0B, #D97706)",
          boxShadow: "0 20px 60px rgba(245, 158, 11, 0.4)",
        }}
      >
        <Trophy size={52} className="text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
          🎉 Your Vote Has Been Cast!
        </h2>
        {studentName && (
          <p className="text-brand-blue font-black text-xl mb-4">
            Thank you, {studentName.split(" ")[0]}!
          </p>
        )}
        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8 max-w-lg mx-auto">
          Your votes have been submitted successfully. Stay tuned for the
          winners announcement at the{" "}
          <span className="text-brand-blue font-bold">
            MIT Connect &apos;26 Excellence Awards!
          </span>
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {["Student Merit", "Recognition", "Lecturer"].map((s) => (
            <span
              key={s}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 font-bold text-sm"
            >
              <CheckCircle2 size={14} />
              {s} Voted
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-sm">
          <PartyPopper size={16} />
          Watch out for the winners announcement — it's going to be epic!
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// ─── Preview Screen ─────────────────────────────────────────────────────────

const PreviewScreen = ({
  selections,
  onSubmit,
  onBack,
  isSubmitting,
  error,
}: {
  selections: Record<string, string>;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string;
}) => {
  const allNominees = [...LECTURERS, ...STUDENTS];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
      >
        <div className="px-6 sm:px-10 py-8 bg-gradient-to-br from-brand-blue/10 to-blue-500/5 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
            Review Your Votes 📋
          </h2>
          <p className="text-slate-500 font-medium">
            Please take a moment to review your selections before submitting.
          </p>
        </div>

        <div className="px-6 sm:px-10 py-8">
          {error && (
            <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-bold text-sm">
              <AlertCircle size={18} className="flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-8">
            {VOTE_SECTIONS.map((section) => (
              <div key={section.id} className="mb-2">
                <h3
                  className="text-lg font-black border-b border-slate-100 pb-2 mb-4"
                  style={{ color: section.color }}
                >
                  {section.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.categories.map((cat) => {
                    const nomineeId = selections[cat.id];
                    const nominee = allNominees.find((n) => n.id === nomineeId);
                    return (
                      <div
                        key={cat.id}
                        className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1"
                      >
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {cat.name}
                        </span>
                        <span className="text-sm font-black text-slate-700">
                          {nominee ? (
                            nominee.name
                          ) : (
                            <span className="text-slate-400 italic">
                              No selection (Skipped)
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-10 py-6 border-t border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
          <button
            onClick={onBack}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all"
          >
            <ChevronLeft size={18} /> Back to Edit
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm text-white transition-all shadow-md bg-brand-blue hover:bg-blue-600"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Submitting...
              </>
            ) : (
              <>
                Confirm & Submit Votes <Trophy size={16} />
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Main Voting Form ─────────────────────────────────────────────────────────

export const VotingForm = ({
  matricNumber,
  studentName,
}: {
  matricNumber: string;
  studentName?: string;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const currentCategory = ALL_CATEGORIES[currentStep];
  const totalSteps = ALL_CATEGORIES.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Find which section this step belongs to
  const currentSection = VOTE_SECTIONS.find((s) =>
    s.categories.some((c) => c.id === currentCategory.id),
  )!;

  // Compute nominee list
  const baseNominees = useMemo(() => {
    let list = currentCategory.isLecturer ? [...LECTURERS] : [...STUDENTS];

    if (currentCategory.nominees && currentCategory.nominees.length > 0) {
      list = list.filter((p) => currentCategory.nominees!.includes(p.id));
    }

    if (!currentCategory.isLecturer) {
      // Shuffle for fairness (Fisher-Yates)
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory.id]);

  const nominees = useMemo(() => {
    if (!searchQuery.trim()) return baseNominees;
    return baseNominees.filter((n) =>
      n.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [baseNominees, searchQuery]);

  // Scroll to top of grid on step change
  useEffect(() => {
    gridRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Fingerprint logic
  const [fingerprint, setFingerprint] = useState<string>("");

  useEffect(() => {
    fpPromise
      .load()
      .then((fp) => fp.get())
      .then((result) => setFingerprint(result.visitorId));
  }, []);

  const handleSelect = (nomineeId: string) => {
    setSelections((prev) => ({ ...prev, [currentCategory.id]: nomineeId }));
    setError("");
  };

  const handleNext = async (skip = false) => {
    if (!skip && !selections[currentCategory.id]) {
      setError(
        "Please select a nominee before proceeding — every vote counts! 🗳️",
      );
      return;
    }
    setError("");

    const currentSelections = { ...selections };
    if (skip) delete currentSelections[currentCategory.id];

    if (currentStep < totalSteps - 1) {
      // Just advance to the next screen if not on the last step
      if (skip) {
        setSelections(currentSelections);
      }
      setCurrentStep((p) => p + 1);
      setSearchQuery("");
      return;
    }

    // Instead of submitting immediately, show preview screen
    setIsPreviewing(true);
  };

  const handleSubmitVotes = async () => {
    setIsSubmitting(true);
    try {
      // Map IDs to names for storage
      const allNominees = [...LECTURERS, ...STUDENTS];
      const namedSelections = Object.fromEntries(
        Object.entries(selections).map(([catId, nomineeId]) => {
          const nominee = allNominees.find((n) => n.id === nomineeId);
          return [catId, nominee ? nominee.name : nomineeId];
        }),
      );

      const token = localStorage.getItem("grit_token");

      const response = await fetch("/api/votes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fingerprint,
          selections: namedSelections,
        }),
      });

      const data = (await response.json()) as any;

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit vote");
      }

      localStorage.setItem("grit_hasVoted", "true");
      setIsComplete(true);
    } catch (err: unknown) {
      const e = err as Error;
      console.error(e);
      setError(
        e.message ||
          "Oops, couldn't save your vote. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrev = () => {
    setError("");
    if (currentStep > 0) {
      setCurrentStep((p) => p - 1);
      setSearchQuery("");
    }
  };

  // ─── Completion Screen ─────────────────────────────────────────────────────
  if (isComplete) {
    return <ThankYouScreen studentName={studentName} />;
  }

  // ─── Preview Screen ────────────────────────────────────────────────────────
  if (isPreviewing) {
    return (
      <PreviewScreen
        selections={selections}
        onSubmit={handleSubmitVotes}
        onBack={() => setIsPreviewing(false)}
        isSubmitting={isSubmitting}
        error={error}
      />
    );
  }

  // ─── Determine completed sections for chips ────────────────────────────────
  const getSectionProgress = (sectionId: string) => {
    const section = VOTE_SECTIONS.find((s) => s.id === sectionId)!;
    const sectionStepIndices = section.categories.map((c) =>
      ALL_CATEGORIES.findIndex((ac) => ac.id === c.id),
    );
    const lastSectionStep = Math.max(...sectionStepIndices);
    return currentStep > lastSectionStep;
  };

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {/* Section chips */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {VOTE_SECTIONS.map((section) => {
          const isActive = section.id === currentSection.id;
          const isDone = getSectionProgress(section.id);
          const chip = (
            <SectionChip
              section={section}
              isActive={isActive}
              isComplete={isDone}
            />
          );
          return <React.Fragment key={section.id}>{chip}</React.Fragment>;
        })}
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden shadow-inner">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ background: currentSection.color }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {currentSection.name}
          </span>
          <span className="text-xs font-black text-slate-500">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
      </div>

      {/* Main card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 overflow-hidden"
        >
          {/* Category header */}
          <div
            className={`px-6 sm:px-10 py-8 bg-gradient-to-br ${currentSection.bgGradient} border-b border-slate-100`}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
                style={{ background: `${currentSection.color}20` }}
              >
                {currentCategory.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${currentSection.badgeColor}`}
                  >
                    {currentSection.name}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                  {currentCategory.name}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base max-w-2xl">
                  {currentCategory.description}
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-8">
            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-bold text-sm">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    {error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Selected indicator */}
            {selections[currentCategory.id] && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex items-center gap-2 text-sm font-bold"
                style={{ color: currentSection.color }}
              >
                <CheckCircle2 size={16} />
                You've selected:{" "}
                {(() => {
                  const all = [...STUDENTS, ...LECTURERS];
                  const found = all.find(
                    (n) => n.id === selections[currentCategory.id],
                  );
                  return found
                    ? found.name
                        .split(" ")
                        .map(
                          (w) =>
                            w.charAt(0).toUpperCase() +
                            w.slice(1).toLowerCase(),
                        )
                        .join(" ")
                    : "";
                })()}
              </motion.div>
            )}

            {/* Nominee grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 max-h-[480px] overflow-y-auto pr-1 pb-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: `${currentSection.color}40 transparent`,
              }}
            >
              {nominees.length > 0 ? (
                nominees.map((nominee) => {
                  const card = (
                    <NomineeCard
                      nominee={nominee}
                      isSelected={selections[currentCategory.id] === nominee.id}
                      onSelect={() => handleSelect(nominee.id)}
                      sectionColor={currentSection.color}
                    />
                  );
                  return (
                    <React.Fragment key={nominee.id}>{card}</React.Fragment>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-16 text-slate-400 font-medium">
                  <Users className="mx-auto mb-3 opacity-30" size={40} />
                  No results for &quot;{searchQuery}&quot;. Try a different
                  name.
                </div>
              )}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="px-6 sm:px-10 py-6 border-t border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
            <button
              id="prev-category-btn"
              onClick={handlePrev}
              disabled={currentStep === 0 || isSubmitting}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentStep === 0
                  ? "opacity-0 pointer-events-none"
                  : "text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200"
              }`}
            >
              <ChevronLeft size={18} /> Back
            </button>

            <div className="flex items-center gap-3">
              <button
                id="skip-category-btn"
                onClick={() => handleNext(true)}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl font-bold text-sm text-slate-500 hover:bg-white hover:border border-slate-200 transition-all"
              >
                Skip
              </button>
              <motion.button
                id="next-category-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNext(false)}
                disabled={isSubmitting || !selections[currentCategory.id]}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                style={{
                  background: selections[currentCategory.id]
                    ? `linear-gradient(135deg, ${currentSection.color}, ${currentSection.color}cc)`
                    : "#94a3b8",
                  boxShadow: selections[currentCategory.id]
                    ? `0 6px 20px ${currentSection.color}40`
                    : "none",
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Saving...
                  </>
                ) : currentStep === totalSteps - 1 ? (
                  <>
                    Review Votes <ChevronRight size={18} />
                  </>
                ) : (
                  <>
                    Next <ChevronRight size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Category dots mini-nav */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap px-4">
        {ALL_CATEGORIES.map((cat, i) => {
          const section = VOTE_SECTIONS.find((s) =>
            s.categories.some((c) => c.id === cat.id),
          )!;
          return (
            <div
              key={cat.id}
              title={cat.name}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background:
                  i === currentStep
                    ? section.color
                    : selections[cat.id]
                      ? `${section.color}80`
                      : "#e2e8f0",
                transform: i === currentStep ? "scale(1.5)" : "scale(1)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
