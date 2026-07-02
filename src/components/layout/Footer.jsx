import styled from "styled-components";
import { theme } from "../../styles/theme";
import { SecundarioBg } from "../background/SecundarioBg";

export default function Footer({ data }) {
  return (
    <Seccion>
      <SecundarioBg />
      <Copyright>{data.copyright}</Copyright>

      <Enlace href={data.privacy.url} target="_blank" rel="noopener noreferrer">
        {data.privacy.text}
      </Enlace>
    </Seccion>
  );
}

const Seccion = styled.footer`
  display: grid;
  position: relative;
  gap: 0.5rem;
  justify-items: center;
  padding: 1rem;
  border-top: 1px solid gray;
`;

const Copyright = styled.p``;

const Enlace = styled.a`
  color: yellow;
  font-weight: bold;
`;
