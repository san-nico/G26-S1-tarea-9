import styled from "styled-components";
import hero from '../assets/hero.png';
const Contenedor = styled.section`
    background: rgb(29, 15, 38);
    display:grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding:1rem;
`

const Panel = styled.section`
    
    align-content: center;
`

function Hero(props) {
    const data = props.data
    return (
        <Contenedor>
            <Panel>

                <h1>{data.title}</h1>
                <h1>{data.year}</h1>

                <div>
                    {data.tags.map(k => (
                        <p>{k}</p>
                    ))}
                </div>
                <h1>{data.highlight}</h1>

                <a href={data.cta.href}>{data.cta.label}</a>
            </Panel>
            <Panel>
                <img src={props.hero} alt={data.image.alt}></img>
            </Panel>

        </Contenedor>
    )
}

export default Hero