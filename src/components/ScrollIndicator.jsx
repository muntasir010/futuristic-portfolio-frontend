/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineVariants = {
    animate: {
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed left-3 lg:left-20 top-1/2 z-[99] hidden -translate-y-1/2 flex-col items-center gap-2 md:flex">
      <motion.div
        variants={lineVariants}
        animate="animate"
        className="h-20 w-[2px] bg-gradient-to-b from-transparent to-neon"
      />
      <div className="relative h-64 w-[2px] bg-white/10">
        <motion.div
          style={{ height: y }}
          className="absolute top-0 w-full bg-neon shadow-neon"
        />

        <motion.div
          style={{ top: y }}
          className="absolute -left-[6px] h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-neon bg-[#0a0a0c] shadow-neon"
        />
      </div>

      <motion.div
        variants={lineVariants}
        animate="animate"
        className="h-20 w-[2px] bg-gradient-to-t from-transparent to-neon"
      />
    </div>
  );
};

export default ScrollIndicator;
