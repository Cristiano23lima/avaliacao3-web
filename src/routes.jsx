import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Autenticacao from './components/Autenticacao';
import FeedPostagens from './components/FeedPostagens';

const Routes = () => {
    return (<BrowserRouter>
        <Route component={FeedPostagens} path="/"  exact />
        <Route component={Autenticacao} path="/login" />
    </BrowserRouter>);
}


export default Routes;