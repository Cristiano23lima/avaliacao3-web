import React from 'react';

import {Cabecalho, IconeMenu} from './style';

import LogoMenu from '../../assets/menu.png';

const Header = () => {
    return <Cabecalho>
        <h3>Blog Descomplica</h3>
        
        <IconeMenu src={LogoMenu}/>
    </Cabecalho>
};

export default Header;