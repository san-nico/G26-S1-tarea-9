/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { css } from "@emotion/react";
export default function Hero({ data, hero }) {
  return (
    <Contenedor>
      <Limitador>
        <Info>
          <Title>{data.title}</Title>
          <Year>{data.year}</Year>

          <Tags>
            {data.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
          <Highlight>{data.highlight}</Highlight>

          <Cta href={data.cta.href}>{data.cta.label}</Cta>
        </Info>

        <Imagen src={hero} alt={data.image.alt} />
      </Limitador>
    </Contenedor>
  );
}

const Contenedor = styled.section`
  display: grid;
  padding: ${theme.padding.seccion};
  background: ${theme.background.primario};
  border-block: ${theme.border.seccion};
`;
const Limitador = styled.div`
  display: grid;

  justify-self: center;
  justify-content: space-around;

  width: ${theme.breakpoints.maximo};
  grid-template-columns: auto auto;
  align-items: center;

  gap: 1rem;
`;

const Info = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

//------------------------hojas

const Title = styled.h1``;

const ctaBase = css`
  padding: ${theme.spacing(2)} ${theme.spacing(6)};
  border-radius: ${theme.spacing(6)};
  border: 1px solid ${theme.colors.texto};
  font-weight: bold;
`;

const Year = styled.p`
  ${ctaBase};
  background: ${theme.colors.secundario};
`;

const Highlight = styled.h2`
  color: ${theme.colors.primario};
`;

const Tags = styled.ul`
  display: grid;
  list-style-type: circle;
  gap: ${theme.spacing(2)};
`;

const Tag = styled.li`
  font-style: italic;
`;

const Cta = styled.a`
  ${ctaBase};
  background: ${theme.colors.enfasis};
`;

const Imagen = styled.img`
  width: 100%;
  max-width: 480px;
  object-fit: contain;

  filter: none;
  transform: none;

  @media (max-width: 760px) {
    display: none;
  }
`;
