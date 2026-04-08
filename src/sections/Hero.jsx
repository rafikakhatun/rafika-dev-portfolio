import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import profileImage from "../assets/picofme (4).png"

const roles = ["Frontend Developer", "React Developer", "Problem Solver"];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#030014] px-6 md:px-20">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-left"
        >
          <p className="text-gray-300 text-lg mb-2">
            Hello, It's Me
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Rafika Khatun
          </h1>

          <h2 className="text-xl md:text-2xl text-white mb-4">
            And I'm a{" "}
            <span className="text-[#23D3EE] font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-6">
            I build modern, responsive & high-performance web applications using React, Tailwind & JavaScript.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-6">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#23D3EE] text-[#23D3EE] hover:bg-[#23D3EE] hover:text-black transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="px-6 py-3 bg-[#23D3EE] text-black rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Download CV
          </button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mt-10 md:mt-0"
        >
          <div className="relative">

            {/* HEXAGON SHAPE */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[280px] md:w-[380px] aspect-square relative flex items-center justify-center"
            >

              {/* OUTER GLOW STRONG */}
              <div className="absolute inset-0 rounded-[30%] shadow-[0_0_80px_#23D3EE] opacity-80"></div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-[30%] border-4 border-[#23D3EE] blur-md opacity-70"></div>

              {/* INNER SOFT GLOW */}
              <div className="absolute inset-0 rounded-[30%] bg-[#23D3EE]/10 blur-xl"></div>

              {/* IMAGE */}
              <div
                className="w-full h-full overflow-hidden relative z-10 "
                
              >
                <img
                  src={profileImage}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;