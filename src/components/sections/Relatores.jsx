import styled from "@emotion/styled";
import { RelatorCard } from "../cards/RelatorCard";
import { theme } from "../../styles/theme";

import { bgPuntos } from "../../styles/backgrounds";
import { TituloSeccion } from "../ui/TituloSeccion";
import Seccion from "../shared/Seccion";
import { TileBg } from "../background/TileBg";

export default function Relatores({ titulo, cards = [] }) {
  return (
    <Seccion id="relatores">
      <TileBg />
      <TituloSeccion>{titulo}</TituloSeccion>
      <Holder>
        {cards.map((card, index) => (
          <RelatorCard key={card.id ?? index} card={card} />
        ))}
      </Holder>
    </Seccion>
  );
}

const Holder = styled.div`
  display: grid;
  width: ${theme.breakpoints.maximo};

  margin: 0 auto;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, minmax(min-content, 30rem));
  gap: 1.5rem;
  align-items: stretch;

  padding: 0.5rem;
`;
