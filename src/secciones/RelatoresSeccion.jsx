import styled from "@emotion/styled";
import RelatorCard from "./RelatoresCard";
import { theme } from "../styles/theme";

export default function Relatores({ title, cards = [] }) {
  return (
    <Seccion>
      <Titular>{title}</Titular>

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
  gap: 2rem;
  padding: 3rem 1rem;
  background: ${theme.background.primario};

  /* Fondo pro */

  color: #fff;
`;

const Titular = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
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
