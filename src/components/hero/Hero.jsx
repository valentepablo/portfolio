const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-20 bg-hero-pattern bg-center px-4 pt-16  md:gap-40">
      <div className="flex flex-col items-center gap-6 sm:gap-12 lg:flex-row">
        <div className="text-center sm:text-left">
          <h1 className="rounded-lg text-[40px] font-bold leading-tight sm:text-[80px] sm:leading-[5rem]">
            Pablo Valente
          </h1>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 sm:text-2xl md:text-right ">
            Desarrollador Web
          </h2>
        </div>
        <div className="image-wrapper">
          <img
            src="../foto-frente-pablo.jpg"
            alt="profile picture"
            className="image-1 rounded-lg"
          />
          <img
            src="../foto-frente-pablo.jpg"
            alt="profile picture"
            className="image-2 rounded-lg"
          />
          <img
            src="../foto-frente-pablo.jpg"
            alt="profile picture"
            className="image-3 rounded-lg"
          />
          <img
            src="../foto-frente-pablo.jpg"
            alt="profile picture"
            className="image-4 rounded-lg"
          />
        </div>
      </div>
      <div>
        <a
          href="#sobre-mi"
          className="group flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
        >
          Conoce más sobre mi{" "}
          <span className="transition duration-200 group-hover:translate-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
