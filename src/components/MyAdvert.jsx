import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';

import style from './MyAdvert.scss';

export class MyAdvert extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    spotsLeft: PropTypes.number,
    availableSpots: PropTypes.number.isRequired,
    createAdvert: PropTypes.func.isRequired,
    updateAdvert: PropTypes.func.isRequired,
    deleteAdvert: PropTypes.func.isRequired,
    applications: PropTypes.arrayOf(PropTypes.object).isRequired,
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

  renderForm = ({ isValid, values, handleChange, handleBlur }) => (
    <Form>
      <p className={style.warning}>Ces informations seront publiques.</p>
      <label htmlFor="title">
        <span>Titre de l&#39;annonce</span>
        <Field type="text" name="title" />
      </label>
      <label htmlFor="availableSpots">
        <span>Places disponibles</span>
        <Field type="text" name="availableSpots" />
      </label>
      <label htmlFor="description">
        <span>Description</span>
        <TextareaAutosize
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
        />
      </label>
      <button disabled={!isValid} type="submit" className="button">
        {this.props.title ? 'Mettre à jour' : 'Publier'}
      </button>
    </Form>
  );

  render() {
    const {
      title,
      description,
      spotsLeft,
      availableSpots,
      applications,
    } = this.props;
    return (
      <div>
        {this.state.editing ? (
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
            <article className={style.description}>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className={style.spotsLeft}>
                Places : {spotsLeft}/{availableSpots}
              </div>
              <aside>
                <button onClick={this.editAdvert} className="button">
                  Modifier
                </button>
                <button onClick={this.deleteAdvert} className="red button">
                  Supprimer
                </button>
              </aside>
            </article>
          </div>
        )}
        {/* TODO(buzugu): implement */}
        <ul>
          {applications.map(application => (
            <li key={application.id}>{JSON.stringify(application)}</li>
          ))}
        </ul>
      </div>
    );
  }
}
