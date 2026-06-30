import styled from "@emotion/styled";
import Icono from "./Icono";

const Container = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
`;

const Panel = styled.div`
  display: grid;
  justify-content: center;
  align-content: space-between;
`;

const Sub = styled.div``;

const Foto = styled.img`
  height: 16rem;
  width: 12rem;
  object-fit: cover;
  border-radius: 1rem;
`;

const Nombre = styled.h3``;

const Role = styled.p``;

const Contactos = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Contacto = styled.div``;

const Link = styled.a``;

const Bio = styled.ul`
  display: grid;
  gap: 0.5rem;
`;

const Cv = styled.li``;

function RelatorCard({ card }) {
  return (
    <Container>
      <Panel>
        <Foto
          src={`img/${card.image}`}
          alt={card.name}
        />
      </Panel>

      <Panel>
        <Sub>
          <Nombre>{card.name}</Nombre>
        </Sub>

        <Bio>
          {card.bio.map(
            (item, index) => (
              <Cv key={index}>
                {item}
              </Cv>
            ),
          )}
        </Bio>

        <Contactos>
          {card.contacto.map(
            (item, index) => (
              <Contacto key={index}>
                <Icono
                  src={`img/rrss_${item.tipo}.png`}
                />
              </Contacto>
            ),
          )}
        </Contactos>
      </Panel>
    </Container>
  );
}

export default RelatorCard;
