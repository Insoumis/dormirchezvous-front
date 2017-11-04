import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

import 'normalize.css';
import style from './Root.scss';
import NavBar from './NavBar';
import Reception from '../containers/Reception';
import Advert from '../containers/Advert';
import MyAdvert from '../containers/MyAdvert';
import Profile from '../containers/Profile';
import Subscription from './Subscription';

import logOutIcon from '../assets/log-out.svg';

const Home = ({ subscriptions, adverts }) => (
  <div>
    <section>
      <h1>Évènement à venir : conférence du 26 Novembre</h1>
      <p>Ça va être trop bien vous allez voir.</p>
    </section>
    <nav>
      <Link to="/search">Je cherche un hébergement</Link>
      <Link to="/host">Je propose un hébergement</Link>
    </nav>
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
          <h1>Je cherche un hébergement</h1>
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
      </Helmet>
      <NavBar>
        {loggedIn && (
          <button onClick={logOut}>
            <Link to="/">
              <img src={logOutIcon} alt="Se déconnecter" />
            </Link>
          </button>
        )}
      </NavBar>
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
