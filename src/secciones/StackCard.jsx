/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

export default function StackCard({ card }) {
  return (
    <Card>
      <Titulo>{card.name}</Titulo>
      <Imagen src={`img/${card.image}`} />
      <Descripcion>{card.description}</Descripcion>
    </Card>
  );
}

const Card = styled.div`
  display: grid;
  justify-self: center;
  grid-template-areas:
    "imagen titulo"
    "imagen descripcion";
  grid-template-columns: auto auto;
  gap: 1rem;

  padding: ${theme.padding.seccion};

  @media (max-width: 600px) {
    grid-template-areas:
      "imagen"
      "titulo"
      "descripcion";
    justify-items: center !important;
    grid-template-columns: 1fr;
  }
`;

const Titulo = styled.h1`
  grid-area: titulo;
  align-self: end;
  color: ${theme.colors.primario};
`;

const Imagen = styled.img`
  border-radius: 100%;
  grid-area: imagen;

  height: 8rem;
  width: 8rem;
  border: 4px white solid;
  align-self: center;
`;

const Descripcion = styled.p`
  grid-area: descripcion;
`;
