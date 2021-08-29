import React, { useState } from 'react';
import { AutenticacaoMain, ButtonForm, FormAutenticacao, FormGroup, InputForm, LinkPara, MsgError, MsgSuccess, TituloForm } from './style';

import Api from '../../config/Axios';

import {login} from '../../config/auth.js';
import { withRouter, useHistory } from 'react-router-dom';

const Autenticacao = () => {
    const [registrar, setRegistrar] = useState(false);
    const [loginBlog, setLoginBlog] = useState({});
    const [registro, setRegistro] = useState({});
    const [msgError, setMsgError] = useState(null);
    const [msgSuccess, setMsgSuccess] = useState(null);
    const [enviando, setEnviando] = useState(false);
    const history = useHistory();
    
    const efetuarLogin = () => {
        if(!!loginBlog.email && !!loginBlog.senha){
            setEnviando(true);
            Api.post('/login', loginBlog).then(
                res => {
                    setLoginBlog({})
                    setMsgSuccess(null);
                    setMsgError(null)
                    setEnviando(false);
                    login(res.data.token);
                    history.push("/")
                },
                err => {
                    setMsgError(err?.response?.data?.mensagem);
                    setEnviando(false);
                }
            )
        }
    }

    const efetuarRegistro = () => {
        if(!!registro.primeiroNome && !!registro.ultimoNome && !!registro.email && !!registro.senha && !!registro.biografia){
            setEnviando(true);
            Api.post('/usuario/save', registro).then(
                res => {
                    setEnviando(false);
                    setRegistro({});
                    setMsgError(null)
                    setMsgSuccess("Cadastro efetuado com sucesso");
                    setRegistrar(false);
                },
                err => {
                    setEnviando(false);
                    setMsgError(err?.response?.data?.mensagem);
                }
            )
        }
    }


    return (
        <AutenticacaoMain>
            {
                registrar ? (
                    <FormAutenticacao id="registrar">
                        <TituloForm>Registra-se</TituloForm>
                        {!!msgSuccess ? (<MsgSuccess>{msgSuccess}</MsgSuccess>) : null}
                        {!!msgError ? (<MsgError>{msgError}</MsgError>) : null}
                        <FormGroup>
                            <InputForm placeholder="Seu primeiro nome" type="text" onChange={(e) => setRegistro({...registro, primeiroNome: e.target.value})} value={registro.primeiroNome ?? ""}></InputForm>
                            <InputForm placeholder="Seu ultimo nome" type="text" onChange={(e) => setRegistro({...registro, ultimoNome: e.target.value})} value={registro.ultimoNome ?? ""}></InputForm>
                            <InputForm placeholder="Idade" type="number" min="0" onChange={(e) => setRegistro({...registro, idade: e.target.value})} value={registro.idade ?? ""}></InputForm>
                            <InputForm placeholder="Coloque seu email" type="email" onChange={(e) => setRegistro({...registro, email: e.target.value})} value={registro.email ?? ""}></InputForm>
                            <InputForm placeholder="Coloque sua senha" type="password" onChange={(e) => setRegistro({...registro, senha: e.target.value})} value={registro.senha ?? ""}></InputForm>
                            <InputForm placeholder="Coloque sua biografia" type="text" onChange={(e) => setRegistro({...registro, biografia: e.target.value})} value={registro.biografia ?? ""}></InputForm>
                            <ButtonForm type="button" onClick={() => efetuarRegistro()} disabled={enviando}>Entrar</ButtonForm>
                        </FormGroup>
                        <LinkPara onClick={() => setRegistrar(false)}>Já possui uma conta? Clique aqui  </LinkPara>
                    </FormAutenticacao>
                ) : (
                    <FormAutenticacao id="login">
                        <TituloForm>Login</TituloForm>
                        {!!msgSuccess ? (<MsgSuccess>{msgSuccess}</MsgSuccess>) : null}
                        {!!msgError ? (<MsgError>{msgError}</MsgError>) : null}
                        <FormGroup>
                            <InputForm placeholder="Coloque seu email" required type="email" onChange={(e) => setLoginBlog({...loginBlog, email: e.target.value}) } value={loginBlog.email ?? ""}></InputForm>
                            <InputForm placeholder="Coloque sua senha" required type="password" onChange={(e) => setLoginBlog({...loginBlog, senha: e.target.value}) } value={loginBlog.senha ?? ""}></InputForm>
                            <ButtonForm type="button" onClick={() => efetuarLogin()} disabled={enviando}>Entrar</ButtonForm>
                        </FormGroup>
                        <LinkPara onClick={() => setRegistrar(true)}>Não tem uma conta? Clique aqui</LinkPara>
                    </FormAutenticacao>
                )
            }
        </AutenticacaoMain>
    )
};

export default withRouter(Autenticacao);