import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative py-28 px-[7vw] lg:px-[12vw] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050414] via-[#070720] to-[#050414]" />

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Production-ready full-stack applications showcasing MERN architecture, clean code, and real-world use cases.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl overflow-hidden
              border border-white/[0.08] hover:border-purple-500/35
              bg-gradient-to-br from-white/[0.04] to-white/[0.01]
              hover:shadow-[0_0_60px_rgba(124,58,237,0.2)]
              transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-52">
              {project.featured && (
                <span className="absolute top-3 left-3 z-10 text-[11px] font-bold bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 rounded-full text-white shadow-lg">
                  ⭐ Featured
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050414]/80 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-wide bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                  View Details →
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">{project.description}</p>

              {/* Feature list */}
              <ul className="space-y-1.5 mb-5">
                {project.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="mt-1 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((tech, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg
                    bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-400">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-[#0a0817] rounded-2xl max-w-2xl w-full border border-white/10
              shadow-[0_0_80px_rgba(124,58,237,0.2)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition"
            >
              <FaTimes size={14} />
            </button>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0817] to-transparent" />
              {selectedProject.featured && (
                <span className="absolute top-4 left-4 text-[11px] font-bold bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 rounded-full text-white">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.description}</p>

              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-sm border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm
                    bg-white/[0.07] border border-white/10 text-gray-300
                    hover:bg-white/[0.12] hover:text-white transition-all duration-200">
                  <FaGithub size={16} /> View Code
                </a>
                <a href={selectedProject.webapp} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm
                    bg-gradient-to-r from-[#7c3aed] to-[#9b6dff] text-white
                    hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all duration-200">
                  <FaExternalLinkAlt size={13} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};