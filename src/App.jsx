import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import SobreMi from "./components/sobre-mi/SobreMi";
import Portfolio from "./components/portfolio/Portfolio";
import Contacto from "./components/contacto/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Portfolio />
      <Contacto />
    </>
  );
}

export default App;
