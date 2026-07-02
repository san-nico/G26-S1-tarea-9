import "./reset.css";
import "./App.css";

import logo from "./assets/logo.png";
import hero from "./assets/hero.png";

import contenido from "./data/contenido.json";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Pilares from "./components/sections/Pilares";
import Relatores from "./components/sections/Relatores";
import Footer from "./components/layout/Footer";
import StackSeccion from "./components/sections/Stack";

function App() {
  return (
    <>
      <Navbar logo={logo} nav={contenido.header.nav} />
      <Hero data={contenido.hero} hero={hero} />
      <Pilares
        titulo={contenido.pilares.title}
        cards={contenido.pilares.cards}
      />
      <StackSeccion
        titulo={contenido.stack.title}
        cards={contenido.stack.cards}
      />
      <Relatores
        titulo={contenido.relatores.title}
        cards={contenido.relatores.cards}
      />
      <Footer data={contenido.footer} />
    </>
  );
}

export default App;
