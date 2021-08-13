import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRecuest } from '../actions';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';

import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {

  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRecuest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='Usuario' />}
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null
          }
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cerra Sesión</a></li> :
              <li><Link to='/login'>Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRecuest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
