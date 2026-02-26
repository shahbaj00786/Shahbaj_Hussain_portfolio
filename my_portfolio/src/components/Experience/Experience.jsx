import React from "react";
import { experiences } from "../../constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-[7vw] lg:px-[18vw] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#050510] via-[#07071a] to-black"></div>

      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
        bg-purple-600/20 blur-[140px] rounded-full -z-10"
      ></div>

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Experience
        </h2>

        <div className="w-28 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Hands-on development experience through real-world projects and
          advanced problem-solving practice.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="
              group p-8 rounded-3xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_25px_rgba(130,69,236,0.2)]
              hover:shadow-[0_0_50px_rgba(130,69,236,0.4)]
              transition-all duration-500
              hover:-translate-y-2
            "
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-white">
              {exp.title}
            </h3>

            {/* Role */}
            <p className="text-sm text-purple-400 font-medium mb-1">
              {exp.role}
            </p>

            <h4 className="text-purple-300 mb-2">
              {exp.subtitle}
            </h4>

            <p className="text-sm text-gray-500 mb-4">
              {exp.date}
            </p>

            {/* Description List */}
            <ul className="space-y-2 text-gray-400 leading-relaxed max-w-md">
              {exp.desc.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-purple-500/15
                    border border-purple-500/40
                    text-purple-200
                    group-hover:bg-purple-500/25
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};