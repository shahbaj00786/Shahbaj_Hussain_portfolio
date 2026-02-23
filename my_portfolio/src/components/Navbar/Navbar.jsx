import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] lg:px-[18vw]
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer tracking-wide">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Shahbaj Hussain
          </span>
          <span className="text-[#8245ec]">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition duration-300 ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : "hover:text-white"
                }`}
              >
                {item.label}
              </button>

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#8245ec] transition-all duration-300
                ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/shahbaj00786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-1/2 -translate-x-1/2 w-[90%]
        transition-all duration-500 ${
          isOpen
            ? "top-20 opacity-100"
            : "top-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#050414]/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10">
          <ul className="flex flex-col items-center py-6 space-y-6 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="hover:text-[#8245ec] transition"
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-6 pt-2">
              <FaGithub className="hover:text-[#8245ec] cursor-pointer transition" size={22}/>
              <FaLinkedin className="hover:text-[#8245ec] cursor-pointer transition" size={22}/>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};