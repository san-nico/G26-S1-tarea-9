import styled from "@emotion/styled";

export function ImgIcono({ src, href }) {
  return (
    <Enlace href={href} target="_blank">
      <Imagen src={src}></Imagen>
    </Enlace>
  );
}
const Enlace = styled.a``;

const Imagen = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
`;
