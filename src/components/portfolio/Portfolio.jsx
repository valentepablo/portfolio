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
    preview: "../../preview-bougie.png",
    url: "https://bougieshop.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
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
