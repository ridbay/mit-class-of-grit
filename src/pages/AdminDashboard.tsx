import React, { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Users, TrendingUp, BarChart, Medal, Award, LogOut } from "lucide-react";
import { supabase } from "../lib/supabase";
import { CATEGORIES, CATEGORY_GROUPS, STUDENTS } from "../data/constants";

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [nominations, setNominations] = useState<any[]>([]);
  const [deviceLogs, setDeviceLogs] = useState<any[]>([]);
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
      const [nomsRes, logsRes] = await Promise.all([
        supabase.from("nominations").select("*"),
        supabase.from("device_logs").select("*")
      ]);

      if (nomsRes.error) throw nomsRes.error;
      
      // If the device_logs table doesn't exist yet, it might throw an error.
      // We catch it silently so the dashboard doesn't crash before the user runs the SQL.
      if (logsRes.error) {
        console.warn("Device logs fetch failed. Ensure table is created:", logsRes.error);
      }

      setNominations(nomsRes.data || []);
      setDeviceLogs(logsRes.data || []);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch nomination data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Process data for analytics
  const [activeTab, setActiveTab] = useState<"insights" | "submissions" | "security">("insights");

  const analytics = useMemo(() => {
    if (!nominations || nominations.length === 0) return null;

    const totalVoters = nominations.length;
    const votingPercentage = ((totalVoters / TOTAL_STUDENTS) * 100).toFixed(1);

    const votesByCategory: Record<string, Record<string, number>> = {};

    CATEGORIES.forEach((cat) => {
      votesByCategory[cat] = {};
    });

    nominations.forEach((row) => {
      const selections = row.selections || {};
      Object.keys(selections).forEach((cat) => {
        const nomineeName = selections[cat];
        if (nomineeName) {
          if (!votesByCategory[cat]) votesByCategory[cat] = {};
          if (!votesByCategory[cat][nomineeName]) votesByCategory[cat][nomineeName] = 0;
          votesByCategory[cat][nomineeName] += 1;
        }
      });
    });

    const categoryStats: Record<string, { totalVotes: number; nominees: { name: string; votes: number; percentage: number }[] }> = {};

    Object.keys(votesByCategory).forEach((cat) => {
      const nomineeCounts = Object.entries(votesByCategory[cat]).map(
        ([name, count]) => ({ name, votes: count })
      );
      nomineeCounts.sort((a, b) => b.votes - a.votes);
      
      const totalVotes = nomineeCounts.reduce((sum, n) => sum + n.votes, 0);
      
      categoryStats[cat] = {
        totalVotes,
        nominees: nomineeCounts.map(n => ({
          ...n,
          percentage: totalVotes > 0 ? (n.votes / totalVotes) * 100 : 0
        }))
      };
    });

    return { totalVoters, votingPercentage, categoryStats };
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
    <section className="py-12 px-6 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <BarChart size={24} className="text-slate-700" /> Class of GRIT
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveTab("insights")}
                className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === "insights" ? "border-slate-900 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                Insights
              </button>
              <button 
                onClick={() => setActiveTab("submissions")}
                className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === "submissions" ? "border-slate-900 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                Submissions
              </button>
              <button 
                onClick={() => setActiveTab("security")}
                className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === "security" ? "border-slate-900 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                Security Logs
              </button>
            </div>
          </div>
          <div className="flex gap-3 mb-2">
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Refreshing..." : "Refresh"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium border border-slate-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {error ? (
          <div className="p-6 bg-red-50 text-red-600 rounded-xl font-medium">{error}</div>
        ) : !analytics ? (
          <div className="p-12 text-center text-slate-400 font-medium">No data available.</div>
        ) : (
          <>
            {activeTab === "insights" && (
              <>
                {/* Top Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="border border-slate-200 rounded-xl p-6">
                    <p className="text-sm font-medium text-slate-500 mb-2">Total Submissions</p>
                    <p className="text-3xl font-semibold text-slate-900">{analytics.totalVoters}</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <p className="text-sm font-medium text-slate-500 mb-2">Class Turnout</p>
                    <p className="text-3xl font-semibold text-slate-900">{analytics.votingPercentage}%</p>
                  </div>
                </div>

                {/* Category Bars Grouped */}
                <div className="space-y-16">
                  {CATEGORY_GROUPS.map((group) => (
                    <div key={group.name} className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100">
                      <div className="mb-8 border-b border-slate-200 pb-4">
                        <h2 className="text-xl font-black text-slate-800">{group.name}</h2>
                        <p className="text-sm text-slate-500 mt-1">{group.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {group.categories.map((catObj) => {
                          const category = catObj.name;
                          const stat = analytics.categoryStats[category];
                          if (!stat) return null;

                          return (
                            <div key={category} className="flex flex-col">
                              <div className="flex justify-between items-end mb-4">
                                <h3 className="font-semibold text-slate-900 text-[15px]">{category}</h3>
                                <span className="text-xs text-slate-400 font-medium">{stat.totalVotes} answers</span>
                              </div>
                              
                              <div className="flex-1 space-y-2">
                                {stat.nominees.length === 0 ? (
                                  <p className="text-sm text-slate-400">No responses yet.</p>
                                ) : (
                                  stat.nominees.map((nominee) => (
                                    <div key={nominee.name} className="flex items-center justify-between group relative">
                                      {/* Background Bar */}
                                      <div className="absolute inset-0 bg-slate-100 rounded-md z-0 overflow-hidden">
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: `${nominee.percentage}%` }}
                                          transition={{ duration: 0.8, ease: "easeOut" }}
                                          className="h-full bg-slate-200"
                                        />
                                      </div>
                                      
                                      {/* Content */}
                                      <div className="relative z-10 w-full flex justify-between items-center px-3 py-2">
                                        <span className="text-sm font-medium text-slate-700 truncate pr-4">
                                          {nominee.name}
                                        </span>
                                        <span className="text-sm text-slate-500 font-medium">
                                          {nominee.votes}
                                        </span>
                                      </div>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "submissions" && (
              <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm pb-4">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Submitted at</th>
                      <th className="px-6 py-4 font-semibold">Name</th>
                      <th className="px-6 py-4 font-semibold">Matric Number</th>
                      {CATEGORIES.map(cat => (
                        <th key={cat} className="px-6 py-4 font-semibold text-slate-500 max-w-[200px] truncate" title={cat}>
                          {cat}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {nominations.map(row => {
                      const student = STUDENTS.find(s => s.matric === row.student_matric);
                      const date = row.created_at ? new Date(row.created_at).toLocaleString() : "N/A";
                      const deviceInfo = row.selections?._device_info;
                      
                      return (
                        <tr key={row.student_matric} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-slate-500">{date}</td>
                          <td className="px-6 py-4 font-medium text-slate-900">{student?.name || "Unknown"}</td>
                          <td className="px-6 py-4 text-slate-500">{row.student_matric}</td>
                          {CATEGORIES.map(cat => (
                            <td key={cat} className="px-6 py-4 text-slate-700">
                              {row.selections?.[cat] || <span className="text-slate-300">-</span>}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                    {nominations.length === 0 && (
                      <tr>
                        <td colSpan={CATEGORIES.length + 3} className="px-6 py-12 text-center text-slate-400">
                          No submissions yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "security" && (
              <>
                <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm pb-4">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Student</th>
                      <th className="px-6 py-4 font-semibold">Matric Number</th>
                      <th className="px-6 py-4 font-semibold">IP Address</th>
                      <th className="px-6 py-4 font-semibold">Location</th>
                      <th className="px-6 py-4 font-semibold">ISP</th>
                      <th className="px-6 py-4 font-semibold">OS</th>
                      <th className="px-6 py-4 font-semibold">Browser</th>
                      <th className="px-6 py-4 font-semibold">Type</th>
                      <th className="px-6 py-4 font-semibold">Model</th>
                      <th className="px-6 py-4 font-semibold">Logged At</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {deviceLogs.map(log => {
                      const student = STUDENTS.find(s => s.matric === log.student_matric);
                      const timestamp = log.created_at ? new Date(log.created_at).toLocaleString() : "N/A";
                      
                      return (
                        <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{student?.name || "Unknown"}</td>
                          <td className="px-6 py-4 text-slate-500">{log.student_matric}</td>
                          <td className="px-6 py-4 font-semibold text-slate-700">{log.ip_address || "N/A"}</td>
                          <td className="px-6 py-4 text-slate-500">{log.city ? `${log.city}, ${log.country}` : "-"}</td>
                          <td className="px-6 py-4 text-slate-500 max-w-[150px] truncate" title={log.isp}>{log.isp || "-"}</td>
                          <td className="px-6 py-4 text-slate-500">{log.os_info || "-"}</td>
                          <td className="px-6 py-4 text-slate-500">{log.browser_info || "-"}</td>
                          <td className="px-6 py-4 text-slate-500 capitalize">{log.device_type || "-"}</td>
                          <td className="px-6 py-4 text-slate-500">{log.device_model || "-"}</td>
                          <td className="px-6 py-4 text-slate-500">{timestamp}</td>
                        </tr>
                      );
                    })}
                    {deviceLogs.length === 0 && (
                      <tr>
                        <td colSpan={10} className="px-6 py-12 text-center text-slate-400">
                          No device logs available yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* IP Aggregation Table */}
              <div className="mt-12">
                <h2 className="text-xl font-black mb-6 text-slate-800 flex items-center gap-2">
                  <ShieldAlert size={24} className="text-brand-blue" />
                  Shared Network Analysis
                </h2>
                <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm pb-4">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-semibold">IP Address</th>
                        <th className="px-6 py-4 font-semibold">User Count</th>
                        <th className="px-6 py-4 font-semibold">Associated Users</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(() => {
                        const ipMap: Record<string, { count: number; users: string[] }> = {};
                        deviceLogs.forEach((log) => {
                          const ip = log.ip_address || "Unknown IP";
                          if (!ipMap[ip]) ipMap[ip] = { count: 0, users: [] };
                          
                          const student = STUDENTS.find((s) => s.matric === log.student_matric);
                          const userStr = student ? `${student.name} (${log.student_matric})` : log.student_matric;
                          
                          if (!ipMap[ip].users.includes(userStr)) {
                            ipMap[ip].users.push(userStr);
                            ipMap[ip].count++;
                          }
                        });

                        const aggregated = Object.entries(ipMap)
                          .map(([ip, data]) => ({ ip, ...data }))
                          .sort((a, b) => b.count - a.count);

                        if (aggregated.length === 0) {
                          return (
                            <tr>
                              <td colSpan={3} className="px-6 py-12 text-center text-slate-400">
                                No IP aggregations available.
                              </td>
                            </tr>
                          );
                        }

                        return aggregated.map((item) => (
                          <tr key={item.ip} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-700">{item.ip}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.count > 1 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                                {item.count}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500 whitespace-normal">
                              <div className="flex flex-wrap gap-2">
                                {item.users.map((u, i) => (
                                  <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs">
                                    {u}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
            )}
          </>
        )}
      </div>
    </section>
  );
};
