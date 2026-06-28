import styled from "styled-components";

const Seccion = styled.footer`
    display:grid;
    gap:.5rem;
    justify-items: center;
    background: blue;
    padding:1rem;
`;

const Copyright = styled.p`
  
`;

const Enlace = styled.a`
    color:yellow;
    font-weight: bold;
`;

function Footer({ data }) {
    return (
        <Seccion>
            <Copyright>{data.copyright}</Copyright>

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

export default Footer;