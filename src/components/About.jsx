/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { HiCode, HiChip } from 'react-icons/hi';
import { IoFootball, IoExtensionPuzzle } from 'react-icons/io5';

const About = () => {
  return (
    <section id='about' className="relative mx-auto mt-10 md:mt-20 w-[94%] max-w-6xl">
      {/* Glass Container - Using your specific bg-glass and backdrop-blur */}
      <div className="relative rounded-3xl border border-white/15 bg-glass p-8 backdrop-blur-xl shadow-lg shadow-black/40 overflow-hidden">
        
        {/* Header - Neon Style */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-neon shadow-neon" />
          <h2 className="text-xl font-semibold tracking-wide text-neon uppercase">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-10 md:grid-cols-3">
          
          {/* Left: Short & Professional Text */}
          <div className="md:col-span-1 space-y-4">
            <p className="text-sm leading-relaxed text-white/90">
              I am a <span className="text-neon font-medium">Full-Stack Developer</span> dedicated to building clean, high-performance web applications. My journey is driven by a passion for solving complex architectural challenges.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              I specialize in modern JavaScript frameworks, focusing on scalable code and seamless user experiences. I thrive in environments that push the boundaries of technology.
            </p>
          </div>

          {/* Center: Your Original Orbit Animation */}
         <div className="relative flex justify-center md:col-span-1">
          <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative h-48 w-48 rounded-full border border-neon/20 flex items-center justify-center"
            >
              {/* Outer Orbit Dots */}
              <div className="absolute inset-0">
                 <span className="absolute top-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-neon shadow-neon" />
                 <span className="absolute bottom-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-white/50" />
              </div>

              {/* Inner Glowing Core */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative h-24 w-24 rounded-full bg-neon/20 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,243,255,0.3)] flex items-center justify-center border border-neon/40"
              >
                <HiCode className="text-4xl text-neon" />
              </motion.div>
            </motion.div>
            
            {/* Background Static Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-neon/10 blur-[50px] -z-10" />
          </div>

          {/* Right: Interests Cards */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <InfoCard title="Coding" icon={<HiCode />} />
            <InfoCard title="Chess" icon={<IoExtensionPuzzle />} />
            <InfoCard title="Football" icon={<IoFootball />} />
            <InfoCard title="Algorithms" icon={<HiChip />} />
          </div>
        </div>
      </div>
    </section>
  );
};

// InfoCard Component with Hover Effects
const InfoCard = ({ title, icon }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-neon/40 hover:shadow-neon/10 hover:-translate-y-1">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-neon/10 text-neon text-xl group-hover:bg-neon group-hover:text-black transition-colors">
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">{title}</p>
    </div>
  );
};

export default About;