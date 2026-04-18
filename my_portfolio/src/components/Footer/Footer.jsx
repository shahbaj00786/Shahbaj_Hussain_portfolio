import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/shahbaj-hussain-9160443a8", label: "LinkedIn" },
    { icon: <FaGithub size={16} />, href: "https://github.com/shahbaj00786", label: "GitHub" },
    { icon: <FaEnvelope size={16} />, href: "mailto:shahbaj00786@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030311]">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-[7vw] lg:px-0 py-16">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-black text-white tracking-tight">
              <span className="text-[#9b6dff]">&lt;</span>
              Shahbaj Hussain
              <span className="text-[#9b6dff]">/&gt;</span>
            </h2>
            <p className="text-gray-600 text-sm mt-1">MERN Stack Developer • Kolkata, India</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  text-gray-500 border border-white/[0.07] bg-white/[0.03]
                  hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10
                  transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.05] mb-10" />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-1 mb-10">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-200 hover:bg-white/[0.05] transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Shahbaj Hussain. All rights reserved.</p>
          <p>Built with React.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};