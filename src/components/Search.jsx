import React from 'react';
import PropTypes from 'prop-types';

import { MySubscriptions } from '../containers/MySubscriptions';
import { Profile } from '../containers/Profile';
import { Advert } from '../containers/Advert';

import style from './Search.scss';

export const Search = ({ adverts }) => (
  <section>
    <Profile />
    <MySubscriptions />
    <main className={style.adverts}>
      <h1>Annonces</h1>
      <ul>
        {adverts.map(advert => (
          <li key={advert.id}>
            <Advert {...advert} />
          </li>
        ))}
      </ul>
    </main>
  </section>
);

Search.propTypes = {
  adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
