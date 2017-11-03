import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Advert from '../containers/Advert';
import MyAdvert from '../containers/MyAdvert';
import Profile from '../containers/Profile';
import Subscription from './Subscription';

import style from './Home.scss';

const Home = ({ subscriptions, adverts }) => (
  <Router>
    <div className={style.Home}>
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
  </Router>
);

Home.propTypes = {
  subscriptions: PropTypes.arrayOf([PropTypes.object]).isRequired,
  adverts: PropTypes.arrayOf([PropTypes.object]).isRequired,
};
export default Home;
