import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="
      text-white
      py-10
      px-[12vw] md:px-[7vw] lg:px-[20vw]
      border-t border-white/10
      bg-gradient-to-b from-transparent to-[#050510]
    ">
      <div className="container mx-auto text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-400 tracking-wide">
          Shahbaj Hussain
        </h2>

        {/* Role Line (NEW — professional touch) */}
        <p className="text-gray-400 text-sm mt-1">
          MERN Stack Developer • Kolkata, India
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="
                text-sm sm:text-base
                text-gray-400
                hover:text-purple-400
                transition-colors duration-300
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3 rounded-full
              bg-white/5 border border-white/10
              hover:border-purple-500/50
              hover:text-purple-400
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/shahbaj00786"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3 rounded-full
              bg-white/5 border border-white/10
              hover:border-purple-500/50
              hover:text-purple-400
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaGithub size={18} />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Shahbaj Hussain. All rights reserved.
        </p>

      </div>
    </footer>
  );
};