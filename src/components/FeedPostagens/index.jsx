import React from 'react';

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


const FeedPostagens = () => {
    return <FeedPostagensMain>
        <PostagensRow>
            <Postagem>
                <ImagemPostagem src={Imagem} alt="Teste" />
                <TituloPostagem>CMS system from a business perspective</TituloPostagem>
                <LinkPostagem href="#">
                    <span>Ver Postagem</span>
                    <IconeLink src={IconeSeta} />
                </LinkPostagem>
            </Postagem>
            <Postagem>
                <ImagemPostagem src={Imagem} alt="Teste" />
                <TituloPostagem>CMS system from a business perspective</TituloPostagem>
                <LinkPostagem href="#">
                    <span>Ver Postagem</span>
                    <IconeLink src={IconeSeta} />
                </LinkPostagem>
            </Postagem>
            <Postagem>
                <ImagemPostagem src={Imagem} alt="Teste" />
                <TituloPostagem>CMS system from a business perspective</TituloPostagem>
                <LinkPostagem href="#">
                    <span>Ver Postagem</span>
                    <IconeLink src={IconeSeta} />
                </LinkPostagem>
            </Postagem>
            <Postagem>
                <ImagemPostagem src={Imagem} alt="Teste" />
                <TituloPostagem>CMS system from a business perspective</TituloPostagem>
                <LinkPostagem href="#">
                    <span>Ver Postagem</span>
                    <IconeLink src={IconeSeta} />
                </LinkPostagem>
            </Postagem>
        </PostagensRow>
    </FeedPostagensMain>;
};

export default FeedPostagens;