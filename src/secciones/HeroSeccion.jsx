/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

export default function Hero({ data, hero }) {
  return (
    <Contenedor>
      <Limitador>
        <Panel>
          <Year>{data.year}</Year>
          <Title>{data.title}</Title>
          <Highlight>{data.highlight}</Highlight>

          <Tags>
            {data.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>

          <Cta href={data.cta.href}>{data.cta.label}</Cta>
        </Panel>

        <Panel>
          <Imagen src={hero} alt={data.image.alt} />
        </Panel>
      </Limitador>
    </Contenedor>
  );
}

const Contenedor = styled.section`
  display: grid;
  background: ${theme.background.primario};
  border-block: ${theme.border.seccion};
`;
const Limitador = styled.div`
  display: grid;

  justify-self: center;
  justify-content: space-between;

  width: ${theme.breakpoints.maximo};
  grid-template-columns: auto auto;
  align-items: center;

  padding: 4rem 1rem;
  gap: 1rem;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Year = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 0.9rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.05;
`;

const Highlight = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Tag = styled.span`
  background: black;
  border: 1px solid rgba(0, 255, 0, 0.25);
  padding: 0.35rem 0.75rem;
  border-radius: 999px;

  font-size: 0.85rem;
`;

const Cta = styled.a`
  display: inline-block;
  margin-top: 0.5rem;

  background: black;
  border: 1px solid rgba(0, 255, 0, 0.4);

  text-decoration: none;

  padding: 0.8rem 1.2rem;
  border-radius: 0.9rem;

  width: fit-content;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 255, 0, 0.7);
  }
`;

const Imagen = styled.img`
  width: 100%;
  max-width: 480px;
  object-fit: contain;

  filter: none;
  transform: none;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;
