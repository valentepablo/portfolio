import Navbar from "./components/navbar/Navbar";
import { Section, SectionTitle } from "./components/section/Section";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Section>
        <Container>
          <SectionTitle title="Portfolio" />
          <img
            src="../../test.jpg"
            alt="photo of the galaxy"
            className="mt-4 rounded-lg"
          />
        </Container>
      </Section>
    </div>
  );
}

export default App;
