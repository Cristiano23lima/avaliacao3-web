import styled from 'styled-components';

export const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
`;

export const IconeMenu = styled.img`
    width: 40px;
    cursor: pointer;
`;

export const Menu = styled.div`
    max-width: 250px;
    min-width: 100px;
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