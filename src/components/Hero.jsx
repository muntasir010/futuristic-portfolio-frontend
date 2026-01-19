import avatar from "../assets/naeem.png";

const Hero = () => {
  return (
    <section className="relative mx-auto mt-40 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-glass p-10 backdrop-blur-xl shadow-xl shadow-black/40">
      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-neon/20 blur-3xl"></div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Hi, I’m <span className="text-neon">Naeem Muntasir Asif</span>{" "}
            <br />
            Full Stack Developer
          </h1>

          <p className="mt-4 text-white/70">
            I build modern, scalable and futuristic web applications using React
            and modern UI principles.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="rounded-xl bg-neon px-6 py-3 text-black transition hover:scale-105">
              Download Resume
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:border-neon">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="relative mx-auto h-64 w-64">
          <img
            src={avatar}
            alt="Asif Avatar"
            className="h-full w-full rounded-full object-cover border border-white/20"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-neon/40 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
