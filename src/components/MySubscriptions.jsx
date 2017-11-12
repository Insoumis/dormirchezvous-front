import React from 'react';
import PropTypes from 'prop-types';

import style from './MySubscriptions.scss';

export const MySubscriptions = ({ subscriptions }) => (
  <main className={style.MySubscriptions}>
    <h1>Mes postulations</h1>
    <ul>
      {subscriptions.map(({ id, message, title, description }) => (
        <li key={id} className={style.subscription}>
          <article>
            <h2>{title}</h2>
            <p>
              <b>Mon message :</b> {message}
            </p>
            <p>
              <b>Description :</b> {description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </main>
);

MySubscriptions.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
