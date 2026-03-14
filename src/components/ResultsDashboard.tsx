import React, { useState } from "react";
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
import { CATEGORIES, NOMINEES } from "../data/constants";

export const ResultsDashboard = ({
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
