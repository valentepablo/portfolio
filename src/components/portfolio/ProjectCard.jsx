const ProjectCard = ({ proyecto }) => {
  return (
    <div
      id={proyecto.nombre}
      className="rounded-2xl border border-[#080808] bg-gradient-to-b from-[#060606] to-[#010101] p-6 md:px-16 md:py-14"
    >
      <div className="flex flex-col justify-between gap-2 pb-4 md:flex-row">
        <h3 className="mb-1 text-2xl font-medium md:text-5xl">
          {proyecto.nombre}
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={proyecto.url}
            target="_blank"
            className="flex items-center justify-end gap-2 rounded-md border border-zinc-800 bg-zinc-900 bg-opacity-50 px-2 py-1 font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-opacity-70 hover:text-white"
          >
            <span className="text-sm">Ir al sitio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <a
            href={proyecto.github}
            target="_blank"
            className="flex items-center justify-end gap-2 rounded-md border border-zinc-800 bg-zinc-900 bg-opacity-50 px-2 py-1 font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-opacity-70 hover:text-white"
          >
            <span className="text-sm">Ir al código</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
      <p className="mt-2 max-w-prose text-sm text-zinc-400 md:mt-2 lg:text-base">
        {proyecto.descripcion}
      </p>
      <div className="mt-4 mb-4 flex gap-3 md:mb-6 md:mt-6">
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
      <div className="rounded-lg md:px-16 md:py-12">
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
