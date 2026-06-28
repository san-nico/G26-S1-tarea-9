import styled from "styled-components";

const Contenedor = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: rgb(29, 26, 42);
`;

const Navegacion = styled.nav`
    display: flex;
    gap: 1rem;
`;

function Navbar(props) {
    return (
        <Contenedor>
            <img src={props.logo} alt="logo" />

            <Navegacion>
                {props.nav.map((item, index) => (
                    <a key={index} href={item.href}>
                        {item.label}
                    </a>
                ))}
            </Navegacion>
        </Contenedor>
    );
}

export default Navbar;