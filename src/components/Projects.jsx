import React from "react";

const projects = [
  {
    id: 1,
    title: "Stock Market Prediction",
    desc: "End-to-end deep learning pipeline using LSTM to predict stock prices. Automated data fetching, preprocessing, and model training for 20+ stocks with an interactive dashboard.",
    tech: ["Python", "TensorFlow", "LSTM", "Streamlit", "yfinance"],
    github: "https://github.com/Syed-Waheed/stock-price-prediction-lstm",
    category: "Deep Learning",
  },
  {
    id: 2,
    title: "ChurnShield Prediction",
    desc: "ML solution to predict customer churn using Random Forest & SMOTE. Features a full pipeline with EDA, class imbalance handling, and business-focused metrics.",
    tech: ["Scikit-learn", "SMOTE", "Pandas", "NumPy"],
    github: "https://github.com/Syed-Waheed/SmartChurnClassifier",
    category: "Machine Learning",
  },
  {
    id: 3,
    title: "Crypto Trading Analysis",
    desc: "Quantitative analysis of crypto trading performance. Merges personal trading data with Fear & Greed Index to identify profitability and behavioral biases.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Syed-Waheed/Quantitative-Trading-Behavior-Analysis",
    category: "Data Analysis",
  },
  {
    id: 4,
    title: "ICC World Cup 2023 EDA",
    desc: "Comprehensive EDA on ICC World Cup 2023 data. Delivered 14+ insight-driven visualizations highlighting batting dominance, match outcomes, and venue adaptability.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Syed-Waheed/2023-WorldCup-EDA",
    category: "Data Visualization",
  },
  {
    id: 5,
    title: "AI Data Analyst Agent",
    desc: "AI-powered agent that chats with datasets. Generates visualizations and reports automatically using Local LLMs (Ollama) and RAG architecture.",
    tech: ["LangChain", "Ollama", "Streamlit", "ChromaDB"],
    github: "https://github.com/Syed-Waheed/ai-data-analyst",
    category: "GenAI / LLM",
  },
  {
    id: 6,
    title: "OpenVoice Social Platform",
    desc: "Twitter-inspired social platform with real-time posts, authentication, and trending news. Built with a modern React frontend and Supabase backend.",
    tech: ["React", "Tailwind", "Supabase", "Netlify"],
    github: "https://github.com/Syed-Waheed/openvoice",
    category: "Full Stack",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6 md:px-12">
      
      {/* Background Ambience (Optimized: Removed heavy blur for performance) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-12 text-center">
          <span className="text-yellow-400 font-mono text-xs tracking-widest uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
            Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Projects</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-base">
            A collection of my work in Data Science, Machine Learning, and Full Stack Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full"
            >
              <div className="h-full bg-[#12123e] p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 flex flex-col justify-between">
                
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div>
                  {/* Header: Folder Icon & Category */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-2 bg-[#0a0a23] rounded-lg border border-gray-700 group-hover:border-yellow-400/50 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider group-hover:text-yellow-200 transition-colors">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Footer: Tech Stack & Link Icon */}
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="w-full h-[1px] bg-gray-800 group-hover:bg-yellow-400/20 transition-colors"></div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs text-gray-500 font-mono">
                          #{tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* GitHub Icon */}
                    <div className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;