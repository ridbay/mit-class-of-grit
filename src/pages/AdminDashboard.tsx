import React, { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Users, TrendingUp, BarChart, Medal, Award, LogOut } from "lucide-react";
import { supabase } from "../lib/supabase";
import { CATEGORIES, STUDENTS } from "../data/constants";

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [nominations, setNominations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const TOTAL_STUDENTS = 260; // From earlier context

  // Check session storage on mount
  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = import.meta.env.VITE_ADMIN_USERNAME;
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === validUser && password === validPass) {
      setIsAuthenticated(true);
      setLoginError("");
      sessionStorage.setItem("admin_auth", "true");
      fetchData();
    } else {
      setLoginError("Invalid credentials.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    sessionStorage.removeItem("admin_auth");
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Need to fetch using service role if RLS blocks anon from selecting all rows.
      // But we are running from client side. If anon cannot select, this will fail.
      // Assuming RLS allows anon SELECT using (true) as set earlier.
      const { data, error: dbError } = await supabase
        .from("nominations")
        .select("*");

      if (dbError) throw dbError;
      setNominations(data || []);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch nomination data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Process data for analytics
  const analytics = useMemo(() => {
    if (!nominations.length) return null;

    const totalVoters = nominations.length;
    const votingPercentage = ((totalVoters / TOTAL_STUDENTS) * 100).toFixed(1);

    // Group votes by category: Record<CategoryName, Record<NomineeName, Count>>
    const votesByCategory: Record<string, Record<string, number>> = {};

    CATEGORIES.forEach((cat) => {
      votesByCategory[cat] = {};
    });

    nominations.forEach((row) => {
      const selections = row.selections || {};
      Object.entries(selections).forEach(([category, nominee]) => {
        if (!nominee || typeof nominee !== "string") return;
        if (!votesByCategory[category]) {
          votesByCategory[category] = {};
        }
        if (!votesByCategory[category][nominee]) {
          votesByCategory[category][nominee] = 0;
        }
        votesByCategory[category][nominee]++;
      });
    });

    // Determine top 3 per category
    const topPerCategory: Record<string, { name: string; votes: number }[]> = {};

    Object.keys(votesByCategory).forEach((cat) => {
      const nomineeCounts = Object.entries(votesByCategory[cat]).map(
        ([name, count]) => ({ name, votes: count })
      );
      // Sort descending
      nomineeCounts.sort((a, b) => b.votes - a.votes);
      topPerCategory[cat] = nomineeCounts.slice(0, 3);
    });

    const votersList = nominations.map((row) => {
      const student = STUDENTS.find((s) => s.matric === row.student_matric);
      return student ? `${student.name} (${row.student_matric})` : row.student_matric;
    });

    return { totalVoters, votingPercentage, topPerCategory, votesByCategory, votersList };
  }, [nominations]);

  if (!isAuthenticated) {
    return (
      <section className="py-32 px-6 min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full glass-card p-10"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center">
              <ShieldAlert size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-black text-center mb-2">Restricted Access</h2>
          <p className="text-slate-500 text-center mb-8 text-sm">
            Please enter the administrator credentials.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold text-center">
                {loginError}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-brand-blue outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-brand-blue outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/90 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 font-display flex items-center gap-3">
              <BarChart className="text-brand-blue" /> Analytics Dashboard
            </h1>
            <p className="text-slate-500 font-medium">Live monitoring of the Class of GRIT nominations.</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="px-6 py-2.5 bg-brand-blue/10 text-brand-blue font-bold rounded-xl hover:bg-brand-blue/20 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Refreshing..." : "Refresh Data"}
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center gap-2"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {error ? (
          <div className="p-6 bg-red-50 text-red-600 rounded-2xl font-bold">{error}</div>
        ) : !analytics ? (
          <div className="p-12 text-center text-slate-400 font-bold">No nominations found yet.</div>
        ) : (
          <>
            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Users size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Voters</p>
                  <p className="text-4xl font-black text-slate-900">{analytics.totalVoters}</p>
                </div>
              </div>
              <div className="glass-card p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Class Turnout</p>
                  <p className="text-4xl font-black text-slate-900">{analytics.votingPercentage}%</p>
                </div>
              </div>
            </div>

            {/* Category Leaderboards */}
            <h2 className="text-2xl font-black mb-6 text-slate-800">Category Leaderboards (Top 3)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(analytics.topPerCategory).map((category) => {
                const top3 = analytics.topPerCategory[category];
                return (
                  <motion.div
                    key={category}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 flex flex-col h-full"
                  >
                    <h3 className="font-bold text-lg text-brand-blue mb-4 leading-tight">{category}</h3>
                    
                    <div className="flex-1 space-y-4">
                      {top3.length === 0 ? (
                        <p className="text-sm text-slate-400 font-medium">No votes yet.</p>
                      ) : (
                        top3.map((nominee, idx) => (
                          <div key={nominee.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                                idx === 0 ? "bg-yellow-100 text-yellow-600" :
                                idx === 1 ? "bg-slate-200 text-slate-500" :
                                "bg-amber-100 text-amber-700"
                              }`}>
                                {idx + 1}
                              </span>
                              <span className="font-bold text-slate-700 text-sm">{nominee.name}</span>
                            </div>
                            <span className="font-black text-brand-teal text-sm bg-brand-teal/10 px-2 py-1 rounded-md">
                              {nominee.votes}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* List of Voters */}
            <div className="mt-16 glass-card p-8">
              <h2 className="text-xl font-black mb-6 text-slate-800 flex items-center gap-2">
                <Users size={24} className="text-brand-blue" />
                Voters ({analytics.totalVoters})
              </h2>
              {analytics.votersList.length === 0 ? (
                <p className="text-slate-500 font-medium">No one has voted yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto pr-2">
                  {analytics.votersList.map((voter, index) => (
                    <div key={index} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700 truncate hover:bg-slate-100 transition-colors">
                      {voter}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Full Breakdown Summary */}
            <div className="mt-16 glass-card p-8">
              <h2 className="text-xl font-black mb-6 text-slate-800">Raw Data Summary</h2>
              <div className="text-sm text-slate-500 font-medium bg-slate-50 p-6 rounded-2xl overflow-x-auto whitespace-pre">
                {JSON.stringify(analytics.votesByCategory, null, 2)}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
