import React from 'react';
import PropTypes from 'prop-types';

import style from './NavBar.scss';

export const NavBar = ({ children }) => (
  <div className={style.NavBar}>{children}</div>
);
NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Left = ({ children }) => (
  <div className={style.left}>{children}</div>
);
Left.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Right = ({ children }) => (
  <div className={style.right}>{children}</div>
);
Right.propTypes = {
  children: PropTypes.node.isRequired,
};
