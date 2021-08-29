import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Autenticacao from './components/Autenticacao';
import CadastroPostagem from './components/CadastrarPostagem';
import FeedPostagens from './components/FeedPostagens';
import { isAuthenticated } from './config/auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );

const RouteAuth = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        !isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
        }
    />
);

const Routes = () => {
    return (<BrowserRouter>
        <Route component={FeedPostagens} path="/"  exact/>
        <RouteAuth component={Autenticacao} path="/login"/>
        <PrivateRoute component={CadastroPostagem} path="/postagem-salvar" />
    </BrowserRouter>);
}


export default Routes;