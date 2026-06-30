/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import CardPilares from "./PilaresCard";
import fondo from "../assets/fondo.png";

const Contenedor = styled.section`
  padding: 3rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-image: url(${fondo});
  background-repeat: repeat;
  background-size: 20rem;
`;

const Titulo = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.5px;

  span {
    color: #00ff7b;
  }
`;

const Holder = styled.div`
  width: 100%;
  max-width: 1100px;

  display: grid;
  gap: 1.5rem;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      1fr
    );
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function Pilares({
  titulo,
  cards = [],
}) {
  return (
    <Contenedor>
      <Titulo>{titulo}</Titulo>

      <Holder>
        {cards.map((card, index) => (
          <CardPilares
            key={index}
            title={card.title}
            image={card.image}
            text={card.text}
          />
        ))}
      </Holder>
    </Contenedor>
  );
}

export default Pilares;
