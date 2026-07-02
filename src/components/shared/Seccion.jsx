import styled from "@emotion/styled";
import { TituloSeccion } from "./TituloSeccion";
import { theme } from "../../styles/theme";

const Container = styled.section`
  background: ${theme.background.primario};
`;

export default function Seccion({ id, titulo, children }) {
  return (
    <Container id={id}>
      <TituloSeccion>{titulo}</TituloSeccion>
      {children}
    </Container>
  );
}
