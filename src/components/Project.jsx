/* eslint-disable no-unused-vars */


import { useState } from "react";
import { projects } from "../data/project";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto mt-10 md:mt-20 w-[92%] max-w-6xl text-white">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
        My <span className="text-neon shadow-neon">Projects</span>
      </h2>

      {/* Project Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl border border-white/10 bg-glass p-4 backdrop-blur-xl shadow-lg shadow-black/30 transition-all hover:border-neon/50 hover:shadow-neon/20"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.name}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 truncate text-xl font-bold text-white group-hover:text-neon">
              {project.name}
            </h3>

            <p className="mt-2 truncate text-sm text-white/70">
              {project.description}
            </p>

            {/* Tech Stack - Show Only First 3 */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-neon/20 bg-neon/5 px-2 py-1 text-[10px] uppercase tracking-wider text-neon"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons on Card */}
            <div className="mt-6 space-y-3">
              {/* View Details Button */}
              <button
                onClick={() => setActive(project)}
                className="w-full rounded-xl border border-neon/40 bg-neon/10 py-2.5 text-sm font-semibold text-neon transition-all hover:bg-neon hover:text-black"
              >
                View Details
              </button>

              {/* Direct Links: Live and GitHub */}
              <div className="flex gap-2">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center border border-white/10 hover:bg-white/10 hover:border-white/30 text-white py-2 rounded-xl text-xs font-medium transition duration-300"
                >
                  Live Link
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center border border-white/10 hover:bg-white/10 hover:border-white/30 text-white py-2 rounded-xl text-xs font-medium transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal remains the same as before... */}
         <AnimatePresence>
         {active && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.section>

            <motion.section 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-[#0a0a0c] p-6 md:p-8 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-neon hover:text-black transition-colors"
              >
                ✕
              </button>

              <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                <img
                  src={active.image}
                  alt={active.name}
                  className="mb-6 h-64 w-full rounded-2xl object-cover shadow-lg"
                />

                <h3 className="text-3xl font-bold text-white">{active.name}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <p className="text-base leading-relaxed text-white/80">{active.description}</p>
                  
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <p className="text-sm">
                      <strong className="text-neon block mb-1 uppercase tracking-tighter">Challenges Faced:</strong>
                      <span className="text-white/70">{active.challenges}</span>
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <p className="text-sm">
                      <strong className="text-neon block mb-1 uppercase tracking-tighter">Future Plans:</strong>
                      <span className="text-white/70">{active.future}</span>
                    </p>
                  </div>
                </div>

                {/* Footer Buttons in Modal */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-neon py-3 text-center font-bold text-black transition hover:opacity-90 shadow-[0_0_15px_rgba(var(--neon-rgb),0.4)]"
                  >
                    Live Preview
                  </a>
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-white/20 bg-white/5 py-3 text-center font-bold text-white transition hover:bg-white/10"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;