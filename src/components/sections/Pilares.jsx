import styled from "@emotion/styled";
import { PilarCard } from "../cards/PilarCard";

import { theme } from "../../styles/theme";
import { TituloSeccion } from "../ui/TituloSeccion";

import { SecundarioBg } from "../background/SecundarioBg";
import { TileBg } from "../background/TileBg";
import Seccion from "../shared/Seccion";

export default function Pilares({ titulo, cards = [] }) {
  return (
    <Seccion id="pilares">
      <TileBg />
      <TituloSeccion>{titulo}</TituloSeccion>
      <Holder>
        {cards.map((card, index) => (
          <PilarCard
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

const Holder = styled.div`
  width: ${theme.breakpoints.maximo};
  justify-content: center;
  display: grid;
  gap: 1.5rem;
  justify-self: center;
  margin: auto;

  grid-template-columns: repeat(auto-fit, minmax(min-content, 20rem));
`;
