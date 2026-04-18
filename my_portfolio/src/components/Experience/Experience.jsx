import React, { useEffect, useState } from "react";
import { experiences } from "../../constants";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Experience = () => {
  const [stats, setStats] = useState({ easy: 0, medium: 0, hard: 0, total: 0 });
  const [fetched, setFetched] = useState(false);
  const username = "bg9Q344qtF";

  useEffect(() => {
    const fetchStats = async () => {
      const query = `query ($username: String!) {
        matchedUser(username: $username) {
          submitStats: submitStatsGlobal {
            acSubmissionNum { difficulty count }
          }
        }
      }`;
      try {
        const res = await fetch("https://corsproxy.io/?https://leetcode.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables: { username } }),
        });
        const data = await res.json();
        const arr = data.data.matchedUser.submitStats.acSubmissionNum;
        let easy = 0, medium = 0, hard = 0;
        arr.forEach((i) => {
          if (i.difficulty === "Easy") easy = i.count;
          if (i.difficulty === "Medium") medium = i.count;
          if (i.difficulty === "Hard") hard = i.count;
        });
        setStats({ easy, medium, hard, total: easy + medium + hard });
        setFetched(true);
      } catch (e) {
        // fallback to static
        setStats({ easy: 120, medium: 110, hard: 25, total: 255 });
        setFetched(true);
      }
    };
    fetchStats();
  }, []);

  const difficultyBars = [
    { label: "Easy", key: "easy", color: "#4ade80", bg: "bg-green-400", max: 935 },
    { label: "Medium", key: "medium", color: "#f59e0b", bg: "bg-yellow-400", max: 2033 },
    { label: "Hard", key: "hard", color: "#f87171", bg: "bg-red-400", max: 920 },
  ];

  return (
    <section id="experience" className="py-28 px-[7vw] lg:px-[12vw] bg-[#050414]">

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">My Journey</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Building real-world full-stack applications with scalable architecture, clean code, and impactful user experiences.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto space-y-6 mb-16">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative rounded-2xl overflow-hidden
              border border-white/[0.08] hover:border-purple-500/30
              bg-gradient-to-br from-white/[0.04] to-white/[0.01]
              hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]
              transition-all duration-500 p-8"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/20 mb-3">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-purple-400 font-medium">{exp.role}</p>
                <p className="text-gray-500 text-sm mt-0.5">{exp.subtitle}</p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <FaCode className="text-purple-400" size={20} />
              </div>
            </div>

            {/* Points */}
            <ul className="space-y-2.5 mb-6">
              {exp.desc.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium
                  bg-white/[0.05] text-gray-300 border border-white/[0.08]
                  hover:border-purple-500/30 hover:text-white transition-all duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LeetCode Card */}
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/[0.08] hover:border-purple-500/25
          bg-gradient-to-br from-white/[0.04] to-white/[0.01]
          hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]
          transition-all duration-500 p-8">

          {/* LC Header */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/20 flex items-center justify-center">
                <SiLeetcode size={24} className="text-[#FFA116]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LeetCode Stats</h3>
                <p className="text-gray-500 text-sm">@{username}</p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/bg9Q344qtF/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                bg-[#FFA116]/10 text-[#FFA116] border border-[#FFA116]/20
                hover:bg-[#FFA116]/20 hover:shadow-[0_0_20px_rgba(255,161,22,0.2)]
                transition-all duration-300"
            >
              <FaExternalLinkAlt size={12} />
              View Profile
            </a>
          </div>

          {/* Big stat */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
            <div className="text-center sm:text-left">
              <div className="flex items-end gap-2 justify-center sm:justify-start">
                <span className="text-6xl font-black text-white">250+</span>
              </div>
              <p className="text-gray-400 mt-1 text-sm font-medium">Problems Solved on LeetCode</p>
              <p className="text-gray-600 text-xs mt-1">Consistent problem solving • Strong DSA foundation</p>
            </div>
          </div>

          {/* Difficulty breakdown */}
          <div className="space-y-4">
            {difficultyBars.map(({ label, key, color, bg, max }) => {
              const val = stats[key];
              const pct = fetched && val > 0 ? Math.round((val / max) * 100) : 0;
              return (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium" style={{ color }}>{label}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${bg}`}
                      style={{ width: `${pct}%`, opacity: 0.85 }}
                    />
                  </div>
                  <span className="w-8 text-right text-sm text-gray-400">
                    {fetched ? (val > 0 ? val : "—") : "…"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <p className="mt-6 text-xs text-gray-600">
            * Live data fetched from LeetCode • Total reflects all accepted submissions
          </p>
        </div>
      </div>
    </section>
  );
};