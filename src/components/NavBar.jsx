import React from 'react';
import PropTypes from 'prop-types';

import style from './NavBar.scss';

const NavBar = ({ children }) => (
  <div className={style.NavBar}>
    <h1>
      Dodo Insoumis{' '}
      <span aria-label="Tête endormie" role="img">
        😴
      </span>
    </h1>
    <div className={style.right}>{children}</div>
  </div>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
