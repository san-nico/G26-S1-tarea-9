import styled from "styled-components";

const Container = styled.article`
    display:grid;
    grid-template-columns: 1fr 1fr;
    background:black;
    gap:1rem;
`;

const Panel = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Sub = styled.div`
    
`;
const Foto = styled.img`
    height:16rem;
    width:12rem;
    object-fit: cover;
    border-radius: 1rem;
    
`;

const Nombre = styled.h3`
    
`;

const Role = styled.p`
    
`;

const Contactos = styled.p`
    display:flex;
    gap:.5rem;
`;

const Contacto = styled.div`
   
`;
const Icono = styled.img`
    width:2rem;
    height:2rem;
    border-radius: .3rem;
`;

const Link = styled.a`
    
`;

const Bio = styled.ul`
    
`;

const Cv = styled.li`
    
`;

function RelatorCard({ card }) {
    return (
        <Container>
            <Panel>
                <Foto src={card.image} alt={card.name} />
            </Panel>

            <Panel>

                <Sub>
                    <Nombre>{card.name}</Nombre>

                </Sub>


                <Bio>
                    {card.bio.map((item, index) => (
                        <Cv key={index}>{item}</Cv>
                    ))}
                </Bio>

                <Contactos>
                    {
                        card.contacto.map(item => (
                            <Contacto>
                                <Icono src={`/img/rrss_${item.tipo}.png`}></Icono>
                            </Contacto>
                        ))
                    }
                </Contactos>



            </Panel>
        </Container>
    );
}

export default RelatorCard;