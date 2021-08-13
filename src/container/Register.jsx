import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import '../assets/styles/container/Register.scss';

const Register = (props) => {

  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            autoComplete='name'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='email'
            placeholder='Correo'
            autoComplete='email'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <Link to='/login'>
          Inicio de sesión
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
