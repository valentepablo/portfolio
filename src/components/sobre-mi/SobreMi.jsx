import {
  Section,
  SectionLight,
  SectionTitle,
} from "../../components/section/Section";
import Container from "../../components/Container";

const SobreMi = () => {
  return (
    <SectionLight>
      <Container>
        <div
          className="rounded-2xl bg-white p-6 md:px-24 md:py-20"
          id="sobre-mi"
        >
          <SectionTitle title="Return Pablo;" />
          <div className="mt-8 grid gap-16 sm:grid-cols-2 md:mt-14">
            <div className="bg-whitemd:p-10 rounded-2xl ">
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-zinc-800 sm:text-2xl md:mb-4">
                Sobre mi
              </h3>
              <p className="text-center text-sm leading-relaxed text-zinc-700 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptas sequi placeat dolorem, amet, dolorum tenetur deleniti
                deserunt, accusantium esse iusto eaque! Sunt unde aut qui
                quibusdam expedita cumque assumenda eius quisquam consequuntur
                alias, tempora laudantium recusandae praesentium maiores fugit
                libero adipisci nesciunt eos, voluptatibus eligendi. Id quisquam
                ipsam voluptates.
              </p>
            </div>
            <div className="rounded-2xl bg-white ">
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-zinc-800 sm:text-2xl md:mb-4">
                Conocimientos/Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">HTML</p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">CSS</p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    JavaScript
                  </p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    ReactJS
                  </p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    NextJS
                  </p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    TypeScript
                  </p>
                </div>
                <div className="flex aspect-square w-[90px] flex-col items-center justify-center rounded-lg">
                  <img src="https://placeimg.com/40/40/any" alt="any picture" />
                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    TailwindCSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionLight>
  );
};

export default SobreMi;
