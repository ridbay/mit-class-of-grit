import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  Calendar,
  MapPin,
  Camera,
  MessageSquare,
  Vote,
  CreditCard,
  Clock,
  ChevronRight,
  ChevronLeft,
  Star,
  CheckCircle2,
  Menu,
  X,
  Play,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Share2,
  Filter,
  User,
  UserCheck,
  UserPlus,
  Mail,
  DollarSign,
  Wallet,
  Building,
  BarChart3,
  ArrowUp,
  Sun,
  Moon,
  QrCode,
  HelpCircle,
  ExternalLink,
  Award,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";

// --- Types ---
type Page =
  | "home"
  | "about"
  | "sponsors"
  | "categories"
  | "vote"
  | "gallery"
  | "feedback"
  | "payment"
  | "nominate";

interface Nominee {
  id: string;
  name: string;
  category: string;
  image: string;
}

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnail: string;
  caption: string;
  category: "Photos" | "Videos" | "Highlights";
}

// --- Mock Data ---
const CATEGORIES = [
  "Best Student",
  "Best Project",
  "Most Innovative",
  "Most Creative",
  "Best Leader",
  "Social Media Star",
];

const STUDENTS = [
  { id: "s1", name: "Ridwan Balogun", matric: "123456789" },
  { id: "s2", name: "John Doe", matric: "987654321" },
  { id: "s3", name: "Jane Smith", matric: "111222333" },
  { id: "s4", name: "Alex Johnson", matric: "444555666" },
  { id: "s5", name: "Sarah Williams", matric: "777888999" },
  { id: "s6", name: "David Chen", matric: "121212121" },
  { id: "s7", name: "Emily Brown", matric: "343434343" },
  { id: "s8", name: "Michael Scott", matric: "565656565" },
  { id: "s9", name: "Pam Beesly", matric: "787878787" },
  { id: "s10", name: "Jim Halpert", matric: "909090909" },
  { id: "s11", name: "Dwight Schrute", matric: "112233445" },
  { id: "s12", name: "Angela Martin", matric: "556677889" },
  { id: "s13", name: "Kevin Malone", matric: "998877665" },
  { id: "s14", name: "Oscar Martinez", matric: "443322110" },
  { id: "s15", name: "Stanley Hudson", matric: "135792468" },
];

const NOMINEES: Nominee[] = [
  {
    id: "1",
    name: "Alex Johnson",
    category: "Best Student",
    image: "https://picsum.photos/seed/student1/400/400",
  },
  {
    id: "2",
    name: "Sarah Williams",
    category: "Best Student",
    image: "https://picsum.photos/seed/student2/400/400",
  },
  {
    id: "3",
    name: "David Chen",
    category: "Best Project",
    image: "https://picsum.photos/seed/project1/400/400",
  },
  {
    id: "4",
    name: "Emily Brown",
    category: "Best Project",
    image: "https://picsum.photos/seed/project2/400/400",
  },
  {
    id: "5",
    name: "Michael Scott",
    category: "Most Innovative",
    image: "https://picsum.photos/seed/innov1/400/400",
  },
  {
    id: "6",
    name: "Pam Beesly",
    category: "Most Innovative",
    image: "https://picsum.photos/seed/innov2/400/400",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    quote:
      "The awards night was the highlight of my final year. Seeing everyone's hard work recognized was truly inspiring.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100",
  },
  {
    id: "2",
    name: "Jane Smith",
    quote:
      "A night of elegance and celebration. The department really knows how to put on a show!",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100",
  },
  {
    id: "3",
    name: "Robert Lee",
    quote:
      "I'm so excited for this year's event. The voting process is fair and the atmosphere is electric.",
    rating: 4,
    image: "https://picsum.photos/seed/user3/100/100",
  },
  {
    id: "4",
    name: "Alice Wong",
    quote:
      "Incredible organization and a truly professional academic atmosphere. Highly recommended!",
    rating: 5,
    image: "https://picsum.photos/seed/user4/100/100",
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    url: "https://picsum.photos/seed/event1/800/600",
    thumbnail: "https://picsum.photos/seed/event1/400/300",
    caption: "Grand Opening Ceremony 2025",
    category: "Photos",
  },
  {
    id: "2",
    type: "photo",
    url: "https://picsum.photos/seed/event2/800/600",
    thumbnail: "https://picsum.photos/seed/event2/400/300",
    caption: "Award Presentation",
    category: "Photos",
  },
  {
    id: "3",
    type: "video",
    url: "#",
    thumbnail: "https://picsum.photos/seed/video1/400/300",
    caption: "2025 Highlights Reel",
    category: "Videos",
  },
  {
    id: "4",
    type: "photo",
    url: "https://picsum.photos/seed/event3/800/600",
    thumbnail: "https://picsum.photos/seed/event3/400/300",
    caption: "Student Innovation Showcase",
    category: "Highlights",
  },
  {
    id: "5",
    type: "photo",
    url: "https://picsum.photos/seed/event4/800/600",
    thumbnail: "https://picsum.photos/seed/event4/400/300",
    caption: "Networking Dinner",
    category: "Photos",
  },
  {
    id: "6",
    type: "video",
    url: "#",
    thumbnail: "https://picsum.photos/seed/video2/400/300",
    caption: "Keynote Speech Highlights",
    category: "Videos",
  },
];

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2070",
    title: "Celebrating Academic Excellence",
    subtitle: "Join us for a night of recognition and achievement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069",
    title: "Innovation at its Finest",
    subtitle: "Witness the most groundbreaking projects of the year.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012",
    title: "A Community of Grit",
    subtitle: "Honoring the masters of IT and their journey.",
  },
];

const SPONSORS = [
  { name: "TechCorp", logo: "https://picsum.photos/seed/techcorp/200/100" },
  { name: "InnoSystems", logo: "https://picsum.photos/seed/inno/200/100" },
  { name: "FutureLabs", logo: "https://picsum.photos/seed/future/200/100" },
  { name: "GlobalIT", logo: "https://picsum.photos/seed/global/200/100" },
  { name: "NexusSolutions", logo: "https://picsum.photos/seed/nexus/200/100" },
  { name: "CloudPeak", logo: "https://picsum.photos/seed/cloud/200/100" },
];

const FAQS = [
  {
    q: "How are the winners decided?",
    a: "Winners are decided through a combination of student voting (60%) and a faculty review panel (40%) to ensure both popularity and academic merit are recognized.",
  },
  {
    q: "Can I change my vote after submission?",
    a: "Yes, you can change your selection at any time before the voting deadline by re-identifying yourself and updating your choices.",
  },
  {
    q: "What is the dress code for the night?",
    a: "The dress code is Black Tie / Formal. We encourage everyone to dress their best for this prestigious celebration!",
  },
  {
    q: "Is there a limit to how many tickets I can buy?",
    a: "Each student is eligible for up to 2 tickets (one for themselves and one for a guest). Tickets are limited and sold on a first-come, first-served basis.",
  },
];

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-15T19:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const HeroSlider = ({ onVoteClick }: { onVoteClick: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-teal/80 mix-blend-multiply z-10" />
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter drop-shadow-lg">
            Class of Grit Awards Night <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100 drop-shadow-sm">
              Celebrating Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 font-medium max-w-2xl mx-auto">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="mb-16">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onVoteClick}
              className="btn-primary flex items-center gap-2 px-10 py-4 text-lg drop-shadow-md"
            >
              Vote Now <ChevronRight size={20} />
            </button>
            <button className="px-10 py-4 text-lg font-black text-white hover:text-teal-200 drop-shadow-md transition-colors flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </div> 
              View Highlights
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-12 h-1 rounded-full transition-all ${currentSlide === i ? "bg-brand-teal w-16" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Page Components ---

const SponsorsSection = () => (
  <section className="py-20 overflow-hidden border-y border-white/20 bg-white/30 backdrop-blur-sm relative z-10">
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">
        Our Prestigious Partners
      </h4>
    </div>
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[...SPONSORS, ...SPONSORS].map((s, i) => (
        <div
          key={i}
          className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
        >
          <img
            src={s.logo}
            alt={s.name}
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-black text-slate-400 dark:text-slate-600">
            {s.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const StudentSpotlight = () => {
  const [spotlight, setSpotlight] = useState<Nominee | null>(null);

  useEffect(() => {
    const random = NOMINEES[Math.floor(Math.random() * NOMINEES.length)];
    setSpotlight(random);
  }, []);

  if (!spotlight) return null;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-card overflow-hidden flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative">
          <img
            src={spotlight.image}
            alt={spotlight.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8 bg-brand-teal text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
            Nominee Spotlight
          </div>
        </div>
        <div className="lg:w-1/2 p-12 lg:p-20">
          <span className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-4 block">
            Featured Student
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            Meet {spotlight.name}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed italic">
            "Innovation isn't just about the code; it's about the grit we show
            when the code fails. I'm honored to be nominated for{" "}
            {spotlight.category}."
          </p>
          <div className="flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-900 dark:text-white">
                {spotlight.category} Nominee
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Class of 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title">Common Questions</h2>
        <p className="text-slate-500">
          Everything you need to know about the Awards Night.
        </p>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
            >
              <span className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-4">
                <HelpCircle className="text-brand-blue" size={20} /> {faq.q}
              </span>
              <div
                className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              >
                <ChevronRight size={20} className="text-slate-400" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const ResultsDashboard = ({
  globalVotes,
}: {
  globalVotes: Record<string, Record<string, number>>;
}) => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const chartData = NOMINEES.filter((n) => n.category === activeCategory).map(
    (n) => ({
      name: n.name,
      votes: globalVotes[activeCategory]?.[n.id] || 0,
    }),
  );

  const COLORS = ["#0066FF", "#00D1FF", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="glass-card p-8 border-slate-100 dark:border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">
            Live Voting Analytics
          </h4>
          <p className="text-sm text-slate-400">
            Real-time distribution of votes across categories.
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-brand-blue text-white shadow-lg" : "bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-[400px]">
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  fontWeight: 800,
                }}
                cursor={{ fill: "rgba(0, 102, 255, 0.05)" }}
              />
              <Bar dataKey="votes" radius={[10, 10, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="votes"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const DigitalTicket = ({ name, matric }: { name: string; matric: string }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="relative max-w-md mx-auto"
  >
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
      <div className="bg-brand-blue p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex justify-between items-start mb-8">
          <img src="/MIT_Logo.png" alt="MIT Logo" className="w-10 h-10 object-contain drop-shadow" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
            Official Ticket
          </span>
        </div>
        <h3 className="text-2xl font-black mb-1">Class of Grit</h3>
        <p className="text-xs font-bold opacity-80 uppercase tracking-widest">
          Awards Night 2026
        </p>
      </div>

      <div className="p-8 space-y-8 relative">
        <div className="flex justify-between gap-4">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Attendee
            </p>
            <p className="font-black text-slate-900 dark:text-white">{name}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Matric No.
            </p>
            <p className="font-black text-slate-900 dark:text-white">
              {matric}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Date
            </p>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              May 15, 2026
            </p>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Time
            </p>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              19:00 PM
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
            <QrCode size={80} className="text-slate-900 dark:text-white" />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Scan at Entrance
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 text-center">
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
          Non-Transferable • Valid for 1 Entry
        </p>
      </div>
    </div>

    <button className="mt-8 w-full btn-primary py-4 flex items-center justify-center gap-2">
      Download PDF <ExternalLink size={18} />
    </button>
  </motion.div>
);

const IdentificationForm = ({
  onSubmit,
  error,
  onClearError,
  title = "Identify Yourself",
  description = "Please enter your 9-digit Matric Number and Middle Name to proceed.",
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  onClearError: () => void;
  title?: string;
  description?: string;
}) => (
  <div className="max-w-md mx-auto glass-card p-12 text-center">
    <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
      <UserCheck className="text-brand-blue" size={40} />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 mb-8">{description}</p>
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          name="matric"
          type="text"
          placeholder="Matric Number (9 digits)"
          required
          maxLength={9}
          onChange={onClearError}
          className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 outline-none transition-all font-bold text-slate-900 ${error ? "border-red-500 bg-red-50" : "border-transparent focus:border-brand-blue focus:bg-white"}`}
        />
      </div>
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          name="middleName"
          type="text"
          placeholder="Middle Name"
          required
          onChange={onClearError}
          className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 outline-none transition-all font-bold text-slate-900 ${error ? "border-red-500 bg-red-50" : "border-transparent focus:border-brand-blue focus:bg-white"}`}
        />
      </div>
      {error && (
        <p className="text-xs font-bold text-red-500 mt-2 flex items-center justify-center gap-1">
          <X size={12} /> {error}
        </p>
      )}
      <button
        type="submit"
        className="w-full btn-primary py-4 text-lg shadow-xl shadow-brand-blue/20"
      >
        Proceed
      </button>
    </form>
  </div>
);

const NominatePage = ({
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

const AboutPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4"
      >
        Our Story
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-title"
      >
        About the Event
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto"
      >
        The Class of Grit Awards Night is an evening dedicated to celebrating the brilliant minds, hard work, and unyielding determination of our IT students.
      </motion.p>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-12 mb-16 flex flex-col lg:flex-row gap-12 items-center"
    >
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-black text-slate-900">A Journey of Excellence</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Since its inception, the Class of Grit has been a testament to what students can achieve when they combine technical prowess with pure determination. This event brings together students, faculty, alumni, and industry leaders to recognize those who have pushed boundaries in technology and innovation.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium">
          Through rigorous coursework, groundbreaking projects, and countless sleepless nights, our students have shown what it takes to be true Masters of IT. Tonight, we celebrate their journey.
        </p>
      </div>
      <div className="flex-1 w-full">
         <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070" className="rounded-3xl shadow-xl object-cover h-80 w-full" alt="About Event" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      <div className="glass-card p-8 bg-blue-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-blue mb-2">500+</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Attendees</p>
      </div>
      <div className="glass-card p-8 bg-teal-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-teal mb-2">15</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Award Categories</p>
      </div>
      <div className="glass-card p-8 bg-blue-50/50 hover:-translate-y-2 transition-transform">
         <h4 className="text-5xl font-black text-brand-blue mb-2">1</h4>
         <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Unforgettable Night</p>
      </div>
    </motion.div>
  </section>
);

const SponsorsPage = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block py-2 px-4 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-widest mb-4"
      >
        Our Partners
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-title"
      >
        Event Sponsors
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto"
      >
        We are incredibly grateful to the organizations that make the Class of Grit Awards Night possible. Their commitment to fostering new tech talent is deeply appreciated.
      </motion.p>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      {SPONSORS.map((s, i) => (
        <div key={i} className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform cursor-pointer">
          <img src={s.logo} alt={s.name} className="w-24 h-24 object-contain mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
          <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{s.name}</h4>
        </div>
      ))}
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-20 glass-card p-12 text-center bg-gradient-to-br from-brand-blue to-brand-teal text-white border-0"
    >
      <h3 className="text-3xl font-black mb-4 text-white">Become a Sponsor</h3>
      <p className="max-w-xl mx-auto mb-8 text-white/90 font-medium">
        Interested in supporting the next generation of IT leaders? We offer various sponsorship packages giving you excellent visibility among top graduate talent.
      </p>
      <button className="bg-white text-brand-blue font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all hover:scale-105 active:scale-95 shadow-md">
        Download Sponsor Pack
      </button>
    </motion.div>
  </section>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [matricNumber, setMatricNumber] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [galleryFilter, setGalleryFilter] = useState<
    "Photos" | "Videos" | "Highlights"
  >("Photos");
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [matricError, setMatricError] = useState("");
  const [globalVotes, setGlobalVotes] = useState<
    Record<string, Record<string, number>>
  >({});
  const [ipVoted, setIpVoted] = useState(false);
  const [deviceVoted, setDeviceVoted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("grit_theme") === "dark" ||
        (!localStorage.getItem("grit_theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("grit_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("grit_theme", "light");
    }
  }, [isDarkMode]);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check IP and Device status
  useEffect(() => {
    // Device check
    const hasVoted = localStorage.getItem("grit_has_voted_device");
    if (hasVoted === "true") {
      setDeviceVoted(true);
      setIsSubmitted(true);
    }

    // IP check
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

  // Initialize simulated global votes
  useEffect(() => {
    const savedGlobal = localStorage.getItem("grit_global_votes");
    if (savedGlobal) {
      setGlobalVotes(JSON.parse(savedGlobal));
    } else {
      // Initial mock data
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

  useEffect(() => {
    const savedMatric = localStorage.getItem("grit_matric");
    const savedMiddle = localStorage.getItem("grit_middle_name");
    if (savedMatric && savedMiddle) {
      setMatricNumber(savedMatric);
      setMiddleName(savedMiddle);
      const savedVotes = localStorage.getItem(
        `grit_votes_${savedMatric}_${savedMiddle}`,
      );
      if (savedVotes) setVotes(JSON.parse(savedVotes));
    }
  }, []);

  const handleIdentify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const matric = (formData.get("matric") as string).trim();
    const middle = (formData.get("middleName") as string).trim();

    // Validation: Exactly 9 digits
    const matricRegex = /^\d{9}$/;

    if (!matricRegex.test(matric)) {
      setMatricError("Matric number must be exactly 9 digits.");
      return;
    }

    if (!middle) {
      setMatricError("Middle name is required.");
      return;
    }

    setMatricError("");
    setMatricNumber(matric);
    setMiddleName(middle);
    localStorage.setItem("grit_matric", matric);
    localStorage.setItem("grit_middle_name", middle);
    const savedVotes = localStorage.getItem(`grit_votes_${matric}_${middle}`);
    setVotes(savedVotes ? JSON.parse(savedVotes) : {});
  };

  const handleVote = (category: string, nomineeId: string) => {
    if (!matricNumber || !middleName) return;
    const newVotes = { ...votes, [category]: nomineeId };
    setVotes(newVotes);
    localStorage.setItem(
      `grit_votes_${matricNumber}_${middleName}`,
      JSON.stringify(newVotes),
    );
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus("processing");
    setTimeout(() => setPaymentStatus("success"), 2000);
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 group"
          >
            <img src="/MIT_Logo.png" alt="MIT Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow" />
            <div className="flex flex-col items-start leading-none">
              <span className="font-black text-lg tracking-tighter text-slate-900 dark:text-white">
                CLASS OF <span className="text-brand-blue">GRIT</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Masters of IT
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "categories", label: "Awards" },
              { id: "vote", label: "Voting" },
              { id: "gallery", label: "Gallery" },
              { id: "sponsors", label: "Sponsors" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as Page)}
                className={`nav-link whitespace-nowrap ${currentPage === item.id ? "nav-link-active" : ""}`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => navigate("payment")}
              className="btn-primary py-2 px-6 text-sm"
            >
              Get Tickets
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "categories", label: "Awards" },
                  { id: "vote", label: "Voting" },
                  { id: "gallery", label: "Gallery" },
                  { id: "sponsors", label: "Sponsors" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id as Page)}
                    className={`text-left text-lg font-bold ${currentPage === item.id ? "text-brand-blue" : "text-slate-600 dark:text-slate-400"}`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => navigate("payment")}
                  className="btn-primary w-full"
                >
                  Get Tickets
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HeroSlider onVoteClick={() => navigate("vote")} />

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
                        target: "categories",
                      },
                      {
                        icon: <Camera />,
                        title: "Memorable Moments",
                        desc: "Capturing the spirit of our academic journey.",
                        target: "gallery",
                      },
                      {
                        icon: <Vote />,
                        title: "Your Voice Matters",
                        desc: "Participate in our strict-mode voting system.",
                        target: "vote",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        onClick={() => navigate(item.target as Page)}
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
          )}

          {currentPage === "categories" && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20 px-6 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="section-title">Award Categories</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Discover the prestigious awards we present to our outstanding
                  students and projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CATEGORIES.map((category) => (
                  <div
                    key={category}
                    className="bg-white p-10 rounded-[2.5rem] border border-brand-teal/20 text-center group hover:shadow-[0_20px_40px_rgba(30,199,182,0.15)] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-[2rem] flex items-center justify-center text-brand-teal mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-inner">
                      <Trophy size={44} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">
                      {category}
                    </h3>
                    <p className="text-slate-500 mb-6">
                      Recognizing excellence and dedication in the field of{" "}
                      {category.toLowerCase()}.
                    </p>
                    <button
                      onClick={() => navigate("vote")}
                      className="text-brand-teal font-black uppercase tracking-widest text-xs flex items-center gap-2 mx-auto group-hover:gap-4 transition-all"
                    >
                      View Nominees <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20 px-6 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="section-title">Moments of Grit</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Relive the highlights of our past celebrations and academic
                  milestones.
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-2">
                {["Photos", "Videos", "Highlights"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setGalleryFilter(f as any)}
                    className={`px-8 py-2 rounded-full font-bold transition-all ${galleryFilter === f ? "bg-brand-blue text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GALLERY_ITEMS.filter(
                  (item) => item.category === galleryFilter,
                ).map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      borderRadius: "1.5rem",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      {/* Share Buttons */}
                      <div className="absolute top-6 right-6 flex gap-2 opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        {[
                          {
                            icon: <Twitter size={14} />,
                            color: "bg-sky-500",
                            label: "Twitter",
                          },
                          {
                            icon: <Facebook size={14} />,
                            color: "bg-blue-600",
                            label: "Facebook",
                          },
                          {
                            icon: <Linkedin size={14} />,
                            color: "bg-blue-700",
                            label: "LinkedIn",
                          },
                          {
                            icon: <Share2 size={14} />,
                            color: "bg-slate-700",
                            label: "Share",
                          },
                        ].map((btn, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              // In a real app, this would trigger a share dialog
                              console.log(
                                `Sharing "${item.caption}" to ${btn.label}`,
                              );
                            }}
                            className={`${btn.color} text-white p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg border border-white/20`}
                            title={`Share on ${btn.label}`}
                          >
                            {btn.icon}
                          </button>
                        ))}
                      </div>

                      <div className="text-white drop-shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type === "video" ? (
                            <Play
                              size={16}
                              className="fill-brand-teal text-brand-teal"
                            />
                          ) : (
                            <Camera size={16} className="text-brand-teal" />
                          )}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold">{item.caption}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {currentPage === "sponsors" && (
            <motion.div
              key="sponsors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <SponsorsPage />
            </motion.div>
          )}

          {currentPage === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20 px-6 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="section-title">Student Voices</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Hear from our students about their experiences and the impact
                  of the Class of Grit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                  <motion.div
                    key={t.id}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-white rounded-[2rem] border border-white/60 p-10 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-[0_10px_30px_rgba(30,111,217,0.06)] hover:shadow-[0_20px_40px_rgba(30,199,182,0.12)] transition-shadow"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 rounded-3xl object-cover shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < t.rating
                                ? "fill-brand-teal text-brand-teal"
                                : "text-slate-200"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 italic mb-6 leading-relaxed">
                        "{t.quote}"
                      </p>
                      <h4 className="text-lg font-bold text-slate-900">
                        {t.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                        Verified Student
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === "nominate" && (
            <motion.div
              key="nominate"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <NominatePage
                matricNumber={matricNumber}
                middleName={middleName}
                handleIdentify={handleIdentify}
                matricError={matricError}
                setMatricError={setMatricError}
                onLogout={() => {
                  setMatricNumber("");
                  setMiddleName("");
                  localStorage.removeItem("grit_matric");
                  localStorage.removeItem("grit_middle_name");
                }}
              />
            </motion.div>
          )}

          {currentPage === "vote" && (
            <motion.div
              key="vote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20 px-6 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4">
                  Strict Mode Enabled
                </span>
                <h2 className="section-title">Vote for Nominees</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  One vote per category. Your selection is final once submitted.
                </p>

                {matricNumber && middleName && (
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-4 py-2 rounded-full border border-brand-teal/20">
                      Voting as: {middleName} ({matricNumber})
                    </span>
                    <button
                      onClick={() => {
                        setMatricNumber("");
                        setMiddleName("");
                        localStorage.removeItem("grit_matric");
                        localStorage.removeItem("grit_middle_name");
                      }}
                      className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                    >
                      Change Details
                    </button>
                  </div>
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
                <>
                  <div className="space-y-20">
                    {CATEGORIES.map((category) => (
                      <div key={category}>
                        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                          <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                            <Trophy className="text-brand-blue" /> {category}
                          </h3>
                          {votes[category] && (
                            <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                              <CheckCircle2 size={18} /> Vote Recorded
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                      ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                                      : "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                                }}
                                className={`group relative p-6 rounded-[2.5rem] border-2 transition-all duration-300 ${
                                  votes[category] === nominee.id
                                    ? "border-brand-blue bg-brand-blue/5 z-10"
                                    : votes[category]
                                      ? "border-slate-100 opacity-50 grayscale"
                                      : "border-slate-100 hover:border-brand-teal cursor-pointer"
                                }`}
                              >
                                <div className="flex items-center gap-6">
                                  <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg relative">
                                    <img
                                      src={nominee.image}
                                      alt={nominee.name}
                                      className="w-full h-full object-cover"
                                      referrerPolicy="no-referrer"
                                    />
                                    <AnimatePresence>
                                      {votes[category] === nominee.id && (
                                        <motion.div
                                          initial={{ opacity: 0, scale: 0.5 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          exit={{ opacity: 0, scale: 0.5 }}
                                          className="absolute inset-0 bg-brand-blue/40 flex items-center justify-center backdrop-blur-[2px]"
                                        >
                                          <motion.div
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                          >
                                            <CheckCircle2
                                              className="text-white"
                                              size={32}
                                            />
                                          </motion.div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                  <div className="flex-grow">
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                                      {nominee.name}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4">
                                      Nominee for {category}
                                    </p>
                                    <AnimatePresence mode="wait">
                                      {votes[category] === nominee.id ? (
                                        <motion.div
                                          key="selected"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          className="flex items-center gap-2"
                                        >
                                          <span className="text-xs font-black text-brand-blue uppercase tracking-widest">
                                            Selected
                                          </span>
                                          <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                                        </motion.div>
                                      ) : (
                                        <motion.button
                                          key="select"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          className="text-xs font-bold text-brand-blue group-hover:underline flex items-center gap-1"
                                        >
                                          {votes[category]
                                            ? "Change Selection"
                                            : "Cast Vote"}{" "}
                                          <ChevronRight size={14} />
                                        </motion.button>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </div>

                                {/* Selection Ring Effect */}
                                {votes[category] === nominee.id && (
                                  <motion.div
                                    layoutId={`ring-${category}`}
                                    className="absolute -inset-1 border-2 border-brand-blue rounded-[2.6rem] pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30,
                                    }}
                                  />
                                )}
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-20 text-center">
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
                </>
              )}
            </motion.div>
          )}

          {currentPage === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20 px-6 max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="section-title">Secure Your Ticket</h2>
                <p className="text-slate-500">
                  Join us for an unforgettable night of celebration.
                </p>
              </div>

              <div className="glass-card p-8 md:p-12">
                {paymentStatus === "success" ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-emerald-200">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                      Payment Successful!
                    </h3>
                    <p className="text-slate-500 mb-12 max-w-md mx-auto">
                      Your ticket has been generated. Please save your digital
                      ticket for entry.
                    </p>

                    <DigitalTicket
                      name={middleName || "Guest"}
                      matric={matricNumber || "N/A"}
                    />

                    <div className="mt-12">
                      <button
                        onClick={() => navigate("home")}
                        className="text-slate-400 font-bold hover:text-brand-blue transition-colors"
                      >
                        Return Home
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handlePayment} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <User size={14} /> Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Mail size={14} /> Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <DollarSign size={14} /> Amount
                        </label>
                        <div className="relative">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                            $
                          </span>
                          <input
                            disabled
                            type="text"
                            value="45.00"
                            className="w-full bg-white border-2 border-slate-100 rounded-2xl px-10 py-4 font-black text-slate-900 shadow-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Wallet size={14} /> Payment Method
                        </label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all appearance-none font-bold text-slate-700">
                          <option>Credit / Debit Card</option>
                          <option>Mobile Payment</option>
                          <option>Bank Transfer</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={paymentStatus === "processing"}
                        className="btn-primary w-full py-5 text-lg shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3"
                      >
                        {paymentStatus === "processing" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing Securely...
                          </>
                        ) : (
                          <>
                            Complete Payment <CreditCard size={20} />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-8 opacity-40 grayscale pt-4">
                      <CreditCard size={32} />
                      <Wallet size={32} />
                      <Building size={32} />
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img src="/MIT_Logo.png" alt="MIT Logo" className="w-12 h-12 object-contain drop-shadow" />
                <div className="flex flex-col items-start leading-none">
                  <span className="font-black text-xl tracking-tighter">
                    CLASS OF <span className="text-brand-teal">GRIT</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                    Masters of IT
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-10 font-medium leading-relaxed">
                Celebrating the resilience, innovation, and excellence of our
                department's finest. Join us in honoring the masters of IT.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8">
                Navigation
              </h4>
              <ul className="space-y-4 font-bold">
                {["Home", "About", "Sponsors", "Gallery", "Vote", "Payment"].map(
                  (link) => (
                    <li key={link}>
                      <button
                        onClick={() => navigate(link.toLowerCase() as Page)}
                        className="hover:text-brand-teal transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8">
                Contact
              </h4>
              <ul className="space-y-4 font-bold text-slate-400">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-teal" />{" "}
                  awards@classofgrit.edu
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-brand-teal" /> IT Building,
                  Room 402
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <p>© 2026 Class of Grit Department. All rights reserved.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-white dark:bg-slate-800 text-brand-blue rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp
              size={24}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
