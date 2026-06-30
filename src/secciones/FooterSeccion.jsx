import styled from "styled-components";
import { theme } from "../styles/theme";

export default function Footer({
  data,
}) {
  return (
    <Seccion>
      <Copyright>
        {data.copyright}
      </Copyright>

      <Enlace
        href={data.privacy.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.privacy.text}
      </Enlace>
    </Seccion>
  );
}

const Seccion = styled.footer`
  display: grid;
  gap: 0.5rem;
  justify-items: center;
  padding: 1rem;
  background: ${theme.background
    .secundario};
`;

const Copyright = styled.p``;

const Enlace = styled.a`
  color: yellow;
  font-weight: bold;
`;
