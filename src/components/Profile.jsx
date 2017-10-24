import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import style from './Profile.scss';

export default class Profile extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    updating: PropTypes.bool,
    initialName: PropTypes.string.isRequired,
    initialContactInfo: PropTypes.string.isRequired,
  };

  static defaultProps = {
    updating: false,
  };

  onSubmit = values => {
    this.props.update(values);
  };
  validate() {
    return {};
  }
  renderForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Votre nom
        <Field
          type="text"
          placeholder="Ou pseudonyme, comme vous voulez"
          name="name"
          id="name"
        />
      </label>

      <label htmlFor="contactInfo">
        Informations de contact
        <Field
          type="text"
          placeholder="E-mail, numéro de téléphone…"
          name="contactInfo"
          id="contactInfo"
        />
      </label>

      <button type="submit" disabled={this.props.updating}>
        Mettre à jour
      </button>
    </form>
  );

  render() {
    const { initialName, initialContactInfo } = this.props;
    const incomplete = !(initialName && initialContactInfo);

    return (
      <div className={style.Profile}>
        <h2>Mon Profil</h2>
        {incomplete && (
          <div className={style.warning}>
            Votre profil n&#39;est pas encore complet, remplissez-le pour
            pouvoir postuler.
          </div>
        )}
        <div className={style.success}>
          Ces informations ne seront partagées qu&#39;avec les hébergeurs chez
          lesquels vous postulez.
        </div>
        <Formik
          initialValues={{ name: initialName, contactInfo: initialContactInfo }}
          validate={this.validate}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
      </div>
    );
  }
}
