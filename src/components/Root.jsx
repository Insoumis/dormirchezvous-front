import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import 'normalize.css';

import { NavBar, Left, Right } from './NavBar';
import { Reception } from '../containers/Reception';
import { MyAdvert } from '../containers/MyAdvert';
import { Search } from '../containers/Search';

import style from './Root.scss';

import logOutIcon from '../assets/log-out.svg';

export class Root extends Component {
  determineRouteToLoad = ({ location }) => {
    if (this.props.loggedIn && location.pathname === '/') {
      return <Redirect to="/search" />;
    }
    if (this.props.loggedIn) {
      return this.renderHome();
    }
    if (location.pathname !== '/') {
      return <Redirect to="/" />;
    }
    return <Reception />;
  };

  renderHome() {
    return (
      <div>
        <section className={style.upcomming}>
          <h1>Évènement à venir : conférence du 26 Novembre</h1>
          <article>
            <p>Ça va être trop bien vous allez voir.</p>
            <p>
              Cake dragée sesame snaps chupa chups. Sesame snaps dessert dessert
              tiramisu candy canes topping pie liquorice candy canes. Chupa
              chups lemon drops chocolate cake halvah sweet soufflé macaroon
              jelly oat cake.
            </p>
          </article>
        </section>
        <Route path="/host" component={MyAdvert} />
        <Route path="/search" component={Search} />
      </div>
    );
  }

  renderNavBar() {
    return this.props.loggedIn ? (
      <NavBar>
        <Left>
          <NavLink to="/search">Rechercher</NavLink>
          <NavLink to="/host">Proposer</NavLink>
        </Left>
        <Right>
          <button onClick={this.props.logOut}>
            <Link to="/">
              <img src={logOutIcon} alt="Se déconnecter" />
            </Link>
          </button>
        </Right>
      </NavBar>
    ) : (
      <NavBar />
    );
  }

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
          {this.renderNavBar()}
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
