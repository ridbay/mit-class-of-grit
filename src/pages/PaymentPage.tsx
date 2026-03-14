import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, User, Mail, DollarSign, Wallet, CreditCard, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DigitalTicket } from "../components/DigitalTicket";

export const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success">("idle");
  const matricNumber = localStorage.getItem("grit_matric");
  const middleName = localStorage.getItem("grit_middle_name");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus("processing");
    setTimeout(() => setPaymentStatus("success"), 2000);
  };

  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm border border-brand-blue/20">
              Checkout
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl"
          >
            Secure Your Ticket
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed mt-6 font-medium"
          >
            Join us for an unforgettable night of celebration.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-10 md:p-14 shadow-2xl shadow-brand-blue/5 border-white/60 relative overflow-hidden"
        >
          {paymentStatus === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-brand-teal to-[#15a89a] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-brand-teal/30 border-4 border-white">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Payment Successful!
              </h3>
              <p className="text-slate-600 mb-12 max-w-md mx-auto text-lg leading-relaxed font-medium">
                Your ticket has been generated. Please save your digital
                ticket for entry.
              </p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DigitalTicket
                  name={middleName || "Guest"}
                  matric={matricNumber || "N/A"}
                />
              </motion.div>

              <div className="mt-16">
                <button
                  onClick={() => navigate("/")}
                  className="bg-slate-50 text-brand-blue font-bold px-8 py-4 rounded-full hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md border border-slate-100"
                >
                  Return to Homepage
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handlePayment} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                    <User size={14} className="text-brand-blue" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue focus:bg-white focus:shadow-[0_0_0_4px_rgba(30,111,217,0.1)] transition-all font-bold text-slate-900 placeholder:font-medium placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                    <Mail size={14} className="text-brand-blue" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue focus:bg-white focus:shadow-[0_0_0_4px_rgba(30,111,217,0.1)] transition-all font-bold text-slate-900 placeholder:font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                    <DollarSign size={14} className="text-brand-teal" /> Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-brand-teal text-xl">
                      $
                    </span>
                    <input
                      disabled
                      type="text"
                      value="45.00"
                      className="w-full bg-slate-50/80 border-2 border-slate-200/60 rounded-2xl px-12 py-4 font-black text-slate-900 shadow-inner text-xl opacity-80"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                    <Wallet size={14} className="text-brand-blue" /> Payment Method
                  </label>
                  <select className="w-full bg-white/50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue focus:bg-white focus:shadow-[0_0_0_4px_rgba(30,111,217,0.1)] transition-all appearance-none font-bold text-slate-900 h-[60px]">
                    <option>Credit / Debit Card</option>
                    <option>Mobile Payment</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100/60">
                <button
                  type="submit"
                  disabled={paymentStatus === "processing"}
                  className="btn-primary w-full py-6 text-xl shadow-[0_20px_40px_rgba(30,111,217,0.2)] flex items-center justify-center gap-4 group"
                >
                  {paymentStatus === "processing" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Securely...
                    </>
                  ) : (
                    <>
                      Complete Payment <CreditCard size={24} className="group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-10 opacity-30 grayscale pt-6">
                <CreditCard size={36} className="hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer hover:scale-110" />
                <Wallet size={36} className="hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer hover:scale-110" />
                <Building size={36} className="hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer hover:scale-110" />
              </div>
            </form>
          )}

          {/* Decorative background blurs inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};
