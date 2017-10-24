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
import AdvertCreation from './AdvertCreation';
import Home from './Home';
import NavBar from './NavBar';
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
            {loggedIn ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={AdvertCreation} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/" component={Reception} />
                <Redirect to="/" />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    );
  }
}
