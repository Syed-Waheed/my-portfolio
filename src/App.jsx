import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Typed from "typed.js";
import "./styles/profileGlow.css"; 

// Components
import Header from "./components/Header.jsx"; 
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Blogs from "./pages/Blogs.jsx"; 
import BlogPost from "./pages/BlogPost.jsx";
import SkillsAndCertifications from "./pages/SkillsAndCertifications.jsx"; 

function HomePage() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "ML Engineer Enthusiast",
        "Data Science Enthusiast",
        "Tech Explorer 🚀",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false, 
    });

    return () => typed.destroy();
  }, []);

  return (
    // FIX: Removed 'overflow-hidden' from here so Sticky Header works again
    <main className="bg-[#000021] text-white font-poppins min-h-screen selection:bg-yellow-400 selection:text-black">
      
      {/* --- AMBIENT BACKGROUND GLOWS (Fixed Position) --- */}
      {/* This container handles the overflow so the main page stays scrollable */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10">
        
        {/* Header will now stick because the parent doesn't hide overflow */}
        <Header />

        {/* --- HERO SECTION --- */}
        <section
          id="home"
          className="flex flex-col md:flex-row justify-center items-center px-6 md:px-16 gap-12 md:gap-24 min-h-[90vh]"
        >
          {/* Left Text */}
          <div className="md:w-1/2 flex flex-col items-start space-y-4 z-10">
            <p className="text-xl text-yellow-400 font-mono tracking-wide">Hello, world!</p>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500">Waheed</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-light text-gray-300 h-[60px] flex items-center">
              <span>I am a&nbsp;</span>
              <span id="element" className="text-white font-semibold"></span>
            </div>

            <p className="text-gray-400 max-w-lg text-lg leading-relaxed mt-4">
              Turning data into insights and code into reality. Passionate about building intelligent systems and solving real-world problems.
            </p>

            {/* --- BUTTONS SECTION --- */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* 1. Resume */}
              <a
                href="/Waheed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-yellow-400 text-[#000021] font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
              >
                Download CV
              </a>

              {/* 2. LinkedIn (Added Back) */}
              <a
                href="https://www.linkedin.com/in/syed-abdul-waheed/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/50 text-white font-medium text-lg hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300"
              >
                LinkedIn
              </a>

              {/* 3. GitHub */}
              <a
                href="https://github.com/Syed-Waheed"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-transparent border border-gray-600 text-white font-medium text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* --- PROFILE IMAGE (Cool Rotating Ring Design) --- */}
          <div className="relative group">
             {/* Rotating Gradient Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#12123e] shadow-2xl">
               <img 
                src="/images/myimage.JPEG" 
                alt="Waheed" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
               />
            </div>
          </div>
        </section>


        {/* --- DIVIDER --- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50 my-10"></div>


        {/* --- SECTIONS --- */}
        <div className="space-y-24 pb-20">
          <section id="about" className="px-2">
            <Experience />
          </section>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>

          <section id="education" className="px-2">
            <Education />
          </section>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>

          <section id="projects" className="px-2">
            <Projects />
          </section>
        </div>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
      <Route path="/skills" element={<SkillsAndCertifications />} />
    </Routes>
  );
}