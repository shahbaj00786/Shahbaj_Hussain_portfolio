import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const categoryIcons = {
  Frontend: "🎨",
  Backend: "⚙️",
  Languages: "💻",
  Tools: "🛠️",
};

const categoryDesc = {
  Frontend: "Crafting responsive, pixel-perfect UIs",
  Backend: "Building scalable APIs & databases",
  Languages: "Core programming languages I work with",
  Tools: "Dev tools for efficient workflows",
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-[7vw] lg:px-[12vw] bg-[#050414] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      {/* Section heading */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Work With</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg leading-relaxed">
          Technologies I use to build scalable, high-performance full-stack web applications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SkillsInfo.map((category, idx) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1200}
            scale={1.015}
            transitionSpeed={1400}
            gyroscope
            className="h-full"
          >
            <div className="relative h-full rounded-2xl p-7 overflow-hidden group
              bg-gradient-to-br from-white/[0.04] to-white/[0.01]
              border border-white/[0.08]
              hover:border-purple-500/30
              transition-all duration-500
              hover:shadow-[0_0_50px_rgba(124,58,237,0.15)]"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{categoryIcons[category.title]}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-7">{categoryDesc[category.title]}</p>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group/skill flex items-center gap-2.5 rounded-xl py-2.5 px-3
                      border transition-all duration-300 hover:scale-[1.04] cursor-default
                      ${skill.core
                        ? "bg-purple-500/10 border-purple-500/40 shadow-[inset_0_0_20px_rgba(124,58,237,0.08)]"
                        : "bg-white/[0.03] border-white/[0.07] hover:border-purple-400/30 hover:bg-purple-500/5"
                      }`}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      className="w-5 h-5 object-contain flex-shrink-0"
                    />
                    <span className={`text-xs font-medium truncate ${skill.core ? "text-white" : "text-gray-400 group-hover/skill:text-gray-200"}`}>
                      {skill.name}
                    </span>
                    {skill.core && (
                      <span className="ml-auto flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                  </div>
                ))}
              </div>

              {/* Core indicator */}
              {category.skills.some(s => s.core) && (
                <p className="mt-5 text-[11px] text-gray-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                  Core / Primary skill
                </p>
              )}
            </div>
          </Tilt>
        ))}
      </div>

      {/* Bottom stats bar */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: "15+", label: "Technologies" },
          { value: "4+", label: "Projects Built" },
          { value: "1+", label: "Year Experience" },
          { value: "250+", label: "LeetCode Solved" },
        ].map((stat) => (
          <div key={stat.label}
            className="text-center py-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-500/20 transition-all duration-300">
            <p className="text-2xl font-black text-white">{stat.value}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};