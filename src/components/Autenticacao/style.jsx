import styled from 'styled-components';

export const AutenticacaoMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormAutenticacao = styled.div`
    width:600px;
    min-height: 450px;
    background-color: #F6F6F6;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TituloForm = styled.h3`
    font-size: 28px;
    font-weight: 300;
    text-align: justify;
`;

export const FormGroup = styled.div`
    width: 100%;
    margin-top: 40px;
`;

export const InputForm = styled.input`
    width: 100%;
    height: 60px;
    border: 0px;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 20px;

    :focus{
        outline: none !important;
    }
`;

export const ButtonForm = styled.button`
    width: 100%;
    height: 50px;
    background-color: rgba(0,0,0,0.8);
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    color: white;
    border: none;
    transition: opacity 0.4s;
    :hover{
        opacity: 0.8;
    }
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

export const MsgSuccess = styled.span`
    color: #00c851;
    font-size: 18px;
    text-align: justify;
    margin-top: 19px;

`;

export const MsgError = styled.span`
    color: #ff4444;
    font-size: 18px;
    text-align: justify;
    margin-top: 19px;
`;