const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 88 },
  { name: "Next JS", level: 75 },
  { name: "Tailwind", level: 85 },
];

const Skills = () => {
  return (
    <section className="mx-auto mt-10 md:mt-20 w-[92%] max-w-6xl">

      <h2 className="mb-10 text-center text-3xl font-bold">
        My <span className="text-neon">Skills</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-white/10 bg-glass p-6 backdrop-blur-xl shadow-lg shadow-black/30"
          >
            <div className="mb-4 flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-neon">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-neon"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
