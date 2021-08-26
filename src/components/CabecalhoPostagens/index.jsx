import React from 'react';

import { Titulo, Cabecalho, SubMenu } from './style';

const CabecalhoPostagens = () => {
    return <Cabecalho>
        <div>
            <SubMenu>Blog</SubMenu>
            <Titulo>Postagens mais recentes do nosso blog</Titulo>
        </div>
    </Cabecalho>;
    
}

export default CabecalhoPostagens;