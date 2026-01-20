import avatar from "../assets/naeem.png";

const Hero = () => {
  // const scrollToContact = () => {
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };

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
              <a
                href="/public/NAEEM MUNTASIR ASIF.pdf"
                download
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download Resume
              </a>
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:border-neon">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin"></div>

          {/* 3D Avatar Image Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400/30">
            <img
              src={avatar}
              alt="Asif Avatar"
              className="h-full w-full rounded-full object-cover border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
