/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { HiCode, HiChip } from 'react-icons/hi';
import { IoFootball, IoExtensionPuzzle } from 'react-icons/io5';

const About = () => {
  return (
    <section id='about' className="relative mx-auto mt-10 md:mt-20 w-full max-w-6xl">
      <div className="relative rounded-3xl border border-white/15 bg-glass p-8 backdrop-blur-xl shadow-lg shadow-black/40 overflow-hidden">
        
        {/* Header - Neon Style */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-neon shadow-neon" />
          <h2 className="text-xl font-semibold tracking-wide text-neon uppercase">
            About Me
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-3">
          
          {/* Left: Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:col-span-1 space-y-4"
          >
            <p className="text-sm leading-relaxed text-white/90">
              I am a <span className="text-neon font-medium">Full-Stack Developer</span> dedicated to building clean, high-performance web applications. My journey is driven by a passion for solving complex architectural challenges.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              I specialize in modern JavaScript frameworks, focusing on scalable code and seamless user experiences. I thrive in environments that push the boundaries of technology.
            </p>
          </motion.div>

          {/* Center: Orbit Animation */}
          <div className="relative flex justify-center md:col-span-1">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative h-48 w-48 rounded-full border border-neon/20 flex items-center justify-center"
            >
              <div className="absolute inset-0">
                 <span className="absolute top-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-neon shadow-neon" />
                 <span className="absolute bottom-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-white/50" />
              </div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative h-24 w-24 rounded-full bg-neon/20 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,243,255,0.3)] flex items-center justify-center border border-neon/40"
              >
                <HiCode className="text-4xl text-neon" />
              </motion.div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-neon/10 blur-[50px] -z-10" />
          </div>

          {/* Right: Interests Cards with 4-Direction Animation */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {/* Top-Left Entry */}
            <InfoCard title="Coding" icon={<HiCode />} xDir={-50} yDir={-50} delay={0.1} />
            {/* Top-Right Entry */}
            <InfoCard title="Chess" icon={<IoExtensionPuzzle />} xDir={50} yDir={-50} delay={0.2} />
            {/* Bottom-Left Entry */}
            <InfoCard title="Football" icon={<IoFootball />} xDir={-50} yDir={50} delay={0.3} />
            {/* Bottom-Right Entry */}
            <InfoCard title="Algorithms" icon={<HiChip />} xDir={50} yDir={50} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

// InfoCard Component with dynamic entry direction
const InfoCard = ({ title, icon, xDir, yDir, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: xDir, y: yDir }} // শুরু হবে ৪ কোণা থেকে
      whileInView={{ opacity: 1, x: 0, y: 0 }}   // সেন্টারে এসে বসবে
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}    // once: false মানে স্ক্রল করলে বারবার এনিমেশন হবে
      whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.4)' }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:shadow-neon/10"
    >
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-neon/10 text-neon text-xl group-hover:bg-neon group-hover:text-black transition-colors">
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">{title}</p>
    </motion.div>
  );
};

export default About;