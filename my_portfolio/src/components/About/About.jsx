import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";


export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-[7vw] lg:px-[18vw] font-sans overflow-hidden"
    >
      {/* ================= Background Glow ================= */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Greeting */}
          <h1 className="text-3xl md:text-4xl text-gray-300 font-medium">
            Hi, I’m
          </h1>

          {/* Name */}
          <h2 className="text-5xl md:text-6xl font-extrabold mt-2 mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Shahbaj Hussain
          </h2>

          {/* Typing Animation */}
          <h3 className="text-xl md:text-3xl font-semibold mb-6">
            <span className="text-gray-300">I am a </span>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About Paragraph */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a passionate Full-Stack Developer with hands-on experience
            building modern web applications through academic and personal
            projects. I specialize in the MERN stack and enjoy creating
            responsive interfaces, scalable backend systems, and seamless user
            experiences while continuously learning new technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1RtkG6i2-XJqY9yd9qIL1AgVXmGkPyxCY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#8245ec] to-purple-500
              hover:scale-105 transition duration-300
              shadow-[0_0_30px_rgba(130,69,236,0.6)]"
            >
              Download CV
            </a>

            {/* Projects Button */}
            <a
              href="#work"
              className="px-8 py-3 rounded-full font-semibold border border-white/20
              text-gray-300 hover:bg-white/10 hover:text-white
              transition duration-300"
            >
              View Projects
            </a>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-2xl"></div>

            <img
              src={profileImage}
              alt="Shahbaj Hussain"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem]
              rounded-full object-cover border-4 border-purple-700
              shadow-[0_20px_60px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};