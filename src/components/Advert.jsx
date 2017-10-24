import React from 'react';
import PropTypes from 'prop-types';

const Advert = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <button>Postuler</button>
  </div>
);

Advert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Advert;
