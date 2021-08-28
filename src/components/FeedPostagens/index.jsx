import React, { useEffect, useState } from 'react';

import { 
    FeedPostagensMain,
    PostagensRow,
    Postagem,
    ImagemPostagem,
    TituloPostagem,
    LinkPostagem,
    IconeLink
} from './style';

import Imagem from '../../assets/blog.jpg';
import IconeSeta from '../../assets/seta-diagonal-grande-fina.png';


import Api from '../../config/Axios';
import CabecalhoPostagens from './CabecalhoPostagens';


const FeedPostagens = () => {
    const quantPostagensPorRow = 4;
    const [postagens, setPostagens] = useState([]);
    const [quantRows, setQuantRows] = useState(0);

    useEffect(() => {
        buscarPostagens();
    }, []);
    
    const buscarPostagens = () => {
        Api.get("/posts/buscar-posts").then(
            res => {
                setQuantRows(Math.ceil(res.data.length/quantPostagensPorRow));
                setPostagens(res.data.map(res => (<Postagem key={res.id}>
                        <ImagemPostagem src={Imagem} alt="Teste" />
                        <TituloPostagem>CMS system from a business perspective</TituloPostagem>
                        <LinkPostagem href="#">
                            <span>Ver Postagem</span>
                            <IconeLink src={IconeSeta} />
                        </LinkPostagem>
                    </Postagem>
                )));
            }
        );
    }

    return (
        <>
            <CabecalhoPostagens />
            <FeedPostagensMain>
                {  
                    [...Array(quantRows)].map((element, index) => {
                        const inicioRow  = index * quantPostagensPorRow;
                        const fimRow = (index+1) * quantPostagensPorRow;
                        const aux = [...postagens];

                        return (<PostagensRow key={index}>
                        {
                        
                            aux.slice(inicioRow, fimRow)
                        }
                    </PostagensRow>)})
                }
            </FeedPostagensMain>
        </>
    );
};

export default FeedPostagens;