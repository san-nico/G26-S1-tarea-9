import styled from "@emotion/styled";
import Icono from "./Icono";

export default function RelatorCard({ card }) {
  return (
    <Container>
      <Foto src={`img/${card.image}`} alt={card.name} />

      <Nombre>{card.name}</Nombre>

      <Bio>
        {card.bio.map((item, index) => (
          <Cv key={index}>{item}</Cv>
        ))}
      </Bio>

      <Contactos>
        {card.contacto.map((item, index) => (
          <Icono src={`img/rrss_${item.tipo}.png`} href={item.enlace} />
        ))}
      </Contactos>
    </Container>
  );
}
//contenedores
const Container = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  grid-template-areas:
    "imagen nombre"
    "imagen stats"
    "imagen contactos";
  grid-template-rows: auto 1fr auto;

  @media (max-width: 480px) {
    justify-self: center;
    grid-template-areas:
      "imagen"
      "nombre"
      "stats"
      "contactos";
    grid-template-columns: min-content;
    > * {
      justify-self: center;
    }
  }
`;

const Contactos = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-area: contactos;
  @media (max-width: 480px) {
    grid-area: imagen;
    justify-self: end;
    align-self: end;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

//hojas
const Foto = styled.img`
  height: 16rem;
  width: 12rem;
  object-fit: cover;
  border-radius: 1rem;
  grid-area: imagen;
`;

const Nombre = styled.h3`
  grid-area: nombre;
  justify-self: start;
`;

const Role = styled.p``;

const Link = styled.a``;

const Bio = styled.ul`
  display: grid;
  gap: 0.5rem;
  grid-area: stats;

  align-content: center;
`;

const Cv = styled.li``;
