import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import BlurBlob from "../BlurBlob";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-[7vw] lg:px-[12vw] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#050414]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(124,58,237,0.12),transparent)]" />

      <BlurBlob position={{ top: "30%", left: "60%" }} size={{ width: "700px", height: "700px" }} />
      <BlurBlob position={{ top: "80%", left: "10%" }} size={{ width: "350px", height: "350px" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 w-full py-24 md:py-0">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to Full-Time Opportunities
          </div>

          <div>
            <p className="text-gray-400 text-lg font-light mb-1 tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Shahbaj
              <br />
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#9b6dff] to-[#c084fc] bg-clip-text text-transparent">
                Hussain
              </span>
            </h1>
          </div>

          <div className="text-xl sm:text-2xl font-medium text-gray-300 flex items-center gap-2 justify-center md:justify-start flex-wrap">
            <span>I build</span>
            <TypeAnimation
              sequence={[
                "Full-Stack Apps", 2000,
                "REST APIs", 2000,
                "Scalable UIs", 2000,
                "MERN Solutions", 2000,
              ]}
              speed={55}
              repeat={Infinity}
              className="text-[#9b6dff] font-bold"
            />
          </div>

          <p className="text-gray-400 leading-relaxed text-base max-w-lg mx-auto md:mx-0">
            Passionate MERN Stack Developer and B.Tech student (ECE) at KGEC. I craft production-ready full-stack applications with responsive UIs, scalable backends, and smooth user experiences.
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-purple-400" size={12} />
              Kolkata, India
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>B.Tech • ECE • KGEC</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>3rd Year</span>
          </div>

          {/* CTA */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm
                bg-gradient-to-r from-[#7c3aed] to-[#9b6dff]
                hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105
                transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            >
              <HiDownload size={18} />
              Download Resume
            </a>

            <a
              href="https://github.com/shahbaj00786"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-gray-300 text-sm
                border border-white/15 bg-white/5 backdrop-blur
                hover:bg-white/10 hover:text-white hover:border-white/30
                transition-all duration-300"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>

          {/* Social links below */}
          <div className="flex items-center gap-4 justify-center md:justify-start pt-1">
            <a href="https://www.linkedin.com/in/shahbaj-hussain-9160443a8" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#9b6dff] transition-colors duration-200">
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT — Profile image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1400} scale={1.02} transitionSpeed={1800} gyroscope>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">

              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/10 blur-2xl" />

              {/* Decorative ring */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#7c3aed]/60 via-[#9b6dff]/30 to-transparent" />

              {/* Inner frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black/40 border border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.25)]">
                <img
                  src={profileImage}
                  alt="Shahbaj Hussain"
                  loading="eager"
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
                {/* Bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating badge — projects */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 bg-[#0d0b1f] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm font-bold">4+</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">Projects</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">Deployed</p>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2.5 bg-[#0d0b1f] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 text-xs font-bold">250+</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">LeetCode</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">Problems</p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};