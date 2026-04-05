import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// IMPORT IMAGES
import edxapp from "../assets/edxapp-dashboard.png";
import weddingManagement from "../assets/wedding-management.png";
import logistic from "../assets/logistic-landing-page.png";
import weddingEvents from "../assets/wedding-events.png";
import coffee from "../assets/coffee-landing-page.png";
import BubblesBackground from "../components/BubblesBackground";

const projects = [
    {
        name: "EDXAPP Dashboard",
        description: "A comprehensive educational management system for tracking student progress.",
        image: edxapp,
        live: "https://example.com",
    },
    {
        name: "Wedding Management",
        description: "Full-stack solution for managing guest lists, venues, and event scheduling.",
        image: weddingManagement,
        live: "https://example.com",
    },
    {
        name: "Logistic Landing Page",
        description: "Modern landing page with real-time tracking UI and service overview sections.",
        image: logistic,
        live: "https://example.com",
    },
    {
        name: "Wedding Events",
        description: "Elegant event showcase platform focusing on high-quality visuals and galleries.",
        image: weddingEvents,
        live: "https://example.com",
    },
    {
        name: "Coffee Landing Page",
        description: "Minimalist E-commerce landing page featuring smooth scrolling and product reveals.",
        image: coffee,
        live: "https://example.com",
    },
    {
        name: "Netflix Clone",
        description: "Movie streaming interface with dynamic category browsing and preview features.",
        image: edxapp,
        live: "https://example.com",
    },
];

const Projects = () => {
    return (
        <section className="relative w-full bg-[#030014] py-20 px-6 md:px-20">
            <BubblesBackground></BubblesBackground>

            {/* TITLE */}
            <div className="relative z-10">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Latest <span className="text-[#23D3EE]">Project</span>
                    </h2>

                    {/* ADDED SUBHEADING BELOW TITLE */}
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        Explore our most recent creative endeavors, showcasing cutting-edge web design and development solutions.
                    </p>
                </div>
                {/* GRID */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        // State Border Glow
                            className="relative rounded-2xl overflow-hidden group border border-[#23D3EE]/50 
                         bg-[#0a0a1a] 
                           shadow-[0_0_20px_rgba(35,211,238,0.2)] 
                           hover:shadow-[0_0_40px_rgba(35,211,238,0.6)]  
                         hover:border-[#23D3EE] 
                          transition-all duration-500 ease-in-out"          >

                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-2xl">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-[220px] object-contain bg-[#0a0a1a]"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* OVERLAY */}
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-t from-[#030014] via-[#030014]/95 to-[#23D3EE]/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out px-4"
                            >

                                {/* TEXT */}
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {project.name}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* LIVE LINK WITH TEXT */}
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23D3EE] text-black font-medium hover:bg-white transition-colors duration-300"
                                >
                                    <span className="text-xs uppercase tracking-wider font-bold">Visit Live Project</span>
                                    <FiExternalLink size={18} />
                                </motion.a>
                            </motion.div>

                            {/* HOVER BORDER  */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#23D3EE] group-hover:shadow-[0_0_20px_rgba(35,211,238,0.4)] transition duration-500 pointer-events-none"></div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;