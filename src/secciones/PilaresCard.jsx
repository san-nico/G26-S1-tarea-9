import styled from "@emotion/styled";
import { theme } from "../styles/theme";

export default function PilaresCard({ title, image, text = [] }) {
  return (
    <Contenedor>
      <Titulo>{title}</Titulo>
      <Icono src={`img/${image}`} alt={title} />

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
const Titulo = styled.h3`
  color: ${theme.colors.primario};
  white-space: nowrap;
`;

const Icono = styled.img`
  width: 4rem;
`;

const Textos = styled.div`
  display: grid;
  gap: ${theme.spacing(2)};
`;
const Texto = styled.p``;
