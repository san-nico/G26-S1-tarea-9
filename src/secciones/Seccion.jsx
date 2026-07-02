import styled from "@emotion/styled";
import { TituloSeccion } from "./TituloSeccion";

const Container = styled.section`
  background: red;
`;

export default function Seccion({ titulo, children }) {
  return (
    <Container>
      <TituloSeccion>{titulo}</TituloSeccion>
      {children}
    </Container>
  );
}
