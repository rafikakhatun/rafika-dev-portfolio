import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

// Navigation links data
const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "expericece", title: "experience" },
  { id: "projects", title: "Projects" },
  { id: "certificates", title: "Certificates" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] 
       w-[97%] max-w-7xl 
        flex items-center py-4 px-6 
       rounded-2xl 
       transition-all duration-500 relative
      border border-white/20
      ${scrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg"
          : "bg-white/5 backdrop-blur-xl"
        }`}
    >

      <div className="absolute inset-0 -z-10 
        bg-gradient-to-r from-[#23D3EE]/20 via-[#AE59FF]/20 to-transparent 
        blur-2xl opacity-60"></div>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-2xl font-black tracking-tighter uppercase transition-all duration-300">
            <span className="bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] 
           bg-clip-text text-transparent 
           drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] 
           group-hover:drop-shadow-[0_4px_6px_rgba(35,211,238,0.5)] 
           transition-all duration-300">
            Rafika Khatun
          </span>
            <span className="text-[#AE59FF] text-3xl">..</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#23D3EE]" : "text-gray-300"
                } hover:text-white text-md font-semibold tracking-tight cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>

              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] transition-all duration-300 group-hover:w-full ${active === link.title ? "w-full" : ""}`}></span>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center relative">
          <button
            className="p-2 text-white bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`${!toggle
              ? "opacity-0 scale-95 translate-y-[-20px] pointer-events-none"
              : "opacity-100 scale-100 translate-y-0"
              } 
          fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-md
          h-[calc(100vh-100px)]
         bg-white/5 backdrop-blur-xl
         py-8 px-6
         overflow-y-auto
        transition-all duration-500 ease-out 
       border border-white/10 
      rounded-2xl 
        flex flex-col`}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 rounded-2xl 
      bg-gradient-to-r from-[#23D3EE]/20 via-[#AE59FF]/20 to-transparent 
      blur-2xl opacity-50">
            </div>

            <ul className="list-none flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? "bg-gradient-to-r from-[#23D3EE] to-[#AE59FF] bg-clip-text text-transparent"
                    : "text-gray-300"
                    } 
           text-lg tracking-tighter 
            transition-all duration-300 
            group hover:bg-white/0 hover:backdrop-blur-xl rounded-lg px-3 py-2 cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;