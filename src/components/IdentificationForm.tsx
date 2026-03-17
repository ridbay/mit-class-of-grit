import React from "react";
import { UserCheck, User, X } from "lucide-react";

export const IdentificationForm = ({
  onSubmit,
  error,
  onClearError,
  title = "Identify Yourself",
  description = "Please enter your 9-digit Matric Number and Password to proceed.",
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
          inputMode="numeric"
          placeholder="Matric Number (9 digits)"
          required
          maxLength={9}
          onChange={onClearError}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 outline-none transition-all font-bold text-slate-900 ${error ? "border-red-500 bg-red-50" : "border-transparent focus:border-brand-blue focus:bg-white"}`}
        />
      </div>
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
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
