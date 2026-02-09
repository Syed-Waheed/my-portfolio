import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000021]/80 backdrop-blur-md shadow-lg py-2"
          : "bg-[#000021] py-4"
      }`}
    >
      {/* Cool Gradient Line at Bottom (Only visible on scroll) */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <nav className="flex justify-between items-center px-6 md:px-20 max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-wide cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-white group-hover:text-gray-200 transition-colors">Waheed</span>
          <span className="text-yellow-400">'s</span>
          <span className="font-light text-gray-400 text-lg ml-1">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {/* Scrollable Links */}
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
            </li>
          ))}
          
          {/* Skills Link (New Page) */}
          <li className="relative group">
            <Link
              to="/skills"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
          </li>

          {/* Blogs Link (New Page) */}
          <li className="relative group">
            <Link
              to="/blogs"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blogs
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-yellow-400 focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#000021] border-b border-gray-800 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6 text-lg">
          {/* Scrollable Links */}
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-yellow-400 transition-colors w-full text-center py-2 hover:bg-white/5"
            >
              {link.name}
            </button>
          ))}
          
          {/* Skills Mobile Link */}
          <Link
            to="/skills"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-yellow-400 transition-colors w-full text-center py-2 hover:bg-white/5"
          >
            Skills
          </Link>

          {/* Blogs Mobile Link */}
          <Link
            to="/blogs"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-yellow-400 transition-colors w-full text-center py-2 hover:bg-white/5"
          >
            Blogs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;