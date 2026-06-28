import styled from "styled-components"
const Contenedor = styled.article`
    background:black;
    
    border:1px solid green;
    padding:1rem;
    border-radius: 1rem;
`
const Icono = styled.img`
    width:3rem;
`

function PilaresCard({ title, image, text }) {
    return (
        <Contenedor>
            <h2>{title}</h2>
            <Icono src={image}></Icono>

            {text.map(linea => (
                <p>{linea}</p>

            ))}

        </Contenedor>
    )
}

export default PilaresCard