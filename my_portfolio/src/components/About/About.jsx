import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

export const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shahbaj Hussain
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Coder",
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
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full-Stack Developer with hands-on experience
            building modern web applications through academic and personal
            projects. I specialize in the MERN stack and enjoy creating
            responsive interfaces, scalable backend systems, and seamless user
            experiences while continuously learning new technologies.
          </p>
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
              My Resume
            </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
