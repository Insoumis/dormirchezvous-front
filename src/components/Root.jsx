import React from 'react';
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

import NavBar, { Left, Right } from './NavBar';
import Reception from '../containers/Reception';
import Advert from '../containers/Advert';
import MyAdvert from '../containers/MyAdvert';
import Profile from '../containers/Profile';
import Subscription from './Subscription';

import style from './Root.scss';

import logOutIcon from '../assets/log-out.svg';

const Home = ({ subscriptions, adverts }) => (
  <div>
    <section className={style.upcomming}>
      <h1>Évènement à venir : conférence du 26 Novembre</h1>
      <article>
        <p>Ça va être trop bien vous allez voir.</p>
        <p>
          Cake dragée sesame snaps chupa chups. Sesame snaps dessert dessert
          tiramisu candy canes topping pie liquorice candy canes. Chupa chups
          lemon drops chocolate cake halvah sweet soufflé macaroon jelly oat
          cake.
        </p>
      </article>
    </section>
    <Route
      path="/host"
      render={() => (
        <section>
          <MyAdvert />
        </section>
      )}
    />
    <Route
      path="/search"
      render={() => (
        <section>
          <Profile />
          <h2>Mes postulations</h2>
          <ul>
            {subscriptions.map(subscription => (
              <li key={subscription.id}>
                <Subscription {...subscription} />
              </li>
            ))}
          </ul>
          <h2>Annonces</h2>
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>
                <Advert {...advert} />
              </li>
            ))}
          </ul>
        </section>
      )}
    />
  </div>
);

Home.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Root = ({ loggedIn, logOut, subscriptions, adverts }) => (
  <Router>
    <div>
      <Helmet>
        <title>Dodo Insoumis</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600|PT+Sans:400,700"
        />
      </Helmet>
      {loggedIn && (
        <NavBar>
          <Left>
            <NavLink to="/search">Rechercher</NavLink>
            <NavLink to="/host">Proposer</NavLink>
          </Left>
          <Right>
            <button onClick={logOut}>
              <Link to="/">
                <img src={logOutIcon} alt="Se déconnecter" />
              </Link>
            </button>
          </Right>
        </NavBar>
      )}
      <div className={style.content}>
        <Route
          path="/"
          render={({ location }) => {
            if (loggedIn) {
              if (location.pathname === '/') {
                return <Redirect to="/search" />;
              }
              return <Home subscriptions={subscriptions} adverts={adverts} />;
            }
            if (location.pathname !== '/') {
              return <Redirect to="/" />;
            }
            return <Reception />;
          }}
        />
      </div>
    </div>
  </Router>
);

Root.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  subscriptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Root;
