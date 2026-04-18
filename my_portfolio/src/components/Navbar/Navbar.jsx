import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "work", "education", "contact"];
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500
        ${isScrolled
          ? "bg-[#050414]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between text-white">

        {/* LOGO */}
        <button
          onClick={() => handleMenuItemClick("about")}
          className="group flex items-center gap-1 font-bold text-xl tracking-tight"
        >
          <span className="text-[#9b6dff] transition-all duration-300 group-hover:text-white">&lt;</span>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#9b6dff] group-hover:to-white transition-all duration-500">
            Shahbaj
          </span>
          <span className="text-[#9b6dff] transition-all duration-300 group-hover:text-white">/&gt;</span>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${activeSection === item.id
                    ? "text-white bg-white/[0.08]"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9b6dff]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* SOCIAL LINKS */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/shahbaj00786"
            target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8"
            target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <button
            onClick={() => handleMenuItemClick("contact")}
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-r from-[#7c3aed] to-[#9b6dff]
              hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105
              transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#070718]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200
                    ${activeSection === item.id
                      ? "text-[#9b6dff] bg-purple-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mx-4 mt-3 pt-3 border-t border-white/10 flex gap-3 items-center">
              <a href="https://github.com/shahbaj00786" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition">
                <FaLinkedin size={18} />
              </a>
              <button
                onClick={() => handleMenuItemClick("contact")}
                className="ml-auto px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#9b6dff] transition hover:opacity-90"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};