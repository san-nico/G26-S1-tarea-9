import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { TituloSeccion } from "./TituloSeccion";
import StackCard from "./StackCard";
import { theme } from "../styles/theme";

export default function StackSeccion({ title, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <Seccion id="stack">
      <TituloSeccion>{title}</TituloSeccion>

      <Holder>
        {cards.map((item, i) => (
          <CardWrapper key={i} $active={i === activeIndex}>
            <StackCard card={item} />
          </CardWrapper>
        ))}
      </Holder>

      <Dots>
        {cards.map((_, i) => (
          <Dot key={i} $active={i === activeIndex} />
        ))}
      </Dots>
    </Seccion>
  );
}

const Seccion = styled.section`
  background: ${theme.background.primario};
  border-block: ${theme.border.seccion};
`;

const Holder = styled.div`
  display: grid;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  opacity: ${(props) => (props.$active ? 1 : 0)};

  transition: opacity 0.5s ease;
`;

const Dots = styled.div`
  transform: scale(1.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? theme.colors?.primary || "#2563eb" : "#cbd5e1"};

  transition: all 0.3s ease;
  transform: ${(props) => (props.$active ? "scale(1.2)" : "scale(1)")};
`;
