import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import BlurBlob from "../BlurBlob";

export const About = () => {
  return (
    <section
      id="about"
      className="
        relative min-h-[85vh]
        flex items-center
        px-[7vw] lg:px-[18vw]
        overflow-hidden
      "
    >
      {/* ===== Background Layers ===== */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#050510] via-[#07071a] to-black"></div>

      <BlurBlob
        position={{ top: "35%", left: "55%" }}
        size={{ width: "600px", height: "600px" }}
      />

      <BlurBlob
        position={{ top: "80%", left: "15%" }}
        size={{ width: "320px", height: "320px" }}
      />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 w-full">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl text-gray-300 font-medium mb-3">
            Hi, I'm
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Shahbaj Hussain
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-gray-300">I am a </span>

            <TypeAnimation
              sequence={[
                "Full-Stack Developer (MERN)",
                2000,
                "Coder",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={55}
              repeat={Infinity}
              cursor={true}
              className="text-[#8245ec]"
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            Passionate Full-Stack Developer with hands-on experience building
            modern web applications using the MERN stack. I focus on responsive
            UI, scalable backend systems, and smooth user experiences.
          </p>

          {/* Trust Line */}
          <p className="text-sm text-purple-400 font-medium mb-8">
            B.Tech Student • MERN Stack Developer • Kolkata, India • Open to
            Full-Time Opportunities
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                px-8 py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-[#8245ec] to-purple-500
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_45px_rgba(130,69,236,0.9)]
                shadow-[0_0_25px_rgba(130,69,236,0.5)]
              "
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1400}
            scale={1.04}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-3xl"></div>

              {/* Image Frame */}
              <div
                className="
                  relative w-full h-full rounded-full p-[5px]
                  bg-gradient-to-br from-purple-500/40 to-indigo-500/30
                  shadow-[0_0_80px_rgba(130,69,236,0.35)]
                "
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black/40 backdrop-blur-xl">
                  <img
                    src={profileImage}
                    alt="Shahbaj Hussain"
                    loading="eager"
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};
