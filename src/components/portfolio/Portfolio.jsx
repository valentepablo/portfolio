import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { Section, SectionTitle } from "../section/Section";
import ProjectCard from "./ProjectCard";

const proyectos = [
  {
    nombre: "Language Spin",
    descripcion:
      "Language Spin es una academia de idiomas situada en Catamarca, Argentina. Fuí parte del equipo de desarrollo de este sitio, el cuál contaba con dos diseñadores UX/UI y dos desarrolladores frontend. Fue una gran experiencia este proyecto, ya que me permitió conocer un poco las dinámicas del trabajo en equipo. Aprendí mucho sobre mis compañeros y también aporté mis conocimientos.",
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
    preview: "../../preview-languagespin.png",
    url: "https://language-spin.vercel.app/",
    github: "https://github.com/Caracolaracol/languageSpin-project",
  },
  {
    nombre: "Gamestore v2.0",
    descripcion:
      "Tienda virtual de videojuegos. Permite filtrar por categorías, ver el detalle de cada producto y agregar al carrito de compras.",
    tecnologias: [
      {
        nombre: "NextJS",
        icono:
          "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1669674284/tags/next.png",
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
      {
        nombre: "Firebase",
        icono:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png",
      },
      {
        nombre: "Framer Motion",
        icono:
          "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
      },
    ],
    preview: "../../preview-gamestore2.png",
    url: "https://gamestore-nextjs.vercel.app/",
    github: "https://github.com/valentepablo/gamestore-nextjs",
  },
  {
    nombre: "Bougie Shop",
    descripcion:
      "Tienda virtual para un emprendimiento de velas artesanales. Muestra las diferentes categorías de productos disponibles y contiene un carrito de compras.",
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
    github: "https://github.com/valentepablo/bougie",
  },
  {
    nombre: "WeatherApp",
    descripcion:
      "Pequeña aplicación del clima con la cual podemos buscar cualquier ciudad del mundo y nos muestra el clima actual y el pronóstico diario de la misma.",
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
    github: "https://github.com/valentepablo/weatherapp",
  },
  {
    nombre: "TodoList",
    descripcion:
      "Esta aplicación nos permite crear nuevas tareas y asignarle una prioridad a las mismas. Podemos visualizar las tareas que están en progreso y las que ya han sido completadas.",
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
    github: "https://github.com/valentepablo/ts-todolist",
  },

  {
    nombre: "Gamestore",
    descripcion:
      "Tienda virtual de videojuegos. Permite filtrar por categorías, ver el detalle de cada producto y agregar al carrito de compras.",
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
    github: "https://github.com/valentepablo/gamestore",
  },
  {
    nombre: "Poke-App",
    descripcion:
      "Pequeña aplicación con la que podemos buscar Pokemons por nombre o por tipo de Pokemon para luego agregarlos a nuestro equipo.",
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
    github: "https://github.com/valentepablo/poke-app",
  },
];

const Portfolio = () => {
  const [intersecting, setIntersecting] = useState(false);
  const [openIndex, setOpenIndex] = useState(true);
  const portfolio = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50% 0px" }
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
        } group fixed top-1/2 right-0 hidden -translate-y-1/2 overflow-hidden rounded-l-xl bg-[#101010] shadow-xl transition duration-500 ease-out lg:block xl:w-48`}
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
