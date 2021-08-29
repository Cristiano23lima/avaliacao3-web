import React, { useState } from 'react';
import {Cabecalho, Menu} from './style';

import { LinkPara } from '../Autenticacao/style';

import { isAuthenticated, logout } from '../../config/auth';

const Header = () => {
    return <Cabecalho>
        <h3>Blog Descomplica</h3>
        
        <Menu autenticado={isAuthenticated()}>
            <LinkPara href="/">Inicial</LinkPara>

            {isAuthenticated() ? (
                <>
                    <LinkPara href="/postagem-salvar">Cadastrar Postagem</LinkPara>
                    <LinkPara href='/' onClick={() => logout()}>Sair</LinkPara>
                </>
            ) :  <LinkPara href='/login'>Login</LinkPara>
        }
        </Menu>
    </Cabecalho>
};

export default Header;