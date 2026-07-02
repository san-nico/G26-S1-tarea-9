import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import fondo from "../../assets/fondo.png";

export function TileBg() {
  return <Fondo></Fondo>;
}

const Fondo = styled.div`
  background: url(${fondo});
  background-size: 20rem;
  background-position: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
