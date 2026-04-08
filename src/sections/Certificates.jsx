import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import ParticlesBackground from "../components/ParticlesBackground";


const certificates = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "Dec 2024",
        color: "from-[#C47609] to-[#744C1B]", // Golden/Orange
        description: "Cloud Infrastructure & Security"
    },
    {
        title: "React Advanced Certification",
        issuer: "Meta Blueprint",
        date: "Nov 2024",
        color: "from-[#2A8A9D] to-[#164E58]", // Teal/Cyan
        description: "Cloud Infrastructure & Security"
    },
    {
        title: "Full Stack Web Developer",
        issuer: "Google Cloud",
        date: "Oct 2024",
        color: "from-[#376BC6] to-[#27447D]", // Blue
        description: "Cloud Infrastructure & Security"
    },
    {
        title: "UI/UX Design Professional",
        issuer: "Adobe",
        date: "Sep 2024",
        color: "from-[#C13F5B] to-[#6F2C45]", // pink
        description: "Cloud Infrastructure & Security"
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="relative w-full bg-[#030014] py-24 px-6 overflow-hidden">
        <ParticlesBackground/>
            
            {/* SECTION TITLE */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    Premium <span className="text-[#23D3EE] drop-shadow-[0_0_15px_rgba(35,211,238,0.4)]">Certificates</span>
                </h2>
            </div>

        
            {/* CARDS GRID */}
            <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-[420px] w-[70%] md:w-full cursor-pointer"
                    >
                        {/* BACK GUARD */}
                        <div
                            className={`absolute bottom-0 w-full h-[320px] bg-gradient-to-br ${cert.color} opacity-60 rounded-xl z-0 shadow-lg`}
                            style={{
                                clipPath: "polygon(0% 15%, 50% 0%, 100% 15%, 100% 100%, 0% 100%)",
                            }}
                        ></div>

                        {/* HIDDEN WHITE PAPER */}
                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-[80%] bg-[#E5E7EB] rounded-t-xl z-10 overflow-hidden shadow-inner flex flex-col items-center pt-6 px-4 text-center border-b border-gray-300"
                            initial={{ y: 0, rotate: 0 }}
                            whileHover={{ y: -60, rotate: -5 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center mb-2 shadow-lg relative">
                                <div className="absolute inset-1 border border-dashed border-white/40 rounded-full"></div>
                            </div>
                            <h4 className="text-[#1f2937] font-serif font-extrabold text-[12px] uppercase leading-tight">
                                Certificate <br /> <span className="text-[10px] font-normal lowercase italic">of achievement</span>
                            </h4>
                        
                            <div className="mt-3 w-full">
                                <p className="text-[9px] text-gray-600 font-medium uppercase tracking-wider border-t border-gray-300 pt-2 px-2">
                                    This is to certify that the holder has mastered
                                </p>
                                <p className="text-[10px] text-[#1f2937] font-bold mt-1 italic">
                                    {cert.description}
                                </p>
                            </div>
                            
                            <div className="w-16 h-[1px] bg-gray-400 mt-3"></div>
                        </motion.div>

                        {/* FRONT GUARD */}
                        <div
                            className={`absolute bottom-0 w-full h-[280px] bg-gradient-to-br ${cert.color} 
                  shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 p-8 
                 flex flex-col items-center justify-between text-center z-20
                 transition-transform duration-500 group-hover:translate-y-2`}
                            style={{
                                clipPath: "polygon(0% 20%, 25% 10%, 50% 1%, 75% 10%, 100% 20%, 100% 100%, 0% 100%)",
                            }}
                        >
                            <div className="mt-4">
                                <h3 className="text-white text-lg font-bold leading-tight h-12 flex items-center justify-center">
                                    {cert.title}
                                </h3>
                                <div className="mt-2 flex flex-col items-center gap-1">
                                    <p className="text-white/80 text-xs font-medium italic">{cert.issuer}</p>
                                    <p className="text-white/50 text-[10px] uppercase tracking-[2px]">{cert.date}</p>
                                </div>
                            </div>

                            <a href="#" className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-bold hover:bg-white hover:text-black transition-all">
                                View <FiExternalLink size={14} />
                            </a>
                        </div>

                        {/* UNDER GLOW */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/40 blur-2xl rounded-full -z-10 group-hover:bg-[#23D3EE]/20 transition-all duration-500"></div>
                    </motion.div>
                ))}
            </div>
            {/* BOTTOM DECORATION */}
            <div className="flex justify-center gap-3 mt-16">
                <div className="w-12 h-1.5 bg-[#23D3EE] rounded-full shadow-[0_0_10px_#23D3EE]"></div>
               
            </div>
        </section>
    );
};

export default Certificates;