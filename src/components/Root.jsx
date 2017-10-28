import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

import 'normalize.css';
import style from './Root.scss';
import NavBar from './NavBar';
import Home from '../containers/Home';
import Reception from '../containers/Reception';

import logOutIcon from '../assets/log-out.svg';

export default class Root extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
  };

  renderNavBar() {
    const { loggedIn, logOut } = this.props;

    if (!loggedIn) {
      return <NavBar />;
    }

    return (
      <NavBar>
        <button onClick={logOut}>
          <Link to="/">
            <img src={logOutIcon} alt="Se déconnecter" />
          </Link>
        </button>
      </NavBar>
    );
  }
  render() {
    const { loggedIn } = this.props;

    return (
      <Router>
        <div>
          <Helmet>
            <title>Dodo Insoumis</title>
          </Helmet>
          {this.renderNavBar()}
          <div className={style.content}>
            {loggedIn ? <Home /> : <Reception />}
          </div>
        </div>
      </Router>
    );
  }
}
