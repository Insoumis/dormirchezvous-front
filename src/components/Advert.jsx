import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

export default class Advert extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    applyForAdvert: PropTypes.func.isRequired,
  };

  state = {
    applying: false,
  };

  onClickApply = () => {
    this.setState({ applying: true });
  };

  onSubmit = (values, actions) => {
    if (
      values.message ||
      // eslint-disable-next-line no-alert
      window.confirm("Vous n'avez pas rédigé de message pour l'hébergeur. Êtes-vous sûr de vouloir envoyer votre demande ?")
    ) {
      this.props.applyForAdvert(this.props.id).then(() => {
        actions.resetForm();
        this.setState({ applying: false });
      });
    } else {
      actions.setSubmitting(false);
    }
  };

  renderForm = ({ isSubmitting }) => (
    <Form>
      <Field component="textarea" name="message" placeholder="Un message ?" />
      <button disabled={isSubmitting} type="submit">
        Envoyer ma demande
      </button>
    </Form>
  );

  render() {
    const { title, description } = this.props;
    const { applying } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {applying ? (
          <Formik
            initialValues={{ message: '' }}
            render={this.renderForm}
            onSubmit={this.onSubmit}
            validate={this.validate}
          />
        ) : (
          <button onClick={this.onClickApply}>Postuler</button>
        )}
      </div>
    );
  }
}
