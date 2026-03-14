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
    <motion.div
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
                onClick={() => navigate("/")}
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
  );
};
