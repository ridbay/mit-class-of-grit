import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Landmark,
  Copy,
  Check,
  Upload,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
  Ticket,
  Sparkles,
} from "lucide-react";

const EARLY_DEADLINE = new Date("2026-07-30T23:59:59");
const FINAL_DEADLINE = new Date("2026-08-31T23:59:59");
const RECEIPT_FORM_URL = "https://forms.gle/svoqYASKAEhqqDNU8";

const BANK_DETAILS = [
  { label: "Account Name", value: "MIT CLASS OF GRIT LTD" },
  { label: "Account Number", value: "1309791262" },
  { label: "Bank", value: "Providus Bank" },
];

const IMPORTANT_NOTES = [
  "Please ensure you pay into the official account stated on this page only.",
  "Use your full name as the payment narration where possible.",
  "After payment, upload your receipt immediately through the receipt upload link.",
  "Payment confirmation may take a short while after receipt submission.",
  "The early payment rate of ₦50,000 ends on 30th July 2026.",
  "From 31st July 2026, the payment amount becomes ₦65,000.",
  "Final payment closes on 31st August 2026.",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const CopyField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-teal/30 hover:shadow-md transition-[border-color,box-shadow] duration-300"
    >
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
          {label}
        </p>
        <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
          {value}
        </p>
      </div>
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-teal hover:border-brand-teal/40 transition-colors duration-300"
      >
        <motion.div
          key={copied ? "check" : "copy"}
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.25 }}
        >
          {copied ? <Check size={18} className="text-brand-teal" /> : <Copy size={18} />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export const PaymentPage = () => {
  const now = new Date();
  const isEarlyWindow = now <= EARLY_DEADLINE;
  const isFinalWindow = now > EARLY_DEADLINE && now <= FINAL_DEADLINE;

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <motion.div
          animate={{ rotate: [0, 8, -8, 0], y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-20 right-6 md:right-16 text-brand-blue/10 pointer-events-none"
        >
          <Ticket size={140} />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/10"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <Sparkles size={14} />
            </motion.span>
            MIT Connect &rsquo;26 Payment &amp; Seat Confirmation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-950"
          >
            Reserve Your Seat for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-emerald-500">
              MIT Connect &rsquo;26
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium space-y-4"
          >
            <p>
              Secure your place at MIT Connect &rsquo;26: Creating
              What&rsquo;s Next? by making your event payment within the
              approved payment window.
            </p>
            <p>
              This payment applies to members and postgraduate students
              attending MIT Connect &rsquo;26.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Amount Windows */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative p-8 sm:p-10 rounded-[2.5rem] border-2 transition-colors duration-300 ${
              isEarlyWindow
                ? "border-brand-teal bg-brand-teal/5 shadow-[0_20px_40px_rgba(30,199,182,0.15)]"
                : "border-slate-200 bg-white opacity-60"
            }`}
          >
            {isEarlyWindow && (
              <motion.span
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-brand-teal text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-md"
              >
                Active Now
              </motion.span>
            )}
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-brand-teal mb-4"
            >
              <Calendar size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Early Payment Window
              </span>
            </motion.div>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              &#8358;50,000
            </h3>
            <p className="text-slate-600 font-medium text-sm sm:text-base mb-2">
              Valid from now until 30th July 2026.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Members and postgraduate students are encouraged to complete
              payment early to secure their seat at the current rate.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative p-8 sm:p-10 rounded-[2.5rem] border-2 transition-colors duration-300 ${
              isFinalWindow
                ? "border-brand-teal bg-brand-teal/5 shadow-[0_20px_40px_rgba(30,199,182,0.15)]"
                : "border-slate-200 bg-white opacity-60"
            }`}
          >
            {isFinalWindow && (
              <motion.span
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-brand-teal text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-md"
              >
                Active Now
              </motion.span>
            )}
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-brand-blue mb-4"
            >
              <Calendar size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Final Payment Window
              </span>
            </motion.div>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              &#8358;65,000
            </h3>
            <p className="text-slate-600 font-medium text-sm sm:text-base mb-2">
              Valid from 31st July 2026 to 31st August 2026.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Payment closes on 31st August 2026.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Bank Payment Details */}
      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card p-8 sm:p-12 border-slate-200/50 bg-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue"
            >
              <Landmark size={24} />
            </motion.div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Bank Payment Details
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm sm:text-base mb-8">
            Please make payment to the official MIT Class of Grit account
            below:
          </p>

          <div className="space-y-4">
            {BANK_DETAILS.map((detail, i) => (
              <CopyField key={i} label={detail.label} value={detail.value} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Upload Receipt */}
      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card p-8 sm:p-12 text-center border-white/20 bg-gradient-to-br from-brand-blue to-brand-teal text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
          >
            <Upload size={28} />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight relative z-10">
            Upload Your Payment Receipt
          </h2>
          <p className="text-white/90 font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
            After making payment, kindly upload your payment receipt using
            the link below for confirmation. Your seat will be confirmed
            after your payment receipt has been uploaded and verified.
          </p>
          <motion.a
            href={RECEIPT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-black py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-shadow relative z-10"
          >
            Upload Payment Receipt <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </section>

      {/* Important Notes */}
      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={22} className="text-brand-teal" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Important Notes
            </h2>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {IMPORTANT_NOTES.map((note, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-teal/30 hover:bg-white hover:shadow-sm transition-[border-color,background-color,box-shadow] duration-300"
              >
                <AlertCircle
                  size={18}
                  className="text-brand-blue flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                  {note}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </div>
  );
};
