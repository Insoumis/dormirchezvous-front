import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import 'normalize.css';

import { NavBar } from './NavBar';
import { Reception } from '../containers/Reception';
import { MyAdvert } from '../containers/MyAdvert';
import { Search } from '../containers/Search';

import style from './Root.scss';

export class Root extends Component {
  determineRouteToLoad = ({ location }) => {
    if (this.props.loggedIn && location.pathname === '/') {
      return <Redirect to="/search" />;
    }
    if (this.props.loggedIn) {
      return (
        <div>
          <Route path="/host" component={MyAdvert} />
          <Route path="/search" component={Search} />
        </div>
      );
    }
    if (location.pathname !== '/') {
      return <Redirect to="/" />;
    }
    return <Reception />;
  };

  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <title>Dodo Insoumis</title>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Montserrat:400,600|PT+Sans:400,700"
            />
          </Helmet>
          <NavBar loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
          <div className={style.content}>
            <Route path="/" render={this.determineRouteToLoad} />
          </div>
        </div>
      </Router>
    );
  }
}

Root.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};
