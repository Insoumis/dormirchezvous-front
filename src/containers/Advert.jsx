import React from 'react';
import { connect } from 'react-redux';

import { applyForAdvert } from '../actions';
import View from '../components/Advert';

const Avert = props => <View {...props} />;

export default connect(
  () => ({}),
  dispatch => ({
    applyForAdvert: id => dispatch(applyForAdvert(id)),
  }),
)(Avert);
