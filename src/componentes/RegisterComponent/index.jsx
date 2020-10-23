import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {registerUser} from '../../services/auth';

import {RegisterContainer, RegisterWrapper, LoginForm} from './styles';

const Register = () => {
  const history = useHistory();
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
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
      const result = await registerUser({
        password: form.password,
        name: form.name,
        email: form.email,
      });
      if (result.status === 201) {
        alert('User created');
        history.push('/login');
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.data.stack.includes('duplicate key')) {
        alert('Email already exists');
      }
    }
  };
  return (
    <>
      <RegisterContainer>
        <RegisterWrapper>
          <h2>Sign up</h2>
          <LoginForm className="register__container--form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={updateInput}
            />
            <label>Email</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={updateInput}
            />
            <label>Password</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={updateInput}
            />
            <button className="button" type="submit">
              Sign up
            </button>
          </LoginForm>
          <Link to="/login" className="register__container--login">
            Login
          </Link>
        </RegisterWrapper>
      </RegisterContainer>
    </>
  );
};

export default Register;
