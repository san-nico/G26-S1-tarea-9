import styled from "@emotion/styled";
import CardPilares from "./PilaresCard";
import fondo from "../assets/fondo.png";
import { TituloSeccion } from "./TituloSeccion";

import { theme } from "../styles/theme";
import { bgPuntos } from "../styles/backgrounds";

export default function Pilares({ titulo, cards = [] }) {
  return (
    <Contenedor id="pilares">
      <TituloSeccion>{titulo}</TituloSeccion>
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

const Contenedor = styled.section`
  padding: ${theme.padding.seccion};

  display: flex;
  flex-direction: column;
  align-items: center;

  ${bgPuntos};
`;

const Titulo = styled.h1`
  color: #ffffff;

  span {
    color: #00ff7b;
  }
`;

const Holder = styled.div`
  width: ${theme.breakpoints.maximo};
  justify-content: center;
  display: grid;
  gap: 1.5rem;

  grid-template-columns: repeat(auto-fit, minmax(min-content, 20rem));
`;
