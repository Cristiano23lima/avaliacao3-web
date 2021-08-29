import React, { useState } from 'react';
import { CadastrarPostagemMain, ButtonForm, FormPostagem, FormGroup, InputForm, LinkPara, MsgError, MsgSuccess, TituloForm, TextAreaForm } from './style';

import Api from '../../config/Axios';
import { withRouter } from 'react-router-dom';

const CadastroPostagem = () => {
    const [msgError, setMsgError] = useState(null);
    const [msgSuccess, setMsgSuccess] = useState(null);
    const [enviando, setEnviando] = useState(false);
    const [postagem, setPostagem] = useState({});
    
    const efetuarCadastroPostagem = () => {
        if(!!postagem.titulo && !!postagem.descricao){
            setEnviando(true);
            Api.post('/posts/save', postagem).then(
                res => {
                    setPostagem({})
                    setMsgSuccess("Postagem cadastrada com sucesso");
                    setMsgError(null)
                    setEnviando(false);
                },
                err => {
                    setMsgError(err?.response?.data?.mensagem);
                    setEnviando(false);
                }
            )
        }
    }


    return (
        <CadastrarPostagemMain>
            <FormPostagem id="postagem-cadastro">
                <TituloForm>Cadastrar Postagem</TituloForm>
                {!!msgSuccess ? (<MsgSuccess>{msgSuccess}</MsgSuccess>) : null}
                {!!msgError ? (<MsgError>{msgError}</MsgError>) : null}
                <FormGroup>
                    <InputForm placeholder="Titulo da Postagem" type="text" onChange={(e) => setPostagem({...postagem, titulo: e.target.value})} value={postagem.titulo ?? ""}></InputForm>
                    <TextAreaForm placeholder="Descrição da postagem" onChange={(e) => setPostagem({...postagem, descricao: e.target.value})} value={postagem.descricao ?? ""}></TextAreaForm>
                    <ButtonForm type="button" onClick={() => efetuarCadastroPostagem()} disabled={enviando}>Salvar</ButtonForm>
                </FormGroup>
                <LinkPara>Voltar</LinkPara>
            </FormPostagem>
        </CadastrarPostagemMain>
    )
};

export default withRouter(CadastroPostagem);