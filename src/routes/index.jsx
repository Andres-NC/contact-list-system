import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Layout from '../componentes/Layout';
import Home from '../views/Home';

const Router = ({isLogged}) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
