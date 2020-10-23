import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {signIn} from '../../services/auth';
import {LoginContainer, LoginWrapper, LoginForm} from './styles';
// import '../assets/styles/components/Login.scss';
// import Header from '../components/Header';

const Login = () => {
  const history = useHistory();
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const result = await signIn({password: form.password, email: form.email});
      if (result.status === 200) {
        history.push('/');
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 401) {
        alert('Email or password incorrect');
      }
    }
  };

  return (
    <>
      {/* <Header isLogin /> */}
      <LoginContainer>
        <LoginWrapper>
          <h2>Login</h2>
          <LoginForm onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={updateInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={updateInput}
            />
            <button className="button" type="submit">
              Login
            </button>
            <div className="login__container--remember-me">
              <a href="/">Forgot my password</a>
            </div>
          </LoginForm>
          <p className="login__container--register">
            Have you an account? <Link to="/register">Sing up</Link>
          </p>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
