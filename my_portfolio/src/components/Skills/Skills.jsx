import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-[7vw] lg:px-[18vw] bg-black overflow-hidden"
    >
      {/* ===== Section Heading ===== */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          Skills
        </h2>

        <div className="w-28 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Technologies I use to build scalable, high-performance full-stack web
          applications.
        </p>
      </div>

      {/* ===== Skill Categories ===== */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1200}
            gyroscope={true}
            className="group h-full"
          >
            <div
              className="
                relative rounded-3xl p-8 h-full
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_25px_rgba(130,69,236,0.15)]
                hover:shadow-[0_0_45px_rgba(130,69,236,0.35)]
                transition-all duration-500
              "
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const isCore = skill.core; 

                  return (
                    <div
                      key={skill.name}
                      className={`
                        flex items-center gap-2 justify-center
                        rounded-xl py-3 px-3
                        border transition-all duration-300
                        hover:scale-105 cursor-default

                        ${
                          isCore
                            ? "bg-purple-500/10 border-purple-500/60 shadow-[0_0_18px_rgba(130,69,236,0.45)]"
                            : "bg-white/5 border-white/10 hover:border-purple-100/60 hover:bg-purple-500/10"
                        }
                      `}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />

                      <span
                        className={`text-sm font-medium ${
                          isCore ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};