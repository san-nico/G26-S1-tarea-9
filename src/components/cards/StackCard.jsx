/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { ImgCircular } from "../img/CircularImg";

export function StackCard({ name, image, description }) {
  return (
    <Card>
      <Titulo>{name}</Titulo>
      <ImgCircular src={`img/${image}`} />
      <Descripcion>{description}</Descripcion>
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

const Descripcion = styled.p`
  grid-area: descripcion;
`;
