import styled from "@emotion/styled";

export default function PilaresCard({
  title,
  image,
  text = [],
}) {
  return (
    <Contenedor>
      <Titulo>{title}</Titulo>

      <Icono
        src={`img/${image}`}
        alt={title}
      />

      <div>
        {text.map((linea, index) => (
          <Texto key={index}>
            {linea}
          </Texto>
        ))}
      </div>
    </Contenedor>
  );
}

const Contenedor = styled.article`
  background: linear-gradient(
    145deg,
    #0b0b0b,
    #111
  );
  border: 1px solid
    rgba(0, 255, 0, 0.25);
  padding: 1.5rem;
  border-radius: 1.25rem;
  max-width: 320px;
  color: #eaeaea;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  box-shadow: 0 8px 20px
    rgba(0, 0, 0, 0.5);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 0, 0.6);
    box-shadow: 0 12px 28px
      rgba(0, 0, 0, 0.7);
  }
`;

const Titulo = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
  color: #00ff7b;
  letter-spacing: 0.5px;
`;

const Icono = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(
    0 4px 6px rgba(0, 0, 0, 0.6)
  );
`;

const Texto = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
  text-align: center;
  color: #cfcfcf;
`;
