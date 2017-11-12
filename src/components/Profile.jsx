import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import style from './Profile.scss';

export class Profile extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    contactInfo: PropTypes.string.isRequired,
  };

  onSubmit = (values, actions) => {
    this.props.update(values).then(() => {
      actions.setSubmitting(false);
    });
  };

  renderForm = ({ isSubmitting }) => (
    <Form>
      <label htmlFor="name">
        <span>Nom</span>
        <Field
          type="text"
          placeholder="Ou pseudonyme, comme vous voulez"
          name="name"
        />
      </label>

      <label htmlFor="contactInfo">
        <span>Informations de contact</span>
        <Field
          type="text"
          placeholder="E-mail, numéro de téléphone…"
          name="contactInfo"
          id="contactInfo"
        />
      </label>

      <button type="submit" disabled={isSubmitting} className="button">
        Mettre à jour
      </button>
    </Form>
  );

  render() {
    const { name, contactInfo } = this.props;
    const incomplete = !(name && contactInfo);

    return (
      <div className={style.Profile}>
        <h1>Mon Profil</h1>
        <article>
          {incomplete && (
            <p className={style.warning}>
              Votre profil n&#39;est pas encore complet, remplissez-le pour
              pouvoir postuler.
            </p>
          )}
          <p className={style.success}>
            Ces informations ne seront partagées qu&#39;avec les hébergeurs chez
            lesquels vous postulerez.
          </p>
          <Formik
            initialValues={{ name, contactInfo }}
            onSubmit={this.onSubmit}
            render={this.renderForm}
          />
        </article>
      </div>
    );
  }
}
