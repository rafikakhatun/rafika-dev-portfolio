import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiCanva,
} from "react-icons/si";
import ParticlesBackground from "../components/ParticlesBackground";


const skills = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiCanva, name: "Canva" },
  { icon: FaFigma, name: "Figma" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiFramer, name: "Framer Motion" },
];

const Skills = () => {
  return (
    <section className="relative w-full bg-[#030014] py-20 overflow-hidden">
      <ParticlesBackground />

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#23D3EE]">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Modern Applications | Modern Technologies
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-8 md:gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: typeof window !== "undefined" && window.innerWidth < 768 ? 25 : 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer"
              >
                <Icon
                  className="text-[#23D3EE] text-[40px] sm:text-[50px] md:text-[60px]"
                />
                <p className="text-xs sm:text-sm text-[#23D3EE]">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;