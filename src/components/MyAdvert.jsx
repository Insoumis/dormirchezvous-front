import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import style from './MyAdvert.scss';

class MyAdvert extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    spotsLeft: PropTypes.number,
    availableSpots: PropTypes.number.isRequired,
    createAdvert: PropTypes.func.isRequired,
    updateAdvert: PropTypes.func.isRequired,
    deleteAdvert: PropTypes.func.isRequired,
  };
  static defaultProps = {
    spotsLeft: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: !props.title && !props.description,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title === '') {
      this.setState({ editing: true });
    } else if (
      this.props.title !== nextProps.title ||
      this.props.description !== nextProps.description
    ) {
      this.setState({ editing: false });
    }
  }

  editAdvert = () => {
    this.setState({ editing: true });
  };
  validateAdvert = ({ availableSpots, title, description }) => {
    const errors = {};
    if (Number.isNaN(Number(availableSpots))) {
      errors.availableSpots = true;
    }
    if (!title.length) {
      errors.title = true;
    }
    if (!description.length) {
      errors.description = true;
    }
    return errors;
  };
  submitAdvert = values => {
    const advert = {
      ...values,
      availableSpots: Number(values.availableSpots),
    };
    if (this.props.title.length || this.props.description.length) {
      this.props.updateAdvert(advert);
    } else {
      this.props.createAdvert(advert);
    }
  };
  deleteAdvert = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Supprimer votre annonce ?')) {
      this.props.deleteAdvert();
    }
  };

  renderForm = ({ isValid }) => (
    <Form>
      <p className={style.warning}>Ces informations seront publiques.</p>
      <label htmlFor="title">
        Titre de l&#39;annonce
        <Field type="text" id="title" name="title" />
      </label>
      <label htmlFor="availableSpots">
        Places disponibles
        <Field type="text" id="availableSpots" name="availableSpots" />
      </label>
      <label htmlFor="description">
        Description
        <Field component="textarea" id="description" name="description" />
      </label>
      <button disabled={!isValid} type="submit">
        {this.props.title ? 'Mettre à jour' : 'Publier'}
      </button>
    </Form>
  );

  render() {
    const { title, description, spotsLeft, availableSpots } = this.props;
    return this.state.editing ? (
      <div className={style.MyAdvert}>
        <h1>{title ? 'Mon annonce' : 'Je propose un hébergement'}</h1>
        <article>
          <Formik
            initialValues={{
              title,
              availableSpots,
              description,
            }}
            isInitialValid={title.length > 0}
            onSubmit={this.submitAdvert}
            validate={this.validateAdvert}
            render={this.renderForm}
          />
        </article>
      </div>
    ) : (
      <div className={style.MyAdvert}>
        <h1>Mon annonce</h1>
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            Places : {spotsLeft}/{availableSpots}
          </div>
          <button onClick={this.editAdvert}>Modifier</button>
          <button onClick={this.deleteAdvert}>Supprimer</button>
        </article>
      </div>
    );
  }
}
export default MyAdvert;
