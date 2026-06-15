import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { IdentificationForm } from "../components/IdentificationForm";
import { NominationForm } from "../components/NominationForm";

export const NominatePage = ({
  matricNumber,
  studentName,
  password,
  handleIdentify,
  matricError,
  setMatricError,
  onLogout,
}: {
  matricNumber: string;
  studentName?: string;
  password?: string;
  handleIdentify: (e: React.FormEvent<HTMLFormElement>) => void;
  matricError: string;
  setMatricError: (err: string) => void;
  onLogout: () => void;
}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [finalSelections, setFinalSelections] = useState<Record<string, string>>({});
  const [isResetting, setIsResetting] = useState(false);
  const [deviceLockError, setDeviceLockError] = useState(false);

  // Check device lock on login and grab device info
  useEffect(() => {
    if (!matricNumber) return;

    const checkLock = async () => {
      try {
        let deviceId = localStorage.getItem("grit_device_id");
        
        // If no device ID, generate one
        if (!deviceId) {
          deviceId = crypto.randomUUID();
          localStorage.setItem("grit_device_id", deviceId);
        }
        
        // Always ensure we have device info captured locally
        let deviceInfoStr = localStorage.getItem("grit_device_info");
        if (!deviceInfoStr) {
          try {
            const res = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            const deviceInfo = {
              ip: data.ip,
              userAgent: navigator.userAgent,
              language: navigator.language,
              screen: `${window.screen.width}x${window.screen.height}`,
              timestamp: new Date().toISOString()
            };
            localStorage.setItem("grit_device_info", JSON.stringify(deviceInfo));
          } catch (e) {
            console.error("Failed to fetch IP info", e);
          }
        }

        // 1. Fetch from device_logs instead of nominations
        const { data } = await supabase
          .from("device_logs")
          .select("device_id")
          .eq("student_matric", matricNumber)
          .maybeSingle();

        if (data) {
          // If a record exists, check if the device ID matches
          if (data.device_id !== deviceId) {
            setDeviceLockError(true);
          } else {
            setDeviceLockError(false);
          }
        } else {
          // If no record exists, this is the first login. Lock it instantly!
          const deviceInfoStr = localStorage.getItem("grit_device_info");
          const deviceInfo = deviceInfoStr ? JSON.parse(deviceInfoStr) : {};
          
          const { error: insertError } = await supabase.from("device_logs").insert({
            student_matric: matricNumber,
            device_id: deviceId,
            ip_address: deviceInfo.ip || null,
            user_agent: deviceInfo.userAgent || null,
          });

          if (insertError) {
            console.error("Failed to insert device log:", insertError);
          }
          
          setDeviceLockError(false);
        }
      } catch (err) {
        console.error("Device check failed", err);
      }
    };
    checkLock();
  }, [matricNumber]);

  const handleStartOver = () => {
    setIsResetting(true);
    // We don't wipe the DB anymore. We just let them go through the form again.
    // Their new choices will merge with their existing records.
    setFinalSelections({});
    setIsComplete(false);
    setIsResetting(false);
  };

  if (!matricNumber) {
    return (
      <section className="py-24 px-6 min-h-screen bg-slate-50 flex items-center justify-center">
        <IdentificationForm
          onSubmit={handleIdentify}
          error={matricError}
          onClearError={() => setMatricError("")}
          title="Unlock Your Ballot"
          description="Drop your Name and Matric Number below to unlock your nomination powers."
          hidePassword={true}
        />
      </section>
    );
  }

  if (deviceLockError) {
    return (
      <section className="py-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 max-w-lg border-red-500/20 shadow-2xl shadow-red-500/10"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">Device Locked</h2>
          <p className="text-slate-600 mb-8 font-medium">
            This Matric Number has already been used to nominate from another device or browser. To prevent impersonation, you can only vote from the original device you started with.
          </p>
          <button
            onClick={onLogout}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
          >
            Go Back
          </button>
        </motion.div>
      </section>
    );
  }

  if (isComplete) {
    return (
      <section className="py-24 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-16 max-w-2xl border-brand-teal/20 shadow-2xl shadow-brand-teal/10"
        >
          <div className="w-24 h-24 bg-brand-teal/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 text-brand-teal">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display">
            Nominations Complete!
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
            Thank you for submitting your nominations. Your voice matters in recognizing the best among us.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-12 text-left max-h-[400px] overflow-y-auto">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Your Selections</h3>
            <div className="flex flex-col gap-4">
              {Object.entries(finalSelections).map(([category, nomineeName]) => (
                <div key={category} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm gap-2">
                  <span className="text-sm font-bold text-slate-700">{category}</span>
                  <span className="text-sm font-black text-brand-blue">{nomineeName}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 bg-slate-100 px-8 py-4 rounded-full border border-slate-200">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold">
                {studentName ? studentName.charAt(0).toUpperCase() : "S"}
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Identified as</div>
                <div className="font-bold text-slate-900">
                  {studentName || "Student"} <span className="text-brand-blue">({matricNumber})</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={handleStartOver}
                disabled={isResetting}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
              >
                {isResetting ? "Resetting..." : "Start All Over"}
              </button>
              <button
                onClick={onLogout}
                className="px-8 py-4 border-2 border-slate-200 text-slate-500 rounded-full font-bold hover:bg-slate-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-lg">
            {studentName ? studentName.charAt(0).toUpperCase() : "S"}
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">Nominating As</p>
            <p className="font-bold text-slate-900 text-sm md:text-base">
              {studentName || "Student"} <span className="text-brand-blue">({matricNumber})</span>
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="text-xs font-black text-slate-400 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors uppercase tracking-widest"
        >
          Logout
        </button>
      </div>
      <NominationForm
        matricNumber={matricNumber}
        onComplete={(selections) => {
          setFinalSelections(selections);
          setIsComplete(true);
        }}
      />
    </section>
  );
};
