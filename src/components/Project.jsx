import { useState } from "react";
import { projects } from "../data/project";
const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto mt-10 md:mt-20 w-[92%] max-w-6xl">
      <h2 className="mb-10 text-center text-3xl font-bold">
        My <span className="text-neon">Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl border border-white/10 bg-glass p-4 backdrop-blur-xl shadow-lg shadow-black/30 transition hover:-translate-y-2 hover:shadow-neon/20"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-60 w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>

            <p className="mt-2 text-sm text-white/70">{project.description}</p>

            <button
              onClick={() => setActive(project)}
              className="mt-4 w-full rounded-xl border border-neon/40 bg-neon/10 py-2 text-sm text-neon transition hover:bg-neon hover:text-black"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[92%] max-w-2xl rounded-3xl border border-white/10 bg-glass p-8 backdrop-blur-xl">
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 text-white/60 hover:text-neon"
            >
              ✕
            </button>

            <img
              src={active.image}
              alt={active.name}
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />

            <h3 className="text-2xl font-bold">{active.name}</h3>

            <p className="mt-2 text-white/70">{active.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm">
              <strong className="text-neon">Challenges:</strong>{" "}
              {active.challenges}
            </p>

            <p className="mt-2 text-sm">
              <strong className="text-neon">Future Plan:</strong>{" "}
              {active.future}
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={active.live}
                target="_blank"
                className="rounded-xl bg-neon px-5 py-2 text-black"
              >
                Live
              </a>
              <a
                href={active.github}
                target="_blank"
                className="rounded-xl border border-white/20 px-5 py-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
