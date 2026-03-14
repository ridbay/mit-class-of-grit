import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUp,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { NominatePage } from "./pages/NominatePage";
import { VotePage } from "./pages/VotePage";
import { PaymentPage } from "./pages/PaymentPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/MIT_Logo.png"
            alt="MIT Logo"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="font-black text-lg tracking-tighter text-slate-900 dark:text-white">
              CLASS OF <span className="text-brand-blue">GRIT</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Masters of IT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/categories", label: "Awards" },
            { path: "/vote", label: "Voting" },
            { path: "/gallery", label: "Gallery" },
            { path: "/sponsors", label: "Sponsors" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link whitespace-nowrap ${currentPath === item.path ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/payment"
            className="btn-primary py-2 px-6 text-sm"
          >
            Get Tickets
          </Link>
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
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/categories", label: "Awards" },
                { path: "/vote", label: "Voting" },
                { path: "/gallery", label: "Gallery" },
                { path: "/sponsors", label: "Sponsors" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left text-lg font-bold ${currentPath === item.path ? "text-brand-blue" : "text-white hover:text-white/80"}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/payment"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center py-3 block"
              >
                Get Tickets
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/MIT_Logo.png"
                alt="MIT Logo"
                className="w-12 h-12 object-contain drop-shadow"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="font-black text-xl tracking-tighter">
                  CLASS OF <span className="text-brand-teal">GRIT</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  Masters of IT
                </span>
              </div>
            </div>
            <p className="text-white max-w-sm mb-10 font-medium leading-relaxed">
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
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/sponsors", label: "Sponsors" },
                { path: "/gallery", label: "Gallery" },
                { path: "/vote", label: "Vote" },
                { path: "/payment", label: "Payment" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auth State for Voting & Nomination
  const [matricNumber, setMatricNumber] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [matricError, setMatricError] = useState("");

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hydrate auth
  useEffect(() => {
    const savedMatric = localStorage.getItem("grit_matric");
    const savedMiddle = localStorage.getItem("grit_middle_name");
    if (savedMatric && savedMiddle) {
      setMatricNumber(savedMatric);
      setMiddleName(savedMiddle);
    }
  }, []);

  const handleIdentify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const matric = (formData.get("matric") as string).trim();
    const middle = (formData.get("middleName") as string).trim();

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
  };

  const handleLogout = () => {
    setMatricNumber("");
    setMiddleName("");
    localStorage.removeItem("grit_matric");
    localStorage.removeItem("grit_middle_name");
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route
                path="/nominate"
                element={
                  <NominatePage
                    matricNumber={matricNumber}
                    middleName={middleName}
                    handleIdentify={handleIdentify}
                    matricError={matricError}
                    setMatricError={setMatricError}
                    onLogout={handleLogout}
                  />
                }
              />
              <Route
                path="/vote"
                element={
                  <VotePage
                    matricNumber={matricNumber}
                    middleName={middleName}
                    handleIdentify={handleIdentify}
                    matricError={matricError}
                    setMatricError={setMatricError}
                    onLogout={handleLogout}
                  />
                }
              />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

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
    </Router>
  );
}
