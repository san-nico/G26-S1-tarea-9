import styled from "@emotion/styled";
import { TituloSeccion } from "../ui/TituloSeccion";
import { theme } from "../../styles/theme";

export default function Seccion({ id, children }) {
  return <Container id={id}>{children}</Container>;
}

const Container = styled.section`
  display: grid;
  position: relative;
  padding: 4rem 1rem;
`;
