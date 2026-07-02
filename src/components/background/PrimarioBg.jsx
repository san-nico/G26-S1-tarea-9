import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export function PrimarioBg() {
  return <Fondo></Fondo>;
}

const Fondo = styled.div`
  background: ${theme.background.primario};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-block: 1px solid gray;
  z-index: -1;
`;
