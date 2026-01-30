/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    average: 83,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 87 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 86 },
      { name: "Next", level: 70 },
    ],
  },
  {
    title: "Backend",
    average: 76,
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Prisma", level: 70 },
      { name: "Firebase", level: 83 },
    ],
  },
  {
    title: "Tools",
    average: 90,
    skills: [
      { name: "Github", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 90 },
    ],
  },
];



const Skills = () => {
  return (
    <section id="skills" className="mx-auto mt-10 md:mt-20 w-full max-w-6xl text-white">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
        Technical <span className="text-neon shadow-neon">Skills</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col rounded-3xl border border-white/10 bg-glass p-7 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Category Header with Circular Progress */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-white/90">{category.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Expertise</p>
              </div>
              
              {/* Circular Progress Bar */}
              <div className="relative flex items-center justify-center w-14 h-14">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                  <motion.circle
                    cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent"
                    strokeDasharray="150"
                    initial={{ strokeDashoffset: 150 }}
                    whileInView={{ strokeDashoffset: 150 - (150 * category.average) / 100 }}
                    className="text-neon drop-shadow-[0_0_8px_#00f3ff]"
                  />
                </svg>
                <span className="absolute text-xs font-bold text-neon">{category.average}%</span>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-6 flex-grow">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-2 text-white/70 font-medium tracking-wide">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  {/* Subtle Progress Line */}
                  <div className="h-[3px] w-full rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-neon/40 to-neon shadow-[0_0_10px_rgba(0,243,255,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;