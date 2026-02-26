import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SMOOTH SCROLL */
  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500
      ${
        isScrolled
          ? "bg-[#050414]/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between text-white">
        {/* LOGO */}
        <div className="font-semibold text-xl tracking-wide cursor-pointer group">
          <span className="text-[#8245ec]">&lt;</span>

          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent group-hover:from-[#8245ec] group-hover:to-white transition duration-500">
            Shahbaj Hussain
          </span>

          <span className="text-[#8245ec]">/&gt;</span>
        </div>

        {/*DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-md font-medium text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
              </button>

              <span
                className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-[#8245ec] to-purple-400
                transition-all duration-300
                ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/*  SOCIAL  */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/shahbaj00786"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/*  MOBILE BUTTON */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/*  MOBILE MENU */}
      <div
        className={`md:hidden absolute left-1/2 -translate-x-1/2 w-[92%]
        transition-all duration-500 ${
          isOpen ? "top-20 opacity-100" : "top-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-[#050414]/90 backdrop-blur-2xl shadow-2xl">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="hover:text-white transition duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex gap-6 pt-2">
              <FaGithub
                size={22}
                className="hover:text-[#8245ec] cursor-pointer transition"
              />
              <FaLinkedin
                size={22}
                className="hover:text-[#8245ec] cursor-pointer transition"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
