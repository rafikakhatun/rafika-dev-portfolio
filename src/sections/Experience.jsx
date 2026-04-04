import React from "react";
import { motion } from "framer-motion";
import ExperienceParticles from "../components/ExperienceParticles";

const experiences = [
    {
        title: "Frontend Developer (Intern)",
        company: "Contentive Tech Solution",
        date: "2025 - 2026",
        desc: "Worked on EDXAPP project, building responsive UI using React and Tailwind CSS. Collaborated with team members and implemented real-world features.",
    },
    {
        title: "Frontend Developer",
        company: "Self Projects",
        date: "2024 - 2025",
        desc: "Built multiple modern web applications using React, JavaScript, and Tailwind CSS. Focused on UI/UX, responsiveness, and performance.",
    },
];

const Experience = () => {
    return (
        <section className="relative w-full bg-[#030014] py-20 md:py-24 px-4 sm:px-6 md:px-20">
            <ExperienceParticles />
            {/* TITLE */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Work <span className="text-[#23D3EE]">Experience</span>
                </h2>
                <p className="text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                    My journey includes hands-on project experience and internship where I built real-world applications.
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative max-w-5xl mx-auto">

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#23D3EE]/30 transform -translate-x-1/2"></div>

                {/* ITEMS */}
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="relative mb-12 md:mb-16">

                            {/* Circle */}
                            <div className="absolute left-1/2 -top-6 md:top-0 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#030014] border-2 border-[#23D3EE] flex items-center justify-center z-10 shadow-[0_0_15px_#23D3EE]">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#23D3EE] rounded-full"></div>
                            </div>

                            {/* CARD */}
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`w-full md:w-[45%] p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-[#23D3EE]/20 shadow-lg shadow-[#23D3EE]/10 hover:shadow-[#23D3EE]/30 transition-all duration-300 ${isLeft ? "ml-0 md:mr-auto" : "ml-0 md:ml-auto"
                                    }`}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-[#23D3EE] mb-2">
                                    {exp.title}
                                </h3>

                                <p className="text-sm text-gray-100 font-semibold mb-1">
                                    {exp.company}
                                </p>

                                <p className="text-gray-400 text-xs md:text-sm mb-3">
                                    {exp.date}
                                </p>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {exp.desc}
                                </p>
                            </motion.div>

                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default Experience;