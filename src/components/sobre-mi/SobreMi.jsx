import { SectionLight, SectionTitle } from "../../components/section/Section";
import Container from "../../components/Container";

const SobreMi = () => {
  return (
    <div id="sobre-mi">
      <SectionLight>
        <Container>
          <div className="rounded-2xl bg-white p-6 md:px-24 md:py-20">
            <SectionTitle title="Return Pablo;" />
            <div className="mt-8 grid gap-16 sm:grid-cols-2 md:mt-16">
              <div>
                <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-zinc-800 sm:text-2xl">
                  Sobre mi
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-700 md:text-lg">
                  <strong>Desarrollador Frontend</strong>, actualmente
                  adquiriendo conocimientos de Backend. Genero proyectos
                  continuamente para implementar técnicas de desarrollo y
                  tecnologías que voy aprendiendo.
                </p>

                <p className="mb-4 text-sm leading-relaxed text-zinc-700 md:text-lg">
                  Persona entusiasta, apasionado por adquirir nuevos
                  conocimientos y es por eso que comencé mi carrera de manera
                  autodidacta investigando sobre el mundo de la programación y
                  especificamente el desarrollo web.
                </p>

                <p className="text-sm leading-relaxed text-zinc-700 md:text-lg">
                  Actualmente desarrollando aplicaciones con Next.js. También
                  disfruto de aprender nuevas tecnologías y por eso me encuentro
                  incursionando en el Backend.
                </p>
              </div>
              <div>
                <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-zinc-800 sm:text-2xl md:mb-4">
                  Skills
                </h3>
                <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      HTML
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      CSS
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      JavaScript
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      ReactJS
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1669674284/tags/next.png"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      NextJS
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      TypeScript
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      TailwindCSS
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      Firebase
                    </p>
                  </div>
                  <div className="flex aspect-square w-[80px] flex-col items-center justify-center rounded-lg md:w-[100px]">
                    <img
                      className="aspect-square w-16 rounded-lg md:w-20"
                      src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
                      alt="any picture"
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-700">
                      Framer Motion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionLight>
    </div>
  );
};

export default SobreMi;
