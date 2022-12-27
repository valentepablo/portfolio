const ProjectCard = ({ proyecto }) => {
  return (
    <div className="rounded-2xl bg-[#101010] p-6 md:px-16 md:py-14">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium md:text-4xl">{proyecto.nombre}</h3>
        <a
          href={proyecto.url}
          target="_blank"
          className="flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          <span className="text-sm">Ir al sitio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="aspect-square w-5 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
      </div>
      <p className="mt-1 text-sm text-zinc-400 md:mt-2">
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
