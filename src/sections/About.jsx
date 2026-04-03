import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/picofme (2).png";
import ParticlesBackground from "../components/ParticlesBackground";

const About = () => {
  return (
    <section className="relative w-full bg-[#030014] px-6 md:px-20 py-16 min-h-screen flex flex-col justify-between">
      <ParticlesBackground />

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0 flex justify-center md:justify-start"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[240px] md:w-[300px] aspect-square relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/10 blur-[80px] rounded-full scale-125"></div>

              {/* Hexagon */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  filter:
                    "drop-shadow(0 0 10px #22d3ee) drop-shadow(0 0 20px #22d3ee)",
                }}
              >
                <div
                  className="w-full h-full bg-cyan-400"
                  style={{
                    clipPath:
                      "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  }}
                >
                  <div
                    className="absolute inset-[3px] bg-slate-900"
                    style={{
                      clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                    }}
                  >
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#23D3EE] mb-2">
            Rafika Khatun
          </h1>

          <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
            Frontend Developer
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            I am a passionate Frontend Developer focused on building modern,
            responsive, and high-performance web applications using React,
            Tailwind CSS, and JavaScript. I love creating clean UI and smooth
            user experiences.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-white/10 p-5 rounded-xl text-center backdrop-blur-sm">
              <p className="text-gray-400 text-xs uppercase mb-1">Experience</p>
              <p className="text-white font-bold text-lg">2+ years</p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-5 rounded-xl text-center backdrop-blur-sm">
              <p className="text-gray-400 text-xs uppercase mb-1">Specialty</p>
              <p className="text-white font-bold text-lg">Frontend</p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-5 rounded-xl text-center backdrop-blur-sm">
              <p className="text-gray-400 text-xs uppercase mb-1">Focus</p>
              <p className="text-white font-bold text-lg">UI & UX</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-[#23D3EE] text-black rounded-lg font-semibold hover:bg-gray-200 transition">
              View Projects
            </button>

            <button className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
          About Me
        </h2>

        <div className="space-y-4 text-gray-400 text-base md:text-lg max-w-5xl mx-auto md:mx-0 text-center md:text-left">
          <p>
            I’m a Frontend Developer passionate about building fast, responsive,
            and visually appealing web applications. I enjoy turning ideas into
            real-world projects and continuously improving my skills to become a
            professional software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;