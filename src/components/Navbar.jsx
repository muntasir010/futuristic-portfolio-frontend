/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Resume Download Handler
  const handleResume = () => {
    const resumeUrl = "/resume/NAEEM_MUNTASIR_ASIF.pdf";
    window.open(resumeUrl, "_blank");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/resume/Naeem_Muntasir_Asif.pdf";
    link.click();
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-[100] w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl shadow-lg shadow-black/30">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Responsive Logo & Name */}
        <motion.div
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          {/* Logo Placeholder - You can use your 3D generated image here */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <div className="h-14 w-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shadow-neon">
              <span className="text-neon font-black text-xl">
                <img src="/src/assets/logo.png" alt="" />
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tighter text-white">
              <span className="text-xl">Naeem </span>
              <span className="text-neon">Muntasir </span>Asif
              <span className="text-neon">.</span>
            </h1>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/70">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative transition hover:text-neon group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleResume}
            className="hidden md:block rounded-xl border border-neon/40 bg-neon/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neon transition hover:bg-neon hover:text-black hover:shadow-neon"
          >
            Resume
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/20 backdrop-blur-2xl rounded-b-2xl"
          >
            <ul className="flex flex-col gap-2 p-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-white/80 hover:text-neon"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <button
                onClick={handleResume}
                className="mt-4 w-full rounded-xl bg-neon py-3 text-sm font-bold text-black"
              >
                Download Resume
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
