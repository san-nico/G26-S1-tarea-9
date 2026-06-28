import './reset.css'
import './App.css'

import logo from './assets/logo.png'
import hero from './assets/hero.png'

import contenido from './data/contenido.json'

import Navbar from './secciones/Navbar'
import Hero from './secciones/Hero'
import Pilares from './secciones/Pilares'
import Relatores from './secciones/Relatores'
import Footer from './secciones/Footer'

function App() {
    return (
        <>
            <Navbar logo={logo} nav={contenido.header.nav} />
            <Hero data={contenido.hero} hero={hero} />
            <Pilares
                titulo={contenido.pilares.title}
                cards={contenido.pilares.cards}
            />
            <Relatores
                title={contenido.relatores.title}
                cards={contenido.relatores.cards}
            />
            <Footer data={contenido.footer} />

        </>
    )
}

export default App