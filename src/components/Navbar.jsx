import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl shadow-lg shadow-black/30">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          Naeem Muntasir Asif<span className="text-neon">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {["Home", "About", "Skills", "Projects", "Contact"].map(item => (
            <li
              key={item}
              className="cursor-pointer transition hover:text-neon"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block rounded-xl border border-neon/40 bg-neon/10 px-4 py-2 text-sm text-neon transition hover:bg-neon hover:text-black">
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-4 pt-2">
          <ul className="flex flex-col gap-4 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map(item => (
              <li
                key={item}
                className="cursor-pointer text-white/80 hover:text-neon"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
