import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const ProtectedRoute = ({component, handleIsLogged}) => {
  const isAuthenticated = localStorage.getItem('token');
  useEffect(() => {
    handleIsLogged(isAuthenticated);
  }, []);

  const Component = component;
  return isAuthenticated ? <Component /> : <Redirect to={{pathname: '/login'}} />;
};

export default ProtectedRoute;
