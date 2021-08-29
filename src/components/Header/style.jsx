import styled from 'styled-components';

export const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;

    @media(max-width: 720px){
        display: flex;
        flex-direction: column;
    }
`;

export const IconeMenu = styled.img`
    width: 40px;
    cursor: pointer;
`;

export const Menu = styled.div`
    width: ${props => props.autenticado ? '250px' : '100px'};
    display: flex;
    justify-content: space-between;
`;

export const LinkPara = styled.a`
    width: 100%;
    font-size: 16px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.4s;
    margin-top: 20px;

    :hover{
        opacity: 0.8;
    }
`;