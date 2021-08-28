import styled from 'styled-components';


export const FeedPostagensMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const PostagensRow = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    word-break: break-word;
`;

export const Postagem = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 13px;
`;

export const ImagemPostagem = styled.img`
    width: 100%;
`;

export const TituloPostagem = styled.h3`
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    line-height: 22px;
    margin-top: 23px;
`;

export const LinkPostagem = styled.a`
    margin-top: 30px;
    text-decoration: none;
    font-size: 17px;
    font-weight: 300;
    color: #000;
    display: flex;
    justify-content: space-between;
    transition: opacity 0.4s;

    :hover{
        opacity: 0.8;
    }
`;

export const IconeLink = styled.img`
    height: 16px;
`;