/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import avatar from "../assets/naeem.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Naeem Muntasir Asif";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Typewriter Logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section id="home" className="relative mx-auto mt-32 md:mt-40 w-full max-w-6xl rounded-3xl border border-white/10 bg-glass p-10 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-neon/20 blur-[100px] -z-10 animate-pulse"></div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        
        {/* Left Content with Animations */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Hi, I’m <br />
            <span className="text-neon min-h-[1.2em] inline-block">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </span>
            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-medium text-white/90"
            >
              Full Stack Developer
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-white/70 text-sm md:text-lg max-w-md"
          >
            I build modern, scalable and futuristic web applications using React
            and modern UI principles.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/resume/NAEEM_MUNTASIR_ASIF.pdf"
              download
              className="rounded-xl bg-neon px-8 py-4 text-sm font-bold text-black transition hover:scale-105 hover:shadow-neon"
            >
              Download Resume
            </a>

            <a 
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:border-neon hover:bg-neon/10"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Avatar (Keep your original code) */}
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-2xl transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-0 rounded-full border-t-2 border-neon animate-spin"></div>
          
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-neon/30 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
            <img
              src={avatar}
              alt="Asif Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;