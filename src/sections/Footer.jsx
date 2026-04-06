import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 
            }
        }
    };

    return (
        <footer className="relative w-full bg-[#030014] pt-20 pb-10 overflow-hidden">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div 
                    className="absolute -bottom-32 -left-20 w-[600px] h-[400px] bg-emerald-500/30 blur-[120px] rounded-full opacity-50"
                ></div>
                
                {/* Blue Glow */}
                <div 
                    className="absolute -bottom-32 -right-20 w-[600px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full opacity-50"
                ></div>
            </div>

            {/* ২. TOP CURVED BORDER */}
            <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 z-10">
                <svg
                    className="relative block w-full h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="fill-[#030014]"
                    ></path>
                </svg>
            </div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={staggerContainer}
                className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center"
            >
                {/* NAME */}
                <motion.div variants={fadeInUp} className="flex flex-col items-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#23D3EE] via-[#AE59FF] to-[#23D3EE] bg-clip-text text-transparent">
                        Rafika Khatun
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "96px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[3px] mt-2 bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] rounded-full"
                    ></motion.div>
                </motion.div>

                {/* SOCIAL ICON */}
                <motion.div variants={fadeInUp} className="flex items-center gap-6 md:gap-8 mb-10">
                    <SocialIcon icon={<FaYoutube />} link="#" />
                    <SocialIcon icon={<FaXTwitter />} link="#" />
                    <SocialIcon icon={<FaLinkedin />} link="#" />
                    <SocialIcon icon={<FaInstagram />} link="#" />
                    <SocialIcon icon={<FaGithub />} link="#" />
                </motion.div>

                {/* QUATATION */}
                <motion.p variants={fadeInUp} className="text-gray-300 text-center italic text-base md:text-lg mb-12 max-w-xl px-4">
                    "Success is when preparation meets opportunity."
                </motion.p>

                {/*COPYWRITE */}
                <motion.div variants={fadeInUp} className="w-full pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm tracking-wide">
                        © {currentYear} Rafika Khatun. All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

const SocialIcon = ({ icon, link }) => (
    <motion.a
        href={link}
        whileHover={{ scale: 1.25, rotate: 5, color: "#ffffff" }}
        whileTap={{ scale: 0.9 }}
        className="text-[#23D3EE] text-2xl md:text-3xl transition-colors duration-300 cursor-pointer"
    >
        {icon}
    </motion.a>
);

export default Footer;