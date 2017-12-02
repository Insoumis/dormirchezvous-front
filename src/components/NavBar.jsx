import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import style from './NavBar.scss';

import logoDiscord from '../assets/logo-discord.png';
import logOutIcon from '../assets/log-out.svg';

export const NavBar = ({ loggedIn, logOut }) => (
  <div className={style.NavBar}>
    <div className={style.left}>
      <img src={logoDiscord} alt="Discord Insoumis" className={style.logo} />
      {loggedIn && [
        <NavLink key={0} to="/search">
          Rechercher
        </NavLink>,
        <NavLink key={1} to="/host">
          Proposer
        </NavLink>,
      ]}
    </div>
    <div className={style.right}>
      <button onClick={logOut}>
        <Link to="/">
          <img src={logOutIcon} alt="Se déconnecter" />
        </Link>
      </button>
    </div>
  </div>
);

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};
