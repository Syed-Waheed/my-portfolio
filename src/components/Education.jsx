import React from "react";

const educationList = [
  {
    id: 1,
    degree: "High School",
    institution: "St. Francis De Sales",
    year: "2008 - 2019",
    desc: "Secondary School Certificate",
    img: "/images/education1.png",
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    institution: "MJCET",
    major: "Computer Science & Engineering",
    year: "2021 - 2025",
    desc: "Undergraduate Degree",
    img: "/images/education2.png",
  },
];

const Education = () => {
  return (
    <section className="relative my-32 px-6 md:px-12 educationSection">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mb-16 text-center">
        <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
          Academic History
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Education</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="group relative overflow-hidden rounded-2xl bg-[#12123e]/80 backdrop-blur-sm border border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
          >
            {/* 1. Background Image (Appears on Hover) */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#0a0a23] opacity-90 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
              <img
                src={edu.img}
                alt={edu.degree}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transform scale-100 group-hover:scale-110 transition-all duration-700 filter grayscale group-hover:grayscale-0"
              />
            </div>

            {/* 2. Content Container */}
            <div className="relative z-20 p-8 h-full flex flex-col justify-between min-h-[280px]">
              
              {/* Top Section: Year & Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded text-yellow-300 text-xs font-mono font-bold tracking-wider shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                  {edu.year}
                </div>
                {/* Academic Icon */}
                <div className="w-10 h-10 bg-[#0a0a23] rounded-full flex items-center justify-center border border-gray-600 group-hover:border-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>

              {/* Middle Section: Details */}
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {edu.degree}
                </h3>
                {edu.major && (
                  <p className="text-lg text-gray-300 font-medium border-l-2 border-yellow-500 pl-3 mb-2">
                    {edu.major}
                  </p>
                )}
                <p className="text-sm text-gray-400 font-light italic">
                  {edu.desc}
                </p>
              </div>

              {/* Bottom Section: Institution */}
              <div className="pt-6 border-t border-gray-700/50 group-hover:border-yellow-400/30 transition-colors">
                <p className="text-gray-300 text-sm uppercase tracking-widest font-semibold">
                  at <span className="text-white group-hover:text-yellow-200 transition-colors">{edu.institution}</span>
                </p>
              </div>

            </div>

            {/* Decorative Side Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;