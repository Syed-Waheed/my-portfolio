import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/syed-waheed-298b782a7",
    icon: "/images/linkedln.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/Syed-Waheed",
    icon: "/images/github.png",
  },
  {
    name: "Gmail",
    href: "mailto:syedabdulwaheed0324@gmail.com",
    icon: "/images/gmail.png",
  },
  {
    name: "Twitter",
    href: "https://x.com/SyedWaheed24",
    icon: "/images/X.png",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#000021] text-white py-16 overflow-hidden">
      {/* Cool Gradient Line at the Top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent inline-block">
          Let’s Connect
        </h2>
        
        {/* Updated Text Section */}
        <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed text-lg">
          Feel free to reach out on any platform below
          <br />
          I’m always open to discussing tech, new ideas, and opportunities.
        </p>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center bg-[#12123e] rounded-full border border-gray-700 shadow-lg transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:-translate-y-2">
                <img 
                  src={link.icon} 
                  alt={link.name} 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
              </div>

              {/* Label (Appears on Hover) */}
              <span className="absolute -bottom-8 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm text-yellow-400 font-medium tracking-wide">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 max-w-xs mx-auto mb-8"></div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <p>&copy; {new Date().getFullYear()} Syed Abdul Waheed.</p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;