import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { HiChevronUp } from "react-icons/hi";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  // PLAYLIST
  const playlist = [
    { id: 1, name: "Lo-fi Chill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, name: "Deep Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setShowMenu(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  return (
    <div className="fixed bottom-6 right-6 md:right-10 md:bottom-10 z-[100] flex flex-col items-end gap-2">

      {/* AUDIO CONTROL */}
      <audio ref={audioRef} src={playlist[currentTrack].url} loop />

      {/* TRACK SELECTION MENU */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-2 w-44"
          >
            {playlist.map((track, index) => (
              <button
                key={track.id}
                onClick={() => changeTrack(index)}
                className={`w-full text-left px-4 py-2 rounded-xl text-[11px] transition-all flex items-center gap-3 ${currentTrack === index ? "bg-[#00FFB2]/20 text-[#23D3EE]" : "text-white/60 hover:bg-white/5"
                  }`}
              >
                <FaMusic className={currentTrack === index ? "animate-pulse" : ""} />
                {track.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-4">
        {/*LABEL TEXT*/}
        <div className="hidden md:block">
          <p className="text-[11px] text-white/90 italic tracking-wide">
            Wanna play music while scrolling?
          </p>
        </div>

        <div className="relative">
          {/*SMAILL BUTTON */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="absolute -top-1 -left-1 z-10 bg-[#1a1a2e] border border-white/20 p-1 rounded-full text-white/80 hover:text-white transition-colors"
          >
            <HiChevronUp className={`text-xs transition-transform duration-300 ${showMenu ? "rotate-180" : ""}`} />
          </button>

          {/* MUSIC PLAYER */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={
              isPlaying
                ? {
                  boxShadow: [
                    "0 0 10px rgba(35, 211, 238, 0.6)",
                    "0 0 30px rgba(35, 211, 238, 0.9)",
                    "0 0 60px rgba(35, 211, 238, 1)",
                    "0 0 30px rgba(35, 211, 238, 0.9)"
                  ],
                  backgroundColor: "#23D3EE"
                }
                : {
                  backgroundColor: "#23D3EE",
                  boxShadow: ["0 0 10px rgba(35, 211, 238, 0.6)",
                    "0 0 30px rgba(35, 211, 238, 0.9)",
                    "0 0 60px rgba(35, 211, 238, 1)",
                    "0 0 30px rgba(35, 211, 238, 0.9)"
                  ]
                }
            }
            transition={
              isPlaying
                ? {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
                : {}
            }
            className="w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-black cursor-pointer"
          >
            {isPlaying ? (
              <FaPause className="text-sm" />
            ) : (
              <FaPlay className="text-sm ml-1" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;