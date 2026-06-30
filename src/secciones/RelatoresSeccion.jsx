import styled from "@emotion/styled";
import RelatorCard from "./RelatoresCard";
import { theme } from "../styles/theme";
import { TituloSeccion } from "./TituloSeccion";
import { bgPuntos } from "../styles/backgrounds";

export default function Relatores({ title, cards = [] }) {
  return (
    <Seccion id="relatores">
      <TituloSeccion>{title}</TituloSeccion>

      <Holder>
        {cards.map((card, index) => (
          <RelatorCard key={card.id ?? index} card={card} />
        ))}
      </Holder>
    </Seccion>
  );
}

const Seccion = styled.section`
  display: flex;
  border-block: ${theme.border.seccion};
  flex-direction: column;

  ${bgPuntos};
`;

const Titular = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Holder = styled.div`
  display: grid;
  width: ${theme.breakpoints.maximo};

  margin: 0 auto;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, minmax(min-content, 25rem));
  gap: 1.5rem;
  align-items: stretch;

  padding: 0.5rem;
`;
