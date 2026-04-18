import { education } from "../../constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-28 pb-28 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-[#050414] overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Academic Background
        </p>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          EDUCATION
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] mx-auto mt-5 rounded-full" />

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
          My education has been a journey of learning and development,
          building strong analytical thinking and technical foundations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* ── Vertical Center Line ── */}
        <div className="absolute sm:left-1/2 left-5 top-0 bottom-0
          sm:-translate-x-1/2 w-px
          bg-gradient-to-b from-[#7c3aed]/80 via-purple-400/40 to-transparent"
        />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center mb-16 last:mb-0
                ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}
            >

              {/* ── Timeline Dot ── */}
              <div className="absolute sm:left-1/2 left-5 sm:-translate-x-1/2 -translate-x-1/2
                w-5 h-5 rounded-full z-10
                bg-gradient-to-br from-[#7c3aed] to-[#c084fc]
                shadow-[0_0_14px_4px_rgba(124,58,237,0.55)]
                ring-4 ring-[#050414]
              " />

              {/* ── Connector line from dot to card ── */}
              <div className={`hidden sm:block absolute top-2 h-px w-[84px]
                bg-gradient-to-r
                ${isLeft
                  ? "left-1/2 ml-2.5 from-purple-500/60 to-transparent"
                  : "right-1/2 mr-2.5 from-transparent to-purple-500/60"
                }`}
              />

              {/* ── Card ── */}
              <div
                className={`
                  group
                  relative w-full sm:w-[44%]
                  p-6 sm:p-8 rounded-2xl
                  border border-white/10
                  bg-gradient-to-br from-[#0f0c1e] to-[#0a0818]
                  shadow-[0_0_30px_2px_rgba(124,58,237,0.15)]
                  hover:border-purple-500/50
                  hover:shadow-[0_0_55px_4px_rgba(124,58,237,0.35)]
                  hover:scale-105
                  transition-all duration-300
                  cursor-default
                  ml-10 sm:ml-0
                  ${isLeft ? "sm:mr-[56%]" : "sm:ml-[56%]"}
                `}
              >
                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-px
                  bg-gradient-to-r from-transparent via-purple-500/70 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                />

                {/* Corner glow */}
                <div className={`absolute top-0 w-32 h-32 rounded-full
                  bg-purple-600/10 blur-2xl pointer-events-none
                  ${isLeft ? "right-0" : "left-0"}`}
                />

                {/* ── Header: Logo + Title ── */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white p-1.5 shadow-[0_0_20px_rgba(124,58,237,0.25)] overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-purple-300/90 font-medium leading-snug">
                      {edu.school}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1.5 uppercase tracking-widest font-medium">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-gradient-to-r from-purple-500/30 via-white/5 to-transparent mb-5" />

                {/* ── Grade badge ── */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold
                    bg-purple-500/15 text-purple-300 border border-purple-500/25
                    shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                    {edu.grade}
                  </span>
                  {index === 0 && (
                    <span className="ml-1 px-3 py-0.5 rounded-full text-[10px] font-bold
                      bg-green-500/10 text-green-400 border border-green-500/20">
                      ● Ongoing
                    </span>
                  )}
                </div>

                {/* ── Description ── */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Timeline end dot */}
        <div className="absolute sm:left-1/2 left-5 bottom-0 sm:-translate-x-1/2 -translate-x-1/2
          w-3 h-3 rounded-full bg-purple-800/60 ring-4 ring-[#050414]" />
      </div>
    </section>
  );
};