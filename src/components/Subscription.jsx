import React from 'react';
import PropTypes from 'prop-types';

const Subscription = ({ title, description, message }) => (
  <div>
    <h3>{title}</h3>
    <p>Votre message : {message}</p>
    <p>Description : {description}</p>
  </div>
);

Subscription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Subscription;
