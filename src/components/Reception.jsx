import React from 'react';
import PropTypes from 'prop-types';

const Reception = ({ logIn }) => (
  <div>
    <h1>Pas de dodo ? Pas de problème !</h1>
    <p>Lorem Ipsum l&#39;odeur du parquet.</p>
    <button onClick={logIn}>
      Me connecter avec mon compte France Insoumise
    </button>
    <a
      href="https://lafranceinsoumise.fr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Créer un compte France Insoumise
    </a>
  </div>
);

Reception.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Reception;
