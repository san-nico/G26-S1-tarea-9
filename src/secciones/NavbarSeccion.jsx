import styled from "styled-components";
import { theme } from "../styles/theme";

export default function Navbar(props) {
  return (
    <Seccion>
      <Contenedor>
        <Imagen src={props.logo} alt="logo" />

        <Navegacion>
          {props.nav.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </Navegacion>
      </Contenedor>
    </Seccion>
  );
}

const Seccion = styled.section`
  display: grid;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background: ${theme.background.secundario};
`;
const Contenedor = styled.div`
  display: grid;
  justify-self: center;

  grid-template-areas: "img nav";
  width: ${theme.breakpoints.maximo};

  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  @media (max-width: 476px) {
    grid-template-areas:
      "img"
      "nav";
    justify-items: center;
    justify-content: center;
  }
`;

const Imagen = styled.img`
  grid-area: img;
  height: 4rem;
`;
const Navegacion = styled.nav`
  grid-area: nav;
  display: flex;
  gap: 1rem;
`;
