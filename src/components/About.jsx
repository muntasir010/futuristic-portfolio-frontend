/* eslint-disable no-unused-vars */

// import { motion } from 'framer-motion';
// import { HiCode, HiLightningBolt, HiColorSwatch, } from 'react-icons/hi';
// import { SiGithub } from 'react-icons/si';

// const About = () => {
//   return (
//     <section className="relative mx-auto mt-10 md:mt-20 w-[94%] max-w-6xl overflow-hidden">
//       {/* Glass Container */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative rounded-3xl border border-white/15 bg-glass p-8 backdrop-blur-xl shadow-lg shadow-black/40 overflow-hidden"
//       >
//         {/* Header */}
//         <div className="mb-10 flex items-center gap-3">
//           <span className="h-3 w-3 rounded-full bg-neon shadow-[0_0_10px_#00f3ff]" />
//           <h2 className="text-xl font-semibold tracking-widest text-neon uppercase">
//             About Me
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="grid items-center gap-10 md:grid-cols-3">
          
//           {/* Left Text - Scroll Animated */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="md:col-span-1"
//           >
//             <p className="text-sm leading-relaxed text-white/80">
//               I am a passionate <span className="text-neon">Full-Stack Developer</span> who loves turning complex 
//               problems into elegant, efficient code. My journey is fueled by a constant desire to 
//               learn and build futuristic user interfaces.
//             </p>
//             <p className="mt-4 text-sm leading-relaxed text-white/60 italic">
//               "Focusing on performance, scalability, and pixel-perfect design."
//             </p>
//           </motion.div>

//           {/* Center Orb with 3D Rotation Animation */}
//           <div className="relative flex justify-center md:col-span-1">
//             <motion.div 
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="relative h-48 w-48 rounded-full border border-neon/20 flex items-center justify-center"
//             >
//               {/* Outer Orbit Dots */}
//               <div className="absolute inset-0">
//                  <span className="absolute top-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-neon shadow-neon" />
//                  <span className="absolute bottom-0 left-1/2 h-2 w-2 -ml-1 rounded-full bg-white/50" />
//               </div>

//               {/* Inner Glowing Core */}
//               <motion.div 
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="relative h-24 w-24 rounded-full bg-neon/20 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,243,255,0.3)] flex items-center justify-center border border-neon/40"
//               >
//                 <HiCode className="text-4xl text-neon" />
//               </motion.div>
//             </motion.div>
            
//             {/* Background Static Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-neon/10 blur-[50px] -z-10" />
//           </div>

//           {/* Right Info Cards */}
//           <div className="grid grid-cols-2 gap-4 md:col-span-1">
//             <InfoCard 
//               title="Clean Coding" 
//               icon={<HiCode className="text-neon text-xl" />} 
//               delay={0.3}
//             />
//             <InfoCard 
//               title="Problem Solver" 
//               icon={<HiLightningBolt className="text-neon text-xl" />} 
//               delay={0.4}
//             />
//             <InfoCard 
//               title="UI/UX Design" 
//               icon={<HiColorSwatch className="text-neon text-xl" />} 
//               delay={0.5}
//             />
//             <InfoCard 
//               title="Open Source" 
//               icon={<SiGithub className="text-neon text-xl" />} 
//               delay={0.6}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const InfoCard = ({ title, icon, delay }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -5, borderColor: 'rgba(0, 243, 255, 0.4)' }}
//       className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all shadow-lg hover:shadow-neon/10"
//     >
//       <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neon/10 border border-neon/20">
//         {icon}
//       </div>
//       <p className="text-[10px] uppercase tracking-wider font-bold text-white/90">{title}</p>
//     </motion.div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiChip } from 'react-icons/hi';
import { IoFootball, IoExtensionPuzzle } from 'react-icons/io5';

const About = () => {
  return (
    <section className="relative mx-auto mt-10 md:mt-20 w-[94%] max-w-6xl">
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