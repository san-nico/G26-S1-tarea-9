import styled from "styled-components"
import PilaresCard from "./PilaresCard"

const Contenedor = styled.section`
    display:grid;
    gap:1rem;
    justify-content: center;
    background: #070610;
    padding:2rem 0;
`
const Holder = styled.section`
    display:grid;
    gap:1rem;
    grid-template-columns: repeat(3,1fr);
`

function Pilares({ titulo, cards }) {
    return (
        <Contenedor>
            <h1>{titulo}</h1>

            <Holder>


                {cards.map(card => (
                    <PilaresCard
                        title={card.title}
                        image={card.image}
                        text={card.text}

                    />
                ))}
            </Holder>

        </Contenedor>

    )
}
export default Pilares