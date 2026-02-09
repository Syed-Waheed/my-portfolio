import React from "react";

const experiences = [
  {
    title: "HTML Developer",
    year: "2021",
    desc: "Started the journey by mastering web structure. Developed semantic, SEO-optimized pages with a focus on accessibility standards.",
    icon: "/images/html.png",
  },
  {
    title: "CSS Developer",
    year: "2021-2022",
    desc: "Deep dived into design systems. Mastered Flexbox, Grid, and responsive layouts to create visually stunning, mobile-first interfaces.",
    icon: "/images/css.png",
  },
  {
    title: "JavaScript Developer",
    year: "2022–2023",
    desc: "Brought the web to life. Implemented DOM manipulation, async logic, and interactive features using modern ES6+ syntax.",
    icon: "/images/js.png",
  },
  {
    title: "React Developer",
    year: "2023–2024",
    desc: "Transitioned to component-based architecture. Built scalable SPAs with React Hooks, Redux, and optimized rendering performance.",
    icon: "/images/react.png",
  },
  {
    title: "Python Developer",
    year: "2024",
    desc: "Expanded backend capabilities. Developed automation scripts and efficient utilities, focusing on clean, Pythonic code structures.",
    icon: "/images/python.png",
  },
  {
    title: "Data Science Enthusiast",
    year: "2025",
    desc: "Bridging data and dev. Mastering data wrangling, EDA, and visualization techniques using Pandas, NumPy, and Matplotlib.",
    icon: "/images/Data-Science-Course.JPEG",
  },
  {
    title: "Machine Learning Engineer",
    year: "2026",
    desc: "The Future. Building and deploying advanced ML models. Specializing in Neural Networks, NLP, and real-world AI applications.",
    icon: "/images/ml.png", 
  },
];

const Experience = () => {
  return (
    // UPDATED: Changed id="about" to id="experience" so the Header button works
    <section id="experience" className="px-6 md:px-12 my-20 min-h-screen">
      
      {/* --- SECTION 1: ABOUT ME (Image + Bio) --- */}
      <div className="max-w-6xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-gray-400 mb-2 text-lg uppercase tracking-widest">
            Who Am I?
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            About <span className="text-white">Me</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-[#12123e]/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-700 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          
          {/* LEFT: Image - REMOVED YELLOW TINT */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Changed border to gray-600 and removed the inner yellow overlay div */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-gray-600 shadow-2xl group">
              <img 
                src="/images/myimage.JPEG" 
                alt="Syed Abdul Waheed" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT: Professional Bio */}
          <div className="w-full md:w-2/3 text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Hi, I'm <span className="text-yellow-400">Syed Abdul Waheed</span>
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a disciplined and motivated enthusiast in <strong className="text-white">Data Science, Machine Learning, and Artificial Intelligence</strong>. 
              With a robust theoretical foundation in ML and Exploratory Data Analysis (EDA), I am actively translating concepts into practical expertise.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My experience includes hands on job simulations and projects using real-world datasets, where I have tackled <strong className="text-yellow-200">data cleaning, feature engineering, and model building</strong> while addressing critical challenges like overfitting and data leakage.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I prioritize conceptual depth over rote memorization and am eager to apply my consistent, curiosity driven approach to real-world industry challenges.
            </p>

            {/* Signature / Decorative Element */}
            <div className="pt-4">
              <span className="font-handwriting text-yellow-400 text-xl tracking-widest opacity-80">
                #Making Data Speak
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* --- SECTION 2: TIMELINE (The Workflow) --- */}
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-400 mb-2 text-lg uppercase tracking-widest">
            My Evolution
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Tech <span className="text-yellow-400">Timeline</span>
          </h1>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-24 h-[85%] w-1 bg-gradient-to-b from-yellow-400 via-purple-500 to-blue-900 rounded-full opacity-40"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:justify-between w-full group ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for the other side (Desktop only) */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Central Icon */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#0a0a23] border-4 border-yellow-400 rounded-full z-10 shadow-[0_0_15px_rgba(250,204,21,0.6)]">
                <img
                  src={exp.icon}
                  alt={exp.title}
                  className="w-full h-full object-cover rounded-full p-1"
                />
              </div>

              {/* Card Content */}
              <div className="ml-16 md:ml-0 w-full md:w-[45%]">
                <div className="bg-[#12123e] p-6 rounded-xl border border-gray-700 relative hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300 hover:-translate-y-1 group-hover:bg-[#1a1a4a]">
                  
                  {/* Arrow pointing to center */}
                  <div
                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#12123e] border-t border-r border-gray-700 rotate-45 group-hover:bg-[#1a1a4a] ${
                      index % 2 === 0
                        ? "-left-2 border-r-0 border-t-0 border-l border-b"
                        : "-right-2"
                    }`}
                  ></div>

                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-black bg-yellow-400 rounded-full shadow-lg">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;