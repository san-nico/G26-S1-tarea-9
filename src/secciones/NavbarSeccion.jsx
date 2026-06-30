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
  background: ${theme.background.secundario};
`;
const Contenedor = styled.div`
  margin: auto;
  width: ${theme.breakpoints.maximo};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Imagen = styled.img`
  height: 4rem;
`;
const Navegacion = styled.nav`
  display: flex;
  gap: 1rem;
`;
