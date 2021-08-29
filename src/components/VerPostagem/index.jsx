import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Descricao, LinkPara, Titulo, VerPostagemMain } from './style';

import Api from '../../config/Axios';

const VerPostagem = () => {
    const search = useLocation().search;
    const idPost = new URLSearchParams(search).get("idPost");
    const [postagem, setPostagem] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if(!idPost){
            window.location.href = "/";
            return;
        }
        buscarPostagem();
    }, []);


    const buscarPostagem = () => {
        Api.get("/posts/"+idPost).then(
            res => {
                setPostagem(res.data);
            },
            err => {
                alert("Postagem não encontrada ou removida");
                window.location.href = "/";
            }
        )
    }

    return <VerPostagemMain>
        <LinkPara onClick={() => history.push("/")}>Voltar</LinkPara>
        <Titulo>{postagem?.titulo}</Titulo>
        <Descricao>{postagem?.descricao}</Descricao>
    </VerPostagemMain>
}


export default VerPostagem;