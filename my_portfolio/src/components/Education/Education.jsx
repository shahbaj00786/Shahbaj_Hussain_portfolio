import { education } from "../../constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          My education has been a journey of learning and development,
          building strong analytical thinking and technical foundations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className="
                w-full sm:max-w-md p-4 sm:p-8 rounded-2xl
                border border-white bg-gray-900
                backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                hover:border-purple-500/40
                transition-all duration-300
                hover:scale-105
                sm:ml-44 sm:mr-44 ml-8
              "
            >
              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>

                  <h4 className="text-sm text-purple-300 font-medium">
                    {edu.school}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-5 text-sm">
                <span className="text-gray-400">Grade:</span>{" "}
                <span className="text-purple-400 font-semibold">
                  {edu.grade}
                </span>
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed text-[15px]">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};