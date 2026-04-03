import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 overflow-hidden bg-[#030014]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#23D3EE]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-[#AE59FF]/10 blur-[120px] rounded-full"></div>

      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col items-start z-10 animate-fadeIn">
        
        {/* Badge */}
        <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <span className="text-xs md:text-sm text-gray-300 uppercase tracking-widest">
            🚀 Available for Jobs & Freelance
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] bg-clip-text text-transparent">
            Rafika Khatun
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
          I build <span className="text-white font-semibold">modern, responsive & high-performance</span> web applications using React, Tailwind & JavaScript.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-10">
          
          {/* Explore */}
          <a href="#projects">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] text-white font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg">
              Explore My Work <FaArrowRightLong size={18} />
            </button>
          </a>

          {/* Resume */}
          <a href="/resume.pdf" download>
            <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
              Download CV <FiDownload size={18} />
            </button>
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 items-center">
          <a href="https://github.com/" target="_blank">
            <FaGithub className="text-gray-400 hover:text-[#23D3EE] cursor-pointer transition" size={26} />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="text-gray-400 hover:text-[#AE59FF] cursor-pointer transition" size={26} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter className="text-gray-400 hover:text-[#23D3EE] cursor-pointer transition" size={26} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 mt-16 md:mt-0 relative flex justify-center items-center z-10">
        
        {/* Rotating Circle */}
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full animate-spin-slow"></div>

        {/* IMAGE */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl p-2 bg-gradient-to-br from-[#23D3EE]/20 to-[#AE59FF]/20 backdrop-blur-xl border border-white/10 hover:rotate-0 rotate-3 transition-all duration-500 overflow-hidden shadow-2xl">
          <img
            src="/profile.jpg"
            alt="Rafika Khatun"
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-10 -right-6 px-6 py-3 bg-[#030014]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <p className="text-[#23D3EE] font-bold text-sm">Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;