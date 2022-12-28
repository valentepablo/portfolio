import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { Section, SectionTitle } from "../section/Section";
import ProjectCard from "./ProjectCard";

const proyectos = [
  {
    nombre: "Gamestore",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus nesciunt quidem beatae quam culpa necessitatibus ullam esse veniam tenetur?",
    tecnologias: [
      {
        nombre: "ReactJS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        nombre: "TailwindCSS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        nombre: "Firebase",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png",
      },
    ],
    preview: "../../preview-gamestore.png",
    url: "https://gamestore-valente.netlify.app/",
  },
  {
    nombre: "Poke-App",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus nesciunt quidem beatae quam culpa necessitatibus ullam esse veniam tenetur?",
    tecnologias: [
      {
        nombre: "ReactJS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        nombre: "TailwindCSS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    preview: "../../preview-pokeapp.png",
    url: "https://pokeapp-valente.netlify.app/",
  },
  {
    nombre: "TodoList",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus nesciunt quidem beatae quam culpa necessitatibus ullam esse veniam tenetur?",
    tecnologias: [
      {
        nombre: "ReactJS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        nombre: "TypeScript",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        nombre: "TailwindCSS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    preview: "../../preview-todolist.png",
    url: "https://todolist-valente.netlify.app/",
  },
  {
    nombre: "WeatherApp",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus nesciunt quidem beatae quam culpa necessitatibus ullam esse veniam tenetur?",
    tecnologias: [
      {
        nombre: "ReactJS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        nombre: "TypeScript",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        nombre: "TailwindCSS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    preview: "../../preview-weatherapp.png",
    url: "https://clima-valente.netlify.app/",
  },
  {
    nombre: "Bougie Shop",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus nesciunt quidem beatae quam culpa necessitatibus ullam esse veniam tenetur?",
    tecnologias: [
      {
        nombre: "ReactJS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        nombre: "TailwindCSS",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    preview: "../../preview-bougie.png",
    url: "https://bougieshop.netlify.app/",
  },
];

const Portfolio = () => {
  const [intersecting, setIntersecting] = useState(false);
  const [openIndex, setOpenIndex] = useState(false);
  const portfolio = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -600px 0px" }
    );

    observer.observe(portfolio.current);
  }, []);

  console.log(intersecting);
  return (
    <div id="portfolio" ref={portfolio} className="relative">
      <div
        className={`${
          intersecting ? "visible opacity-100" : "invisible opacity-0"
        } ${
          openIndex ? "translate-x-[0%]" : "translate-x-[80%]"
        } group fixed top-1/2 right-0 hidden -translate-y-1/2 overflow-hidden rounded-l-xl bg-[#101010] shadow-xl transition duration-300 ease-out lg:block xl:w-48`}
      >
        <div className="relative bg-neutral-900 py-4 px-10 text-base font-semibold uppercase text-zinc-500">
          <button
            onClick={() => setOpenIndex(!openIndex)}
            className="absolute top-1/2 left-3 -translate-y-1/2 opacity-0 transition hover:text-white group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`${
                openIndex ? "rotate-180" : "rotate-0"
              } aspect-square h-4 transition duration-200`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h3>Proyectos</h3>
        </div>
        <ul className="space-y-4 py-6 px-10">
          {proyectos.map((proyecto) => (
            <a
              href={`#${proyecto.nombre}`}
              className="block"
              key={proyecto.nombre}
            >
              <li className="cursor-pointer text-sm text-zinc-300 transition hover:text-white">
                {proyecto.nombre}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <Section>
        <Container>
          <div className="py-6 md:py-20">
            <SectionTitle title="Mis Proyectos" />
            <div className="mt-6 grid grid-cols-1 gap-10 md:mt-16">
              {proyectos.map((proyecto) => (
                <ProjectCard proyecto={proyecto} key={proyecto.nombre} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Portfolio;
