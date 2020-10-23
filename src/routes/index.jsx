import React, {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Layout from '../componentes/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import ContactForm from '../views/ContactForm';
import ProtectedRoute from '../componentes/ProtectedRoute';
import Register from '../views/Register';

const Router = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleIsLogged = isLogged => {
    setIsLogged(isLogged);
  };

  return (
    <BrowserRouter>
      <Layout isLogged={isLogged}>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} handleIsLogged={handleIsLogged} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/contact-form/:id?"
            component={ContactForm}
            handleIsLogged={handleIsLogged}
          />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
