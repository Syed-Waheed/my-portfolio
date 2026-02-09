import React from "react";
import Header from "../components/Header";

// --- DATA: SKILLS ---
const skillCategories = [
  {
    title: "Machine Learning & DL",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Feature Selection",
      "Time Series Forecasting",
      "Neural Networks",
      "LSTM & RNN",
      "Reinforcement Learning",
      "XGBoost",
      "Recommendation Systems",
      "Scikit-Learn",
      "TensorFlow / Keras",
    ],
    icon: "🧠",
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      "LLM App Development",
      "Prompt Engineering",
      "LangChain Basics",
      "RAG Pipelines",
      "Hugging Face",
      "OpenAI API",
    ],
    icon: "🤖",
  },
  {
    title: "Data Science Core",
    skills: [
      "Python (OOP, DS)",
      "Pandas (Wrangling)",
      "NumPy (Matrix Ops)",
      "SQL (Joins, Aggregations)",
      "EDA & Visualization",
      "Matplotlib & Seaborn",
      "Web Scraping",
      "JSON & API Handling",
    ],
    icon: "📊", 
  },
  {
    title: "Deployment & Tools",
    skills: [
      "Streamlit",
      "FastAPI",
      "Git & GitHub",
      "Jupyter Notebooks",
      "VS Code",
      "Command Line (Bash)",
    ],
    icon: "🚀",
  },
];

// --- DATA: CERTIFICATIONS ---
const certifications = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Feb 2026",
    credId: "Y0N4L2UGLB",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Y0N4L2UGLB",
  },
  {
    id: 2,
    title: "Building LLM Apps With Prompt Engineering",
    issuer: "NVIDIA",
    date: "Jan 2025",
    credId: "v4rq1bLWQO",
    link: "https://learn.nvidia.com/certificates?id=v4rq1bLWQO-q2Ymc5WeYfw",
  },
  {
    id: 3,
    title: "Unsupervised Learning & Recommenders",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Feb 2026",
    credId: "N3ZI9JUR9NP5",
    link: "https://www.coursera.org/account/accomplishments/verify/N3ZI9JUR9NP5",
  },
  {
    id: 4,
    title: "Advanced Learning Algorithms",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Jan 2026",
    credId: "2KBC2HE2NT2I",
    link: "https://www.coursera.org/account/accomplishments/verify/2KBC2HE2NT2I",
  },
  {
    id: 5,
    title: "Supervised Machine Learning",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Aug 2025",
    credId: "5XV6K2RYVA5S",
    link: "https://www.coursera.org/account/accomplishments/verify/5XV6K2RYVA5S",
  },
];

const SkillsAndCertifications = () => {
  return (
    <div className="min-h-screen bg-[#000021] text-white font-poppins relative overflow-hidden">
      
      {/* Background Decor: Glow Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Header />

      <main className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 z-10">
        
        {/* --- SKILLS SECTION --- */}
        <div className="mb-32">
          <div className="text-center mb-16 relative">
             <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2 block">
              &lt;MyStack /&gt;
            </span>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
              Technical Arsenal
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, index) => (
              <div
                key={index}
                className="group relative bg-[#12123e]/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] hover:-translate-y-2"
              >
                {/* Decoration Corner */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <span className="text-6xl">{cat.icon}</span>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg text-2xl shadow-lg text-black font-bold">
                    {cat.icon === "📊" ? "DS" : cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-yellow-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#000021] border border-gray-700 rounded text-xs md:text-sm text-gray-300 font-mono tracking-wide hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:font-bold transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CERTIFICATIONS SECTION --- */}
        <div>
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2 block">
              &lt;Credentials /&gt;
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center bg-[#0a0a23] border border-gray-800 rounded-xl p-5 hover:bg-[#12123e] transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                {/* Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-l-xl group-hover:w-2 transition-all"></div>

                {/* Issuer Logo / Initials */}
                <div className="ml-4 w-14 h-14 flex-shrink-0 bg-[#000010] rounded-full border border-gray-700 flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-white group-hover:border-yellow-400 transition-all">
                    {cert.issuer.includes("NVIDIA") ? "N" : "C"}
                </div>

                {/* Content */}
                <div className="ml-5 flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-100 truncate pr-2 group-hover:text-yellow-400 transition-colors">
                      {cert.title}
                    </h3>
                    
                    {/* Verified Badge Icon */}
                    <div className="text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" title="Verified Credential">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-0.5">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs bg-gray-800 px-2 py-0.5 rounded text-gray-300 font-mono">
                      {cert.date}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider hidden sm:block">
                      ID: {cert.credId}
                    </span>
                  </div>
                </div>

                {/* External Link Arrow */}
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </a>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default SkillsAndCertifications;