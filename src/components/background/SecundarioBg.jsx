import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export function SecundarioBg() {
  return <Fondo></Fondo>;
}

const Fondo = styled.div`
  background: ${theme.background.secundario};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
