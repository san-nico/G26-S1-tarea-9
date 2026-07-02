import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { TituloCard } from "../ui/TituloCard";
import { ImgSmall } from "../img/SmallImg";

export function PilarCard({ title, image, text = [] }) {
  return (
    <Contenedor>
      <TituloCard>{title}</TituloCard>
      <ImgSmall src={`img/${image}`} alt={title} />

      <Textos>
        {text.map((linea, index) => (
          <Texto key={index}>{linea}</Texto>
        ))}
      </Textos>
    </Contenedor>
  );
}

const Contenedor = styled.article`
  display: grid;
  padding: ${theme.spacing(7)};
  gap: ${theme.spacing(6)};
  border-radius: ${theme.spacing(2)};
  border: 1px solid ${theme.colors.primario};
  background: ${theme.background.primario};
`;
//HOJAS

const Textos = styled.div`
  display: grid;
  gap: ${theme.spacing(2)};
`;
const Texto = styled.p``;
