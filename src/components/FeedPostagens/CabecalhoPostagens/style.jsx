import styled from 'styled-components';

export const Cabecalho = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
`;

export const SubMenu = styled.span`
    font-size: 16px;
    font-weight: bold;
    @media(max-width: 720px){
        margin-left: 50%;
    }
`;

export const Titulo = styled.h3`
    font-size: 45px;
    @media(max-width: 720px){
        font-size: 25px;
        text-align: center;
    }
`;