import { motion } from "framer-motion";

const words = ["Welcome", "To", "My", "Portfolio"];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const wordAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Loader({ onFinish }) {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#030014] z-50 overflow-hidden"
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
                setTimeout(onFinish, 800);
            }}
        >
            {/* Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-32 -left-20 w-[600px] h-[400px] bg-emerald-500/30 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute -bottom-32 -right-20 w-[600px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full opacity-50"></div>
            </div>

            {/* Animated Text */}
            <motion.h1
                variants={container}
                className="relative z-10 flex flex-wrap justify-center text-4xl md:text-6xl font-extrabold tracking-widest text-center"
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={wordAnimation}
                        className="relative chrome-text mx-2 inline-block font-black italic tracking-tighter uppercase"
                        style={{
                            fontSize: '5rem',
                            display: 'inline-block',
                            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #23D3EE 40%, #FFFFFF 50%, #23D3EE 60%, #0E7490 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: `
                             0px 0px 12px rgba(35, 211, 238, 0.9), 
                          0px 0px 25px rgba(35, 211, 238, 0.4),
                           3px 3px 0px rgba(0, 0, 0, 0.2)
                             `,
                            filter: 'brightness(1.25) saturate(1.2)',
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h1>
        </motion.div>
    );
}