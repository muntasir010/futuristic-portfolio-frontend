/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Twitter } from "lucide-react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="relative z-[101] mt-10 md:mt-20 border-t border-white/10 bg-glass backdrop-blur-xl overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-40 w-80 bg-neon/5 blur-[100px] -z-10" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">

        {/* Logo & Identity Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3">
            {/* Logo Placeholder - You can use your 3D generated image here */}
            <div className="h-14 w-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shadow-neon">
               <span className="text-neon font-black text-xl"> <img src={logo} alt="" /></span>
            </div>
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              Naeem <span className="text-neon">Muntasir</span> Asif
            </h2>
           
          </div>
          <p className="mt-2 text-xs font-medium tracking-widest uppercase text-white/40 md:ml-12">
            Professional Full-Stack Developer
          </p>
        </motion.div>

        {/* Social Icons with Stagger Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <FooterIcon
            href="https://github.com/muntasir010"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <FooterIcon
            href="https://www.linkedin.com/in/naeem-muntasir-asif-b8b6873a7/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <FooterIcon
            href="mailto:naeemtasir03@gamil.com"
            icon={<Mail size={20} />}
            label="Email"
          />
          <FooterIcon
            href="https://www.facebook.com/naeem.muntasir.7"
            icon={<Facebook size={20} />}
            label="Facebook"
          />
        </motion.div>
      </div>

      {/* Footer Bottom with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="border-t border-white/5 bg-black/20 py-6 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} <span className="text-white/60">NMA ASIF</span> • Crafted with Passion
        </p>
      </motion.div>
    </footer>
  );
};

const FooterIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-neon/50 hover:text-neon hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
  >
    {icon}
    {/* Tooltip on Hover */}
    <span className="absolute -top-10 scale-0 rounded bg-neon px-2 py-1 text-[10px] font-bold text-black transition-all group-hover:scale-100">
      {label}
    </span>
  </motion.a>
);

export default Footer;