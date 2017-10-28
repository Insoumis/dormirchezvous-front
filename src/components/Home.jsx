import React from 'react';

import Advert from './Advert';
import MyAdvert from '../containers/MyAdvert';
import Profile from '../containers/Profile';

import style from './Home.scss';

const Home = () => (
  <div className={style.Home}>
    <section>
      <h1>Évènement à venir : conférence du 26 Novembre</h1>
      <p>Ça va être trop bien vous allez voir.</p>
    </section>
    <section>
      <MyAdvert />
    </section>
    <section>
      <h1>Je cherche un hébergement</h1>
      <Profile />
      <h2>Annonces</h2>
      <ul>
        <li>
          <Advert
            title="Lorem"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam."
          />
        </li>
        <li>
          <Advert
            title="Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam."
          />
        </li>
        <li>
          <Advert
            title="Dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam."
          />
        </li>
      </ul>
    </section>
  </div>
);

export default Home;
