import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { StackCard } from "../cards/StackCard";
import { theme } from "../../styles/theme";
import { TituloSeccion } from "../ui/TituloSeccion";
import Seccion from "../shared/Seccion";
import { Dot } from "../ui/Dot";
import { PrimarioBg } from "../background/PrimarioBg";

export default function StackSeccion({ titulo, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <Seccion id="stack">
      <PrimarioBg />
      <TituloSeccion>{titulo}</TituloSeccion>
      <Holder>
        {cards.map((item, i) => (
          <CardWrapper key={i} $active={i === activeIndex}>
            <StackCard
              name={item.name}
              image={item.image}
              description={item.description}
            />
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
