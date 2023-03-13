const GithubIcon = () => {
  return (
    <a href="https://github.com/valentepablo" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github h-6 w-6 text-zinc-400 transition hover:text-zinc-300"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
      </svg>
    </a>
  );
};

const LinkedinIcon = () => {
  return (
    <a href="https://www.linkedin.com/in/valentepablo/" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-linkedin h-6 w-6 text-zinc-400 transition hover:text-zinc-300"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M8 11l0 5"></path>
        <path d="M8 8l0 .01"></path>
        <path d="M12 16l0 -5"></path>
        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
      </svg>
    </a>
  );
};

const GmailIcon = () => {
  return (
    <a href="mailto:pablo.nvalente@gmail.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-mail h-6 w-6 text-zinc-400 transition hover:text-zinc-300"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
        <path d="M3 7l9 6l9 -6"></path>
      </svg>
    </a>
  );
};

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
          <div className="my-4 flex items-center justify-center gap-2 md:justify-end">
            <GithubIcon />
            <LinkedinIcon />
            <GmailIcon />
          </div>
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
