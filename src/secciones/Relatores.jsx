import styled from "styled-components"
import RelatorCard from "./RelatorCard"


const Seccion = styled.section`
    display:grid;
    gap:1rem;
   
`
const Holder = styled.div`
    display:grid;
    margin:auto;
    grid-template-columns: repeat(auto-fit,minmax(min-content,25rem));
    justify-content: center;
    gap:1rem;
    width:min(100%,80rem);
    background: red;
`
const Titular = styled.h1`
    text-align:center;
`

function Relatores({ title, cards }) {
    return (
        <Seccion>
            <Titular>{title}</Titular>
            <Holder>
                {
                    cards.map(card => (
                        <RelatorCard card={card} />
                    ))
                }
            </Holder>
        </Seccion>
    )
}
export default Relatores