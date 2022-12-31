import Container from "../Container";
import { Section, SectionTitle } from "../section/Section";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contacto = () => {
  return (
    <div id="contacto">
      <Section>
        <Container>
          <div className="py-6 md:py-20">
            <SectionTitle title="Contáctate conmigo" />
            <p></p>
            <div className="mt-10 flex items-center justify-between md:justify-center md:gap-10">
              <a
                href="https://twitter.com/_pablovalente"
                target="_blank"
                className="transition hover:text-blue-400"
              >
                <FaTwitter className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/pablo-valente-b0866a200/"
                target="_blank"
                className="transition hover:text-blue-500"
              >
                <FaLinkedinIn className="h-8 w-8" />
              </a>
              <a
                href="mailto:pablo.nvalente@gmail.com"
                className="transition hover:text-red-500"
              >
                <HiMail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contacto;
