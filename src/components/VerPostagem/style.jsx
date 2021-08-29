import styled from 'styled-components';

export const VerPostagemMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Titulo = styled.h3`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
`;

export const Descricao = styled.p`
    font-size: 22px;
    font-weight: bolder;
    text-align: justify;
    margin-top: 30px;
    padding: 29px;
`;

export const LinkPara = styled.a`
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
