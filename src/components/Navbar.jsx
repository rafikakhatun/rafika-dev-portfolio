import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "experience" },
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
      className={`fixed top-0 mt-2 left-1/2 -translate-x-1/2 z-[100] 
       w-[97%] max-w-7xl 
       flex items-center py-4 px-6 
       rounded-2xl 
       transition-all duration-500
       border border-white/20
       ${scrolled
          ? "bg-[#0f172a]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-[#0f172a]/40 backdrop-blur-xl"
        }`}
    >

      {/* Glow Background  */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-r from-[#23D3EE]/30 via-[#23D3EE]/20 to-transparent 
        blur-2xl opacity-70 animate-pulse"></div>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-2xl font-black tracking-tighter uppercase transition-all duration-300">
            <span
              className="bg-gradient-to-r from-[#23D3EE] to-[#23D3EE] 
              bg-clip-text text-transparent 
              drop-shadow-[0_2px_6px_rgba(35,211,238,0.6)] 
              group-hover:drop-shadow-[0_6px_12px_rgba(35,211,238,0.8)] 
              transition-all duration-500"
            >
              Rafika Khatun
            </span>
            <span className="text-[#23D3EE] text-3xl animate-pulse">..</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                  ? "text-[#23D3EE]"
                  : "text-gray-300"
                } hover:text-white text-md font-semibold tracking-tight cursor-pointer transition-all duration-300 relative group`}
              onClick={() => {
                setActive(link.title);

                const section = document.getElementById(link.id);
                if (section) {
                  window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "instant",
                  });
                }
              }}
            >
              {link.title}

              {/* Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] 
                bg-gradient-to-r from-[#23D3EE] to-[#23D3EE] 
                transition-all duration-500 
                ${active === link.title
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center relative">
          <button
            className="p-2 text-white bg-[#0f172a]/50 rounded-full border border-white/10 backdrop-blur-sm hover:scale-110 transition"
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
          bg-[#0f172a]/70 backdrop-blur-xl
          py-8 px-6
          overflow-y-auto
          transition-all duration-500 ease-out 
          border border-white/10 
          rounded-2xl 
          flex flex-col`}
          >
            {/* Glow Background  */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl 
              bg-gradient-to-r from-[#23D3EE]/20 via-[#23D3EE]/20 to-transparent 
              blur-2xl opacity-60 animate-pulse"
            ></div>

            <ul className="list-none flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                      ? "bg-gradient-to-r from-[#23D3EE] to-[#23D3EE] bg-clip-text text-transparent"
                      : "text-gray-300"
                    } 
                  text-lg tracking-tighter 
                  transition-all duration-300 
                  group hover:bg-white/0 hover:scale-105 rounded-lg px-3 py-2 cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);

                    const section = document.getElementById(link.id);
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 80,
                        behavior: "instant",
                      });
                    }
                  }}
                >
                  {link.title}
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