import styled from "@emotion/styled";
import CardPilares from "../cards/PilarCard";
import fondo from "../assets/fondo.png";

import { theme } from "../../styles/theme";
import { bgPuntos } from "../../styles/backgrounds";
import { TituloSeccion } from "../../secciones/TituloSeccion";
import Seccion from "../shared/Seccion";

export default function Pilares({ titulo, cards = [] }) {
  return (
    <Seccion id="pilares">
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
    </Seccion>
  );
}

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
