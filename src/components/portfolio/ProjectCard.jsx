const ProjectCard = ({ proyecto }) => {
  return (
    <div
      id={proyecto.nombre}
      className="rounded-2xl bg-[#101010] p-6 md:px-16 md:py-14"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium md:text-5xl">{proyecto.nombre}</h3>
        <a
          href={proyecto.url}
          target="_blank"
          className="flex items-center gap-2 font-medium text-zinc-400 transition hover:text-white"
        >
          <span className="text-sm">Ir al sitio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
      <p className="mt-2 max-w-prose text-sm text-zinc-400 md:mt-2 lg:text-base">
        {proyecto.descripcion}
      </p>
      <div className="mt-2 mb-4 flex gap-3 md:mb-6 md:mt-4">
        {proyecto.tecnologias.map((tecnologia) => {
          return (
            <img
              key={tecnologia.nombre}
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              className="aspect-square w-6 md:w-10"
            />
          );
        })}
      </div>
      <div className="rounded-lg bg-neutral-900 md:px-16 md:py-12">
        <img
          src={proyecto.preview}
          alt="something special"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
