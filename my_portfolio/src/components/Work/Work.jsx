import React, { useState } from "react";
import { projects } from "../../constants";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-24 px-[7vw] lg:px-[18vw] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#050510] via-[#07071a] to-black"></div>

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white">Projects</h2>

        <div className="w-28 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Real-world full-stack applications showcasing scalable architecture
          and modern web development.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="
              group cursor-pointer
              rounded-3xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-purple-500/40
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_0_60px_rgba(130,69,236,0.35)]
            "
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 text-xs bg-purple-600 px-3 py-1 rounded-full text-white">
                  ⭐ Featured
                </span>
              )}

              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* ⭐ FEATURES PREVIEW (NEW) */}
              <ul className="text-sm text-gray-400 space-y-1 mb-5">
                {project.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-purple-400">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                    bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0b0b1f] rounded-3xl max-w-4xl w-full p-8 relative border border-white/10 overflow-y-auto max-h-[90vh]">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-4 text-3xl text-gray-400 hover:text-purple-400"
            >
              &times;
            </button>

            {/* IMAGE */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-xl mb-6"
            />

            {/* TITLE */}
            <h3 className="text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mb-6">
              {selectedProject.description}
            </p>

            <ul className="space-y-2 text-gray-400 mb-8">
              {selectedProject.features.map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-xl bg-white/10 hover:bg-purple-600 transition font-medium"
              >
                View Code
              </a>

              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};