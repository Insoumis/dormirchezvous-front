import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import style from './Profile.scss';

export default class Profile extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    contactInfo: PropTypes.string.isRequired,
  };

  onSubmit = (values, actions) => {
    if (
      values.name === this.props.name &&
      values.contactInfo === this.props.contactInfo
    ) {
      actions.setSubmitting(false);
    }

    this.props.update(values).then(() => {
      actions.setSubmitting(false);
    });
  };

  renderForm = ({ isSubmitting }) => (
    <Form>
      <label htmlFor="name">
        Votre nom
        <Field
          type="text"
          placeholder="Ou pseudonyme, comme vous voulez"
          name="name"
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

      <button type="submit" disabled={isSubmitting}>
        Mettre à jour
      </button>
    </Form>
  );

  render() {
    const { name, contactInfo } = this.props;
    const incomplete = !(name && contactInfo);

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
          initialValues={{ name, contactInfo }}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
      </div>
    );
  }
}
